import { Link } from 'react-router-dom';
import { Category } from '../types';
import { Apple, Brain, Heart, Shield, Sparkles, Zap } from 'lucide-react';

const iconMap = {
  heart: <Heart className="h-6 w-6" />,
  brain: <Brain className="h-6 w-6" />,
  apple: <Apple className="h-6 w-6" />,
  shield: <Shield className="h-6 w-6" />,
  zap: <Zap className="h-6 w-6" />,
  sparkles: <Sparkles className="h-6 w-6" />,
};

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link 
      to={`/category/${category.id}`}
      className="group rounded-lg overflow-hidden shadow-md bg-white transition-all duration-300 hover:shadow-xl"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={category.image} 
          alt={category.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
          <h3 className="text-white text-xl font-medium">{category.name}</h3>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
              {iconMap[category.icon as keyof typeof iconMap]}
            </div>
          </div>
        </div>
        <p className="text-gray-600 text-sm">{category.description}</p>
        <div className="mt-4 flex justify-end">
          <span className="text-purple-600 text-sm font-medium group-hover:underline">
            Explore superfoods →
          </span>
        </div>
      </div>
    </Link>
  );
}
