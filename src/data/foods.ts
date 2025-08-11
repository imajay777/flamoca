import { FoodItem } from '../types';

export const foods: FoodItem[] = [
  // Superfoods
  {
    id: 'acai-berry',
    name: 'Acai Berry',
    category: 'superfoods',
    servingSize: '100g',
    calories: 70,
    protein: 1.5,
    carbs: 4,
    fat: 5,
    fiber: 2.6,
    sugar: 0.5,
    sodium: 7,
    vitamins: [
      { name: 'Vitamin A', amount: 15, unit: 'mcg', dailyValue: 2 },
      { name: 'Vitamin C', amount: 9.6, unit: 'mg', dailyValue: 11 },
      { name: 'Vitamin E', amount: 0.4, unit: 'mg', dailyValue: 3 }
    ],
    minerals: [
      { name: 'Calcium', amount: 52, unit: 'mg', dailyValue: 4 },
      { name: 'Iron', amount: 0.6, unit: 'mg', dailyValue: 3 },
      { name: 'Potassium', amount: 105, unit: 'mg', dailyValue: 2 }
    ],
    isSuperfood: true,
    superfoodId: 'acai-berry'
  },
  {
    id: 'chia-seeds',
    name: 'Chia Seeds',
    category: 'superfoods',
    servingSize: '28g (2 tbsp)',
    calories: 138,
    protein: 4.7,
    carbs: 12.3,
    fat: 8.6,
    fiber: 10.6,
    sugar: 0,
    sodium: 5,
    vitamins: [
      { name: 'Vitamin B1', amount: 0.2, unit: 'mg', dailyValue: 17 },
      { name: 'Vitamin B3', amount: 2.5, unit: 'mg', dailyValue: 16 }
    ],
    minerals: [
      { name: 'Calcium', amount: 177, unit: 'mg', dailyValue: 14 },
      { name: 'Iron', amount: 2.2, unit: 'mg', dailyValue: 12 },
      { name: 'Magnesium', amount: 95, unit: 'mg', dailyValue: 23 },
      { name: 'Phosphorus', amount: 265, unit: 'mg', dailyValue: 21 }
    ],
    isSuperfood: true,
    superfoodId: 'chia-seeds'
  },
  {
    id: 'quinoa',
    name: 'Quinoa',
    category: 'grains',
    servingSize: '100g cooked',
    calories: 120,
    protein: 4.4,
    carbs: 21.3,
    fat: 1.9,
    fiber: 2.8,
    sugar: 0.9,
    sodium: 7,
    vitamins: [
      { name: 'Vitamin B1', amount: 0.1, unit: 'mg', dailyValue: 8 },
      { name: 'Vitamin B2', amount: 0.1, unit: 'mg', dailyValue: 8 },
      { name: 'Vitamin B6', amount: 0.1, unit: 'mg', dailyValue: 6 }
    ],
    minerals: [
      { name: 'Iron', amount: 1.5, unit: 'mg', dailyValue: 8 },
      { name: 'Magnesium', amount: 64, unit: 'mg', dailyValue: 15 },
      { name: 'Phosphorus', amount: 152, unit: 'mg', dailyValue: 12 }
    ]
  },
  {
    id: 'salmon',
    name: 'Salmon',
    category: 'proteins',
    servingSize: '100g',
    calories: 208,
    protein: 25.4,
    carbs: 0,
    fat: 12.4,
    fiber: 0,
    sugar: 0,
    sodium: 59,
    vitamins: [
      { name: 'Vitamin B12', amount: 3.2, unit: 'mcg', dailyValue: 133 },
      { name: 'Vitamin D', amount: 11.1, unit: 'mcg', dailyValue: 74 },
      { name: 'Vitamin B6', amount: 0.9, unit: 'mg', dailyValue: 53 }
    ],
    minerals: [
      { name: 'Selenium', amount: 36.5, unit: 'mcg', dailyValue: 66 },
      { name: 'Phosphorus', amount: 240, unit: 'mg', dailyValue: 19 },
      { name: 'Potassium', amount: 363, unit: 'mg', dailyValue: 8 }
    ]
  },
  {
    id: 'spinach',
    name: 'Spinach',
    category: 'vegetables',
    servingSize: '100g raw',
    calories: 23,
    protein: 2.9,
    carbs: 3.6,
    fat: 0.4,
    fiber: 2.2,
    sugar: 0.4,
    sodium: 79,
    vitamins: [
      { name: 'Vitamin K', amount: 483, unit: 'mcg', dailyValue: 402 },
      { name: 'Vitamin A', amount: 469, unit: 'mcg', dailyValue: 52 },
      { name: 'Vitamin C', amount: 28.1, unit: 'mg', dailyValue: 31 }
    ],
    minerals: [
      { name: 'Iron', amount: 2.7, unit: 'mg', dailyValue: 15 },
      { name: 'Calcium', amount: 99, unit: 'mg', dailyValue: 8 },
      { name: 'Magnesium', amount: 79, unit: 'mg', dailyValue: 19 }
    ]
  },
  {
    id: 'blueberries',
    name: 'Blueberries',
    category: 'fruits',
    servingSize: '100g',
    calories: 57,
    protein: 0.7,
    carbs: 14.5,
    fat: 0.3,
    fiber: 2.4,
    sugar: 10,
    sodium: 1,
    vitamins: [
      { name: 'Vitamin C', amount: 9.7, unit: 'mg', dailyValue: 11 },
      { name: 'Vitamin K', amount: 19.3, unit: 'mcg', dailyValue: 16 }
    ],
    minerals: [
      { name: 'Manganese', amount: 0.3, unit: 'mg', dailyValue: 13 },
      { name: 'Potassium', amount: 77, unit: 'mg', dailyValue: 2 }
    ]
  },
  {
    id: 'almonds',
    name: 'Almonds',
    category: 'nuts',
    servingSize: '28g (23 nuts)',
    calories: 164,
    protein: 6,
    carbs: 6.1,
    fat: 14.2,
    fiber: 3.5,
    sugar: 1.2,
    sodium: 0,
    vitamins: [
      { name: 'Vitamin E', amount: 7.3, unit: 'mg', dailyValue: 49 },
      { name: 'Vitamin B2', amount: 0.3, unit: 'mg', dailyValue: 23 }
    ],
    minerals: [
      { name: 'Magnesium', amount: 76, unit: 'mg', dailyValue: 18 },
      { name: 'Manganese', amount: 0.6, unit: 'mg', dailyValue: 26 },
      { name: 'Copper', amount: 0.3, unit: 'mg', dailyValue: 33 }
    ]
  },
  {
    id: 'greek-yogurt',
    name: 'Greek Yogurt',
    category: 'dairy',
    servingSize: '100g',
    calories: 59,
    protein: 10,
    carbs: 3.6,
    fat: 0.4,
    fiber: 0,
    sugar: 3.2,
    sodium: 36,
    vitamins: [
      { name: 'Vitamin B12', amount: 0.5, unit: 'mcg', dailyValue: 21 },
      { name: 'Vitamin B2', amount: 0.2, unit: 'mg', dailyValue: 15 }
    ],
    minerals: [
      { name: 'Calcium', amount: 110, unit: 'mg', dailyValue: 8 },
      { name: 'Phosphorus', amount: 135, unit: 'mg', dailyValue: 11 },
      { name: 'Zinc', amount: 0.5, unit: 'mg', dailyValue: 5 }
    ]
  },
  {
    id: 'sweet-potato',
    name: 'Sweet Potato',
    category: 'vegetables',
    servingSize: '100g',
    calories: 86,
    protein: 1.6,
    carbs: 20.1,
    fat: 0.1,
    fiber: 3,
    sugar: 4.2,
    sodium: 55,
    vitamins: [
      { name: 'Vitamin A', amount: 709, unit: 'mcg', dailyValue: 79 },
      { name: 'Vitamin C', amount: 2.4, unit: 'mg', dailyValue: 3 }
    ],
    minerals: [
      { name: 'Potassium', amount: 337, unit: 'mg', dailyValue: 7 },
      { name: 'Manganese', amount: 0.3, unit: 'mg', dailyValue: 13 }
    ]
  },
  {
    id: 'eggs',
    name: 'Eggs',
    category: 'proteins',
    servingSize: '100g (2 large)',
    calories: 155,
    protein: 12.6,
    carbs: 1.1,
    fat: 11.3,
    fiber: 0,
    sugar: 1.1,
    sodium: 124,
    vitamins: [
      { name: 'Vitamin B12', amount: 1.1, unit: 'mcg', dailyValue: 46 },
      { name: 'Vitamin D', amount: 2, unit: 'mcg', dailyValue: 13 },
      { name: 'Vitamin A', amount: 160, unit: 'mcg', dailyValue: 18 }
    ],
    minerals: [
      { name: 'Selenium', amount: 15.4, unit: 'mcg', dailyValue: 28 },
      { name: 'Iron', amount: 1.8, unit: 'mg', dailyValue: 10 },
      { name: 'Zinc', amount: 1.3, unit: 'mg', dailyValue: 12 }
    ]
  }
];

export const getFoodById = (id: string): FoodItem | undefined => {
  return foods.find(food => food.id === id);
};

export const searchFoods = (query: string): FoodItem[] => {
  const lowercaseQuery = query.toLowerCase();
  return foods.filter(food => 
    food.name.toLowerCase().includes(lowercaseQuery) ||
    food.category.toLowerCase().includes(lowercaseQuery)
  );
};

export const getFoodsByCategory = (category: string): FoodItem[] => {
  return foods.filter(food => food.category === category);
}; 