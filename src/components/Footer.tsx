import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Printer } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary via-primary to-[hsl(216,45%,28%)] text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* School Info */}
          <div>
            <h3 className="mb-4 font-heading text-xl font-bold text-secondary">
              Muhammadeyah Primary School
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-primary-foreground/70">
              Nurturing young minds in a caring, community-driven environment since 1929.
              Building brighter futures together in Cape Town.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-heading text-lg font-bold text-secondary">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Notice Board", path: "/notices" },
                { label: "Gallery", path: "/gallery" },
                { label: "Our Staff", path: "/staff" },
                { label: "About Us", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-primary-foreground/70 transition-colors hover:text-secondary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-heading text-lg font-bold text-secondary">Contact Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-secondary" />
                <span>103 Batts Road, Wynberg, Western Cape, South Africa</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-secondary" />
                <span>021 797 8047</span>
              </li>
              <li className="flex items-center gap-2">
                <Printer size={16} className="shrink-0 text-secondary" />
                <span>Fax: 021 762 2487</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-secondary" />
                <span>principal@mups.co.za</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Muhammadeyah Primary School. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
