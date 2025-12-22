import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";
import { companyInfo, services } from "@/lib/data";
import whiteLogo from "@assets/White_Logo_1766400151640.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#102A43] text-white" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <Link href="/" data-testid="link-footer-logo">
              <img
                src={whiteLogo}
                alt="RahmaniCorp"
                className="h-10 w-auto"
                data-testid="img-footer-logo"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Enterprise IT consulting, cloud services, and digital transformation solutions for businesses locally and internationally.
            </p>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span>{companyInfo.location}</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" data-testid="text-footer-services-heading">
              Services
            </h3>
            <ul className="space-y-2">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-white/70 hover:text-[#1FB6FF] text-sm transition-colors"
                    data-testid={`link-footer-${service.slug}`}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-[#1FB6FF] hover:text-[#1FB6FF]/80 text-sm font-medium transition-colors"
                  data-testid="link-footer-all-services"
                >
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" data-testid="text-footer-company-heading">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-white/70 hover:text-[#1FB6FF] text-sm transition-colors"
                  data-testid="link-footer-about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="text-white/70 hover:text-[#1FB6FF] text-sm transition-colors"
                  data-testid="link-footer-industries"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/70 hover:text-[#1FB6FF] text-sm transition-colors"
                  data-testid="link-footer-contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-white/70 hover:text-[#1FB6FF] text-sm transition-colors"
                  data-testid="link-footer-privacy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-white/70 hover:text-[#1FB6FF] text-sm transition-colors"
                  data-testid="link-footer-terms"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" data-testid="text-footer-contact-heading">
              Contact
            </h3>
            <ul className="space-y-3">
              {companyInfo.phones.map((phone, index) => (
                <li key={index}>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-white/70 hover:text-[#1FB6FF] text-sm transition-colors"
                    data-testid={`link-footer-phone-${index}`}
                  >
                    <Phone className="w-4 h-4" />
                    <span>{phone}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center gap-2 text-white/70 hover:text-[#1FB6FF] text-sm transition-colors"
                  data-testid="link-footer-email"
                >
                  <Mail className="w-4 h-4" />
                  <span>{companyInfo.email}</span>
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-xs text-white/50">
                Service Area: {companyInfo.reach}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm" data-testid="text-copyright">
              {currentYear} {companyInfo.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy-policy"
                className="text-white/50 hover:text-white/70 text-sm transition-colors"
                data-testid="link-footer-privacy-bottom"
              >
                Privacy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-white/50 hover:text-white/70 text-sm transition-colors"
                data-testid="link-footer-terms-bottom"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
