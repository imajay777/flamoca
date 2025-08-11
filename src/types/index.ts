export interface Superfood {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  bodyParts: BodyPart[];
  image: string;
  nutrients: string[];
}

export type BodyPart = 
  | 'brain'
  | 'heart'
  | 'skin'
  | 'gut'
  | 'liver'
  | 'immune'
  | 'bones'
  | 'eyes'
  | 'muscles';

export interface Category {
  id: BodyPart;
  name: string;
  description: string;
  image: string;
  icon: string;
}

// Nutrition Tracking Types
export interface FoodItem {
  id: string;
  name: string;
  category: 'fruits' | 'vegetables' | 'grains' | 'proteins' | 'dairy' | 'nuts' | 'oils' | 'beverages' | 'superfoods';
  servingSize: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  sugar: number;
  sodium: number;
  vitamins: Vitamin[];
  minerals: Mineral[];
  image?: string;
  isSuperfood?: boolean;
  superfoodId?: string;
}

export interface Vitamin {
  name: string;
  amount: number;
  unit: string;
  dailyValue: number;
}

export interface Mineral {
  name: string;
  amount: number;
  unit: string;
  dailyValue: number;
}

export interface NutritionGoals {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  sugar: number;
  sodium: number;
}

export interface DailyNutrition {
  date: string;
  meals: {
    breakfast: FoodEntry[];
    lunch: FoodEntry[];
    dinner: FoodEntry[];
    snacks: FoodEntry[];
  };
  totals: NutritionGoals;
  goals: NutritionGoals;
}

export interface FoodEntry {
  foodId: string;
  foodName: string;
  servingSize: string;
  multiplier: number; // How many servings
  mealType: 'breakfast' | 'lunch' | 'dinner' | 'snacks';
  timestamp: string;
}

export interface UserProfile {
  id: string;
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  weight: number; // in kg
  height: number; // in cm
  activityLevel: 'sedentary' | 'lightly_active' | 'moderately_active' | 'very_active' | 'extremely_active';
  goal: 'lose_weight' | 'maintain_weight' | 'gain_weight' | 'build_muscle';
  dietaryRestrictions: string[];
  allergies: string[];
}

export interface NutritionProgress {
  date: string;
  weight?: number;
  bodyFat?: number;
  measurements?: {
    waist?: number;
    chest?: number;
    arms?: number;
    thighs?: number;
  };
  notes?: string;
}

export interface MealPlan {
  id: string;
  name: string;
  description: string;
  days: {
    [key: string]: {
      breakfast: PlannedMeal[];
      lunch: PlannedMeal[];
      dinner: PlannedMeal[];
      snacks: PlannedMeal[];
    };
  };
  totalNutrition: NutritionGoals;
  tags: string[];
}

export interface PlannedMeal {
  foodId: string;
  foodName: string;
  servingSize: string;
  multiplier: number;
  notes?: string;
}
