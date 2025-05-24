import { logoUrl } from '../assets/logo.ts';

export default function About() {
  return (
    <>
      <div className="bg-[#f9f6f2] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img src={logoUrl} alt="Flamoca" className="h-16 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
              About Flamoca
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our mission is to help you discover the world's most powerful superfoods
            </p>
          </div>
          
          <div className="mt-16 bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="px-6 py-8 sm:p-10">
              <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                Our Story
              </h2>
              <div className="mt-4 text-gray-600 space-y-4">
                <p>
                  Flamoca was born from a passion for natural nutrition and a desire to share the incredible power of superfoods with the world. Our journey began when our founder discovered how incorporating specific superfoods into their diet dramatically improved their health and wellbeing.
                </p>
                <p>
                  We believe that nature provides everything our bodies need to thrive. Our mission is to help you discover these natural treasures and understand how they can benefit specific parts of your body.
                </p>
                <p>
                  What sets us apart is our body-targeted approach. Instead of simply listing superfoods, we categorize them by the parts of the body they benefit most, making it easier for you to find exactly what you need for your specific health goals.
                </p>
              </div>
              
              <h2 className="mt-10 text-2xl font-bold text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                Our Future
              </h2>
              <div className="mt-4 text-gray-600 space-y-4">
                <p>
                  We're excited to announce that Flamoca will soon expand beyond education. In the coming months, we'll be launching our carefully curated marketplace featuring the highest quality superfoods sourced directly from the best producers around the world.
                </p>
                <p>
                  Every product in our upcoming store will be rigorously tested for purity, potency, and sustainability. We're committed to bringing you only the very best, with complete transparency about sourcing and production methods.
                </p>
                <p>
                  Stay tuned for updates on our marketplace launch! In the meantime, we invite you to explore our educational content and discover the incredible world of superfoods.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
              Get in Touch
            </h2>
            <p className="mt-4 text-gray-600">
              Have questions, feedback, or partnership inquiries? We'd love to hear from you!
            </p>
            <a 
              href="mailto:hello@flamoca.com" 
              className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 shadow-sm hover:shadow-md transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
