import { Link } from "wouter";
import { CheckCircle, ArrowRight, MapPin, Globe, Users, Target, Handshake, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import { companyInfo } from "@/lib/data";
import mainLogo from "@assets/Main_Logo_1766400151640.png";
import lekkerBadge from "@assets/Badge_Level_1_1766400164887.png";

const values = [
  {
    icon: Target,
    title: "Strategic Approach",
    description: "We focus on understanding your business objectives first, then design technology solutions that drive real results."
  },
  {
    icon: Handshake,
    title: "Partnership Mindset",
    description: "We build long-term relationships with our clients, acting as trusted advisors rather than just service providers."
  },
  {
    icon: Shield,
    title: "Vendor-Agnostic",
    description: "We recommend the best solutions for your needs, not based on vendor partnerships or commissions."
  },
  {
    icon: Globe,
    title: "Global Delivery",
    description: "Based in Cape Town with the capability to deliver services to clients locally and internationally."
  }
];

const capabilities = [
  "Enterprise IT strategy and consulting",
  "Cloud migration and management",
  "Managed IT services with SLA support",
  "Business telecommunications and VoIP",
  "Corporate connectivity and SD-WAN",
  "Smart office and security solutions",
  "Web development and digital automation"
];

export default function About() {
  return (
    <Layout>
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-[#0A2540] via-[#102A43] to-[#0A2540]" data-testid="section-about-hero">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231FB6FF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight" data-testid="text-about-headline">
            About RahmaniCorp
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            A Cape Town-based enterprise IT consultancy delivering strategic technology solutions 
            to businesses locally and internationally.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-background" data-testid="section-about-intro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 tracking-tight">
                Your Strategic Technology Partner
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
                RahmaniCorp was founded with a clear mission: to provide enterprise-grade IT solutions 
                with the personalized service and attention that growing businesses deserve. We understand 
                that technology decisions have far-reaching implications for your business, and we approach 
                every engagement with the strategic thinking and expertise your success demands.
              </p>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
                As a founder-led consultancy, we bring hands-on expertise and accountability to every 
                project. We're not just implementing technology—we're building long-term partnerships 
                that help our clients achieve sustainable competitive advantages through smart technology investments.
              </p>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-[#1FB6FF]" />
                <span>{companyInfo.location}</span>
              </div>
            </div>
            <div className="flex justify-center">
              <Card className="p-8 sm:p-10 bg-card border-border">
                <img
                  src={mainLogo}
                  alt="RahmaniCorp"
                  className="w-full max-w-sm h-auto mx-auto"
                  data-testid="img-about-main-logo"
                />
                <div className="mt-8 flex items-center justify-center gap-4">
                  <img
                    src={lekkerBadge}
                    alt="Lekker Network Certified"
                    className="w-20 h-20 object-contain"
                    data-testid="img-about-badge"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-foreground text-sm">Certified Partner</div>
                    <div className="text-muted-foreground text-xs">Lekker Network</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-muted/30" data-testid="section-values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 tracking-tight">
              Our Core Values
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              The principles that guide every engagement and decision we make.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 sm:p-8 bg-card border-border"
                data-testid={`card-value-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#1FB6FF]/10 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-[#1FB6FF]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-background" data-testid="section-capabilities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 tracking-tight">
                Our Capabilities
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">
                We offer a comprehensive suite of technology services designed to address the 
                full spectrum of enterprise IT needs, from strategic planning to implementation 
                and ongoing support.
              </p>
              <ul className="space-y-3">
                {capabilities.map((capability, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#1FB6FF] flex-shrink-0" />
                    <span className="text-foreground text-sm sm:text-base">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card className="p-8 sm:p-10 bg-[#0A2540] border-0">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#1FB6FF]/20 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-[#1FB6FF]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Founder-Led Expertise</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  Led by {companyInfo.founder}, RahmaniCorp combines deep technical expertise 
                  with strategic business acumen to deliver solutions that truly make a difference.
                </p>
                <div className="pt-6 border-t border-white/10">
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Service Reach</p>
                  <p className="text-[#1FB6FF] font-medium">{companyInfo.reach}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#1FB6FF]" data-testid="section-about-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
            Let's Build Something Great Together
          </h2>
          <p className="text-white/90 text-base sm:text-lg mb-8">
            Ready to discuss how we can help transform your technology landscape? 
            Get in touch for a consultation.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-[#0A2540] hover:bg-white/90 font-semibold uppercase tracking-wide text-sm px-8"
              data-testid="button-about-contact"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
