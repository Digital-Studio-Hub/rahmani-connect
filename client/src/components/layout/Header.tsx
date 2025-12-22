import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { companyInfo, services } from "@/lib/data";
import whiteLogo from "@assets/White_Logo_1766400151640.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services", hasDropdown: true },
    { href: "/industries", label: "Industries" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A2540]/95 backdrop-blur-md shadow-lg"
          : "bg-[#0A2540]"
      }`}
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" data-testid="link-logo">
            <img
              src={whiteLogo}
              alt="RahmaniCorp"
              className="h-10 sm:h-12 w-auto"
              data-testid="img-logo"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1" data-testid="nav-desktop">
            {navLinks.map((link) => (
              <div key={link.href} className="relative">
                {link.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                        location.startsWith("/services")
                          ? "text-[#1FB6FF]"
                          : "text-white/90 hover:text-white"
                      }`}
                      data-testid="button-services-dropdown"
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 pt-2 w-72">
                        <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 overflow-hidden">
                          <Link
                            href="/services"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 font-medium border-b border-gray-100"
                            data-testid="link-all-services"
                          >
                            All Services
                          </Link>
                          {services.map((service) => (
                            <Link
                              key={service.id}
                              href={`/services/${service.slug}`}
                              className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#0A2540]"
                              data-testid={`link-service-${service.slug}`}
                            >
                              {service.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                      location === link.href
                        ? "text-[#1FB6FF]"
                        : "text-white/90 hover:text-white"
                    }`}
                    data-testid={`link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${companyInfo.phones[0].replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-white/90 hover:text-white text-sm"
              data-testid="link-phone-header"
            >
              <Phone className="w-4 h-4" />
              <span>{companyInfo.phones[0]}</span>
            </a>
            <Link href="/contact">
              <Button
                className="bg-[#1FB6FF] hover:bg-[#1FB6FF]/90 text-white font-semibold uppercase tracking-wide text-xs px-6"
                data-testid="button-schedule-consultation"
              >
                Schedule Consultation
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="lg:hidden bg-[#0A2540] border-t border-white/10"
          data-testid="nav-mobile"
        >
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.href}>
                {link.hasDropdown ? (
                  <>
                    <button
                      className="w-full flex items-center justify-between px-4 py-3 text-white/90 font-medium rounded-md"
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      data-testid="button-services-mobile"
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          isServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isServicesOpen && (
                      <div className="pl-4 space-y-1">
                        <Link
                          href="/services"
                          className="block px-4 py-2 text-white/80 text-sm rounded-md"
                          data-testid="link-all-services-mobile"
                        >
                          All Services
                        </Link>
                        {services.map((service) => (
                          <Link
                            key={service.id}
                            href={`/services/${service.slug}`}
                            className="block px-4 py-2 text-white/70 text-sm rounded-md"
                            data-testid={`link-service-${service.slug}-mobile`}
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={`block px-4 py-3 font-medium rounded-md ${
                      location === link.href
                        ? "text-[#1FB6FF]"
                        : "text-white/90"
                    }`}
                    data-testid={`link-${link.label.toLowerCase()}-mobile`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 space-y-3">
              <a
                href={`tel:${companyInfo.phones[0].replace(/\s/g, "")}`}
                className="flex items-center justify-center gap-2 text-white/90 py-2"
                data-testid="link-phone-mobile"
              >
                <Phone className="w-4 h-4" />
                <span>{companyInfo.phones[0]}</span>
              </a>
              <Link href="/contact" className="block">
                <Button
                  className="w-full bg-[#1FB6FF] hover:bg-[#1FB6FF]/90 text-white font-semibold uppercase tracking-wide text-xs"
                  data-testid="button-consultation-mobile"
                >
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
