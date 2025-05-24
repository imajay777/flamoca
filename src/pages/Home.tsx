import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { superfoods } from '../data/superfoods';
import CategoryCard from '../components/CategoryCard';
import SuperfoodCard from '../components/SuperfoodCard';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-purple-600 py-20 sm:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80')] bg-cover bg-center opacity-20"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl" style={{ fontFamily: 'Playfair Display, serif' }}>
            Discover Nature's Most Powerful Superfoods
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-purple-100">
            Explore our curated collection of superfoods categorized by health benefits for different parts of your body.
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              to="/categories"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-white hover:bg-purple-50 shadow-md hover:shadow-lg transition-all duration-300"
            >
              Explore Categories
            </Link>
            <Link
              to="/superfoods"
              className="ml-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-800 hover:bg-purple-700 shadow-md hover:shadow-lg transition-all duration-300"
            >
              View All Superfoods
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl" style={{ fontFamily: 'Playfair Display, serif' }}>
              What Makes Flamoca Special
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
              We're on a mission to help you discover the best superfoods from around the world
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">Carefully Curated</h3>
              <p className="mt-2 text-base text-gray-500">
                We research and select only the most potent and beneficial superfoods from around the world.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">Science-Backed</h3>
              <p className="mt-2 text-base text-gray-500">
                All of our information is based on scientific research and nutritional expertise.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">Body-Targeted</h3>
              <p className="mt-2 text-base text-gray-500">
                Easily find superfoods that target specific parts of your body and health concerns.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Preview */}
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
                <form className="sm:flex">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-700"
                    placeholder="Enter your email"
                  />
                  <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center rounded-md bg-purple-900 px-4 py-2 text-base font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-700"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
