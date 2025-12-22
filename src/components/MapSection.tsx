
import { motion } from "framer-motion";
import { Locate } from "lucide-react";

const MapSection = () => {
    return (
        <section id="map" className="relative py-24 overflow-hidden bg-white">
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
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
                        <Locate className="h-4 w-4 text-secondary" />
                        <span className="text-sm font-medium text-foreground tracking-wide">Our Location</span>
                    </motion.div>

                    <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="text-foreground">Proudly Serving </span>
                        <span className="gradient-text">San Antonio, Austin & Surrounding Areas</span>
                    </h2>
                    <p className="text-lg text-muted-foreground mb-4">
                        Based in the heart of Texas, we are your local experts for all exterior cleaning needs.
                    </p>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-2xl overflow-hidden shadow-2xl border border-border h-[450px] w-full"
                >
                    <iframe
                        src="https://www.google.com/maps/d/embed?mid=1Q_4b7JiUjCR49xeq7R_GdyOsRiJradY"
                        width="100%"
                        height="120%"
                        style={{ border: 0, marginTop: '-65px' }}
                        allowFullScreen
                        loading="lazy"
                        title="Big Tex Service Area Map"
                    ></iframe>
                </motion.div>
            </div>
        </section>
    );
};

export default MapSection;
