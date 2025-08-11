import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { superfoods } from '../data/superfoods';
import CategoryCard from '../components/CategoryCard';
import SuperfoodCard from '../components/SuperfoodCard';
import AIResearchSearch from '../components/AIResearchSearch';

const Home: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionMessage, setSubscriptionMessage] = useState('');

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
    <div>
      <AIResearchSearch />
      {/* Hero Section */}
      <section className="relative bg-purple-600 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl" style={{ fontFamily: 'Playfair Display, serif' }}>
              Discover the Power of
              <span className="block text-green-400">Superfoods</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-purple-100">
              Unlock nature's most potent nutritional treasures. From ancient grains to exotic berries, 
              explore superfoods that can transform your health and vitality.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/categories"
                className="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
              >
                Explore Categories
              </Link>
              <Link
                to="/about"
                className="text-sm font-semibold leading-6 text-white"
              >
                Learn More <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-purple-600">Why Superfoods?</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" style={{ fontFamily: 'Playfair Display, serif' }}>
              Nature's Most Powerful Nutrients
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Superfoods are packed with essential vitamins, minerals, antioxidants, and other nutrients 
              that can help boost your immune system, improve energy levels, and support overall health.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-5 w-5 flex-none text-green-600" aria-hidden="true">
                    🌟
                  </div>
                  Nutrient Density
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Superfoods contain higher concentrations of essential nutrients compared to regular foods, 
                    making them an efficient way to meet your daily nutritional needs.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-5 w-5 flex-none text-green-600" aria-hidden="true">
                    🛡️
                  </div>
                  Antioxidant Power
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Rich in antioxidants that help protect your cells from damage caused by free radicals, 
                    supporting healthy aging and disease prevention.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-5 w-5 flex-none text-green-600" aria-hidden="true">
                    💚
                  </div>
                  Natural & Pure
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Sourced from nature's finest ingredients, superfoods provide clean, natural nutrition 
                    without artificial additives or synthetic compounds.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl" style={{ fontFamily: 'Playfair Display, serif' }}>
              Explore by Body Benefits
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
              Discover superfoods that target specific parts of your body for optimal health
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categories.slice(0, 6).map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/categories"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 shadow-md hover:shadow-lg transition-all duration-300"
            >
              View All Categories
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Superfoods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl" style={{ fontFamily: 'Playfair Display, serif' }}>
              Featured Superfoods
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
              Our most popular and powerful superfood selections
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {superfoods.map((superfood) => (
              <SuperfoodCard key={superfood.id} superfood={superfood} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/superfoods"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 shadow-md hover:shadow-lg transition-all duration-300"
            >
              Explore All Superfoods
            </Link>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 bg-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-purple-600 px-6 py-10 sm:py-12 sm:px-12">
            <div className="md:flex md:items-center md:justify-between">
              <div className="max-w-xl">
                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Join our superfood community!
                </h2>
                <p className="mt-3 max-w-3xl text-lg leading-6 text-purple-100">
                  Sign up for our newsletter to receive the latest superfood news, recipes, and special offers.
                </p>
              </div>
              <div className="mt-8 md:mt-0">
                <form onSubmit={handleSubscribe} className="sm:flex">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-700"
                    placeholder="Enter your email"
                  />
                  <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button
                      type="submit"
                      disabled={isSubscribing}
                      className="flex w-full items-center justify-center rounded-md bg-purple-900 px-4 py-2 text-base font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
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
        </div>
      </section>
    </div>
  );
};

export default Home;
