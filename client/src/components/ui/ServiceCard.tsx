import { Link } from "wouter";
import { ArrowRight, Lightbulb, Cloud, Settings, Phone, Globe, Shield, Code, LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { Service } from "@shared/schema";

const iconMap: Record<string, LucideIcon> = {
  Lightbulb,
  Cloud,
  Settings,
  Phone,
  Globe,
  Shield,
  Code,
};

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = iconMap[service.icon] || Lightbulb;

  return (
    <Card
      className="group p-6 sm:p-8 bg-white dark:bg-card border-0 shadow-sm hover:shadow-lg transition-all duration-300"
      data-testid={`card-service-${service.slug}`}
    >
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#1FB6FF] flex items-center justify-center mb-5">
        <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-[#0A2540] dark:text-foreground mb-3 tracking-tight">
        {service.title}
      </h3>
      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
        {service.description}
      </p>
      <Link
        href={`/services/${service.slug}`}
        className="inline-flex items-center gap-2 text-[#1FB6FF] font-medium text-sm group-hover:gap-3 transition-all"
        data-testid={`link-learn-more-${service.slug}`}
      >
        Learn More
        <ArrowRight className="w-4 h-4" />
      </Link>
    </Card>
  );
}
