import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Mike Thompson",
    location: "New Braunfels, TX",
    rating: 5,
    text: "Big Tex did an incredible job on our driveway and patio. The difference is night and day! They were professional, on time, and the results exceeded our expectations. Highly recommend!",
    service: "Pressure Washing",
  },
  {
    id: 2,
    name: "Sarah Williams",
    location: "San Marcos, TX",
    rating: 5,
    text: "The outdoor lighting they installed has completely transformed our home! We get compliments from neighbors all the time. The app control is so convenient - we can change colors for any holiday.",
    service: "Outdoor Lighting",
  },
  {
    id: 3,
    name: "Robert & Lisa Garcia",
    location: "New Braunfels, TX",
    rating: 5,
    text: "We had our gutters cleaned and it made such a difference. They were thorough, professional, and even showed us pictures of what they found. Great preventive maintenance!",
    service: "Gutter Cleaning",
  },
  {
    id: 4,
    name: "Jennifer Chen",
    location: "Canyon Lake, TX",
    rating: 5,
    text: "Had a new fence installed and couldn't be happier. The team was professional and the quality is outstanding. They even helped us choose the right style for our property. Great experience!",
    service: "Fencing",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 section-divider" />
        <div className="absolute bottom-0 left-0 right-0 section-divider" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-sky/20 rounded-full blur-[150px] -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
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
            <Star className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium text-foreground tracking-wide">Testimonials</span>
          </motion.div>

          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">What Our </span>
            <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don&apos;t just take our word for it. Here&apos;s what Texas homeowners and 
            businesses say about our services.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative rounded-3xl p-8 md:p-12 bg-background border border-border shadow-soft">
                {/* Quote Icon */}
                <Quote className="absolute top-6 right-6 h-12 w-12 text-secondary/20" />

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-light">
                  &ldquo;{testimonials[currentIndex].text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-heading text-lg font-bold text-foreground">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {testimonials[currentIndex].location}
                    </div>
                  </div>
                  <div className="px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                    {testimonials[currentIndex].service}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-foreground hover:text-secondary hover:glow-border transition-all"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-secondary shadow-glow"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-foreground hover:text-secondary hover:glow-border transition-all"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
