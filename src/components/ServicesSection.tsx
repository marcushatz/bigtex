import { motion } from "framer-motion";
import { Lightbulb, Droplets, Home, Fence, Sparkles, Shield, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import serviceLighting from "@/assets/bigtexlight2.png";
import serviceCommercial from "@/assets/service-commercial.jpg";
import serviceSoftwash from "@/assets/service-softwash.jpg";

const services = [
  {
    id: "pressure",
    icon: Droplets,
    title: "Pressure Washing",
    description: "Professional pressure washing for driveways, patios, sidewalks, decks, and more. We restore your surfaces to like-new condition with our commercial-grade equipment.",
    image: serviceCommercial,
    features: ["Driveways & Sidewalks", "Decks & Patios", "Commercial Properties", "Eco-Friendly Solutions"],
    featured: true,
  },
  {
    id: "lighting",
    icon: Lightbulb,
    title: "Permanent Christmas Lights",
    description: "Beautiful Permanent Christmas Lights solutions for your home. Perfect for holidays, security, and everyday ambiance with smart app control.",
    image: serviceLighting,
    features: ["Permanent Christmas Lights", "Smart App Control", "Energy Efficient", "Professional Installation"],
    featured: false,
  },
  {
    id: "gutter",
    icon: Home,
    title: "Gutter Cleaning",
    description: "Keep your gutters flowing freely and protect your home from water damage. Thorough cleaning and inspection services for residential and commercial properties.",
    image: serviceSoftwash,
    features: ["Complete Debris Removal", "Downspout Flushing", "Gutter Inspection", "Preventive Maintenance"],
    featured: false,
  },
  {
    id: "fencing",
    icon: Fence,
    title: "Fencing Services",
    description: "Quality fence installation, repair, and cleaning services. From wood to metal fencing, we help protect and beautify your property boundaries.",
    image: serviceCommercial,
    features: ["New Installation", "Repairs & Restoration", "Fence Cleaning", "Multiple Materials"],
    featured: false,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
        <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-sky/30 rounded-full blur-[150px]" />
        <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-steel/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-blue mb-6"
          >
            <Sparkles className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium text-foreground tracking-wide">Our Services</span>
          </motion.div>

          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Professional </span>
            <span className="gradient-text">Home Services</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From powerful pressure washing to beautiful Permanent Christmas Lights, we offer comprehensive
            services to transform and maintain your property in New Braunfels and the Hill Country.
          </p>

          {/* Free Estimate Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full bg-green-600 text-white"
          >
            <CheckCircle className="h-4 w-4" />
            <span className="font-semibold">Free Estimates on All Services</span>
          </motion.div>
        </motion.div>

        {/* Featured Service - Pressure Washing */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative rounded-3xl overflow-hidden bg-card border border-border shadow-card">
            <div className="grid lg:grid-cols-2">
              {/* Image Side */}
              <div className="relative h-80 lg:h-auto overflow-hidden">
                <motion.img
                  src={services[0].image}
                  alt="Pressure Washing Services"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card lg:block hidden" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent lg:hidden" />

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="absolute top-6 left-6 px-4 py-2 rounded-full bg-secondary text-secondary-foreground font-heading text-sm font-bold shadow-glow"
                >
                  ★ MOST POPULAR
                </motion.div>
              </div>

              {/* Content Side */}
              <div className="relative p-8 lg:p-12 bg-card flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center shadow-glow">
                      <Droplets className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
                      Pressure Washing
                    </h3>
                  </div>

                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Transform your property with our professional pressure washing services.
                    Using commercial-grade equipment and eco-friendly solutions, we restore
                    driveways, patios, decks, and more to their original beauty.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {services[0].features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <Shield className="h-4 w-4 text-secondary" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button variant="glow" size="lg" asChild>
                      <a href="#contact" className="group">
                        Get Free Estimate
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                    <Button variant="hero" size="lg" asChild>
                      <a href="#gallery">View Gallery</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            services.slice(1).map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-secondary/50 transition-all duration-500 hover:shadow-glow"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

                    {/* Icon */}
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-card/90 backdrop-blur-sm flex items-center justify-center border border-border group-hover:border-secondary/50 transition-colors">
                      <Icon className="h-6 w-6 text-secondary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-secondary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2">
                      {service.features.slice(0, 2).map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Button variant="ghost" className="w-full justify-between group/btn" asChild>
                      <a href="#contact">
                        Get Free Estimate
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </motion.div>
              );
            })
          }
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
