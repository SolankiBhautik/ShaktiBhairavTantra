import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const {user, logout} = useAuth()
  const location = useLocation()
  const {pathname} = location
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-display text-2xl text-primary">
            ShaktiBhairavTantra
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={` ${pathname == item.path ? "text-neutral-900 font-bold" : "text-neutral-600"} font-body  hover:text-primary transition-colors`}
              >
                {item.name}
              </Link>
            ))}
            {user ? (
              <Link
                onClick={() => logout()}
                className="font-body text-neutral-600 hover:text-primary transition-colors"
              >
                Logout
              </Link>
            ) : (
                <Link
                  to="/login"
                  className="font-body text-neutral-600 hover:text-primary transition-colors"
                >
                  Login
                </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 