import type { Express } from "express";
import { createServer, type Server } from "http";
import { contactFormSchema } from "@shared/schema";
import { ZodError } from "zod";

const ZEPTOMAIL_API_URL = "https://api.zeptomail.com/v1.1/email";

async function sendEmailViaZeptoMail(
  to: { email: string; name: string },
  subject: string,
  htmlBody: string
) {
  const token = process.env.ZEPTOMAIL_TOKEN;
  
  if (!token) {
    throw new Error("ZEPTOMAIL_TOKEN is not configured");
  }

  const response = await fetch(ZEPTOMAIL_API_URL, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": token,
    },
    body: JSON.stringify({
      from: {
        address: "noreply@rahmanicorp.co.za",
        name: "RahmaniCorp Website"
      },
      to: [
        {
          email_address: {
            address: to.email,
            name: to.name
          }
        }
      ],
      subject: subject,
      htmlbody: htmlBody
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("ZeptoMail error:", errorText);
    throw new Error(`Failed to send email: ${response.status}`);
  }

  return response.json();
}

function createAdminEmailHtml(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message: string;
}) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #0A2540; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f5f7fa; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #0A2540; }
        .value { margin-top: 5px; }
        .footer { padding: 20px; text-align: center; color: #666; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin: 0;">New Contact Form Submission</h1>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${data.name}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
          </div>
          ${data.phone ? `
          <div class="field">
            <div class="label">Phone:</div>
            <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
          </div>
          ` : ''}
          ${data.company ? `
          <div class="field">
            <div class="label">Company:</div>
            <div class="value">${data.company}</div>
          </div>
          ` : ''}
          ${data.service ? `
          <div class="field">
            <div class="label">Service of Interest:</div>
            <div class="value">${data.service}</div>
          </div>
          ` : ''}
          <div class="field">
            <div class="label">Message:</div>
            <div class="value" style="white-space: pre-wrap;">${data.message}</div>
          </div>
        </div>
        <div class="footer">
          <p>This email was sent from the RahmaniCorp website contact form.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function createUserConfirmationHtml(name: string) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #0A2540; color: white; padding: 20px; text-align: center; }
        .content { padding: 30px 20px; background: #f5f7fa; }
        .footer { padding: 20px; text-align: center; color: #666; font-size: 12px; background: #102A43; }
        .footer a { color: #1FB6FF; }
        .cta { display: inline-block; background: #1FB6FF; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin-top: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin: 0;">Thank You for Contacting RahmaniCorp</h1>
        </div>
        <div class="content">
          <p>Dear ${name},</p>
          <p>Thank you for reaching out to RahmaniCorp. We have received your inquiry and our team will review it promptly.</p>
          <p>We typically respond within 24 business hours. If your matter is urgent, please don't hesitate to call us directly:</p>
          <ul>
            <li><a href="tel:+27609443087">+27 60 944 3087</a></li>
            <li><a href="tel:+27650068374">+27 65 006 8374</a></li>
          </ul>
          <p>We look forward to discussing how we can help transform your technology landscape.</p>
          <p>Best regards,<br>The RahmaniCorp Team</p>
        </div>
        <div class="footer">
          <p>RahmaniCorp - Enterprise IT & Digital Solutions</p>
          <p>Cape Town, South Africa | <a href="https://rahmanicorp.co.za">rahmanicorp.co.za</a></p>
        </div>
      </div>
    </body>
    </html>
  `;
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post("/api/send-mail", async (req, res) => {
    try {
      const data = contactFormSchema.parse(req.body);
      
      const adminEmail = "info@rahmanicorp.co.za";
      
      await sendEmailViaZeptoMail(
        { email: adminEmail, name: "RahmaniCorp Admin" },
        `New Contact Form Submission from ${data.name}`,
        createAdminEmailHtml(data)
      );
      
      await sendEmailViaZeptoMail(
        { email: data.email, name: data.name },
        "Thank you for contacting RahmaniCorp",
        createUserConfirmationHtml(data.name)
      );
      
      res.json({ success: true, message: "Email sent successfully" });
    } catch (error) {
      console.error("Email send error:", error);
      
      if (error instanceof ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data",
          errors: error.errors 
        });
        return;
      }
      
      res.status(500).json({ 
        success: false, 
        message: "Failed to send email. Please try again later." 
      });
    }
  });

  app.get("/sitemap.xml", (req, res) => {
    const baseUrl = "https://rahmanicorp.co.za";
    const services = [
      "it-consulting",
      "cloud-services", 
      "managed-it",
      "telecommunications",
      "connectivity",
      "smart-office-security",
      "web-digital"
    ];
    
    const urls = [
      { loc: "/", priority: "1.0", changefreq: "weekly" },
      { loc: "/about", priority: "0.8", changefreq: "monthly" },
      { loc: "/services", priority: "0.9", changefreq: "weekly" },
      ...services.map(s => ({ loc: `/services/${s}`, priority: "0.7", changefreq: "monthly" })),
      { loc: "/industries", priority: "0.7", changefreq: "monthly" },
      { loc: "/contact", priority: "0.8", changefreq: "monthly" },
      { loc: "/privacy-policy", priority: "0.3", changefreq: "yearly" },
      { loc: "/terms-of-service", priority: "0.3", changefreq: "yearly" },
    ];
    
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${baseUrl}${url.loc}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    res.set('Content-Type', 'application/xml');
    res.send(sitemap);
  });

  return httpServer;
}
