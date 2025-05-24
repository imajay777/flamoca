import { useEffect, useState } from 'react';
import { logoUrl } from '../assets/logo.ts';

const tips = [
  'Did you know? Blueberries contain more antioxidants than most other fruits and vegetables.',
  'Turmeric contains curcumin, which has powerful anti-inflammatory effects.',
  'Kale is among the most nutrient-dense foods on the planet.',
  'Salmon is one of the best sources of omega-3 fatty acids, which are essential for your body.',
  'Garlic contains compounds with medicinal properties and can help combat sickness.',
  'Dark chocolate with high cocoa content is actually quite nutritious and loaded with antioxidants.',
  'Avocados are loaded with heart-healthy monounsaturated fats and fiber.',
  'Chia seeds are among the most nutrient-dense foods on the planet.',
  'Ginger can help fight infections and may reduce nausea and pain.',
  'Matcha contains catechins, which are natural antioxidants that help prevent cell damage.',
];

export default function LoadingScreen() {
  const [currentTipIndex, setCurrentTipIndex] = useState(0);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const tipInterval = setInterval(() => {
      setCurrentTipIndex((prev) => (prev + 1) % tips.length);
    }, 5000);

    return () => {
      clearInterval(tipInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-[#f9f6f2] flex flex-col items-center justify-center gap-6 p-8 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="mb-4 flex items-center justify-center">
        <img src={logoUrl} alt="Flamoca" className="h-48 w-auto" />
      </div>
      
      <div className="relative flex items-center justify-center w-16 h-16 bg-white border-2 border-purple-200 rounded-full">
        <div className="absolute h-16 w-16 rounded-full animate-spin bg-gradient-to-b from-purple-600 to-transparent"></div>
        <div className="absolute flex items-center justify-center bg-white rounded-full h-[60px] w-[60px]">
          <svg 
            className="w-8 h-8 text-purple-600" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
      </div>

      <div className="text-purple-800 text-2xl font-medium" style={{ fontFamily: 'Playfair Display, serif' }}>Loading Superfoods...</div>

      <div className="relative h-[115px] pt-4 pb-8 w-[320px] overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-4 z-10 bg-gradient-to-t from-transparent to-[#f9f6f2]" />
        <div
          className="transition-transform duration-500 ease-in-out"
          style={{ transform: `translateY(-${currentTipIndex * 48 + 4}px)` }}
        >
          {tips.map((tip, index) => (
            <div
              key={index}
              className={`h-8 mb-6 flex items-center justify-center text-purple-700 text-sm leading-[1.2] transition-opacity duration-500 ${index === currentTipIndex ? 'opacity-100' : 'opacity-50'}`}
            >
              {tip}
            </div>
          ))}
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16 z-10 bg-gradient-to-b from-transparent to-[#f9f6f2]" />
      </div>
    </div>
  );
}
