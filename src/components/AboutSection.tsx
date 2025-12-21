import { motion } from "framer-motion";
import { Shield, Clock, Award, Users, CheckCircle, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const stats = [
  { icon: Shield, value: "100%", label: "Satisfaction Guaranteed" },
  { icon: Clock, value: "24hr", label: "Quick Response Time" },
  { icon: Award, value: "10+", label: "Years of Experience" },
  { icon: Users, value: "500+", label: "Happy Customers" },
];

const features = [
  "Licensed & Fully Insured",
  "Locally Owned & Operated",
  "Free Estimates on All Services",
  "Eco-Friendly Solutions",
  "Satisfaction Guaranteed",
  "Competitive Pricing",
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky/20 rounded-full blur-[200px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-blue mb-6"
              >
                <Award className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium text-foreground tracking-wide">About Us</span>
              </motion.div>

              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                <span className="text-foreground">Your Trusted </span>
                <span className="gradient-text">Local Experts</span>
              </h2>

              {/* Location Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
              >
                <MapPin className="h-4 w-4" />
                <span className="font-medium">Proudly Serving New Braunfels, TX &amp; Hill Country</span>
              </motion.div>

              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Big Tex Pressure Pros has been serving the New Braunfels area and the beautiful 
                Texas Hill Country with pride and dedication. We combine professional-grade 
                equipment with meticulous attention to detail, ensuring every project exceeds expectations.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                From <span className="text-secondary font-semibold">pressure washing</span> and{" "}
                <span className="text-secondary font-semibold">gutter cleaning</span> to{" "}
                <span className="text-secondary font-semibold">outdoor lighting</span> and{" "}
                <span className="text-secondary font-semibold">fencing services</span>, 
                we&apos;re your one-stop solution for complete exterior home care. All of our 
                services come with free estimates—no obligation, no pressure.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-foreground text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <img src={logo} alt="Big Tex Pressure Pros" className="h-20 w-auto" />
            </motion.div>
          </motion.div>

          {/* Right - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="group relative p-8 rounded-2xl bg-card border border-border hover:border-secondary/50 transition-all duration-500 hover:shadow-glow"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky/10 to-steel/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-muted flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                      <Icon className="h-8 w-8 text-secondary" />
                    </div>
                    <div className="font-heading text-4xl font-bold gradient-text">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
