import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Droplets, Lightbulb, ArrowRight, CheckCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPressureWashing from "@/assets/hero-pressure-washing.jpg";
import heroPermanentLighting from "@/assets/bigtexlight1.png";

const slides = [
  {
    id: 2,
    image: heroPermanentLighting,
    title: "Beautiful",
    subtitle: "Permanent Holiday Lights",
    highlight: "Permanent Holiday Lights Solutions",
    description: "Enhance your home's beauty and security with our professional Permanent Holiday Lights installation. Energy-efficient LED systems for year-round enjoyment.",
    icon: Lightbulb,
  },
  {
    id: 1,
    image: heroPressureWashing,
    title: "Professional",
    subtitle: "Exterior Cleaning",
    highlight: "Pressure Washing & More",
    description: "Transform your property with our professional pressure washing, gutter cleaning, and soft washing services. Serving San Antonio through Austin Texas.",
    icon: Droplets,
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentData = slides[currentSlide];
  const Icon = currentData.icon;

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={currentData.image}
            alt={currentData.highlight}
            className="w-full h-full object-cover"
            width="1920"
            height="1080"
            fetchPriority="high"
          />
          <div className="absolute inset-0 hero-overlay" />
        </motion.div>
      </AnimatePresence>

      {/* Decorative Elements - Softer */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-sky/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-steel/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: "3s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 lg:px-8 pt-32 lg:pt-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-6"
              >
                {/* Location Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30"
                >
                  <MapPin className="h-4 w-4 text-white" />
                  <span className="text-sm text-white font-medium">San Antonio through Austin Texas</span>
                </motion.div>

                {/* Icon Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  <Icon className="h-5 w-5 text-sky-light" />
                  <span className="font-heading text-sm tracking-widest text-white uppercase">
                    {currentData.highlight}
                  </span>
                </motion.div>

                {/* Main Title */}
                <div className="space-y-2">
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
                  >
                    <span className="text-sky-light">{currentData.title}</span>
                  </motion.h1>
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
                  >
                    {currentData.subtitle}
                  </motion.h2>
                </div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-lg text-white/80 max-w-lg leading-relaxed"
                >
                  {currentData.description}
                </motion.p>

                {/* Free Estimate Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-600 text-white"
                >
                  <CheckCircle className="h-4 w-4" />
                  <span className="font-semibold text-sm">Free Estimates • Licensed & Insured</span>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-wrap gap-4 pt-2"
                >
                  <Button variant="glow" size="xl" asChild>
                    <a href="#contact" className="group">
                      Get Free Estimate
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  <Button variant="hero" size="xl" asChild>
                    <a href="#services">View Services</a>
                  </Button>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="hidden lg:grid grid-cols-2 gap-4"
            >
              {[
                { value: "500+", label: "Projects Completed" },
                { value: "100%", label: "Satisfaction Rate" },
                { value: "5★", label: "Google Rating" },
                { value: "Free", label: "Estimates" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="font-heading text-3xl font-bold text-sky-light mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/70">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slide Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-6">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <div className="flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentSlide(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide
                ? "w-8 bg-sky-light shadow-glow"
                : "w-2 bg-white/40 hover:bg-white/60"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/20"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 right-8 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-xs tracking-widest rotate-90 origin-center translate-x-6">SCROLL</span>
          <div className="w-px h-16 bg-gradient-to-b from-sky-light to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
