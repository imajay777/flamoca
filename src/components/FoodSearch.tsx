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
    <div className={`bg-gradient-to-br from-white via-purple-50 to-blue-50 rounded-2xl shadow-2xl p-8 ${className}`}>
      {/* Header Section */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full mb-6 shadow-lg">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          Food Database
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover comprehensive nutritional information for hundreds of foods, from everyday staples to powerful superfoods
        </p>
      </div>
      
      {/* Enhanced Search Input */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
          Search for foods to see nutritional information
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for foods (e.g., salmon, spinach, quinoa)..."
            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-100 focus:border-purple-500 transition-all duration-300 text-lg shadow-sm hover:shadow-md"
          />
        </div>
      </div>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Search Results
            </h3>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
              {searchResults.length} foods found
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {searchResults.map((food) => (
              <div
                key={food.id}
                onClick={() => handleFoodSelect(food)}
                className={`group p-6 border-2 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  selectedFood?.id === food.id
                    ? 'border-purple-500 bg-purple-50 shadow-xl'
                    : 'border-gray-200 hover:border-purple-300 hover:bg-white hover:shadow-xl'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                    {food.name}
                  </h4>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${getCategoryColor(food.category)} shadow-sm`}>
                    {food.category}
                  </span>
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  <span className="font-medium">Serving:</span> {food.servingSize}
                </div>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="text-center p-2 bg-blue-50 rounded-lg">
                    <div className="text-lg font-bold text-blue-600">{food.calories}</div>
                    <div className="text-xs text-blue-500 font-medium">cal</div>
                  </div>
                  <div className="text-center p-2 bg-green-50 rounded-lg">
                    <div className="text-lg font-bold text-green-600">{food.protein}g</div>
                    <div className="text-xs text-green-500 font-medium">protein</div>
                  </div>
                  <div className="text-center p-2 bg-yellow-50 rounded-lg">
                    <div className="text-lg font-bold text-yellow-600">{food.carbs}g</div>
                    <div className="text-xs text-yellow-500 font-medium">carbs</div>
                  </div>
                </div>
                {food.isSuperfood && (
                  <div className="flex items-center justify-center p-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg border border-purple-200">
                    <span className="text-purple-700 font-bold text-sm">⭐ Superfood</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Selected Food Details */}
      {selectedFood && showNutritionDetails && (
        <div className="border-t-2 border-gray-200 pt-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
              {selectedFood.name}
            </h3>
            <p className="text-gray-600">Complete Nutritional Information</p>
          </div>
          
          {/* Basic Nutrition Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="text-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 shadow-sm">
              <div className="text-3xl font-bold text-gray-900 mb-1">{selectedFood.calories}</div>
              <div className="text-sm text-gray-600 font-medium">Calories</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-1">{selectedFood.protein}g</div>
              <div className="text-sm text-blue-600 font-medium">Protein</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-1">{selectedFood.carbs}g</div>
              <div className="text-sm text-green-600 font-medium">Carbs</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl border border-yellow-200 shadow-sm">
              <div className="text-3xl font-bold text-yellow-600 mb-1">{selectedFood.fat}g</div>
              <div className="text-sm text-yellow-600 font-medium">Fat</div>
            </div>
          </div>

          {/* Additional Nutrients */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200 shadow-sm">
              <div className="text-2xl font-bold text-purple-600 mb-1">{selectedFood.fiber}g</div>
              <div className="text-sm text-purple-600 font-medium">Fiber</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-xl border border-red-200 shadow-sm">
              <div className="text-2xl font-bold text-red-600 mb-1">{selectedFood.sugar}g</div>
              <div className="text-sm text-red-600 font-medium">Sugar</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl border border-indigo-200 shadow-sm">
              <div className="text-2xl font-bold text-indigo-600 mb-1">{selectedFood.sodium}mg</div>
              <div className="text-sm text-indigo-600 font-medium">Sodium</div>
            </div>
          </div>

          {/* Vitamins and Minerals */}
          {selectedFood.vitamins.length > 0 && (
            <div className="mb-8">
              <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">Vitamins</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {selectedFood.vitamins.map((vitamin, index) => (
                  <div key={index} className="text-center p-3 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200 shadow-sm">
                    <div className="font-bold text-green-800 text-sm mb-1">{vitamin.name}</div>
                    <div className="text-green-600 font-semibold">
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
            <div className="mb-8">
              <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">Minerals</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {selectedFood.minerals.map((mineral, index) => (
                  <div key={index} className="text-center p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200 shadow-sm">
                    <div className="font-bold text-blue-800 text-sm mb-1">{mineral.name}</div>
                    <div className="text-blue-600 font-semibold">
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
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-200">
            <h4 className="font-bold text-gray-800 mb-3 text-center">Serving Information</h4>
            <div className="text-center">
              <p className="text-gray-700 mb-3">
                <span className="font-semibold">Standard Serving:</span> {selectedFood.servingSize}
              </p>
              {selectedFood.isSuperfood && (
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold text-sm shadow-lg">
                  ⭐ This is a superfood with enhanced nutritional benefits!
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* No Results Message */}
      {searchQuery && searchResults.length === 0 && (
        <div className="text-center py-12">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No foods found</h3>
          <p className="text-gray-500 mb-4">No foods found matching "{searchQuery}"</p>
          <p className="text-sm text-gray-400">Try searching for different terms or browse our food categories</p>
        </div>
      )}
    </div>
  );
};

export default FoodSearch; 