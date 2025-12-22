import { Building2, Landmark, ShoppingBag, Truck, Briefcase, Users, LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { Industry } from "@shared/schema";

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Landmark,
  ShoppingBag,
  Truck,
  Briefcase,
  Users,
};

interface IndustryCardProps {
  industry: Industry;
}

export default function IndustryCard({ industry }: IndustryCardProps) {
  const IconComponent = iconMap[industry.icon] || Building2;

  return (
    <Card
      className="p-6 bg-white dark:bg-card border-0 shadow-sm hover:shadow-md transition-all duration-300 text-center"
      data-testid={`card-industry-${industry.id}`}
    >
      <div className="w-12 h-12 rounded-lg bg-[#0A2540]/5 dark:bg-white/5 flex items-center justify-center mx-auto mb-4">
        <IconComponent className="w-6 h-6 text-[#1FB6FF]" />
      </div>
      <h3 className="text-base font-semibold text-[#0A2540] dark:text-foreground mb-2">
        {industry.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {industry.description}
      </p>
    </Card>
  );
}
