import React, { useState } from 'react';
import { DailyNutrition, NutritionGoals } from '../types';

interface NutritionDashboardProps {
  dailyNutrition: DailyNutrition;
  className?: string;
}

const NutritionDashboard: React.FC<NutritionDashboardProps> = ({ dailyNutrition, className = '' }) => {
  const [selectedTimeframe, setSelectedTimeframe] = useState<'day' | 'week' | 'month'>('day');

  const getProgressPercentage = (current: number, goal: number): number => {
    return Math.min((current / goal) * 100, 100);
  };

  const getProgressColor = (current: number, goal: number): string => {
    const percentage = (current / goal) * 100;
    if (percentage >= 90 && percentage <= 110) return 'text-green-600';
    if (percentage > 110) return 'text-red-600';
    return 'text-blue-600';
  };

  const getProgressBarColor = (current: number, goal: number): string => {
    const percentage = (current / goal) * 100;
    if (percentage >= 90 && percentage <= 110) return 'bg-green-500';
    if (percentage > 110) return 'bg-red-500';
    return 'bg-blue-500';
  };

  const getNutritionInsights = () => {
    const { totals, goals } = dailyNutrition;
    const insights = [];

    // Calorie insights
    if (totals.calories < goals.calories * 0.8) {
      insights.push('You\'re significantly under your calorie goal. Consider adding nutrient-dense foods.');
    } else if (totals.calories > goals.calories * 1.2) {
      insights.push('You\'re over your calorie goal. Consider portion control or more physical activity.');
    }

    // Protein insights
    if (totals.protein < goals.protein * 0.8) {
      insights.push('Protein intake is low. Add lean meats, fish, eggs, or plant-based proteins.');
    }

    // Fiber insights
    if (totals.fiber < goals.fiber * 0.8) {
      insights.push('Fiber intake is low. Add more fruits, vegetables, and whole grains.');
    }

    // Sugar insights
    if (totals.sugar > goals.sugar * 1.2) {
      insights.push('Sugar intake is high. Reduce added sugars and processed foods.');
    }

    return insights.length > 0 ? insights : ['Great job! Your nutrition is well-balanced today.'];
  };

  const getMacroRatio = () => {
    const { totals } = dailyNutrition;
    const totalCalories = totals.calories;
    
    if (totalCalories === 0) return { protein: 0, carbs: 0, fat: 0 };
    
    const proteinCalories = totals.protein * 4;
    const carbCalories = totals.carbs * 4;
    const fatCalories = totals.fat * 9;
    
    return {
      protein: Math.round((proteinCalories / totalCalories) * 100),
      carbs: Math.round((carbCalories / totalCalories) * 100),
      fat: Math.round((fatCalories / totalCalories) * 100)
    };
  };

  const macroRatio = getMacroRatio();

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Nutrition Dashboard</h2>
        <div className="flex space-x-2">
          {(['day', 'week', 'month'] as const).map((timeframe) => (
            <button
              key={timeframe}
              onClick={() => setSelectedTimeframe(timeframe)}
              className={`px-3 py-1 rounded-md text-sm font-medium ${
                selectedTimeframe === timeframe
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {timeframe.charAt(0).toUpperCase() + timeframe.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Macro Distribution */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Macro Distribution</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">{macroRatio.protein}%</div>
            <div className="text-sm text-gray-600">Protein</div>
            <div className="text-xs text-gray-500">{dailyNutrition.totals.protein}g</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">{macroRatio.carbs}%</div>
            <div className="text-sm text-gray-600">Carbs</div>
            <div className="text-xs text-gray-500">{dailyNutrition.totals.carbs}g</div>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600">{macroRatio.fat}%</div>
            <div className="text-sm text-gray-600">Fat</div>
            <div className="text-xs text-gray-500">{dailyNutrition.totals.fat}g</div>
          </div>
        </div>
      </div>

      {/* Nutrition Progress */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Nutrition Progress</h3>
        <div className="space-y-4">
          {Object.entries(dailyNutrition.totals).map(([nutrient, current]) => {
            const goal = dailyNutrition.goals[nutrient as keyof NutritionGoals];
            const percentage = getProgressPercentage(current, goal);
            const color = getProgressColor(current, goal);
            const barColor = getProgressBarColor(current, goal);
            
            return (
              <div key={nutrient} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700 capitalize">
                    {nutrient}
                  </span>
                  <span className={`text-sm font-bold ${color}`}>
                    {Math.round(current)} / {goal}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full ${barColor} transition-all duration-300`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Insights */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Today's Insights</h3>
        <div className="space-y-3">
          {getNutritionInsights().map((insight, index) => (
            <div key={index} className="p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
              <p className="text-sm text-gray-700">{insight}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Stats</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <div className="text-lg font-bold text-gray-900">
              {dailyNutrition.meals.breakfast.length + dailyNutrition.meals.lunch.length + 
               dailyNutrition.meals.dinner.length + dailyNutrition.meals.snacks.length}
            </div>
            <div className="text-xs text-gray-600">Foods Today</div>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <div className="text-lg font-bold text-gray-900">
              {Math.round(dailyNutrition.totals.calories / dailyNutrition.goals.calories * 100)}%
            </div>
            <div className="text-xs text-gray-600">Calorie Goal</div>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <div className="text-lg font-bold text-gray-900">
              {Math.round(dailyNutrition.totals.protein / dailyNutrition.goals.protein * 100)}%
            </div>
            <div className="text-xs text-gray-600">Protein Goal</div>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <div className="text-lg font-bold text-gray-900">
              {Math.round(dailyNutrition.totals.fiber / dailyNutrition.goals.fiber * 100)}%
            </div>
            <div className="text-xs text-gray-600">Fiber Goal</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionDashboard; 