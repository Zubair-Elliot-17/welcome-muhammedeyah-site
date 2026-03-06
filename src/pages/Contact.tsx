import { MapPin, Phone, Mail, Printer, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-school-warm-bg py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-sm font-semibold text-secondary">
            Get In Touch
          </span>
          <h1 className="mb-4 font-heading text-4xl font-extrabold text-foreground">
            Contact Us
          </h1>
          <p className="mx-auto max-w-xl text-muted-foreground">
            We'd love to hear from you. Whether you have a question or want to visit our school,
            don't hesitate to reach out.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          {/* Contact Details */}
          <div className="rounded-2xl bg-primary p-8 text-primary-foreground">
            <h2 className="mb-6 font-heading text-2xl font-bold text-secondary">
              School Information
            </h2>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-0.5 shrink-0 text-secondary" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-sm text-primary-foreground/70">
                    103 Batts Road, Wynberg, Western Cape, South Africa
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="mt-0.5 shrink-0 text-secondary" />
                <div>
                  <p className="font-semibold">Telephone</p>
                  <p className="text-sm text-primary-foreground/70">021 797 8047</p>
                  <p className="text-xs text-primary-foreground/50">International: +27 21 797 8047</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Printer size={20} className="mt-0.5 shrink-0 text-secondary" />
                <div>
                  <p className="font-semibold">Fax</p>
                  <p className="text-sm text-primary-foreground/70">021 762 2487</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="mt-0.5 shrink-0 text-secondary" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-primary-foreground/70">principal@mups.co.za</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border">
            <h2 className="mb-6 font-heading text-2xl font-bold text-foreground">
              Send Us a Message
            </h2>
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-school-gold-soft">
                  <Send size={28} className="text-school-navy" />
                </div>
                <h3 className="mb-2 font-heading text-xl font-bold text-foreground">
                  Thank You!
                </h3>
                <p className="text-muted-foreground">
                  Your message has been received. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-semibold text-foreground">Full Name</label>
                  <input type="text" required className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-secondary" placeholder="Your name" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-semibold text-foreground">Email Address</label>
                  <input type="email" required className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-secondary" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-semibold text-foreground">Subject</label>
                  <input type="text" required className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-secondary" placeholder="What is this about?" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-semibold text-foreground">Message</label>
                  <textarea required rows={4} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-secondary" placeholder="Type your message here..." />
                </div>
                <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-heading font-bold text-primary-foreground transition-transform hover:scale-[1.02]">
                  Send Message <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
