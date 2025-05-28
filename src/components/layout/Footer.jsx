const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-sm mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-xl text-primary mb-4">ShaktiBhairavTantra</h3>
            <p className="font-body text-neutral-600">
              Embracing the divine feminine energy through ancient wisdom and modern practice.
            </p>
          </div>
          
          <div>
            <h4 className="font-display text-lg text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="font-body text-neutral-600 hover:text-primary transition-colors">Home</a></li>
              <li><a href="/projects" className="font-body text-neutral-600 hover:text-primary transition-colors">Projects</a></li>
              <li><a href="/about" className="font-body text-neutral-600 hover:text-primary transition-colors">About</a></li>
              <li><a href="/contact" className="font-body text-neutral-600 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display text-lg text-primary mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="font-body text-neutral-600">Email: info@shaktibhairavtantra.com</li>
              <li className="font-body text-neutral-600">Phone: +1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-neutral-200 text-center">
          <p className="font-body text-neutral-600">
            © {new Date().getFullYear()} ShaktiBhairavTantra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 