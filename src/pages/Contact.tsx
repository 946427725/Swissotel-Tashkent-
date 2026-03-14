import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Loader2 } from 'lucide-react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { HOTEL_INFO, ROOMS } from '../constants';
import SEO from '../components/SEO';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    arrivalDate: '',
    departureDate: '',
    guests: '1',
    roomType: t(`rooms.types.${ROOMS[0].key}.name`),
    message: '',
    honeypot: '', // Anti-spam field
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await axios.post('/api/inquiry', formData);
      setStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        arrivalDate: '',
        departureDate: '',
        guests: '1',
        roomType: t(`rooms.types.${ROOMS[0].key}.name`),
        message: '',
        honeypot: '',
      });
    } catch (error) {
      console.error('Inquiry error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-24 pb-20 bg-champagne min-h-screen">
      <SEO 
        title={`${t('contact.title')} | Swissôtel Tashkent`}
        description="Contact our luxury 5-star hotel in Tashkent for bookings, events, and inquiries."
      />
      
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden mb-20">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80" 
            alt="Luxury Contact Hero" 
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
            {t('contact.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.4em" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-gold uppercase text-sm font-bold tracking-[0.4em] text-shadow-luxury"
          >
            {t('contact.tag')}
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-serif text-navy">Swissôtel Tashkent</h2>
              <p className="text-navy/70 text-lg leading-relaxed">
                {t('contact.info_desc')}
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-gold/10 p-4 rounded-full text-gold">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy uppercase tracking-widest text-sm mb-1">{t('contact.address')}</h4>
                  <p className="text-navy/70">{HOTEL_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gold/10 p-4 rounded-full text-gold">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy uppercase tracking-widest text-sm mb-1">{t('contact.phone_label')}</h4>
                  <p className="text-navy/70">{HOTEL_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gold/10 p-4 rounded-full text-gold">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy uppercase tracking-widest text-sm mb-1">{t('contact.email_label')}</h4>
                  <p className="text-navy/70">{HOTEL_INFO.email}</p>
                </div>
              </div>
            </div>

            {/* Map Embed Placeholder */}
            <div className="aspect-video w-full bg-navy/5 rounded-sm overflow-hidden border border-navy/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.2315507976573!2d69.28135997518756!3d41.303826101175524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bcf4f176c8f%3A0x223285c6084c85e3!2sSwiss%C3%B4tel%20Tashkent!5e0!3m2!1sru!2s!4v1771948698768!5m2!1sru!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Inquiry Form */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-navy p-8 md:p-12 rounded-sm shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-bl-full -mr-16 -mt-16"></div>
            
            <h2 className="text-3xl font-serif text-gold mb-8">{t('contact.form_title')}</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot field */}
              <input 
                type="text" 
                name="honeypot" 
                value={formData.honeypot} 
                onChange={handleChange} 
                className="hidden" 
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/60 font-semibold">{t('contact.name')}</label>
                  <input 
                    required
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/60 font-semibold">{t('contact.email')}</label>
                  <input 
                    required
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/60 font-semibold">{t('contact.phone')}</label>
                  <input 
                    required
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/60 font-semibold">{t('contact.room')}</label>
                  <select 
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors appearance-none"
                  >
                    {ROOMS.map(room => (
                      <option key={room.id} value={t(`rooms.types.${room.key}.name`)} className="bg-navy">{t(`rooms.types.${room.key}.name`)}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/60 font-semibold">{t('contact.arrival')}</label>
                  <input 
                    required
                    type="date" 
                    name="arrivalDate"
                    value={formData.arrivalDate}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/60 font-semibold">{t('contact.departure')}</label>
                  <input 
                    required
                    type="date" 
                    name="departureDate"
                    value={formData.departureDate}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/60 font-semibold">{t('contact.guests')}</label>
                  <input 
                    required
                    type="number" 
                    min="1"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/60 font-semibold">{t('contact.message')}</label>
                <textarea 
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                disabled={status === 'loading'}
                type="submit"
                className="w-full bg-gold hover:bg-gold-light text-navy py-4 rounded-sm font-bold uppercase tracking-widest transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <>
                    <span>{t('contact.submit')}</span>
                    <Send size={18} />
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="text-emerald-400 text-sm text-center font-medium">
                  {t('contact.success')}
                </p>
              )}
              {status === 'error' && (
                <p className="text-rose-400 text-sm text-center font-medium">
                  {t('contact.error')}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
