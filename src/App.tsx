import React, { useEffect, useState, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import './i18n';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SEO from './components/SEO';

// Pages
const Home = React.lazy(() => import('./pages/Home'));
const Rooms = React.lazy(() => import('./pages/Rooms'));
const Dining = React.lazy(() => import('./pages/Dining'));
const Spa = React.lazy(() => import('./pages/Spa'));
const Offers = React.lazy(() => import('./pages/Offers'));
const Contact = React.lazy(() => import('./pages/Contact'));
const AdminDashboard = React.lazy(() => import('./pages/AdminDashboard'));

// Loading Component
const PageLoader = () => (
  <div className="h-screen w-full flex items-center justify-center bg-navy">
    <motion.div 
      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="text-gold font-serif text-3xl tracking-widest uppercase"
    >
      Swissôtel
    </motion.div>
  </div>
);

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gold z-[60] origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <ScrollProgress />
        <SEO />
        <div className="flex flex-col min-h-screen">
          <div className="grain-overlay" />
          <Navbar />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/rooms" element={<Rooms />} />
                  <Route path="/dining" element={<Dining />} />
                  <Route path="/spa" element={<Spa />} />
                  <Route path="/offers" element={<Offers />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/admin" element={<AdminDashboard />} />
                </Routes>
              </Suspense>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
