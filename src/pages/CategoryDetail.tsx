import { useParams, Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { superfoods } from '../data/superfoods';
import SuperfoodCard from '../components/SuperfoodCard';

export default function CategoryDetail() {
  const { id } = useParams<{ id: string }>();
  const category = categories.find(c => c.id === id);
  
  // Filter superfoods that match this category
  const filteredSuperfoods = superfoods.filter(
    superfood => superfood.bodyParts.includes(id as any)
  );

  if (!category) {
    return (
      <>
        <div className="py-16 bg-[#f9f6f2] min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900">Category not found</h1>
            <p className="mt-4 text-lg text-gray-600">
              The category you're looking for doesn't exist.
            </p>
            <Link to="/categories" className="mt-8 inline-block text-purple-600 hover:text-purple-800">
              &larr; Back to categories
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="bg-[#f9f6f2]">
        {/* Hero section with category info */}
        <div className="relative bg-purple-600 py-20 sm:py-24">
          <div className="absolute inset-0 overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: `url(${category.image})` }}
            ></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl" style={{ fontFamily: 'Playfair Display, serif' }}>
              {category.name}
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-purple-100">
              {category.description}
            </p>
          </div>
        </div>
        
        {/* Superfoods in this category */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
            Superfoods for {category.name}
          </h2>
          
          {filteredSuperfoods.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredSuperfoods.map(superfood => (
                <SuperfoodCard key={superfood.id} superfood={superfood} />
              ))}
            </div>
          ) : (
            <p className="text-gray-600">
              No superfoods found in this category yet. Check back soon!
            </p>
          )}
          
          <div className="mt-12">
            <Link to="/categories" className="inline-flex items-center text-purple-600 hover:text-purple-800">
              &larr; Back to all categories
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
