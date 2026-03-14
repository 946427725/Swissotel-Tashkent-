import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ROOMS, ROOM_CATEGORIES } from '../constants';
import { 
  Maximize, 
  Bed, 
  Users, 
  Wifi, 
  Waves, 
  Briefcase, 
  Bath, 
  ChevronLeft, 
  ChevronRight, 
  Accessibility,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const RoomGallery = ({ images, title }: { images: string[], title: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative group overflow-hidden rounded-sm bg-navy/5 aspect-4/3">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${title} - Image ${currentIndex + 1}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
      </AnimatePresence>
      
      <div className="absolute inset-0 bg-linear-to-t from-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {images.length > 1 && (
        <>
          <button 
            onClick={(e) => { e.preventDefault(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:text-navy"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={(e) => { e.preventDefault(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:text-navy"
          >
            <ChevronRight size={20} />
          </button>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, i) => (
              <div 
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-gold w-4' : 'bg-white/40'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

interface RoomCardProps {
  room: any;
  isLux?: boolean;
}

const RoomCard: React.FC<RoomCardProps> = ({ room, isLux = false }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`group bg-white rounded-sm overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-navy/5 flex flex-col h-full ${isLux ? 'ring-1 ring-gold/20' : ''}`}
    >
      <div className="relative">
        <RoomGallery images={room.images} title={t(`rooms.types.${room.key}.name`)} />
        {isLux && (
          <div className="absolute top-4 left-4 bg-gold text-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] shadow-xl z-20">
            {t('rooms.luxury_suite')}
          </div>
        )}
        {room.category === ROOM_CATEGORIES.ACCESSIBLE && (
          <div className="absolute top-4 left-4 bg-navy text-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] shadow-xl z-20 flex items-center space-x-2">
            <Accessibility size={12} />
            <span>{t('rooms.accessible_badge')}</span>
          </div>
        )}
      </div>

      <div className="p-8 flex flex-col grow space-y-6">
        <div className="space-y-3">
          <h3 className={`font-serif text-navy transition-colors duration-500 group-hover:text-gold ${isLux ? 'text-3xl' : 'text-2xl'}`}>
            {t(`rooms.types.${room.key}.name`)}
          </h3>
          <p className="text-navy/60 text-sm leading-relaxed line-clamp-3 font-light">
            {t(`rooms.types.${room.key}.desc`)}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 py-6 border-y border-navy/5">
          <div className="flex flex-col items-center text-center space-y-1">
            <Maximize size={16} className="text-gold/60" />
            <span className="text-[10px] text-navy/40 uppercase tracking-widest font-bold">{t('rooms.size')}</span>
            <span className="text-xs text-navy font-medium">{room.size}</span>
          </div>
          <div className="flex flex-col items-center text-center space-y-1 border-x border-navy/5">
            <Bed size={16} className="text-gold/60" />
            <span className="text-[10px] text-navy/40 uppercase tracking-widest font-bold">{t('rooms.bedding')}</span>
            <span className="text-xs text-navy font-medium">{room.bedding}</span>
          </div>
          <div className="flex flex-col items-center text-center space-y-1">
            <Users size={16} className="text-gold/60" />
            <span className="text-[10px] text-navy/40 uppercase tracking-widest font-bold">{t('rooms.max_guests')}</span>
            <span className="text-xs text-navy font-medium">{room.maxGuests}</span>
          </div>
        </div>

        <div className="flex justify-between items-center py-2">
          <div className="flex space-x-4 text-navy/30">
            <Wifi size={18} className="hover:text-gold transition-colors cursor-help" />
            <Waves size={18} className="hover:text-gold transition-colors cursor-help" />
            <Briefcase size={18} className="hover:text-gold transition-colors cursor-help" />
            <Bath size={18} className="hover:text-gold transition-colors cursor-help" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 mt-auto">
          <Link
           to="/contact"
           className="px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-navy border border-navy/10 rounded-sm hover:bg-navy hover:text-white transition-all duration-500 text-center flex items-center justify-center"
     >
           {t('rooms.view_details')}
           </Link>
          <Link
          to="/contact"
          className="px-4 py-3 text-[10px] font-bold uppercase tracking-widest bg-gold text-white rounded-sm hover:bg-navy transition-all duration-500 text-center flex items-center justify-center space-x-2"
     >
         <span>{t('rooms.book')}</span>
         <ArrowRight size={12} />
        </Link>
       </div>
      </div>
    </motion.div>
  );
};

const Rooms = () => {
  const { t } = useTranslation();

  const standardRooms = ROOMS.filter(r => r.category === ROOM_CATEGORIES.STANDARD);
  const luxRooms = ROOMS.filter(r => r.category === ROOM_CATEGORIES.LUX);
  const accessibleRooms = ROOMS.filter(r => r.category === ROOM_CATEGORIES.ACCESSIBLE);

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <SEO 
        title={`${t('rooms.title')} | Swissôtel Tashkent`}
        description="Explore our luxury rooms and suites at Swissôtel Tashkent. From Swiss Advantage rooms to expansive Executive Suites."
      />
      
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mb-32">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1920&q=80" 
            alt="Luxury Rooms Hero" 
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
            {t('rooms.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.4em" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-gold uppercase text-sm font-bold tracking-[0.4em] text-shadow-luxury"
          >
            {t('rooms.subtitle')}
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-32">
        
        {/* SECTION 1: STANDARD */}
        <section className="space-y-16">
          <div className="text-center space-y-4">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gold tracking-[0.5em] uppercase text-xs font-bold block"
            >
              {t('rooms.sections.standard')}
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-serif text-navy">{t('rooms.types.advantage_king.name').split(' ').slice(0, 2).join(' ')}</h2>
            <div className="w-20 h-px bg-gold/30 mx-auto mt-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {standardRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </section>

        {/* SECTION 2: LUX */}
        <section className="space-y-16 py-32 bg-navy/2 -mx-6 md:-mx-12 px-6 md:px-12">
          <div className="text-center space-y-4">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gold tracking-[0.5em] uppercase text-xs font-bold block"
            >
              {t('rooms.sections.lux')}
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-serif text-navy">{t('rooms.luxury_suite')}s</h2>
            <div className="w-20 h-px bg-gold/30 mx-auto mt-8"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {luxRooms.map((room) => (
              <RoomCard key={room.id} room={room} isLux={true} />
            ))}
          </div>
        </section>

        {/* SECTION 3: ACCESSIBLE */}
        <section className="space-y-16 pb-20">
          <div className="text-center space-y-4">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gold tracking-[0.5em] uppercase text-xs font-bold block"
            >
              {t('rooms.sections.accessible')}
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-serif text-navy">{t('rooms.accessible_badge')}</h2>
            <div className="w-20 h-px bg-gold/30 mx-auto mt-8"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {accessibleRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Rooms;
