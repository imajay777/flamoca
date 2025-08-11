import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import logoUrl from '../assets/logo.png';
import { Instagram, Twitter, Facebook } from 'lucide-react';

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionMessage, setSubscriptionMessage] = useState('');
  const location = useLocation();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    setSubscriptionMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubscriptionMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        setSubscriptionMessage(data.error || 'Subscription failed. Please try again.');
      }
    } catch (error) {
      setSubscriptionMessage('Network error. Please try again.');
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0">
                <img className="h-12 w-auto" src={logoUrl} alt="Flamoca" />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <Link
                to="/"
                className={`px-3 py-2 text-base font-medium ${location.pathname === '/' ? 'text-purple-600' : 'text-gray-700'} hover:bg-gray-100 hover:text-purple-800 rounded-md`}
              >
                Home
              </Link>
              <Link
                to="/categories"
                className={`px-3 py-2 text-base font-medium ${location.pathname === '/categories' ? 'text-purple-600' : 'text-gray-700'} hover:bg-gray-100 hover:text-purple-800 rounded-md`}
              >
                Categories
              </Link>
              <Link
                to="/superfoods"
                className={`px-3 py-2 text-base font-medium ${location.pathname === '/superfoods' ? 'text-purple-600' : 'text-gray-700'} hover:bg-gray-100 hover:text-purple-800 rounded-md`}
              >
                Superfoods
              </Link>
              <Link
                to="/about"
                className={`px-3 py-2 text-base font-medium ${location.pathname === '/about' ? 'text-purple-600' : 'text-gray-700'} hover:bg-gray-100 hover:text-purple-800 rounded-md`}
              >
                About Us
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                className="text-gray-700 hover:text-purple-600 focus:outline-none focus:text-purple-600"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
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
                <form onSubmit={handleSubscribe} className="mt-4 sm:flex">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-800 focus:ring-white focus:border-white focus:placeholder-gray-400"
                    placeholder="Enter your email"
                  />
                  <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button
                      type="submit"
                      disabled={isSubscribing}
                      className="w-full bg-purple-800 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-800 focus:ring-white disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                    </button>
                  </div>
                </form>
                {subscriptionMessage && (
                  <div className={`mt-3 text-sm ${subscriptionMessage.includes('Thank you') ? 'text-green-200' : 'text-red-200'}`}>
                    {subscriptionMessage}
                  </div>
                )}
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
