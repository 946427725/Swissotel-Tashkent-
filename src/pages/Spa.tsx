import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SPA_FEATURES_KEYS } from '../constants';
import { Heart, Waves, Wind, Zap, Sparkles, Droplets, Activity, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Spa = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-24 pb-20 bg-white overflow-hidden">
      <SEO 
        title={`${t('spa.title')} | Swissôtel Tashkent`}
        description="Rejuvenate at Purovel Spa & Sport. Indoor pool, private hammams, and Swiss-inspired treatments in Tashkent."
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
            src="https://i.postimg.cc/RZ6gN9pT/c70d8a79-e4ad-4906-a8c0-214da290fa70.jpg" 
            alt="Luxury Spa Hero" 
            className="w-full h-full object-cover filter blur-[1px]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-navy/60 backdrop-blur-[2px]"></div>
        </motion.div>
        
        {/* Water Ripple Effect Overlay */}
        <motion.div 
          animate={{ 
            opacity: [0.05, 0.15, 0.05],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 z-1 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(200,164,90,0.1)_100%)] pointer-events-none"
        />

        <div className="relative z-10 text-center text-white px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-9xl font-serif mb-6 tracking-tight text-shadow-luxury"
          >
            {t('spa.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-gold uppercase text-sm font-bold tracking-[0.5em] text-shadow-luxury"
          >
            {t('spa.tag')}
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-gold tracking-[0.4em] uppercase text-xs font-bold block">{t('spa.philosophy')}</span>
              <h2 className="text-5xl font-serif text-navy leading-tight">{t('spa.title')}</h2>
            </div>
            <p className="text-navy/70 text-xl font-light leading-relaxed">
              {t('spa.desc')}
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              {SPA_FEATURES_KEYS.map((key, i) => (
                <motion.div 
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, ease: "easeOut" }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-1.5 h-1.5 bg-gold rounded-full shadow-[0_0_10px_rgba(200,164,90,0.5)]"></div>
                  <span className="text-navy/80 font-medium tracking-wide text-xs uppercase">{t(`spa.features.${key}`)}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 overflow-hidden rounded-sm shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80" 
                alt="Spa Interior" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 border-30 border-champagne -m-12 z-0"></div>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="space-y-20 mb-40">
          <div className="text-center space-y-4 mb-20">
            <span className="text-gold tracking-[0.4em] uppercase text-xs font-bold block">{t('spa.treatments')}</span>
            <h2 className="text-5xl font-serif text-navy">{t('spa.experiences')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { key: "massage", icon: <Wind /> },
              { key: "hammam", icon: <Waves /> },
              { key: "facial", icon: <Sparkles /> },
              { key: "detox", icon: <Droplets /> },
              { key: "training", icon: <Activity /> },
              { key: "yoga", icon: <Heart /> },
            ].map((service, index) => (
              <motion.div 
                key={service.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group p-12 bg-champagne/30 rounded-sm border border-navy/5 hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-gold mb-8 group-hover:bg-gold group-hover:text-white transition-all duration-500 shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif text-navy mb-4">{t(`spa.services.${service.key}.name`)}</h3>
                <p className="text-navy/60 font-light leading-relaxed">{t(`spa.services.${service.key}.desc`)}</p>
                <motion.div 
                  initial={{ width: 0 }}
                  whileHover={{ width: "40px" }}
                  className="h-px bg-gold mt-8"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Membership Section */}
      <section className="relative py-40 bg-navy text-white overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute inset-0 opacity-10"
        >
          <img 
            src="https://picsum.photos/seed/membership/1920/1080" 
            alt="Membership Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
              {t('spa.membership')}
            </h2>
            <p className="text-white/60 text-xl mb-12 font-light leading-relaxed">
              {t('spa.membership_desc')}
            </p>
            <Link 
              to="/contact"
              className="group relative inline-block bg-gold text-navy px-16 py-6 rounded-sm text-sm uppercase tracking-[0.3em] font-bold overflow-hidden"
            >
              <span className="relative z-10">{t('spa.inquire')}</span>
              <motion.div 
                className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"
              />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Spa;
