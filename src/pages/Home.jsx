import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl" />
        <div className="relative z-10 container w-auto text-center mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-5xl md:text-6xl text-primary mb-6">
              Discover the Power of Divine Feminine Energy
            </h1>
            <p className="font-body text-xl text-neutral-600 mb-8">
              Explore ancient wisdom and modern practices through our transformative projects and teachings.
            </p>
            <Link
              to="/projects"
              className="inline-block bg-primary text-white px-8 py-3 rounded-full font-body hover:bg-primary/90 transition-colors"
            >
              Explore Projects
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl text-primary text-center mb-12">
            Our Core Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Ancient Wisdom",
                description: "Drawing from centuries of spiritual knowledge and practices."
              },
              {
                title: "Modern Approach",
                description: "Adapting traditional teachings for contemporary life."
              },
              {
                title: "Personal Growth",
                description: "Supporting your journey of self-discovery and transformation."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <h3 className="font-display text-xl text-primary mb-4">{feature.title}</h3>
                <p className="font-body text-neutral-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl text-primary mb-6">
            Begin Your Journey Today
          </h2>
          <p className="font-body text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            Join our community and discover the transformative power of Shakti energy in your life.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-accent text-neutral-600 font-bold border shadow px-8 py-3 rounded-full font-body hover:bg-accent/90 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 