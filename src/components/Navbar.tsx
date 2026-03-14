import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { HOTEL_INFO } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLangs, setShowLangs] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.rooms'), path: '/rooms' },
    { name: t('nav.dining'), path: '/dining' },
    { name: t('nav.spa'), path: '/spa' },
    { name: t('nav.offers'), path: '/offers' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const languages = [
    { code: 'en', name: 'EN' },
    { code: 'ru', name: 'RU' },
    { code: 'uz', name: 'UZ' },
  ];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setShowLangs(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-navy/90 backdrop-blur-md py-4 shadow-xl' : 'bg-navy/90 backdrop-blur-md shadow-xl py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex flex-col">
          <span className="text-2xl md:text-3xl font-serif text-white tracking-widest uppercase">
            Swissôtel
          </span>
          <span className="text-[10px] md:text-xs text-gold tracking-[0.3em] uppercase ml-1">
            Tashkent
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm uppercase tracking-widest transition-colors hover:text-gold ${
                location.pathname === link.path ? 'text-gold' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Language Switcher */}
          <div className="relative">
            <button 
              onClick={() => setShowLangs(!showLangs)}
              className="flex items-center space-x-1 text-white hover:text-gold transition-colors text-sm uppercase tracking-widest"
            >
              <Globe size={16} />
              <span>{i18n.language.substring(0, 2).toUpperCase()}</span>
            </button>
            <AnimatePresence>
              {showLangs && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-4 bg-navy border border-white/10 p-2 rounded-sm shadow-2xl"
                >
                  {languages.map(lang => (
                    <button 
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`block w-full text-left px-4 py-2 text-xs hover:text-gold transition-colors ${
                        i18n.language === lang.code ? 'text-gold' : 'text-white'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/contact"
            className="bg-gold hover:bg-gold-light text-navy px-6 py-2 rounded-sm text-sm uppercase tracking-widest font-semibold transition-all transform hover:scale-105"
          >
            {t('nav.book')}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-navy z-40 flex flex-col items-center justify-center space-y-8"
          >
            <button
              className="absolute top-8 right-8 text-white"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} />
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-serif text-white hover:text-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-gold text-navy px-10 py-3 rounded-sm text-lg uppercase tracking-widest font-semibold"
            >
              {t('nav.book_stay')}
            </Link>
            <div className="pt-8 flex flex-col items-center text-white/60 space-y-2">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>{HOTEL_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>{HOTEL_INFO.email}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
