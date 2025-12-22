import { Link } from "wouter";
import { ArrowRight, Building2, Landmark, ShoppingBag, Truck, Briefcase, Users, LucideIcon, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import { industries } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Landmark,
  ShoppingBag,
  Truck,
  Briefcase,
  Users,
};

const industryDetails: Record<string, { benefits: string[]; solutions: string[] }> = {
  smes: {
    benefits: ["Cost-effective solutions", "Scalable infrastructure", "Quick deployment", "Dedicated support"],
    solutions: ["Cloud migration", "Managed IT", "VoIP systems", "Cybersecurity"]
  },
  corporate: {
    benefits: ["Enterprise-grade security", "High availability", "Compliance support", "24/7 monitoring"],
    solutions: ["SD-WAN", "Enterprise Wi-Fi", "Access control", "Disaster recovery"]
  },
  retail: {
    benefits: ["POS integration", "Customer analytics", "Secure payments", "Multi-location support"],
    solutions: ["Network infrastructure", "CCTV systems", "Cloud POS", "Digital signage"]
  },
  logistics: {
    benefits: ["Real-time tracking", "Fleet connectivity", "Warehouse automation", "Supply chain visibility"],
    solutions: ["IoT connectivity", "VPN solutions", "Mobile workforce", "Asset tracking"]
  },
  professional: {
    benefits: ["Data security", "Collaboration tools", "Client portals", "Document management"],
    solutions: ["Microsoft 365", "Secure file sharing", "Video conferencing", "Backup solutions"]
  },
  remote: {
    benefits: ["Seamless collaboration", "Secure access", "Productivity tools", "Flexible infrastructure"],
    solutions: ["VPN & remote access", "Cloud applications", "Unified communications", "Zero trust security"]
  }
};

export default function Industries() {
  return (
    <Layout>
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-[#0A2540] via-[#102A43] to-[#0A2540]" data-testid="section-industries-hero">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231FB6FF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight" data-testid="text-industries-headline">
            Industries We Serve
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Tailored technology solutions designed to address the unique challenges and opportunities 
            across diverse industry sectors.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-background" data-testid="section-industries-list">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-16">
            {industries.map((industry, index) => {
              const IconComponent = iconMap[industry.icon] || Building2;
              const details = industryDetails[industry.id];
              const isEven = index % 2 === 0;

              return (
                <div
                  key={industry.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                  data-testid={`section-industry-${industry.id}`}
                >
                  <div className={!isEven ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-[#1FB6FF]/10 flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-[#1FB6FF]" />
                      </div>
                      <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                        {industry.title}
                      </h2>
                    </div>
                    <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
                      {industry.description}
                    </p>
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                        Key Benefits
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        {details?.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#1FB6FF] flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Link href="/contact">
                      <Button
                        className="bg-[#1FB6FF] hover:bg-[#1FB6FF]/90 text-white font-semibold uppercase tracking-wide text-sm"
                        data-testid={`button-discuss-${industry.id}`}
                      >
                        Discuss Your Needs
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                  <Card className={`p-6 sm:p-8 bg-card border-border ${!isEven ? "lg:order-1" : ""}`}>
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                      Recommended Solutions
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {details?.solutions.map((solution, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-lg bg-muted/50 text-center"
                        >
                          <span className="text-foreground text-sm font-medium">{solution}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#1FB6FF]" data-testid="section-industries-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
            Don't See Your Industry?
          </h2>
          <p className="text-white/90 text-base sm:text-lg mb-8">
            We work with businesses across all sectors. Get in touch to discuss your 
            specific industry requirements and challenges.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-[#0A2540] hover:bg-white/90 font-semibold uppercase tracking-wide text-sm px-8"
              data-testid="button-industries-contact"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
