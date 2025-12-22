import { Link } from "wouter";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ServiceCard from "@/components/ui/ServiceCard";
import { services, companyInfo } from "@/lib/data";

export default function Services() {
  return (
    <Layout>
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-[#0A2540] via-[#102A43] to-[#0A2540]" data-testid="section-services-hero">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231FB6FF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight" data-testid="text-services-headline">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to transform your business, 
            improve efficiency, and drive sustainable growth.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-background" data-testid="section-services-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#0A2540]" data-testid="section-services-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
            Need a Custom Solution?
          </h2>
          <p className="text-white/80 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Every business is unique. Let's discuss your specific requirements and 
            design a technology solution tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[#1FB6FF] hover:bg-[#1FB6FF]/90 text-white font-semibold uppercase tracking-wide text-sm px-8 w-full sm:w-auto"
                data-testid="button-discuss-solution"
              >
                Discuss Your Requirements
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <a href={`tel:${companyInfo.phones[0].replace(/\s/g, "")}`}>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-semibold uppercase tracking-wide text-sm px-8 w-full sm:w-auto"
                data-testid="button-services-call"
              >
                <Phone className="w-4 h-4 mr-2" />
                {companyInfo.phones[0]}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
