import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { HOTEL_INFO } from '../constants';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="flex flex-col">
            <span className="text-3xl font-serif tracking-widest uppercase">
              Swissôtel
            </span>
            <span className="text-xs text-gold tracking-[0.3em] uppercase ml-1">
              Tashkent
            </span>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed">
            {t('footer.desc')}
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gold transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-gold transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-gold transition-colors"><Twitter size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-xl mb-6 text-gold">{t('footer.links')}</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li><Link to="/rooms" className="hover:text-white transition-colors">{t('nav.rooms')}</Link></li>
            <li><Link to="/dining" className="hover:text-white transition-colors">{t('nav.dining')}</Link></li>
            <li><Link to="/spa" className="hover:text-white transition-colors">{t('nav.spa')}</Link></li>
            <li><Link to="/offers" className="hover:text-white transition-colors">{t('nav.offers')}</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">{t('nav.contact')}</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-serif text-xl mb-6 text-gold">{t('footer.contact')}</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-gold shrink-0" />
              <span>{HOTEL_INFO.address}</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-gold shrink-0" />
              <span>{HOTEL_INFO.phone}</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-gold shrink-0" />
              <span>{HOTEL_INFO.email}</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-serif text-xl mb-6 text-gold">{t('footer.newsletter')}</h4>
          <p className="text-sm text-white/60 mb-4">{t('footer.newsletter_desc')}</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder={t('offers.newsletter.placeholder')} 
              className="bg-white/5 border border-white/10 px-4 py-2 text-sm w-full focus:outline-none focus:border-gold"
            />
            <button className="bg-gold text-navy px-4 py-2 text-sm font-semibold hover:bg-gold-light transition-colors">
              {t('footer.join')}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 space-y-4 md:space-y-0">
        <p>© {new Date().getFullYear()} Swissôtel Tashkent. {t('footer.rights')}</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white">{t('footer.privacy')}</a>
          <a href="#" className="hover:text-white">{t('footer.terms')}</a>
          <a href="#" className="hover:text-white">{t('footer.cookies')}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
