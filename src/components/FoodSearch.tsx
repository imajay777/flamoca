import React, { useState, useEffect } from 'react';
import { FoodItem } from '../types';
import { searchFoods } from '../data/foods';

interface FoodSearchProps {
  className?: string;
  onFoodSelect?: (food: FoodItem) => void;
  showNutritionDetails?: boolean;
}

const FoodSearch: React.FC<FoodSearchProps> = ({ 
  className = '', 
  onFoodSelect,
  showNutritionDetails = true 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<FoodItem[]>([]);
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);

  useEffect(() => {
    if (searchQuery.trim()) {
      const results = searchFoods(searchQuery);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleFoodSelect = (food: FoodItem) => {
    setSelectedFood(food);
    onFoodSelect?.(food);
  };

  const getCategoryColor = (category: string): string => {
    const colors: { [key: string]: string } = {
      superfoods: 'bg-purple-100 text-purple-800',
      fruits: 'bg-red-100 text-red-800',
      vegetables: 'bg-green-100 text-green-800',
      proteins: 'bg-blue-100 text-blue-800',
      grains: 'bg-yellow-100 text-yellow-800',
      dairy: 'bg-indigo-100 text-indigo-800',
      nuts: 'bg-orange-100 text-orange-800',
      oils: 'bg-pink-100 text-pink-800',
      beverages: 'bg-teal-100 text-teal-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Food Database</h2>
      
      {/* Search Input */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Search for foods to see nutritional information
        </label>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for foods (e.g., salmon, spinach, quinoa)..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
      </div>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Search Results ({searchResults.length})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {searchResults.map((food) => (
              <div
                key={food.id}
                onClick={() => handleFoodSelect(food)}
                className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                  selectedFood?.id === food.id
                    ? 'border-purple-500 bg-purple-50'
                    : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-900">{food.name}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(food.category)}`}>
                    {food.category}
                  </span>
                </div>
                <div className="text-sm text-gray-600 mb-2">
                  Serving: {food.servingSize}
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="text-center">
                    <div className="font-semibold text-blue-600">{food.calories}</div>
                    <div className="text-gray-500">cal</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-green-600">{food.protein}g</div>
                    <div className="text-gray-500">protein</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-yellow-600">{food.carbs}g</div>
                    <div className="text-gray-500">carbs</div>
                  </div>
                </div>
                {food.isSuperfood && (
                  <div className="mt-2 text-xs text-purple-600 font-medium">
                    ⭐ Superfood
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Selected Food Details */}
      {selectedFood && showNutritionDetails && (
        <div className="border-t pt-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            {selectedFood.name} - Nutritional Information
          </h3>
          
          {/* Basic Nutrition */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-900">{selectedFood.calories}</div>
              <div className="text-sm text-gray-600">Calories</div>
            </div>
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{selectedFood.protein}g</div>
              <div className="text-sm text-gray-600">Protein</div>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">{selectedFood.carbs}g</div>
              <div className="text-sm text-gray-600">Carbs</div>
            </div>
            <div className="text-center p-3 bg-yellow-50 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">{selectedFood.fat}g</div>
              <div className="text-sm text-gray-600">Fat</div>
            </div>
          </div>

          {/* Additional Nutrients */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <div className="text-center p-3 bg-purple-50 rounded-lg">
              <div className="text-lg font-bold text-purple-600">{selectedFood.fiber}g</div>
              <div className="text-sm text-gray-600">Fiber</div>
            </div>
            <div className="text-center p-3 bg-red-50 rounded-lg">
              <div className="text-lg font-bold text-red-600">{selectedFood.sugar}g</div>
              <div className="text-sm text-gray-600">Sugar</div>
            </div>
            <div className="text-center p-3 bg-indigo-50 rounded-lg">
              <div className="text-lg font-bold text-indigo-600">{selectedFood.sodium}mg</div>
              <div className="text-sm text-gray-600">Sodium</div>
            </div>
          </div>

          {/* Vitamins and Minerals */}
          {selectedFood.vitamins.length > 0 && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Vitamins</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {selectedFood.vitamins.map((vitamin, index) => (
                  <div key={index} className="text-center p-2 bg-green-50 rounded">
                    <div className="font-medium text-green-800">{vitamin.name}</div>
                    <div className="text-sm text-green-600">
                      {vitamin.amount} {vitamin.unit}
                    </div>
                    <div className="text-xs text-green-500">
                      {vitamin.dailyValue}% DV
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedFood.minerals.length > 0 && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Minerals</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {selectedFood.minerals.map((mineral, index) => (
                  <div key={index} className="text-center p-2 bg-blue-50 rounded">
                    <div className="font-medium text-blue-800">{mineral.name}</div>
                    <div className="text-sm text-blue-600">
                      {mineral.amount} {mineral.unit}
                    </div>
                    <div className="text-xs text-blue-500">
                      {mineral.dailyValue}% DV
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Serving Information */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">Serving Information</h4>
            <p className="text-gray-600">
              <strong>Standard Serving:</strong> {selectedFood.servingSize}
            </p>
            {selectedFood.isSuperfood && (
              <p className="text-purple-600 font-medium mt-2">
                ⭐ This is a superfood with enhanced nutritional benefits!
              </p>
            )}
          </div>
        </div>
      )}

      {/* No Results Message */}
      {searchQuery && searchResults.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <div className="text-4xl mb-4">🔍</div>
          <p>No foods found matching "{searchQuery}"</p>
          <p className="text-sm mt-2">Try searching for different terms or browse our food categories</p>
        </div>
      )}
    </div>
  );
};

export default FoodSearch; 