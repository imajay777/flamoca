import { useParams, Link } from 'react-router-dom';
import { superfoods } from '../data/superfoods';

export default function SuperfoodDetail() {
  const { id } = useParams<{ id: string }>();
  const superfood = superfoods.find(s => s.id === id);
  
  if (!superfood) {
    return (
      <>
        <div className="py-16 bg-[#f9f6f2] min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900">Superfood not found</h1>
            <p className="mt-4 text-lg text-gray-600">
              The superfood you're looking for doesn't exist.
            </p>
            <Link to="/superfoods" className="mt-8 inline-block text-purple-600 hover:text-purple-800">
              &larr; Back to superfoods
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="bg-[#f9f6f2]">
        {/* Hero section with superfood image */}
        <div className="relative h-96">
          <div className="absolute inset-0">
            <img 
              src={superfood.image} 
              alt={superfood.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end h-full pb-16">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl" style={{ fontFamily: 'Playfair Display, serif' }}>
              {superfood.name}
            </h1>
          </div>
        </div>
        
        {/* Superfood details */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg">
                <p className="text-xl text-gray-700 leading-relaxed">
                  {superfood.description}
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mt-8" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Key Benefits
                </h2>
                <ul className="mt-4 space-y-2">
                  {superfood.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-6 w-6 text-purple-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="bg-purple-600 text-white px-6 py-4">
                  <h3 className="text-lg font-medium">Nutritional Information</h3>
                </div>
                <div className="px-6 py-4">
                  <h4 className="font-medium text-gray-900">Key Nutrients:</h4>
                  <ul className="mt-2 space-y-1">
                    {superfood.nutrients.map((nutrient, index) => (
                      <li key={index} className="text-gray-600">{nutrient}</li>
                    ))}
                  </ul>
                  
                  <div className="mt-6">
                    <h4 className="font-medium text-gray-900">Benefits For:</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {superfood.bodyParts.map((part) => (
                        <span
                          key={part}
                          className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800"
                        >
                          {part.charAt(0).toUpperCase() + part.slice(1)}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <Link to="/superfoods" className="inline-flex items-center text-purple-600 hover:text-purple-800">
              &larr; Back to all superfoods
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
