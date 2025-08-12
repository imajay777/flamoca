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
  },

  // Indian Foods
  {
    id: 'basmati-rice',
    name: 'Basmati Rice',
    category: 'grains',
    servingSize: '100g cooked',
    calories: 130,
    protein: 2.7,
    carbs: 28.2,
    fat: 0.3,
    fiber: 0.4,
    sugar: 0.1,
    sodium: 1,
    vitamins: [
      { name: 'Vitamin B1', amount: 0.1, unit: 'mg', dailyValue: 7 },
      { name: 'Vitamin B6', amount: 0.1, unit: 'mg', dailyValue: 6 }
    ],
    minerals: [
      { name: 'Iron', amount: 0.4, unit: 'mg', dailyValue: 2 },
      { name: 'Magnesium', amount: 12, unit: 'mg', dailyValue: 3 },
      { name: 'Zinc', amount: 0.5, unit: 'mg', dailyValue: 5 }
    ]
  },
  {
    id: 'dal-moong',
    name: 'Moong Dal (Yellow)',
    category: 'proteins',
    servingSize: '100g cooked',
    calories: 105,
    protein: 7.5,
    carbs: 19.2,
    fat: 0.4,
    fiber: 7.6,
    sugar: 1.8,
    sodium: 2,
    vitamins: [
      { name: 'Vitamin B1', amount: 0.2, unit: 'mg', dailyValue: 17 },
      { name: 'Vitamin B6', amount: 0.1, unit: 'mg', dailyValue: 6 },
      { name: 'Folate', amount: 159, unit: 'mcg', dailyValue: 40 }
    ],
    minerals: [
      { name: 'Iron', amount: 2.8, unit: 'mg', dailyValue: 16 },
      { name: 'Magnesium', amount: 48, unit: 'mg', dailyValue: 11 },
      { name: 'Potassium', amount: 266, unit: 'mg', dailyValue: 6 }
    ]
  },
  {
    id: 'dal-toor',
    name: 'Toor Dal (Pigeon Pea)',
    category: 'proteins',
    servingSize: '100g cooked',
    calories: 121,
    protein: 6.8,
    carbs: 23.3,
    fat: 0.4,
    fiber: 6.7,
    sugar: 2.8,
    sodium: 5,
    vitamins: [
      { name: 'Vitamin B1', amount: 0.2, unit: 'mg', dailyValue: 17 },
      { name: 'Folate', amount: 139, unit: 'mcg', dailyValue: 35 }
    ],
    minerals: [
      { name: 'Iron', amount: 2.8, unit: 'mg', dailyValue: 16 },
      { name: 'Magnesium', amount: 45, unit: 'mg', dailyValue: 11 },
      { name: 'Zinc', amount: 1.1, unit: 'mg', dailyValue: 10 }
    ]
  },
  {
    id: 'chickpeas',
    name: 'Chickpeas (Kabuli)',
    category: 'proteins',
    servingSize: '100g cooked',
    calories: 164,
    protein: 8.9,
    carbs: 27.4,
    fat: 2.6,
    fiber: 7.6,
    sugar: 4.8,
    sodium: 7,
    vitamins: [
      { name: 'Vitamin B6', amount: 0.2, unit: 'mg', dailyValue: 12 },
      { name: 'Folate', amount: 172, unit: 'mcg', dailyValue: 43 }
    ],
    minerals: [
      { name: 'Iron', amount: 2.9, unit: 'mg', dailyValue: 16 },
      { name: 'Magnesium', amount: 48, unit: 'mg', dailyValue: 11 },
      { name: 'Zinc', amount: 1.5, unit: 'mg', dailyValue: 14 }
    ]
  },
  {
    id: 'rajma',
    name: 'Rajma (Kidney Beans)',
    category: 'proteins',
    servingSize: '100g cooked',
    calories: 127,
    protein: 8.7,
    carbs: 22.8,
    fat: 0.5,
    fiber: 6.4,
    sugar: 0.3,
    sodium: 1,
    vitamins: [
      { name: 'Vitamin B1', amount: 0.2, unit: 'mg', dailyValue: 17 },
      { name: 'Folate', amount: 130, unit: 'mcg', dailyValue: 33 }
    ],
    minerals: [
      { name: 'Iron', amount: 2.9, unit: 'mg', dailyValue: 16 },
      { name: 'Magnesium', amount: 45, unit: 'mg', dailyValue: 11 },
      { name: 'Potassium', amount: 405, unit: 'mg', dailyValue: 9 }
    ]
  },
  {
    id: 'paneer',
    name: 'Paneer (Cottage Cheese)',
    category: 'dairy',
    servingSize: '100g',
    calories: 265,
    protein: 18.3,
    carbs: 2.6,
    fat: 20.8,
    fiber: 0,
    sugar: 2.6,
    sodium: 16,
    vitamins: [
      { name: 'Vitamin B12', amount: 0.2, unit: 'mcg', dailyValue: 8 },
      { name: 'Vitamin A', amount: 95, unit: 'mcg', dailyValue: 11 }
    ],
    minerals: [
      { name: 'Calcium', amount: 208, unit: 'mg', dailyValue: 16 },
      { name: 'Phosphorus', amount: 138, unit: 'mg', dailyValue: 11 },
      { name: 'Zinc', amount: 1.1, unit: 'mg', dailyValue: 10 }
    ]
  },
  {
    id: 'ghee',
    name: 'Ghee (Clarified Butter)',
    category: 'oils',
    servingSize: '100g',
    calories: 900,
    protein: 0,
    carbs: 0,
    fat: 100,
    fiber: 0,
    sugar: 0,
    sodium: 0,
    vitamins: [
      { name: 'Vitamin A', amount: 3069, unit: 'mcg', dailyValue: 341 },
      { name: 'Vitamin E', amount: 2.8, unit: 'mg', dailyValue: 19 }
    ],
    minerals: [
      { name: 'Calcium', amount: 4, unit: 'mg', dailyValue: 0 },
      { name: 'Phosphorus', amount: 4, unit: 'mg', dailyValue: 0 }
    ]
  },
  {
    id: 'turmeric',
    name: 'Turmeric Powder',
    category: 'superfoods',
    servingSize: '100g',
    calories: 354,
    protein: 8,
    carbs: 65,
    fat: 10,
    fiber: 21,
    sugar: 3.2,
    sodium: 38,
    vitamins: [
      { name: 'Vitamin B6', amount: 1.8, unit: 'mg', dailyValue: 106 },
      { name: 'Vitamin C', amount: 25.9, unit: 'mg', dailyValue: 29 }
    ],
    minerals: [
      { name: 'Iron', amount: 55, unit: 'mg', dailyValue: 306 },
      { name: 'Manganese', amount: 19.8, unit: 'mg', dailyValue: 861 },
      { name: 'Potassium', amount: 2080, unit: 'mg', dailyValue: 44 }
    ],
    isSuperfood: true,
    superfoodId: 'turmeric'
  },
  {
    id: 'ginger',
    name: 'Ginger Root',
    category: 'vegetables',
    servingSize: '100g raw',
    calories: 80,
    protein: 1.8,
    carbs: 17.8,
    fat: 0.8,
    fiber: 2,
    sugar: 1.7,
    sodium: 13,
    vitamins: [
      { name: 'Vitamin B6', amount: 0.2, unit: 'mg', dailyValue: 12 },
      { name: 'Vitamin C', amount: 5, unit: 'mg', dailyValue: 6 }
    ],
    minerals: [
      { name: 'Iron', amount: 0.6, unit: 'mg', dailyValue: 3 },
      { name: 'Magnesium', amount: 43, unit: 'mg', dailyValue: 10 },
      { name: 'Potassium', amount: 415, unit: 'mg', dailyValue: 9 }
    ]
  },
  {
    id: 'coconut',
    name: 'Fresh Coconut',
    category: 'fruits',
    servingSize: '100g',
    calories: 354,
    protein: 3.3,
    carbs: 15.2,
    fat: 33.5,
    fiber: 9,
    sugar: 6.2,
    sodium: 20,
    vitamins: [
      { name: 'Vitamin B6', amount: 0.1, unit: 'mg', dailyValue: 6 },
      { name: 'Vitamin C', amount: 3.3, unit: 'mg', dailyValue: 4 }
    ],
    minerals: [
      { name: 'Iron', amount: 2.4, unit: 'mg', dailyValue: 13 },
      { name: 'Magnesium', amount: 32, unit: 'mg', dailyValue: 8 },
      { name: 'Potassium', amount: 356, unit: 'mg', dailyValue: 8 }
    ]
  },
  {
    id: 'mango',
    name: 'Mango (Aam)',
    category: 'fruits',
    servingSize: '100g',
    calories: 60,
    protein: 0.8,
    carbs: 15,
    fat: 0.4,
    fiber: 1.6,
    sugar: 13.7,
    sodium: 1,
    vitamins: [
      { name: 'Vitamin A', amount: 54, unit: 'mcg', dailyValue: 6 },
      { name: 'Vitamin C', amount: 36.4, unit: 'mg', dailyValue: 40 }
    ],
    minerals: [
      { name: 'Iron', amount: 0.2, unit: 'mg', dailyValue: 1 },
      { name: 'Potassium', amount: 168, unit: 'mg', dailyValue: 4 }
    ]
  },
  {
    id: 'banana',
    name: 'Banana (Kela)',
    category: 'fruits',
    servingSize: '100g',
    calories: 89,
    protein: 1.1,
    carbs: 22.8,
    fat: 0.3,
    fiber: 2.6,
    sugar: 12.2,
    sodium: 1,
    vitamins: [
      { name: 'Vitamin B6', amount: 0.4, unit: 'mg', dailyValue: 24 },
      { name: 'Vitamin C', amount: 8.7, unit: 'mg', dailyValue: 10 }
    ],
    minerals: [
      { name: 'Iron', amount: 0.3, unit: 'mg', dailyValue: 2 },
      { name: 'Potassium', amount: 358, unit: 'mg', dailyValue: 8 },
      { name: 'Magnesium', amount: 27, unit: 'mg', dailyValue: 6 }
    ]
  },
  {
    id: 'potato',
    name: 'Potato (Aloo)',
    category: 'vegetables',
    servingSize: '100g',
    calories: 77,
    protein: 2,
    carbs: 17,
    fat: 0.1,
    fiber: 2.2,
    sugar: 0.8,
    sodium: 5,
    vitamins: [
      { name: 'Vitamin B6', amount: 0.3, unit: 'mg', dailyValue: 18 },
      { name: 'Vitamin C', amount: 19.7, unit: 'mg', dailyValue: 22 }
    ],
    minerals: [
      { name: 'Iron', amount: 0.8, unit: 'mg', dailyValue: 4 },
      { name: 'Potassium', amount: 421, unit: 'mg', dailyValue: 9 },
      { name: 'Magnesium', amount: 23, unit: 'mg', dailyValue: 5 }
    ]
  },
  {
    id: 'onion',
    name: 'Onion (Pyaaz)',
    category: 'vegetables',
    servingSize: '100g',
    calories: 40,
    protein: 1.1,
    carbs: 9.3,
    fat: 0.1,
    fiber: 1.7,
    sugar: 4.7,
    sodium: 4,
    vitamins: [
      { name: 'Vitamin B6', amount: 0.1, unit: 'mg', dailyValue: 6 },
      { name: 'Vitamin C', amount: 7.4, unit: 'mg', dailyValue: 8 }
    ],
    minerals: [
      { name: 'Iron', amount: 0.2, unit: 'mg', dailyValue: 1 },
      { name: 'Potassium', amount: 146, unit: 'mg', dailyValue: 3 }
    ]
  },
  {
    id: 'tomato',
    name: 'Tomato (Tamatar)',
    category: 'vegetables',
    servingSize: '100g',
    calories: 18,
    protein: 0.9,
    carbs: 3.9,
    fat: 0.2,
    fiber: 1.2,
    sugar: 2.6,
    sodium: 5,
    vitamins: [
      { name: 'Vitamin A', amount: 833, unit: 'mcg', dailyValue: 93 },
      { name: 'Vitamin C', amount: 13.7, unit: 'mg', dailyValue: 15 }
    ],
    minerals: [
      { name: 'Iron', amount: 0.3, unit: 'mg', dailyValue: 2 },
      { name: 'Potassium', amount: 237, unit: 'mg', dailyValue: 5 }
    ]
  },
  {
    id: 'cucumber',
    name: 'Cucumber (Kheera)',
    category: 'vegetables',
    servingSize: '100g',
    calories: 16,
    protein: 0.7,
    carbs: 3.6,
    fat: 0.1,
    fiber: 0.5,
    sugar: 1.7,
    sodium: 2,
    vitamins: [
      { name: 'Vitamin K', amount: 16.4, unit: 'mcg', dailyValue: 14 },
      { name: 'Vitamin C', amount: 2.8, unit: 'mg', dailyValue: 3 }
    ],
    minerals: [
      { name: 'Iron', amount: 0.3, unit: 'mg', dailyValue: 2 },
      { name: 'Potassium', amount: 147, unit: 'mg', dailyValue: 3 }
    ]
  },
  {
    id: 'carrot',
    name: 'Carrot (Gajar)',
    category: 'vegetables',
    servingSize: '100g',
    calories: 41,
    protein: 0.9,
    carbs: 9.6,
    fat: 0.2,
    fiber: 2.8,
    sugar: 4.7,
    sodium: 69,
    vitamins: [
      { name: 'Vitamin A', amount: 835, unit: 'mcg', dailyValue: 93 },
      { name: 'Vitamin C', amount: 5.9, unit: 'mg', dailyValue: 7 }
    ],
    minerals: [
      { name: 'Iron', amount: 0.3, unit: 'mg', dailyValue: 2 },
      { name: 'Potassium', amount: 320, unit: 'mg', dailyValue: 7 }
    ]
  },
  {
    id: 'cauliflower',
    name: 'Cauliflower (Phool Gobhi)',
    category: 'vegetables',
    servingSize: '100g',
    calories: 25,
    protein: 1.9,
    carbs: 5,
    fat: 0.3,
    fiber: 2,
    sugar: 1.9,
    sodium: 30,
    vitamins: [
      { name: 'Vitamin C', amount: 48.2, unit: 'mg', dailyValue: 54 },
      { name: 'Vitamin K', amount: 15.5, unit: 'mcg', dailyValue: 13 }
    ],
    minerals: [
      { name: 'Iron', amount: 0.4, unit: 'mg', dailyValue: 2 },
      { name: 'Potassium', amount: 299, unit: 'mg', dailyValue: 6 }
    ]
  },
  {
    id: 'cabbage',
    name: 'Cabbage (Patta Gobhi)',
    category: 'vegetables',
    servingSize: '100g',
    calories: 25,
    protein: 1.3,
    carbs: 5.8,
    fat: 0.1,
    fiber: 2.5,
    sugar: 3.2,
    sodium: 18,
    vitamins: [
      { name: 'Vitamin C', amount: 36.6, unit: 'mg', dailyValue: 41 },
      { name: 'Vitamin K', amount: 76, unit: 'mcg', dailyValue: 63 }
    ],
    minerals: [
      { name: 'Iron', amount: 0.5, unit: 'mg', dailyValue: 3 },
      { name: 'Potassium', amount: 170, unit: 'mg', dailyValue: 4 }
    ]
  },
  {
    id: 'peanuts',
    name: 'Peanuts (Mungfali)',
    category: 'nuts',
    servingSize: '100g',
    calories: 567,
    protein: 25.8,
    carbs: 16.1,
    fat: 49.2,
    fiber: 8.5,
    sugar: 4.7,
    sodium: 18,
    vitamins: [
      { name: 'Vitamin B3', amount: 12.1, unit: 'mg', dailyValue: 76 },
      { name: 'Vitamin E', amount: 8.3, unit: 'mg', dailyValue: 55 }
    ],
    minerals: [
      { name: 'Iron', amount: 4.6, unit: 'mg', dailyValue: 26 },
      { name: 'Magnesium', amount: 168, unit: 'mg', dailyValue: 40 },
      { name: 'Zinc', amount: 3.3, unit: 'mg', dailyValue: 30 }
    ]
  },
  {
    id: 'cashews',
    name: 'Cashews (Kaju)',
    category: 'nuts',
    servingSize: '100g',
    calories: 553,
    protein: 18.2,
    carbs: 30.2,
    fat: 43.8,
    fiber: 3.3,
    sugar: 5.9,
    sodium: 12,
    vitamins: [
      { name: 'Vitamin B6', amount: 0.4, unit: 'mg', dailyValue: 24 },
      { name: 'Vitamin K', amount: 34.1, unit: 'mcg', dailyValue: 28 }
    ],
    minerals: [
      { name: 'Iron', amount: 6.7, unit: 'mg', dailyValue: 37 },
      { name: 'Magnesium', amount: 292, unit: 'mg', dailyValue: 70 },
      { name: 'Zinc', amount: 5.8, unit: 'mg', dailyValue: 53 }
    ]
  },
  {
    id: 'raisins',
    name: 'Raisins (Kishmish)',
    category: 'fruits',
    servingSize: '100g',
    calories: 299,
    protein: 3.1,
    carbs: 79.2,
    fat: 0.5,
    fiber: 3.7,
    sugar: 59.2,
    sodium: 11,
    vitamins: [
      { name: 'Vitamin B6', amount: 0.2, unit: 'mg', dailyValue: 12 },
      { name: 'Vitamin K', amount: 3.5, unit: 'mcg', dailyValue: 3 }
    ],
    minerals: [
      { name: 'Iron', amount: 1.9, unit: 'mg', dailyValue: 11 },
      { name: 'Potassium', amount: 749, unit: 'mg', dailyValue: 16 },
      { name: 'Calcium', amount: 50, unit: 'mg', dailyValue: 4 }
    ]
  },
  {
    id: 'dates',
    name: 'Dates (Khajoor)',
    category: 'fruits',
    servingSize: '100g',
    calories: 282,
    protein: 2.5,
    carbs: 75,
    fat: 0.4,
    fiber: 8,
    sugar: 63.4,
    sodium: 2,
    vitamins: [
      { name: 'Vitamin B6', amount: 0.2, unit: 'mg', dailyValue: 12 },
      { name: 'Vitamin K', amount: 2.7, unit: 'mcg', dailyValue: 2 }
    ],
    minerals: [
      { name: 'Iron', amount: 1.2, unit: 'mg', dailyValue: 7 },
      { name: 'Potassium', amount: 656, unit: 'mg', dailyValue: 14 },
      { name: 'Magnesium', amount: 54, unit: 'mg', dailyValue: 13 }
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