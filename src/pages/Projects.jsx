import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import api from '../lib/axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get('/projects');
        setProjects(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch projects. Please try again later.');
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-primary font-body">Loading projects...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-red-500 font-body">{error}</div>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="font-display text-4xl text-primary mb-4">Our Projects</h1>
        <p className="font-body text-xl text-neutral-600 max-w-2xl mx-auto">
          Explore our transformative projects and initiatives that bring ancient wisdom to modern life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            {project.image && (
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-6">
              <h3 className="font-display text-xl text-primary mb-2">{project.title}</h3>
              <p className="font-body text-neutral-600 mb-4">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-accent text-white px-6 py-2 rounded-full font-body hover:bg-accent/90 transition-colors"
                >
                  Learn More
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 