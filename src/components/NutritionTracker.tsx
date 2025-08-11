import React, { useState, useEffect } from 'react';
import { FoodItem, FoodEntry, DailyNutrition, NutritionGoals } from '../types';
import { foods, searchFoods } from '../data/foods';

interface NutritionTrackerProps {
  className?: string;
  onNutritionUpdate?: (nutrition: DailyNutrition) => void;
  dailyNutrition?: DailyNutrition;
}

const NutritionTracker: React.FC<NutritionTrackerProps> = ({ 
  className = '', 
  onNutritionUpdate,
  dailyNutrition: propDailyNutrition 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<FoodItem[]>([]);
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
  const [servingMultiplier, setServingMultiplier] = useState(1);
  const [selectedMeal, setSelectedMeal] = useState<'breakfast' | 'lunch' | 'dinner' | 'snacks'>('breakfast');
  
  // Use prop dailyNutrition if provided, otherwise use local state
  const [localDailyNutrition, setLocalDailyNutrition] = useState<DailyNutrition>({
    date: new Date().toISOString().split('T')[0],
    meals: {
      breakfast: [],
      lunch: [],
      dinner: [],
      snacks: []
    },
    totals: {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0,
      sugar: 0,
      sodium: 0
    },
    goals: {
      calories: 2000,
      protein: 150,
      carbs: 250,
      fat: 65,
      fiber: 25,
      sugar: 50,
      sodium: 2300
    }
  });

  const dailyNutrition = propDailyNutrition || localDailyNutrition;
  const setDailyNutrition = propDailyNutrition ? 
    (nutrition: DailyNutrition) => onNutritionUpdate?.(nutrition) : 
    setLocalDailyNutrition;

  // Search foods
  useEffect(() => {
    if (searchQuery.trim()) {
      const results = searchFoods(searchQuery);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  // Calculate totals when meals change
  useEffect(() => {
    const totals = calculateTotals();
    const updatedNutrition = {
      ...dailyNutrition,
      totals
    };
    setDailyNutrition(updatedNutrition);
  }, [dailyNutrition.meals]);

  const calculateTotals = (): NutritionGoals => {
    const totals = {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0,
      sugar: 0,
      sodium: 0
    };

    Object.values(dailyNutrition.meals).forEach(meal => {
      meal.forEach(entry => {
        const food = foods.find(f => f.id === entry.foodId);
        if (food) {
          totals.calories += food.calories * entry.multiplier;
          totals.protein += food.protein * entry.multiplier;
          totals.carbs += food.carbs * entry.multiplier;
          totals.fat += food.fat * entry.multiplier;
          totals.fiber += food.fiber * entry.multiplier;
          totals.sugar += food.sugar * entry.multiplier;
          totals.sodium += food.sodium * entry.multiplier;
        }
      });
    });

    return totals;
  };

  const addFoodToMeal = () => {
    if (!selectedFood) return;

    const newEntry: FoodEntry = {
      foodId: selectedFood.id,
      foodName: selectedFood.name,
      servingSize: selectedFood.servingSize,
      multiplier: servingMultiplier,
      mealType: selectedMeal,
      timestamp: new Date().toISOString()
    };

    const updatedNutrition = {
      ...dailyNutrition,
      meals: {
        ...dailyNutrition.meals,
        [selectedMeal]: [...dailyNutrition.meals[selectedMeal], newEntry]
      }
    };
    
    setDailyNutrition(updatedNutrition);

    // Reset form
    setSelectedFood(null);
    setServingMultiplier(1);
    setSearchQuery('');
  };

  const removeFoodEntry = (mealType: string, index: number) => {
    const updatedNutrition = {
      ...dailyNutrition,
      meals: {
        ...dailyNutrition.meals,
        [mealType]: dailyNutrition.meals[mealType as keyof typeof dailyNutrition.meals].filter((_, i) => i !== index)
      }
    };
    
    setDailyNutrition(updatedNutrition);
  };

  const getProgressPercentage = (current: number, goal: number): number => {
    return Math.min((current / goal) * 100, 100);
  };

  const getProgressColor = (current: number, goal: number): string => {
    const percentage = (current / goal) * 100;
    if (percentage >= 90 && percentage <= 110) return 'bg-green-500';
    if (percentage > 110) return 'bg-red-500';
    return 'bg-blue-500';
  };

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Nutrition Tracker</h2>
      
      {/* Food Search and Add */}
      <div className="mb-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Add Food</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Food Search */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search Food
            </label>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for foods..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {searchResults.length > 0 && (
              <div className="mt-2 max-h-40 overflow-y-auto border border-gray-300 rounded-md bg-white">
                {searchResults.map((food) => (
                  <div
                    key={food.id}
                    onClick={() => setSelectedFood(food)}
                    className={`p-2 cursor-pointer hover:bg-gray-100 ${
                      selectedFood?.id === food.id ? 'bg-purple-100' : ''
                    }`}
                  >
                    <div className="font-medium">{food.name}</div>
                    <div className="text-sm text-gray-600">
                      {food.calories} cal • {food.protein}g protein • {food.carbs}g carbs
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Serving Size */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Servings
            </label>
            <input
              type="number"
              min="0.1"
              step="0.1"
              value={servingMultiplier}
              onChange={(e) => setServingMultiplier(parseFloat(e.target.value) || 1)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Meal Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Meal
            </label>
            <select
              value={selectedMeal}
              onChange={(e) => setSelectedMeal(e.target.value as any)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="snacks">Snacks</option>
            </select>
          </div>
        </div>

        {selectedFood && (
          <div className="mt-4 p-3 bg-purple-50 rounded-md">
            <div className="flex justify-between items-center">
              <div>
                <span className="font-medium">{selectedFood.name}</span>
                <span className="text-gray-600 ml-2">
                  ({selectedFood.calories * servingMultiplier} cal)
                </span>
              </div>
              <button
                onClick={addFoodToMeal}
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                Add to {selectedMeal}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Daily Nutrition Overview */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Today's Nutrition</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(dailyNutrition.totals).map(([nutrient, current]) => {
            const goal = dailyNutrition.goals[nutrient as keyof NutritionGoals];
            const percentage = getProgressPercentage(current, goal);
            const color = getProgressColor(current, goal);
            
            return (
              <div key={nutrient} className="text-center">
                <div className="text-sm font-medium text-gray-600 capitalize">
                  {nutrient}
                </div>
                <div className="text-lg font-bold text-gray-900">
                  {Math.round(current)} / {goal}
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                  <div
                    className={`h-2 rounded-full ${color}`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Meals */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {(['breakfast', 'lunch', 'dinner', 'snacks'] as const).map((mealType) => (
          <div key={mealType} className="border border-gray-200 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-gray-800 mb-3 capitalize">
              {mealType}
            </h4>
            
            {dailyNutrition.meals[mealType].length === 0 ? (
              <p className="text-gray-500 text-sm">No foods added yet</p>
            ) : (
              <div className="space-y-2">
                {dailyNutrition.meals[mealType].map((entry, index) => (
                  <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <div>
                      <div className="font-medium">{entry.foodName}</div>
                      <div className="text-sm text-gray-600">
                        {entry.servingSize} × {entry.multiplier}
                      </div>
                    </div>
                    <button
                      onClick={() => removeFoodEntry(mealType, index)}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NutritionTracker; 