import Layout from "@/components/layout/Layout";
import { companyInfo } from "@/lib/data";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-[#0A2540] via-[#102A43] to-[#0A2540]" data-testid="section-privacy-hero">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-lg text-white/80">
            Last updated: December 2024
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-background" data-testid="section-privacy-content">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h2 className="text-xl font-bold text-foreground mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground mb-6">
              We collect information you provide directly to us, such as when you fill out a contact form, 
              request a consultation, or communicate with us via email or phone. This may include your name, 
              email address, phone number, company name, and details about your inquiry.
            </p>

            <h2 className="text-xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-6">
              We use the information we collect to respond to your inquiries, provide our services, 
              send you relevant communications about our offerings, and improve our website and services. 
              We may also use your information to comply with legal obligations.
            </p>

            <h2 className="text-xl font-bold text-foreground mb-4">3. Information Sharing</h2>
            <p className="text-muted-foreground mb-6">
              We do not sell, trade, or rent your personal information to third parties. We may share 
              your information with trusted service providers who assist us in operating our website and 
              conducting our business, provided they agree to keep this information confidential.
            </p>

            <h2 className="text-xl font-bold text-foreground mb-4">4. Data Security</h2>
            <p className="text-muted-foreground mb-6">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of 
              transmission over the Internet is 100% secure.
            </p>

            <h2 className="text-xl font-bold text-foreground mb-4">5. Cookies</h2>
            <p className="text-muted-foreground mb-6">
              Our website may use cookies to enhance your browsing experience. You can choose to 
              disable cookies through your browser settings, though this may affect some functionality 
              of our website.
            </p>

            <h2 className="text-xl font-bold text-foreground mb-4">6. Your Rights</h2>
            <p className="text-muted-foreground mb-6">
              You have the right to access, correct, or delete your personal information. You may also 
              opt out of receiving marketing communications from us at any time. To exercise these rights, 
              please contact us using the information below.
            </p>

            <h2 className="text-xl font-bold text-foreground mb-4">7. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <ul className="text-muted-foreground mt-2">
              <li>Email: {companyInfo.email}</li>
              <li>Phone: {companyInfo.phones[0]}</li>
              <li>Location: {companyInfo.location}</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
