import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Images } from "lucide-react";
import serviceLighting from "@/assets/bigtexlight2.png";
import serviceCommercial from "@/assets/service-commercial.jpg";
import serviceSoftwash from "@/assets/service-softwash.jpg";
import heroPermanentLighting from "@/assets/bigtexlight1.png";
import heroPressureWashing from "@/assets/hero-pressure-washing.jpg";
import holidayLightsNew from "@/assets/holiday-lights-new.png";

const galleryImages = [
  {
    id: 1,
    src: heroPermanentLighting,
    title: "Modern Home Permanent Christmas Lights",
    category: "Permanent Christmas Lights",
  },
  {
    id: 2,
    src: serviceLighting,
    title: "Architectural Illumination",
    category: "Permanent Christmas Lights",
  },
  {
    id: 3,
    src: heroPressureWashing,
    title: "Driveway Restoration",
    category: "Pressure Washing",
  },
  {
    id: 4,
    src: serviceCommercial,
    title: "Commercial Cleaning",
    category: "Pressure Washing",
  },
  {
    id: 5,
    src: serviceSoftwash,
    title: "Gutter & Roof Care",
    category: "Gutter Cleaning",
  },
  {
    id: 6,
    src: holidayLightsNew,
    title: "Holiday Permanent Christmas Lights",
    category: "Permanent Christmas Lights",
  },
];

const categories = ["All", "Pressure Washing", "Permanent Christmas Lights", "Gutter Cleaning"];

const GallerySection = () => {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = filter === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === filter);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const nextImage = () => setSelectedImage((prev) => (prev !== null ? (prev + 1) % filteredImages.length : null));
  const prevImage = () => setSelectedImage((prev) => (prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : null));

  return (
    <section id="gallery" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 section-divider" />
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-sky/20 rounded-full blur-[200px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-blue mb-6"
          >
            <Images className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium text-foreground tracking-wide">Our Work</span>
          </motion.div>

          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Project </span>
            <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Browse our portfolio of completed projects. From stunning lighting installations
            to dramatic before-and-after transformations.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${filter === category
                ? "bg-secondary text-secondary-foreground shadow-glow"
                : "glass text-muted-foreground hover:text-foreground hover:border-secondary/50"
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-sm text-secondary font-medium mb-1">{image.category}</div>
                  <div className="font-heading text-lg font-bold text-foreground">{image.title}</div>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-secondary/50 rounded-2xl transition-colors duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {
          selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl p-4"
              onClick={closeLightbox}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center text-foreground hover:text-secondary transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-6 w-12 h-12 rounded-full glass flex items-center justify-center text-foreground hover:text-secondary transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-5xl max-h-[80vh] relative"
              >
                <img
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].title}
                  className="max-w-full max-h-[80vh] rounded-2xl object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent rounded-b-2xl">
                  <div className="text-sm text-secondary font-medium mb-1">
                    {filteredImages[selectedImage].category}
                  </div>
                  <div className="font-heading text-xl font-bold text-foreground">
                    {filteredImages[selectedImage].title}
                  </div>
                </div>
              </motion.div>

              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-6 w-12 h-12 rounded-full glass flex items-center justify-center text-foreground hover:text-secondary transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </motion.div>
          )
        }
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
