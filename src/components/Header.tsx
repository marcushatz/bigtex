import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top Bar with Location & Free Estimates */}
      <div className="hidden lg:block bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 opacity-80" />
              <span>Serving San Antonio through Austin Texas</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 opacity-80" />
              <a href="tel:+18304810523" className="hover:opacity-80 transition-opacity">
                830-481-0523
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-green-600 px-4 py-1 rounded-full">
            <CheckCircle className="h-4 w-4" />
            <span className="font-semibold">Free Estimates</span>
          </div>
        </div>
      </div>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 lg:top-10 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "glass py-2 shadow-soft lg:top-0"
          : "bg-white/90 backdrop-blur-md py-3"
          }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#home"
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src={logo}
                alt="Big Tex Pressure Pros"
                className="h-14 md:h-16 w-auto object-contain"
                width="200"
                height="64"
              />
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="animated-underline text-foreground/80 hover:text-primary font-medium text-sm tracking-wide transition-colors"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Button variant="glow" size="lg" asChild>
                <a href="#contact">Get Free Estimate</a>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/95 backdrop-blur-xl mt-2 mx-4 rounded-xl overflow-hidden shadow-soft border border-border"
            >
              {/* Mobile Location & Free Estimate */}
              <div className="px-6 py-4 bg-primary/5 border-b border-border">
                <div className="flex items-center gap-2 text-sm text-primary mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>San Antonio through Austin Texas</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                  <CheckCircle className="h-3 w-3" />
                  <span className="font-semibold">Free Estimates</span>
                </div>
              </div>

              <nav className="flex flex-col py-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="px-6 py-3 text-foreground/80 hover:text-primary hover:bg-primary/5 font-medium transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <div className="px-6 py-4 border-t border-border mt-2">
                  <a href="tel:+18304810523" className="flex items-center gap-2 text-primary font-semibold mb-3">
                    <Phone className="h-4 w-4" />
                    830-481-0523
                  </a>
                  <Button variant="glow" className="w-full" asChild>
                    <a href="#contact">Get Free Estimate</a>
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;
