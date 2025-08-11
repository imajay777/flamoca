import React, { useState } from 'react';
import { UserProfile, NutritionGoals } from '../types';

interface UserProfileSetupProps {
  onProfileComplete: (profile: UserProfile, goals: NutritionGoals) => void;
  className?: string;
}

const UserProfileSetup: React.FC<UserProfileSetupProps> = ({ onProfileComplete, className = '' }) => {
  const [profile, setProfile] = useState<Partial<UserProfile>>({
    name: '',
    age: 25,
    gender: 'other',
    weight: 70,
    height: 170,
    activityLevel: 'moderately_active',
    goal: 'maintain_weight',
    dietaryRestrictions: [],
    allergies: []
  });

  const [step, setStep] = useState(1);
  const [dietaryInput, setDietaryInput] = useState('');
  const [allergyInput, setAllergyInput] = useState('');

  const activityLevels = [
    { value: 'sedentary', label: 'Sedentary (little or no exercise)', multiplier: 1.2 },
    { value: 'lightly_active', label: 'Lightly active (light exercise 1-3 days/week)', multiplier: 1.375 },
    { value: 'moderately_active', label: 'Moderately active (moderate exercise 3-5 days/week)', multiplier: 1.55 },
    { value: 'very_active', label: 'Very active (hard exercise 6-7 days/week)', multiplier: 1.725 },
    { value: 'extremely_active', label: 'Extremely active (very hard exercise, physical job)', multiplier: 1.9 }
  ];

  const goals = [
    { value: 'lose_weight', label: 'Lose Weight', calorieAdjustment: -500 },
    { value: 'maintain_weight', label: 'Maintain Weight', calorieAdjustment: 0 },
    { value: 'gain_weight', label: 'Gain Weight', calorieAdjustment: 500 },
    { value: 'build_muscle', label: 'Build Muscle', calorieAdjustment: 300 }
  ];

  const calculateBMR = (): number => {
    const { age, gender, weight, height } = profile;
    if (!age || !weight || !height) return 0;

    // Mifflin-St Jeor Equation
    let bmr = 10 * weight + 6.25 * height - 5 * age;
    bmr = gender === 'male' ? bmr + 5 : bmr - 161;
    
    return bmr;
  };

  const calculateTDEE = (): number => {
    const bmr = calculateBMR();
    const activityMultiplier = activityLevels.find(level => level.value === profile.activityLevel)?.multiplier || 1.55;
    return bmr * activityMultiplier;
  };

  const calculateNutritionGoals = (): NutritionGoals => {
    const tdee = calculateTDEE();
    const goalAdjustment = goals.find(g => g.value === profile.goal)?.calorieAdjustment || 0;
    const targetCalories = tdee + goalAdjustment;

    return {
      calories: Math.round(targetCalories),
      protein: Math.round((targetCalories * 0.25) / 4), // 25% of calories from protein
      carbs: Math.round((targetCalories * 0.45) / 4),  // 45% of calories from carbs
      fat: Math.round((targetCalories * 0.30) / 9),    // 30% of calories from fat
      fiber: 25, // Standard recommendation
      sugar: Math.round(targetCalories * 0.10 / 4),    // 10% of calories from sugar
      sodium: 2300 // Standard recommendation
    };
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      const completeProfile = profile as UserProfile;
      const nutritionGoals = calculateNutritionGoals();
      onProfileComplete(completeProfile, nutritionGoals);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const addDietaryRestriction = () => {
    if (dietaryInput.trim() && !profile.dietaryRestrictions?.includes(dietaryInput.trim())) {
      setProfile(prev => ({
        ...prev,
        dietaryRestrictions: [...(prev.dietaryRestrictions || []), dietaryInput.trim()]
      }));
      setDietaryInput('');
    }
  };

  const removeDietaryRestriction = (restriction: string) => {
    setProfile(prev => ({
      ...prev,
      dietaryRestrictions: prev.dietaryRestrictions?.filter(r => r !== restriction) || []
    }));
  };

  const addAllergy = () => {
    if (allergyInput.trim() && !profile.allergies?.includes(allergyInput.trim())) {
      setProfile(prev => ({
        ...prev,
        allergies: [...(prev.allergies || []), allergyInput.trim()]
      }));
      setAllergyInput('');
    }
  };

  const removeAllergy = (allergy: string) => {
    setProfile(prev => ({
      ...prev,
      allergies: prev.allergies?.filter(a => a !== allergy) || []
    }));
  };

  const renderStep1 = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">Basic Information</h3>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
        <input
          type="text"
          value={profile.name || ''}
          onChange={(e) => setProfile(prev => ({ ...prev, name: e.target.value }))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter your name"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
          <input
            type="number"
            min="13"
            max="120"
            value={profile.age || ''}
            onChange={(e) => setProfile(prev => ({ ...prev, age: parseInt(e.target.value) || 25 }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
          <select
            value={profile.gender || 'other'}
            onChange={(e) => setProfile(prev => ({ ...prev, gender: e.target.value as any }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Goal</label>
          <select
            value={profile.goal || 'maintain_weight'}
            onChange={(e) => setProfile(prev => ({ ...prev, goal: e.target.value as any }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            {goals.map(goal => (
              <option key={goal.value} value={goal.value}>{goal.label}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">Physical Information</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Weight (kg)</label>
          <input
            type="number"
            min="30"
            max="300"
            step="0.1"
            value={profile.weight || ''}
            onChange={(e) => setProfile(prev => ({ ...prev, weight: parseFloat(e.target.value) || 70 }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Height (cm)</label>
          <input
            type="number"
            min="100"
            max="250"
            value={profile.height || ''}
            onChange={(e) => setProfile(prev => ({ ...prev, height: parseInt(e.target.value) || 170 }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Activity Level</label>
        <select
          value={profile.activityLevel || 'moderately_active'}
          onChange={(e) => setProfile(prev => ({ ...prev, activityLevel: e.target.value as any }))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          {activityLevels.map(level => (
            <option key={level.value} value={level.value}>{level.label}</option>
          ))}
        </select>
      </div>

      {profile.weight && profile.height && (
        <div className="p-4 bg-purple-50 rounded-lg">
          <div className="text-sm text-gray-600">Estimated Daily Calorie Needs:</div>
          <div className="text-lg font-bold text-purple-600">
            {Math.round(calculateTDEE())} calories/day
          </div>
        </div>
      )}
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">Dietary Preferences</h3>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Dietary Restrictions</label>
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            value={dietaryInput}
            onChange={(e) => setDietaryInput(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="e.g., vegetarian, gluten-free"
          />
          <button
            onClick={addDietaryRestriction}
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
          >
            Add
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {profile.dietaryRestrictions?.map(restriction => (
            <span
              key={restriction}
              className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm flex items-center gap-2"
            >
              {restriction}
              <button
                onClick={() => removeDietaryRestriction(restriction)}
                className="text-purple-600 hover:text-purple-800"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Food Allergies</label>
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            value={allergyInput}
            onChange={(e) => setAllergyInput(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="e.g., peanuts, shellfish"
          />
          <button
            onClick={addAllergy}
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
          >
            Add
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {profile.allergies?.map(allergy => (
            <span
              key={allergy}
              className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm flex items-center gap-2"
            >
              {allergy}
              <button
                onClick={() => removeAllergy(allergy)}
                className="text-red-600 hover:text-red-800"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const canProceed = () => {
    switch (step) {
      case 1:
        return profile.name && profile.age && profile.gender && profile.goal;
      case 2:
        return profile.weight && profile.height && profile.activityLevel;
      case 3:
        return true;
      default:
        return false;
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Set Up Your Profile</h2>
        <p className="text-gray-600">Help us personalize your nutrition tracking experience</p>
        
        {/* Progress Steps */}
        <div className="flex items-center justify-between mt-6">
          {[1, 2, 3].map((stepNumber) => (
            <div key={stepNumber} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                stepNumber <= step 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {stepNumber}
              </div>
              {stepNumber < 3 && (
                <div className={`w-16 h-1 mx-2 ${
                  stepNumber < step ? 'bg-purple-600' : 'bg-gray-200'
                }`}></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
      </div>

      <div className="flex justify-between">
        <button
          onClick={handleBack}
          disabled={step === 1}
          className={`px-6 py-2 rounded-md font-medium ${
            step === 1
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Back
        </button>
        
        <button
          onClick={handleNext}
          disabled={!canProceed()}
          className={`px-6 py-2 rounded-md font-medium ${
            canProceed()
              ? 'bg-purple-600 text-white hover:bg-purple-700'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          {step === 3 ? 'Complete Setup' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default UserProfileSetup; 