import { useParams, Link } from "wouter";
import { ArrowRight, ArrowLeft, CheckCircle, Phone, Lightbulb, Cloud, Settings, Phone as PhoneIcon, Globe, Shield, Code, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import ServiceCard from "@/components/ui/ServiceCard";
import { services, companyInfo } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Lightbulb,
  Cloud,
  Settings,
  Phone: PhoneIcon,
  Globe,
  Shield,
  Code,
};

export default function ServiceDetail() {
  const params = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === params.slug);
  const otherServices = services.filter((s) => s.slug !== params.slug).slice(0, 3);

  if (!service) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center" data-testid="section-service-not-found">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Service Not Found</h1>
            <p className="text-muted-foreground mb-6">The service you're looking for doesn't exist.</p>
            <Link href="/services">
              <Button data-testid="button-back-to-services">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const IconComponent = iconMap[service.icon] || Lightbulb;

  return (
    <Layout>
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-[#0A2540] via-[#102A43] to-[#0A2540]" data-testid="section-service-hero">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231FB6FF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 text-sm"
            data-testid="link-back-services"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-[#1FB6FF] flex items-center justify-center flex-shrink-0">
              <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight" data-testid="text-service-title">
                {service.title}
              </h1>
              <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-background" data-testid="section-service-details">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6 tracking-tight">
                Overview
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">
                {service.longDescription}
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4">
                Key Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#1FB6FF] flex-shrink-0" />
                    <span className="text-foreground text-sm sm:text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Card className="p-6 sm:p-8 bg-[#0A2540] border-0 sticky top-24">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Discuss This Solution
                </h3>
                <p className="text-white/70 text-sm mb-6">
                  Ready to explore how {service.title.toLowerCase()} can benefit your business? 
                  Let's start a conversation.
                </p>
                <Link href={`/contact?service=${service.id}`}>
                  <Button
                    className="w-full bg-[#1FB6FF] hover:bg-[#1FB6FF]/90 text-white font-semibold uppercase tracking-wide text-sm mb-4"
                    data-testid="button-discuss-service"
                  >
                    Schedule Consultation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-white/50 text-xs mb-2">Or call us directly:</p>
                  {companyInfo.phones.map((phone, index) => (
                    <a
                      key={index}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-2 text-white/80 hover:text-[#1FB6FF] text-sm mb-2"
                      data-testid={`link-service-phone-${index}`}
                    >
                      <Phone className="w-4 h-4" />
                      {phone}
                    </a>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {otherServices.length > 0 && (
        <section className="py-16 sm:py-24 bg-muted/30" data-testid="section-related-services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-8 tracking-tight">
              Related Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherServices.map((s) => (
                <ServiceCard key={s.id} service={s} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
