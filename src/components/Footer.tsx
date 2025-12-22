import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Instagram, CheckCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Pressure Washing",
    "Permanent Christmas Lights",
    "Gutter Cleaning",
    "Fencing Services",
    "Soft Washing",
    "Commercial Services",
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-primary text-primary-foreground">
      {/* Top gradient line */}
      <div className="h-1 bg-gradient-to-r from-secondary via-accent to-secondary" />

      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <img src={logo} alt="Big Tex Pressure Pros" className="h-20 w-auto bg-white/90 rounded-lg p-2" />
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              San Antonio & Austin&apos;s trusted exterior cleaning and home service professionals.
              We bring quality and care to every project.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-600 text-white text-sm">
              <CheckCircle className="h-4 w-4" />
              <span className="font-semibold">Free Estimates</span>
            </div>
            <div className="flex gap-4">
              <motion.a
                href="https://www.facebook.com/BigTexPressurePros"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-primary-foreground hover:bg-white/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-primary-foreground hover:bg-white/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <h4 className="font-heading text-lg font-bold text-primary-foreground">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="font-heading text-lg font-bold text-primary-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h4 className="font-heading text-lg font-bold text-primary-foreground">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+18304810523"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  <Phone className="h-4 w-4 text-sky-light" />
                  830-481-0523
                </a>
              </li>
              <li>
                <a
                  href="mailto:bigtexpowerpro@gmail.com"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  <Mail className="h-4 w-4 text-sky-light" />
                  bigtexpowerpro@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70 text-sm">
                <MapPin className="h-4 w-4 text-sky-light mt-0.5" />
                <span>
                  San Antonio Texas-Austin Texas
                  <br />
                  & Surrounding Areas
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Big Tex Pressure Pros. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a
              href="https://hatwebs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/40 hover:text-primary-foreground/80 transition-colors text-sm font-medium tracking-wide"
            >
              Website by Hatwebs
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
