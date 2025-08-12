import React, { useState, useEffect } from 'react';
import { UserProfile, NutritionGoals, DailyNutrition } from '../types';
import NutritionTracker from '../components/NutritionTracker';
import NutritionDashboard from '../components/NutritionDashboard';
import UserProfileSetup from '../components/UserProfileSetup';

const Nutrition: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [nutritionGoals, setNutritionGoals] = useState<NutritionGoals | null>(null);
  const [dailyNutrition, setDailyNutrition] = useState<DailyNutrition | null>(null);
  const [showProfileSetup, setShowProfileSetup] = useState(false);

  // Load user profile from localStorage on component mount
  useEffect(() => {
    const savedProfile = localStorage.getItem('flamoca_user_profile');
    const savedGoals = localStorage.getItem('flamoca_nutrition_goals');
    const savedDailyNutrition = localStorage.getItem('flamoca_daily_nutrition');

    if (savedProfile && savedGoals) {
      setUserProfile(JSON.parse(savedProfile));
      setNutritionGoals(JSON.parse(savedGoals));
    } else {
      setShowProfileSetup(true);
    }

    if (savedDailyNutrition) {
      setDailyNutrition(JSON.parse(savedDailyNutrition));
    }
  }, []);

  // Save profile and goals to localStorage
  const handleProfileComplete = (profile: UserProfile, goals: NutritionGoals) => {
    setUserProfile(profile);
    setNutritionGoals(goals);
    setShowProfileSetup(false);
    
    localStorage.setItem('flamoca_user_profile', JSON.stringify(profile));
    localStorage.setItem('flamoca_nutrition_goals', JSON.stringify(goals));

    // Initialize daily nutrition with new goals
    const today = new Date().toISOString().split('T')[0];
    const newDailyNutrition: DailyNutrition = {
      date: today,
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
      goals: goals
    };
    
    setDailyNutrition(newDailyNutrition);
    localStorage.setItem('flamoca_daily_nutrition', JSON.stringify(newDailyNutrition));
  };

  // Update daily nutrition and save to localStorage
  const updateDailyNutrition = (newNutrition: DailyNutrition) => {
    setDailyNutrition(newNutrition);
    localStorage.setItem('flamoca_daily_nutrition', JSON.stringify(newNutrition));
  };

  // Reset profile and show setup again
  const handleResetProfile = () => {
    setUserProfile(null);
    setNutritionGoals(null);
    setDailyNutrition(null);
    setShowProfileSetup(true);
    localStorage.removeItem('flamoca_user_profile');
    localStorage.removeItem('flamoca_nutrition_goals');
    localStorage.removeItem('flamoca_daily_nutrition');
  };

  if (showProfileSetup) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Flamoca Nutrition</h1>
            <p className="text-lg text-gray-600">
              Let's set up your personalized nutrition profile to get started
            </p>
          </div>
          <UserProfileSetup onProfileComplete={handleProfileComplete} />
        </div>
      </div>
    );
  }

  if (!userProfile || !nutritionGoals || !dailyNutrition) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your nutrition profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nutrition Dashboard</h1>
          <p className="text-lg text-gray-600">
            Welcome back, {userProfile.name}! Track your daily nutrition and stay on top of your health goals.
          </p>
          
          {/* Profile Summary */}
          <div className="mt-6 inline-flex items-center space-x-4 bg-white rounded-lg shadow-sm px-6 py-3">
            <div className="text-center">
              <div className="text-sm text-gray-600">Goal</div>
              <div className="font-semibold text-gray-900 capitalize">
                {userProfile.goal.replace('_', ' ')}
              </div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-sm text-gray-600">Daily Target</div>
              <div className="font-semibold text-gray-900">{nutritionGoals.calories} cal</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-sm text-gray-600">Activity Level</div>
              <div className="font-semibold text-gray-900 capitalize">
                {userProfile.activityLevel.replace('_', ' ')}
              </div>
            </div>
            <button
              onClick={handleResetProfile}
              className="ml-4 px-3 py-1 text-sm text-red-600 hover:text-red-800 border border-red-200 rounded hover:bg-red-50"
            >
              Reset Profile
            </button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Nutrition Tracker */}
          <div className="lg:col-span-2">
            <NutritionTracker 
              onNutritionUpdate={updateDailyNutrition}
              dailyNutrition={dailyNutrition}
            />
          </div>

          {/* Right Column - Dashboard */}
          <div className="lg:col-span-1">
            <NutritionDashboard dailyNutrition={dailyNutrition} />
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Meal Planning</h3>
            <p className="text-gray-600 text-sm mb-4">Plan your meals ahead and stay organized</p>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 text-sm">
              Coming Soon
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Progress Tracking</h3>
            <p className="text-gray-600 text-sm mb-4">Monitor your health and fitness progress</p>
            <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm">
              Coming Soon
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Insights</h3>
            <p className="text-gray-600 text-sm mb-4">Get personalized nutrition recommendations</p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
              Coming Soon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;
//nutrition page