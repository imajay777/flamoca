import { logoUrl } from '../assets/logo.ts';

export default function About() {
  return (
    <>
      <div className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img src={logoUrl} alt="Flamoca" className="h-20 mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              About Flamoca
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Where AI meets nutrition science for better health outcomes. Discover superfoods, track nutrition, and achieve your health goals with our comprehensive platform.
            </p>
          </div>
          
          {/* Mission Statement */}
          <div className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden border border-purple-100">
            <div className="px-8 py-10 sm:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
                Our Mission
              </h2>
              <div className="text-gray-600 space-y-4 text-lg leading-relaxed">
                <p>
                  Flamoca was born from a passion for natural nutrition and a desire to leverage cutting-edge AI technology to make health information accessible to everyone. Our journey began when our founder discovered how incorporating specific superfoods into their diet dramatically improved their health and wellbeing.
                </p>
                <p>
                  We believe that nature provides everything our bodies need to thrive, and technology can help us understand and utilize these natural treasures more effectively. Our mission is to bridge the gap between traditional nutrition wisdom and modern AI-powered insights.
                </p>
                <p>
                  What sets us apart is our comprehensive approach: combining AI-powered research, body-targeted superfood categorization, comprehensive nutrition tracking, and an extensive food database to create the ultimate health and wellness platform.
                </p>
              </div>
            </div>
          </div>

          {/* Current Features */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Platform Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* AI Research */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-purple-100 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">AI-Powered Research</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Get research-backed insights on any food or nutrient using Google's Gemini AI. Our system analyzes scientific papers and provides credible information with proper citations and sources.
                </p>
              </div>

              {/* Superfoods Database */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-100 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Curated Superfoods</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Explore our carefully curated collection of superfoods organized by body benefits. From brain health to immune support, find exactly what your body needs.
                </p>
              </div>

              {/* Nutrition Tracking */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Nutrition Tracking</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Comprehensive daily nutrition tracking with personalized goals, macro monitoring, and progress insights. Log meals, track nutrients, and achieve your health objectives.
                </p>
              </div>

              {/* Food Database */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-yellow-100 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Food Database</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Access detailed nutritional information for hundreds of foods. Complete vitamin and mineral breakdowns, serving sizes, and health benefits for informed dietary choices.
                </p>
              </div>
            </div>
          </div>

          {/* Technology & Innovation */}
          <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-8 py-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Powered by Advanced Technology
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div>
                  <div className="text-4xl mb-2">🤖</div>
                  <h3 className="text-lg font-semibold mb-2">AI Research Engine</h3>
                  <p className="text-purple-100 text-sm">Google Gemini AI for credible, research-backed nutrition insights</p>
                </div>
                <div>
                  <div className="text-4xl mb-2">📊</div>
                  <h3 className="text-lg font-semibold mb-2">Smart Analytics</h3>
                  <p className="text-purple-100 text-sm">Personalized nutrition goals and progress tracking</p>
                </div>
                <div>
                  <div className="text-4xl mb-2">🔬</div>
                  <h3 className="text-lg font-semibold mb-2">Scientific Accuracy</h3>
                  <p className="text-purple-100 text-sm">Evidence-based information with proper citations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Story */}
          <div className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden border border-purple-100">
            <div className="px-8 py-10 sm:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
                Our Story
              </h2>
              <div className="text-gray-600 space-y-4 text-lg leading-relaxed">
                <p>
                  Flamoca was born from a passion for natural nutrition and a desire to leverage cutting-edge AI technology to make health information accessible to everyone. Our journey began when our founder discovered how incorporating specific superfoods into their diet dramatically improved their health and wellbeing.
                </p>
                <p>
                  We believe that nature provides everything our bodies need to thrive, and technology can help us understand and utilize these natural treasures more effectively. Our mission is to bridge the gap between traditional nutrition wisdom and modern AI-powered insights.
                </p>
                <p>
                  What sets us apart is our comprehensive approach: combining AI-powered research, body-targeted superfood categorization, comprehensive nutrition tracking, and an extensive food database to create the ultimate health and wellness platform.
                </p>
              </div>
            </div>
          </div>

          {/* Future Vision */}
          <div className="mt-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl shadow-xl overflow-hidden border border-green-200">
            <div className="px-8 py-10 sm:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
                Our Vision for the Future
              </h2>
              <div className="text-gray-600 space-y-4 text-lg leading-relaxed">
                <p>
                  We're excited to announce that Flamoca will soon expand beyond education and tracking. In the coming months, we'll be launching our carefully curated marketplace featuring the highest quality superfoods sourced directly from the best producers around the world.
                </p>
                <p>
                  Every product in our upcoming store will be rigorously tested for purity, potency, and sustainability. We're committed to bringing you only the very best, with complete transparency about sourcing and production methods.
                </p>
                <p>
                  Our platform will continue to evolve with advanced AI features, personalized meal planning, recipe integration, and community features. We're building the future of personalized nutrition technology.
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Have questions, feedback, or partnership inquiries? We'd love to hear from you and help you on your health journey!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:flamocauk@gmail.com" 
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us
              </a>
              <a 
                href="/nutrition" 
                className="inline-flex items-center px-8 py-4 border-2 border-purple-600 text-lg font-medium rounded-xl text-purple-600 bg-white hover:bg-purple-50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Try Nutrition Tracker
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
