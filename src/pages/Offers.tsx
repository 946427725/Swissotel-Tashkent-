import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Gift, Calendar, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Offers = () => {
  const { t } = useTranslation();
  
  const offers = [
    {
      title: t('offers.romantic.title'),
      subtitle: t('offers.romantic.subtitle'),
      desc: t('offers.romantic.desc'),
      image: "https://picsum.photos/seed/romantic/800/600",
      icon: <Gift className="text-gold" />,
    },
    {
      title: t('offers.business.title'),
      subtitle: t('offers.business.subtitle'),
      desc: t('offers.business.desc'),
      image: "https://picsum.photos/seed/business/800/600",
      icon: <Calendar className="text-gold" />,
    },
    {
      title: t('offers.weekend.title'),
      subtitle: t('offers.weekend.subtitle'),
      desc: t('offers.weekend.desc'),
      image: "https://picsum.photos/seed/weekend/800/600",
      icon: <Users className="text-gold" />,
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-champagne">
      <SEO 
        title={`${t('offers.title')} | Swissôtel Tashkent`}
        description="Exclusive luxury hotel offers in Tashkent. Romantic packages, business stays, and weekend escapes at Swissôtel."
      />
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mb-20">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://i.postimg.cc/dDM5GrPH/ff9b90e2-09c3-4442-b2bd-0d01953bb18c.jpg" 
            alt="Luxury Offers Hero" 
            className="w-full h-full object-cover filter blur-[1px]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-navy/60 backdrop-blur-[2px]"></div>
        </motion.div>
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-8xl font-serif mb-6 tracking-tight text-shadow-luxury"
          >
            {t('offers.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.4em" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-gold uppercase text-sm font-bold tracking-[0.4em] text-shadow-luxury"
          >
            {t('offers.tag')}
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {offers.map((offer, index) => (
            <motion.div 
              key={offer.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative bg-white rounded-sm overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-all duration-700 hover:-translate-y-2"
            >
              <div className="relative h-80 overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                  src={offer.image} 
                  alt={offer.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute top-6 right-6 bg-gold text-white px-6 py-2 text-xs font-bold uppercase tracking-widest shadow-xl">
                  {t('offers.limited')}
                </div>
                <div className="absolute top-6 left-6 bg-navy/80 backdrop-blur-md p-4 rounded-full">
                  {offer.icon}
                </div>
              </div>
              <div className="p-12 space-y-6">
                <span className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold block">{offer.subtitle}</span>
                <h3 className="text-3xl font-serif text-navy group-hover:text-gold transition-colors duration-500">
                  {offer.title}
                </h3>
                <p className="text-navy/70 text-lg font-light leading-relaxed">
                  {offer.desc}
                </p>
                <div className="pt-6">
                  <Link 
                    to="/contact"
                    className="group relative inline-flex items-center space-x-4 text-navy font-bold uppercase tracking-widest text-xs"
                  >
                    <span className="relative">
                      {t('offers.book')}
                      <span className="absolute bottom-0 left-0 w-full h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                    </span>
                    <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              
              {/* Glowing Border Effect */}
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/20 transition-all duration-700 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
