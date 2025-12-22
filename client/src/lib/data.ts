import type { Service, Industry } from "@shared/schema";

export const services: Service[] = [
  {
    id: "it-consulting",
    title: "IT Consulting & Digital Transformation",
    description: "Strategic IT consulting to optimize your business processes and accelerate digital transformation.",
    icon: "Lightbulb",
    slug: "it-consulting",
    features: [
      "IT strategy development",
      "Business process optimization",
      "Digital roadmap planning",
      "Technology assessment",
      "Change management",
      "Vendor evaluation"
    ],
    longDescription: "Our IT consulting services help businesses navigate the complex technology landscape with confidence. We work closely with your team to understand your unique challenges and develop tailored strategies that drive growth, efficiency, and competitive advantage. From comprehensive IT assessments to full-scale digital transformation initiatives, we provide the expertise and guidance needed to achieve your business objectives."
  },
  {
    id: "cloud-services",
    title: "Cloud Services",
    description: "Comprehensive cloud solutions including Microsoft 365, Google Workspace, Azure, and cloud migration services.",
    icon: "Cloud",
    slug: "cloud-services",
    features: [
      "Microsoft 365 deployment",
      "Google Workspace setup",
      "Azure cloud solutions",
      "Cloud migration services",
      "Backup & disaster recovery",
      "Hybrid cloud architecture"
    ],
    longDescription: "Transform your business with our enterprise-grade cloud services. We specialize in deploying, migrating, and managing cloud infrastructure across Microsoft 365, Google Workspace, and Azure platforms. Our team ensures seamless transitions with minimal downtime, robust security measures, and comprehensive backup and disaster recovery solutions to keep your business running smoothly."
  },
  {
    id: "managed-it",
    title: "Managed IT Services",
    description: "Proactive IT management with 24/7 monitoring, helpdesk support, and comprehensive SLA-backed services.",
    icon: "Settings",
    slug: "managed-it",
    features: [
      "24/7 proactive monitoring",
      "Helpdesk & SLA support",
      "SME & enterprise management",
      "Patch management",
      "Asset management",
      "Performance optimization"
    ],
    longDescription: "Focus on your core business while we handle your IT infrastructure. Our managed IT services provide comprehensive, proactive support that prevents issues before they impact your operations. With 24/7 monitoring, dedicated helpdesk support, and guaranteed SLA response times, you can trust that your technology is in expert hands."
  },
  {
    id: "telecommunications",
    title: "Business Telecommunications",
    description: "Modern VoIP, hosted PBX, and unified communications solutions for seamless business connectivity.",
    icon: "Phone",
    slug: "telecommunications",
    features: [
      "VoIP phone systems",
      "Hosted PBX solutions",
      "Unified communications",
      "Call center solutions",
      "Video conferencing",
      "Mobile integration"
    ],
    longDescription: "Upgrade your business communications with our cutting-edge telecommunications solutions. We design and implement VoIP phone systems, hosted PBX, and unified communications platforms that enhance collaboration, reduce costs, and scale with your business. Our solutions integrate seamlessly with your existing infrastructure and support remote and hybrid work environments."
  },
  {
    id: "connectivity",
    title: "Corporate Connectivity",
    description: "Enterprise-grade SD-WAN, VPN, business fibre, and ISP solutions for reliable connectivity.",
    icon: "Globe",
    slug: "connectivity",
    features: [
      "SD-WAN implementation",
      "VPN solutions",
      "Business fibre",
      "ISP resale partnerships",
      "Network optimization",
      "Failover solutions"
    ],
    longDescription: "Stay connected with enterprise-grade connectivity solutions designed for reliability and performance. Our corporate connectivity services include SD-WAN implementation, secure VPN solutions, high-speed business fibre, and strategic ISP partnerships. We ensure your business maintains optimal connectivity with built-in redundancy and failover protection."
  },
  {
    id: "smart-office-security",
    title: "Smart Office & Security",
    description: "Commercial CCTV, access control, and enterprise Wi-Fi design for secure, intelligent workspaces.",
    icon: "Shield",
    slug: "smart-office-security",
    features: [
      "Commercial CCTV systems",
      "Access control solutions",
      "Enterprise Wi-Fi design",
      "Intrusion detection",
      "Video analytics",
      "Remote monitoring"
    ],
    longDescription: "Create a secure and intelligent workplace with our smart office and security solutions. We design and install commercial-grade CCTV systems, access control solutions, and enterprise Wi-Fi networks that protect your assets and enhance productivity. Our integrated approach ensures seamless operation and easy management of all security systems."
  },
  {
    id: "web-digital",
    title: "Web & Digital Services",
    description: "Professional website development, app integration, and digital automation solutions.",
    icon: "Code",
    slug: "web-digital",
    features: [
      "Website development",
      "App integration",
      "Digital automation",
      "E-commerce solutions",
      "API development",
      "Custom software"
    ],
    longDescription: "Establish a powerful digital presence with our web and digital services. From professional website development to complex app integrations and digital automation, we deliver solutions that drive engagement and streamline operations. Our team combines technical expertise with creative design to create digital experiences that set your business apart."
  }
];

export const industries: Industry[] = [
  {
    id: "smes",
    title: "SMEs",
    description: "Scalable IT solutions designed for growing small and medium enterprises.",
    icon: "Building2"
  },
  {
    id: "corporate",
    title: "Corporate Offices",
    description: "Enterprise-grade infrastructure for large corporate environments.",
    icon: "Landmark"
  },
  {
    id: "retail",
    title: "Retail",
    description: "Technology solutions tailored for retail operations and customer engagement.",
    icon: "ShoppingBag"
  },
  {
    id: "logistics",
    title: "Logistics",
    description: "Connected systems for supply chain and logistics optimization.",
    icon: "Truck"
  },
  {
    id: "professional",
    title: "Professional Services",
    description: "IT solutions for law firms, consultancies, and professional practices.",
    icon: "Briefcase"
  },
  {
    id: "remote",
    title: "Remote Teams",
    description: "Collaboration tools and infrastructure for distributed workforces.",
    icon: "Users"
  }
];

export const companyInfo = {
  name: "RahmaniCorp",
  tagline: "Enterprise IT & Digital Solutions",
  founder: "Conan Lincoln van Staden",
  location: "Cape Town, South Africa",
  reach: "Local & International Clients",
  phones: ["+27 60 944 3087", "+27 65 006 8374"],
  domain: "rahmanicorp.co.za",
  email: "info@rahmanicorp.co.za"
};
