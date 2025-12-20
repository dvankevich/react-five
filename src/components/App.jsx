import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import NotFound from '../pages/NotFound';
import { AppBar } from './AppBar/AppBar';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from './ErrorFallback/ErrorFallback';

import { useNavigate } from 'react-router-dom';

import css from './App.module.css';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const ProductDetails = lazy(() => import('../pages/ProductDetails'));
const Products = lazy(() => import('../pages/Products'));
const Mission = lazy(() => import('./Mission/Mission'));
const Team = lazy(() => import('./Team/Team'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Login = lazy(() => import('../pages/Login'));
const Dashboard = lazy(() => import('../pages/Dashboard'));

const BuggyComponent = () => {
  throw new Error('💥 Бум! Компонент зламався.');
};

export const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Current location:', location);
  }, [location]);

  return (
    <div className={css.container}>
      <AppBar />

      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          navigate(-1); // Повертає на попередню сторінку
        }}
        onError={(error, info) => {
          // Тут можна відправити звіт про помилку в аналітику
          console.log('Logged error:', error, info);
        }}
      >
        <Suspense fallback={<div>Loading page...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}>
              <Route path="mission" element={<Mission />} />
              <Route path="team" element={<Team />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/test-error" element={<BuggyComponent />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};
