import { Superfood } from '../types';

export const superfoods: Superfood[] = [
  {
    id: 'acai',
    name: 'Açaí Berries',
    description: 'Rich in antioxidants and heart-healthy fats, these dark purple berries from the Amazon support brain function and provide sustained energy.',
    benefits: ['Rich in antioxidants', 'Supports heart health', 'Boosts energy levels', 'Improves cognitive function'],
    bodyParts: ['brain', 'heart', 'immune'],
    image: 'https://mocha-cdn.com/01970407-e10d-7115-81c9-ec360c255c7a/fresh-ripe-acai-berries-background-.webp',
    nutrients: ['Anthocyanins', 'Fiber', 'Heart-healthy fats', 'Vitamin A', 'Vitamin C'],
  },
  {
    id: 'turmeric',
    name: 'Turmeric',
    description: 'This golden spice contains curcumin, a potent anti-inflammatory compound that supports joint health, reduces inflammation, and enhances brain function.',
    benefits: ['Powerful anti-inflammatory', 'Supports joint health', 'Improves brain function', 'Enhances digestive health'],
    bodyParts: ['brain', 'gut', 'immune'],
    image: 'https://mocha-cdn.com/01970407-e10d-7115-81c9-ec360c255c7a/360_F_182274289_RvpPTYZmC3n98ZXuH85d.jpg',
    nutrients: ['Curcumin', 'Vitamin B6', 'Fiber', 'Iron', 'Potassium'],
  },
  {
    id: 'spirulina',
    name: 'Spirulina',
    description: 'This blue-green algae is one of the most nutrient-dense foods on the planet, supporting immune function, detoxification, and energy production.',
    benefits: ['Complete protein source', 'Detoxifies heavy metals', 'Boosts energy', 'Strengthens immune system'],
    bodyParts: ['immune', 'liver', 'muscles'],
    image: 'https://mocha-cdn.com/01970407-e10d-7115-81c9-ec360c255c7a/OCR-L-HG-SISKIN-COL-0218-01.webp',
    nutrients: ['Protein', 'Vitamin B12', 'Iron', 'Gamma-linolenic acid', 'Phycocyanin'],
  },
  {
    id: 'matcha',
    name: 'Matcha',
    description: 'This finely ground green tea powder provides calm, focused energy while supporting metabolism and detoxification.',
    benefits: ['Sustained energy without jitters', 'Enhanced focus', 'Supports metabolism', 'Rich in antioxidants'],
    bodyParts: ['brain', 'liver', 'heart'],
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    nutrients: ['L-theanine', 'Caffeine', 'EGCG', 'Chlorophyll', 'Catechins'],
  },
];
