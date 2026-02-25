import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* School Info */}
          <div>
            <h3 className="mb-4 font-heading text-xl font-bold text-secondary">
              Muhammedeyah Primary School
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-primary-foreground/70">
              Nurturing young minds in a caring, community-driven environment since our founding.
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
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 transition-colors hover:text-secondary"
                  >
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
                <span>123 School Street, Cape Town, Western Cape, 7764</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-secondary" />
                <span>(021) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-secondary" />
                <span>info@muhammedeyah.edu.za</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} className="shrink-0 text-secondary" />
                <span>Mon – Fri: 7:30 AM – 2:30 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Muhammedeyah Primary School. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
