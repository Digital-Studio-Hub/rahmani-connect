import { Link } from "wouter";
import { ArrowRight, Phone, CheckCircle, Globe, Users, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import ServiceCard from "@/components/ui/ServiceCard";
import IndustryCard from "@/components/ui/IndustryCard";
import { services, industries, companyInfo } from "@/lib/data";
import mainLogo from "@assets/Main_Logo_1766400151640.png";
import lekkerBadge from "@assets/Badge_Level_1_1766400164887.png";

const stats = [
  { icon: Globe, value: "Local & International", label: "Service Reach" },
  { icon: Users, value: "SMEs to Enterprise", label: "Client Range" },
  { icon: Award, value: "Vendor-Agnostic", label: "Solutions" },
  { icon: Clock, value: "24/7", label: "Support Available" },
];

export default function Home() {
  return (
    <Layout>
      <section
        className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
        data-testid="section-hero"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540] via-[#102A43] to-[#0A2540]" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231FB6FF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-32 text-center">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6"
            data-testid="text-hero-headline"
          >
            Enterprise IT, Cloud &<br className="hidden sm:block" /> Digital Transformation Solutions
          </h1>
          <p
            className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed"
            data-testid="text-hero-subheadline"
          >
            Supporting businesses locally and globally with secure, scalable technology solutions. 
            Your trusted partner for IT consulting, cloud services, and digital innovation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[#1FB6FF] hover:bg-[#1FB6FF]/90 text-white font-semibold uppercase tracking-wide text-sm px-8 w-full sm:w-auto"
                data-testid="button-hero-consultation"
              >
                Schedule a Consultation
              </Button>
            </Link>
            <a href={`tel:${companyInfo.phones[0].replace(/\s/g, "")}`}>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-semibold uppercase tracking-wide text-sm px-8 w-full sm:w-auto"
                data-testid="button-hero-call"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call {companyInfo.phones[0]}
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-card border-b border-border" data-testid="section-stats">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-lg bg-[#1FB6FF]/10 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-[#1FB6FF]" />
                </div>
                <div className="font-semibold text-foreground text-sm sm:text-base">{stat.value}</div>
                <div className="text-muted-foreground text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-background" data-testid="section-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Our Services
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Comprehensive technology solutions designed to transform your business and drive sustainable growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services">
              <Button
                variant="outline"
                className="border-[#0A2540] text-[#0A2540] hover:bg-[#0A2540] hover:text-white dark:border-foreground dark:text-foreground dark:hover:bg-foreground dark:hover:text-background font-semibold uppercase tracking-wide text-sm"
                data-testid="button-view-all-services"
              >
                View All Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#0A2540] relative overflow-hidden" data-testid="section-about-preview">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%231FB6FF' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 tracking-tight">
                Your Strategic Technology Partner
              </h2>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-6">
                RahmaniCorp is a Cape Town-based enterprise IT consultancy delivering technology solutions to businesses locally and internationally. We take a strategic, vendor-agnostic approach to help you achieve your business objectives.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Founder-led expertise and personal service",
                  "Long-term partnership mindset",
                  "Scalable solutions for growing businesses",
                  "International service delivery capability"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/90">
                    <CheckCircle className="w-5 h-5 text-[#1FB6FF] flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about">
                <Button
                  className="bg-[#1FB6FF] hover:bg-[#1FB6FF]/90 text-white font-semibold uppercase tracking-wide text-sm"
                  data-testid="button-learn-about-us"
                >
                  Learn About Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#1FB6FF]/20 rounded-xl blur-xl" />
                <Card className="relative bg-white/10 backdrop-blur-sm border-white/20 p-8 sm:p-12">
                  <img
                    src={mainLogo}
                    alt="RahmaniCorp"
                    className="w-64 sm:w-80 h-auto"
                    data-testid="img-about-logo"
                  />
                  <div className="mt-6 flex items-center justify-center gap-4">
                    <img
                      src={lekkerBadge}
                      alt="Lekker Network Certified"
                      className="w-16 h-16 object-contain"
                      data-testid="img-lekker-badge"
                    />
                    <span className="text-white/70 text-sm">Certified Partner</span>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-background" data-testid="section-industries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Industries We Serve
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Tailored technology solutions for diverse industries, from growing SMEs to established enterprises.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {industries.map((industry) => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#1FB6FF]" data-testid="section-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
            Ready to Transform Your Technology?
          </h2>
          <p className="text-white/90 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our team to discuss your IT challenges and explore how we can help your business thrive.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-[#0A2540] hover:bg-white/90 font-semibold uppercase tracking-wide text-sm px-8 w-full sm:w-auto"
                data-testid="button-cta-consultation"
              >
                Start a Technology Conversation
              </Button>
            </Link>
            <a href={`tel:${companyInfo.phones[0].replace(/\s/g, "")}`}>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-semibold uppercase tracking-wide text-sm px-8 w-full sm:w-auto"
                data-testid="button-cta-call"
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
