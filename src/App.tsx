import { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import LoadingScreen from './components/LoadingScreen';
import Layout from './components/Layout';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Categories = lazy(() => import('./pages/Categories'));
const CategoryDetail = lazy(() => import('./pages/CategoryDetail'));
const Superfoods = lazy(() => import('./pages/Superfoods'));
const SuperfoodDetail = lazy(() => import('./pages/SuperfoodDetail'));
const About = lazy(() => import('./pages/About'));
const Nutrition = lazy(() => import('./pages/Nutrition'));

export function App() {
  const location = useLocation();

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes location={location}>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/:id" element={<CategoryDetail />} />
          <Route path="/superfoods" element={<Superfoods />} />
          <Route path="/superfood/:id" element={<SuperfoodDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
