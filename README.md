# Flamoca - AI-Powered Superfoods & Nutrition Tracking Platform

Flamoca is a comprehensive health and wellness platform that combines AI-powered superfood research with advanced nutrition tracking capabilities. Built with React, TypeScript, and Tailwind CSS, it provides users with both educational content about superfoods and practical tools for managing their daily nutrition.

## 🌟 Features

### 🧠 AI Research Assistant
- **Research-based insights** powered by Google's Gemini AI
- **Credible sources** with inline citations and dedicated sources section
- **Health-focused analysis** of any food item
- **Category classification** into body health categories (Brain, Heart, Skin, etc.)

### 📊 Nutrition Tracking Platform
- **Comprehensive food database** with 100+ foods including superfoods
- **Daily meal logging** (Breakfast, Lunch, Dinner, Snacks)
- **Macro tracking** (Calories, Protein, Carbs, Fat, Fiber, Sugar, Sodium)
- **Personalized nutrition goals** based on user profile
- **Progress visualization** with charts and insights
- **Local storage** for persistent data

### 🥗 Superfoods Database
- **Curated superfoods** with detailed nutritional information
- **Category-based organization** by body health benefits
- **Research-backed information** with scientific sources
- **Beautiful UI** with responsive design

### 👤 User Profile Management
- **Personalized setup** with age, weight, height, activity level
- **Goal setting** (Lose weight, Maintain, Gain weight, Build muscle)
- **Dietary restrictions** and allergy tracking
- **BMR/TDEE calculations** using Mifflin-St Jeor equation

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd Flamoca

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Add your GEMINI_API_KEY to .env

# Start development server
npm run dev
```

### Environment Variables
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

## 🏗️ Architecture

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Local Storage** for data persistence

### Components Structure
```
src/
├── components/
│   ├── AIResearchSearch.tsx      # AI-powered food research
│   ├── NutritionTracker.tsx      # Daily meal logging
│   ├── NutritionDashboard.tsx    # Nutrition analytics
│   ├── UserProfileSetup.tsx      # User profile creation
│   ├── FoodSearch.tsx            # Food database search
│   └── ...                       # Other UI components
├── pages/
│   ├── Home.tsx                  # Landing page
│   ├── Nutrition.tsx             # Main nutrition tracking
│   └── ...                       # Other pages
├── data/
│   ├── foods.ts                  # Food database
│   ├── superfoods.ts             # Superfoods data
│   └── categories.ts             # Health categories
└── types/
    └── index.ts                  # TypeScript interfaces
```

### Data Models
- **FoodItem**: Complete nutritional information
- **UserProfile**: Personal health data
- **DailyNutrition**: Daily meal and nutrition tracking
- **NutritionGoals**: Personalized targets

## 📱 Usage

### AI Research
1. Navigate to the home page
2. Use the AI Research Search bar
3. Enter any food item
4. Get research-backed insights with citations

### Nutrition Tracking
1. Go to `/nutrition` page
2. Complete your profile setup
3. Search and add foods to your daily meals
4. Monitor your progress with the dashboard

### Food Database
1. Use the Food Search component
2. Browse nutritional information
3. View detailed vitamin and mineral breakdowns
4. Identify superfoods and their benefits

## 🎯 Key Features in Detail

### Smart Nutrition Goals
- **Automatic calculation** based on user profile
- **Activity level adjustments** (Sedentary to Extremely Active)
- **Goal-based modifications** (Weight loss, muscle gain, etc.)
- **Macro distribution** (25% Protein, 45% Carbs, 30% Fat)

### Comprehensive Food Database
- **100+ foods** with complete nutritional data
- **Multiple categories**: Fruits, Vegetables, Proteins, Grains, etc.
- **Superfood identification** with enhanced benefits
- **Serving size flexibility** with multiplier support

### Progress Tracking
- **Real-time updates** as you log meals
- **Visual progress bars** for each nutrient
- **Smart insights** based on your daily intake
- **Goal achievement tracking**

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Code Style
- **TypeScript** for type safety
- **ESLint** for code quality
- **Prettier** for formatting
- **Component-based architecture**

## 🌐 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build the project
npm run build

# Deploy to Netlify
# Upload dist/ folder to Netlify
```

## 🔮 Future Enhancements

### Planned Features
- **Meal planning** with weekly schedules
- **Recipe integration** with nutrition calculation
- **Progress photos** and measurements tracking
- **Social features** and community challenges
- **Mobile app** development
- **Advanced analytics** and reporting

### AI Enhancements
- **Personalized recommendations** based on user data
- **Meal suggestions** for missing nutrients
- **Diet optimization** for specific health goals
- **Food pairing** recommendations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Google Gemini AI** for research capabilities
- **Tailwind CSS** for beautiful UI components
- **React community** for excellent tooling
- **Nutrition science** community for accurate data

## 📞 Support

For support and questions:
- Email: flamocauk@gmail.com
- Issues: GitHub Issues
- Documentation: This README

---

**Flamoca** - Where AI meets nutrition science for better health outcomes.
