import { categories } from '../data/categories';
import CategoryCard from '../components/CategoryCard';

export default function Categories() {
  return (
    <>
      <div className="py-16 bg-[#f9f6f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
              Superfood Categories
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Discover superfoods organized by health benefits for different parts of your body
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
