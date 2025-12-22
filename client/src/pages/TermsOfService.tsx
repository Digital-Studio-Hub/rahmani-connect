import Layout from "@/components/layout/Layout";
import { companyInfo } from "@/lib/data";

export default function TermsOfService() {
  return (
    <Layout>
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-[#0A2540] via-[#102A43] to-[#0A2540]" data-testid="section-terms-hero">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-lg text-white/80">
            Last updated: December 2024
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-background" data-testid="section-terms-content">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h2 className="text-xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-6">
              By accessing and using the {companyInfo.name} website, you accept and agree to be bound 
              by these Terms of Service. If you do not agree to these terms, please do not use our website.
            </p>

            <h2 className="text-xl font-bold text-foreground mb-4">2. Services</h2>
            <p className="text-muted-foreground mb-6">
              {companyInfo.name} provides IT consulting, cloud services, managed IT, telecommunications, 
              connectivity, and digital solutions. Specific terms for individual services will be outlined 
              in separate service agreements.
            </p>

            <h2 className="text-xl font-bold text-foreground mb-4">3. Use of Website</h2>
            <p className="text-muted-foreground mb-6">
              You agree to use this website only for lawful purposes and in a way that does not infringe 
              upon the rights of others. You may not use this website to transmit any harmful, threatening, 
              or offensive content.
            </p>

            <h2 className="text-xl font-bold text-foreground mb-4">4. Intellectual Property</h2>
            <p className="text-muted-foreground mb-6">
              All content on this website, including text, graphics, logos, and images, is the property 
              of {companyInfo.name} and is protected by copyright and other intellectual property laws. 
              You may not reproduce, distribute, or modify any content without our prior written consent.
            </p>

            <h2 className="text-xl font-bold text-foreground mb-4">5. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-6">
              {companyInfo.name} provides this website and its contents on an "as is" basis. We make no 
              warranties, expressed or implied, regarding the accuracy, reliability, or availability of 
              the website. We shall not be liable for any damages arising from your use of this website.
            </p>

            <h2 className="text-xl font-bold text-foreground mb-4">6. Third-Party Links</h2>
            <p className="text-muted-foreground mb-6">
              Our website may contain links to third-party websites. These links are provided for your 
              convenience only. We have no control over the content of these websites and assume no 
              responsibility for their content or privacy practices.
            </p>

            <h2 className="text-xl font-bold text-foreground mb-4">7. Changes to Terms</h2>
            <p className="text-muted-foreground mb-6">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective 
              immediately upon posting on this website. Your continued use of the website after any changes 
              constitutes your acceptance of the new terms.
            </p>

            <h2 className="text-xl font-bold text-foreground mb-4">8. Governing Law</h2>
            <p className="text-muted-foreground mb-6">
              These Terms of Service shall be governed by and construed in accordance with the laws of 
              South Africa. Any disputes arising from these terms shall be subject to the exclusive 
              jurisdiction of the courts of South Africa.
            </p>

            <h2 className="text-xl font-bold text-foreground mb-4">9. Contact Information</h2>
            <p className="text-muted-foreground">
              For any questions regarding these Terms of Service, please contact us at:
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
