import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { DINING } from '../constants';
import { Utensils, Wine, Coffee, Download, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Dining = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-24 pb-20 bg-navy text-white">
      <SEO 
        title={`${t('dining.title')} | Swissôtel Tashkent`}
        description="Dine at Swissôtel Tashkent. Experience Swiss and Uzbek fusion cuisine at SAFFRON, signature cocktails at The Silk Bar, and healthy options at Spa Bar."
      />
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden mb-20">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80" 
            alt="Luxury Dining Hero" 
            className="w-full h-full object-cover filter blur-[1px]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-navy/60 backdrop-blur-[2px]"></div>
        </motion.div>
        <div className="relative z-10 text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-9xl font-serif mb-6 tracking-tighter text-shadow-luxury"
          >
            {t('dining.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-gold uppercase text-sm font-bold tracking-[0.5em] text-shadow-luxury"
          >
            {t('dining.tag')}
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-40">
        {DINING.map((item, index) => (
          <motion.div 
            key={item.key}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-24 items-center`}
          >
            <div className="w-full lg:w-1/2">
              <motion.div 
                whileHover={{ scale: 1.04, y: -6 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative group overflow-hidden rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.3)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.4)]"
              >
                <img 
                  src={item.image} 
                  alt={t(`dining.venues.${item.key}.name`)} 
                  className="w-full aspect-video object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 border border-white/10 m-4 group-hover:m-2 transition-all duration-500"></div>
              </motion.div>
            </div>
            <div className="w-full lg:w-1/2 space-y-10">
              <div className="space-y-6">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "80px" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-0.5 bg-gold"
                />
                <div className="flex items-center space-x-4 text-gold">
                  {index === 0 ? <Utensils size={24} /> : index === 1 ? <Wine size={24} /> : <Coffee size={24} />}
                  <span className="text-xs uppercase tracking-[0.3em] font-bold">{t('dining.venue_tag')}</span>
                </div>
                <h2 className="text-5xl font-serif text-gold leading-tight">{t(`dining.venues.${item.key}.name`)}</h2>
                <p className="text-white/70 text-xl font-light leading-relaxed">{t(`dining.venues.${item.key}.desc`)}</p>
              </div>
              
              <div className="flex items-center space-x-8 pt-4">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-white/40 mb-2">{t('dining.hours')}</span>
                  <div className="flex items-center space-x-3">
                    <Clock size={16} className="text-gold" />
                    <span className="text-sm font-medium">07:00 - 23:00</span>
                  </div>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-white/40 mb-2">{t('dining.cuisine')}</span>
                  <div className="flex items-center space-x-3">
                    <Utensils size={16} className="text-gold" />
                    <span className="text-sm font-medium">{t(`dining.venues.${item.key}.cuisine`)}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 pt-6">
                <Link 
                  to="/contact"
                  className="group relative inline-flex items-center space-x-6 bg-gold text-navy px-12 py-5 rounded-sm text-sm uppercase tracking-widest font-bold overflow-hidden"
                >
                  <span className="relative z-10">{t('dining.reserve')}</span>
                  <motion.div 
                    className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                  />
                </Link>
                <button className="group relative inline-flex items-center space-x-4 border border-white/20 text-white px-10 py-5 rounded-sm text-sm uppercase tracking-widest font-bold overflow-hidden">
                  <span className="relative z-10 flex items-center space-x-3">
                    <Download size={18} />
                    <span>{t('dining.menu')}</span>
                  </span>
                  <motion.div 
                    className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                  />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Dining;
