import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ROOMS, DINING, SPA_FEATURES_KEYS, HOTEL_INFO } from '../constants';
import SEO from '../components/SEO';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="overflow-hidden">
      <SEO 
        title="Swissôtel Tashkent | Luxury 5-Star Hotel in Uzbekistan"
        description="Experience world-class Swiss hospitality at Swissôtel Tashkent. Luxury rooms, fine dining, and premium spa facilities."
      />
      {/* Cinematic Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Layer 1: Background Layer (Parallax) */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80" 
            alt="Luxury Hotel Exterior" 
            className="w-full h-full object-cover filter blur-[1px]"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Layer 2: Mid Layer (Gradient + Glow) */}
        <div className="absolute inset-0 z-1 bg-linear-to-b from-navy/80 via-navy/40 to-transparent">
          <motion.div 
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-[50vw] h-[50vh] bg-gold/10 rounded-full blur-[120px] pointer-events-none"
          />
        </div>

        {/* Floating Particles Effect (Subtle depth) */}
        <div className="absolute inset-0 z-2 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%", 
                opacity: 0,
                scale: Math.random() * 0.5 + 0.5
              }}
              animate={{ 
                y: [null, "-100%"],
                opacity: [0, 0.12, 0],
                x: [null, (Math.random() - 0.5) * 100 + "px"]
              }}
              transition={{ 
                duration: Math.random() * 15 + 15, 
                repeat: Infinity, 
                ease: "linear",
                delay: Math.random() * 10
              }}
              className="absolute w-2 h-2 bg-gold/20 rounded-full blur-[1px]"
            />
          ))}
        </div>

        {/* Layer 3: Foreground Layer (Content) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-gold uppercase text-sm md:text-base mb-6 block font-bold tracking-[0.5em] text-shadow-luxury"
          >
            {t('hero.welcome')}
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-9xl font-serif text-white mb-8 tracking-tighter leading-none text-shadow-luxury"
          >
            {t('hero.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto mb-12 font-light italic tracking-wide text-shadow-luxury"
          >
            "{t('hero.subtitle')}"
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <Link 
              to="/contact" 
              className="group relative bg-gold text-navy px-12 py-5 rounded-sm text-sm uppercase tracking-widest font-bold transition-all overflow-hidden w-full md:w-auto shadow-xl"
            >
              <span className="relative z-10">{t('hero.cta_book')}</span>
              <motion.div 
                className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"
              />
            </Link>
            <Link 
              to="/rooms" 
              className="group relative border border-white/40 text-white px-12 py-5 rounded-sm text-sm uppercase tracking-widest font-bold transition-all overflow-hidden w-full md:w-auto luxury-blur"
            >
              <span className="relative z-10">{t('hero.cta_explore')}</span>
              <motion.div 
                className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 z-10"
        >
          <div className="w-px h-12 bg-linear-to-b from-transparent via-white/40 to-transparent mx-auto"></div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-champagne relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 overflow-hidden rounded-sm shadow-2xl">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80" 
                  alt="Swissôtel Tashkent Exterior" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -bottom-12 -right-12 hidden lg:block w-72 h-72 border-12 border-gold/10 z-0"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <span className="text-gold tracking-[0.4em] uppercase text-xs font-bold block">
                  {t('about.tag')}
                </span>
                <h2 className="text-5xl md:text-6xl font-serif text-navy leading-[1.1]">
                  {t('about.title')}
                </h2>
              </div>
              <p className="text-navy/70 text-xl leading-relaxed font-light">
                {t('about.desc')}
              </p>
              <Link 
                to="/rooms" 
                className="group inline-flex items-center space-x-4 text-navy font-bold uppercase tracking-[0.2em] text-sm"
              >
                <span className="relative">
                  {t('about.cta')}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                </span>
                <div className="w-12 h-12 rounded-full border border-navy/10 flex items-center justify-center group-hover:bg-navy group-hover:text-white transition-all duration-500">
                  <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rooms Preview */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
          >
            <div className="space-y-4">
              <span className="text-gold tracking-[0.4em] uppercase text-xs font-bold block">
                {t('rooms.tag')}
              </span>
              <h2 className="text-5xl md:text-6xl font-serif text-navy">
                {t('rooms.title')}
              </h2>
            </div>
            <Link 
              to="/rooms" 
              className="text-navy/40 hover:text-gold transition-colors uppercase tracking-widest text-xs font-bold border-b border-navy/10 pb-2"
            >
              {t('hero.cta_explore')}
            </Link>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {ROOMS.map((room, index) => (
              <motion.div 
                key={room.id}
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, amount: 0.2 }}
                className="group"
              >
                <div className="relative overflow-hidden aspect-4/5 mb-8 rounded-sm shadow-lg hover:shadow-2xl transition-shadow duration-500">
                  <motion.img 
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.8 }}
                    src={room.images[0]} 
                    alt={t(`rooms.types.${room.key}.name`)} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors duration-700"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <Link 
                      to="/rooms" 
                      className="bg-white text-navy px-8 py-4 text-xs uppercase tracking-widest font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700"
                    >
                      {t('rooms.view_details')}
                    </Link>
                  </div>
                </div>
                <h3 className="text-3xl font-serif text-navy mb-3 group-hover:text-gold group-hover:-translate-y-1 transition-all duration-500">
                  {t(`rooms.types.${room.key}.name`)}
                </h3>
                <p className="text-navy/60 text-base font-light leading-relaxed">
                  {t(`rooms.types.${room.key}.desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dining Section */}
      <section className="py-32 bg-navy text-white relative overflow-hidden">
        {/* Animated Background Element */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/4 w-250 h-250 border border-white/5 rounded-full pointer-events-none"
        />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl space-y-6">
              <span className="text-gold tracking-[0.4em] uppercase text-xs font-bold block">
                {t('dining.tag')}
              </span>
              <h2 className="text-5xl md:text-6xl font-serif leading-tight">
                {t('dining.title')}
              </h2>
              <p className="text-white/60 text-xl font-light leading-relaxed">
                {t('dining.desc')}
              </p>
            </div>
            <Link 
              to="/dining" 
              className="group flex items-center space-x-4 bg-gold text-navy px-10 py-5 rounded-sm text-sm uppercase tracking-widest font-bold hover:bg-white transition-all duration-500"
            >
              <span>{t('dining.view_all')}</span>
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {DINING.map((item, index) => (
              <motion.div 
                key={item.key}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative aspect-16/10 overflow-hidden group rounded-sm"
              >
                <img 
                  src={item.image} 
                  alt={t(`dining.venues.${item.key}.name`)} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-50 group-hover:opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-10 bg-linear-to-t from-navy via-navy/20 to-transparent">
                  <h3 className="text-3xl font-serif text-gold mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                    {t(`dining.venues.${item.key}.name`)}
                  </h3>
                  <p className="text-white/70 text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    {t(`dining.venues.${item.key}.desc`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spa & Wellness */}
      <section className="relative py-40 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <motion.div 
            animate={{ y: [0, -50, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <span className="text-gold tracking-[0.4em] uppercase text-xs font-bold block">
                  {t('spa.tag')}
                </span>
                <h2 className="text-5xl md:text-6xl font-serif text-navy leading-tight">
                  {t('spa.title')}
                </h2>
                <p className="text-navy/70 text-xl font-light leading-relaxed">
                  {t('spa.desc')}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                {SPA_FEATURES_KEYS.map((key, i) => (
                  <motion.div 
                    key={key}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, ease: "easeOut" }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-1.5 h-1.5 bg-gold rounded-full shadow-[0_0_10px_rgba(200,164,90,0.5)]"></div>
                    <span className="text-navy/80 font-medium tracking-wide text-sm uppercase">
                      {t(`spa.features.${key}`)}
                    </span>
                  </motion.div>
                ))}
              </div>
              <Link 
                to="/spa" 
                className="group relative inline-block bg-navy text-white px-12 py-5 rounded-sm text-sm uppercase tracking-widest font-bold overflow-hidden"
              >
                <span className="relative z-10">{t('spa.explore')}</span>
                <motion.div 
                  className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                />
              </Link>
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
                  alt="Swissôtel Spa & Wellness" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 border-30 border-champagne -m-12 z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-navy text-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-16 text-center">
          {[
            { label: t('stats.capacity'), value: "500+" },
            { label: t('stats.halls'), value: "8" },
            { label: t('stats.meetings'), value: "12" },
            { label: t('stats.suites'), value: "45" },
          ].map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="text-5xl md:text-6xl font-serif text-gold">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

     
      {/* Booking CTA Banner */}
      <section className="py-32 bg-gold-gradient relative overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"
        />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl md:text-8xl font-serif text-navy mb-12 leading-none">
              {t('hero.title')}
            </h2>
            <Link 
              to="/contact" 
              className="group relative inline-block bg-navy text-gold px-16 py-6 rounded-sm text-sm uppercase tracking-[0.3em] font-bold transition-all shadow-2xl overflow-hidden"
            >
              <span className="relative z-10">{t('hero.cta_book')}</span>
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

export default Home;
