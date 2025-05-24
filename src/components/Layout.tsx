import { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Facebook, Instagram, Menu, Twitter, X } from 'lucide-react';
import { useState } from 'react';
import { logoUrl } from '../assets/logo.ts'; // Import the logo URL from our centralized file

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    // Load Inter font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ 
      fontFamily: 'Poppins, sans-serif',
      backgroundColor: '#f9f6f2' 
    }}>
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img className="h-28 w-auto" src={logoUrl} alt="Flamoca" />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link 
                to="/" 
                className={`${location.pathname === '/' ? 'text-purple-600' : 'text-gray-700'} hover:text-purple-800 px-3 py-2 text-sm font-medium`}
              >
                Home
              </Link>
              <Link 
                to="/categories" 
                className={`${location.pathname === '/categories' ? 'text-purple-600' : 'text-gray-700'} hover:text-purple-800 px-3 py-2 text-sm font-medium`}
              >
                Categories
              </Link>
              <Link 
                to="/superfoods" 
                className={`${location.pathname === '/superfoods' ? 'text-purple-600' : 'text-gray-700'} hover:text-purple-800 px-3 py-2 text-sm font-medium`}
              >
                Superfoods
              </Link>
              <Link 
                to="/about" 
                className={`${location.pathname === '/about' ? 'text-purple-600' : 'text-gray-700'} hover:text-purple-800 px-3 py-2 text-sm font-medium`}
              >
                About Us
              </Link>
            </nav>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="inline-flex items-center justify-center p-2 rounded-md text-purple-600 hover:text-purple-800 hover:bg-gray-100"
              >
                <span className="sr-only">Open main menu</span>
                <Menu className="block h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu, show/hide based on menu state */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-40 bg-white">
            <div className="p-4 flex justify-between items-center">
              <Link to="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <img className="h-24 w-auto" src={logoUrl} alt="Flamoca" />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center p-2 rounded-md text-purple-600"
              >
                <span className="sr-only">Close menu</span>
                <X className="block h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className={`block px-3 py-2 text-base font-medium ${location.pathname === '/' ? 'text-purple-600' : 'text-gray-700'} hover:bg-gray-100 hover:text-purple-800`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/categories"
                className={`block px-3 py-2 text-base font-medium ${location.pathname === '/categories' ? 'text-purple-600' : 'text-gray-700'} hover:bg-gray-100 hover:text-purple-800`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Categories
              </Link>
              <Link
                to="/superfoods"
                className={`block px-3 py-2 text-base font-medium ${location.pathname === '/superfoods' ? 'text-purple-600' : 'text-gray-700'} hover:bg-gray-100 hover:text-purple-800`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Superfoods
              </Link>
              <Link
                to="/about"
                className={`block px-3 py-2 text-base font-medium ${location.pathname === '/about' ? 'text-purple-600' : 'text-gray-700'} hover:bg-gray-100 hover:text-purple-800`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
            </div>
          </div>
        )}
      </header>
      
      {/* Main content */}
      <main className="flex-grow">
        <Outlet />
      </main>
      
      {/* Footer */}
      <footer className="bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="mb-4">
                <img className="h-24 w-auto brightness-0 invert" src={logoUrl} alt="Flamoca" />
              </div>
              <p className="text-sm text-purple-100">
                Discover the world's most powerful superfoods, carefully selected for their exceptional nutritional benefits.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                <li><Link to="/" className="text-purple-100 hover:text-white">Home</Link></li>
                <li><Link to="/categories" className="text-purple-100 hover:text-white">Categories</Link></li>
                <li><Link to="/superfoods" className="text-purple-100 hover:text-white">Superfoods</Link></li>
                <li><Link to="/about" className="text-purple-100 hover:text-white">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Connect With Us</h3>
              <div className="mt-4 flex space-x-6">
                <a href="#" className="text-purple-100 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <Instagram />
                </a>
                <a href="#" className="text-purple-100 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <Twitter />
                </a>
                <a href="#" className="text-purple-100 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <Facebook />
                </a>
              </div>
              <div className="mt-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider">Subscribe</h3>
                <p className="mt-2 text-sm text-purple-100">Get the latest superfood news and updates.</p>
                <form className="mt-4 sm:flex">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-800 focus:ring-white focus:border-white focus:placeholder-gray-400"
                    placeholder="Enter your email"
                  />
                  <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button
                      type="submit"
                      className="w-full bg-purple-800 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-800 focus:ring-white"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-purple-500 pt-8">
            <p className="text-center text-sm text-purple-100">&copy; {new Date().getFullYear()} Flamoca. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
