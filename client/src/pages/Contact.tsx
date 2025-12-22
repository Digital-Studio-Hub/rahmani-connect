import { useLocation } from "wouter";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/forms/ContactForm";
import { companyInfo } from "@/lib/data";

export default function Contact() {
  const [location] = useLocation();
  const urlParams = new URLSearchParams(location.split("?")[1] || "");
  const preselectedService = urlParams.get("service") || undefined;

  return (
    <Layout>
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-[#0A2540] via-[#102A43] to-[#0A2540]" data-testid="section-contact-hero">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231FB6FF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight" data-testid="text-contact-headline">
            Start a Technology Conversation
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with the right technology solutions? 
            Get in touch with our team for a consultation.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-background" data-testid="section-contact-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card className="p-6 sm:p-10 bg-card border-border">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2 tracking-tight">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
                <ContactForm preselectedService={preselectedService} />
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6 bg-card border-border" data-testid="card-contact-info">
                <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
                <div className="space-y-4">
                  {companyInfo.phones.map((phone, index) => (
                    <a
                      key={index}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-3 text-muted-foreground hover:text-[#1FB6FF] transition-colors"
                      data-testid={`link-contact-phone-${index}`}
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#1FB6FF]/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-[#1FB6FF]" />
                      </div>
                      <span className="text-sm">{phone}</span>
                    </a>
                  ))}
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-[#1FB6FF] transition-colors"
                    data-testid="link-contact-email"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#1FB6FF]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#1FB6FF]" />
                    </div>
                    <span className="text-sm">{companyInfo.email}</span>
                  </a>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border" data-testid="card-location">
                <h3 className="text-lg font-semibold text-foreground mb-4">Location</h3>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1FB6FF]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#1FB6FF]" />
                  </div>
                  <div>
                    <p className="text-foreground text-sm font-medium">{companyInfo.location}</p>
                    <p className="text-muted-foreground text-sm mt-1">
                      Serving clients locally and internationally
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-[#0A2540] border-0" data-testid="card-availability">
                <h3 className="text-lg font-semibold text-white mb-4">Availability</h3>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1FB6FF]/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#1FB6FF]" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Monday - Friday</p>
                    <p className="text-white/70 text-sm mt-1">08:00 - 17:00 SAST</p>
                    <p className="text-[#1FB6FF] text-xs mt-2">
                      24/7 support available for managed services clients
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
