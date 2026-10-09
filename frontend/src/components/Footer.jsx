import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';
import { navigationOfferings, companyContact } from '../data/interiorData';
import { southDelhiLocations } from '../data/locationsData';
import { seoFooterTabs } from '../data/seoFooterData';
import { InstagramIcon, FacebookIcon, LinkedinIcon, YoutubeIcon } from './SocialIcons';
import logoImg from '../assets/forhomedecor.png';

export default function Footer({ onOpenConsultation }) {
  const [emailSub, setEmailSub] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [activeSeoTab, setActiveSeoTab] = useState('interior-design');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailSub) {
      setSubscribed(true);
      setEmailSub('');
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 md:pb-12 border-t border-slate-800">
      {/* 1. Popular Locality & Services SEO Directory (Tabbed Interface at the very top of Footer) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 pb-12 border-b border-slate-800/80 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-rose-500 font-heading">
              Popular Services & Locality Directory
            </span>
            <p className="text-xs text-slate-400 mt-0.5">
              Explore German-precision interior design & decor solutions across Delhi NCR, South Delhi, Noida, Ghaziabad & Gurugram.
            </p>
          </div>
          <Link 
            to="/cities" 
            className="text-xs font-semibold text-rose-400 hover:text-white transition flex items-center gap-1 shrink-0 self-start sm:self-auto"
          >
            <span>View All Locality Guides</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Category Tabs (Active: White background with dark text, Inactive: Dark with border - identical to user screenshot) */}
        <div className="flex flex-wrap gap-2 sm:gap-2.5 items-center pt-1">
          {seoFooterTabs.map((tab) => {
            const isActive = activeSeoTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveSeoTab(tab.id)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-white text-slate-900 shadow-md font-bold'
                    : 'bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 hover:border-slate-500'
                }`}
              >
                {tab.title}
              </button>
            );
          })}
        </div>

        {/* Keywords list separated with pipes "|" (Exact format as in screenshot) */}
        {(() => {
          const currentTab = seoFooterTabs.find((t) => t.id === activeSeoTab) || seoFooterTabs[0];
          return (
            <div className="text-xs sm:text-sm text-slate-400 leading-relaxed sm:leading-loose pt-2">
              {currentTab.keywords.map((item, index) => (
                <React.Fragment key={index}>
                  <Link
                    to={item.link}
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-rose-400 hover:underline transition-colors"
                    title={item.service}
                  >
                    {item.text}
                  </Link>
                  {index < currentTab.keywords.length - 1 && (
                    <span className="text-slate-600 select-none mx-2 font-light">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          );
        })()}
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block group">
              <div className="bg-white p-2.5 rounded-2xl inline-flex items-center shadow-md transition-transform group-hover:scale-105">
                <img 
                  src={logoImg} 
                  alt="FourCube Decor" 
                  className="h-14 sm:h-16 w-auto object-contain" 
                />
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed">
              India's trusted modular interior brand specializing in personalized modular kitchens, luxurious living rooms, and turnkey home renovations with precision German machinery.
            </p>

            {/* Social Media Links */}
            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Follow Us On Social Media
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={companyContact.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-rose-600 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white transition group"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={companyContact.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-rose-600 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white transition group"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href={companyContact.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-rose-600 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white transition group"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={companyContact.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-rose-600 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white transition group"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Pages */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Company
            </h5>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to="/" className="hover:text-rose-400 transition">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-rose-400 transition">About Us</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-rose-400 transition">Design Gallery</Link>
              </li>
              <li>
                <Link to="/commercial" className="hover:text-rose-400 transition font-bold text-slate-300">Commercial Decor</Link>
              </li>
              <li>
                <Link to="/commercial/mall-decor" className="hover:text-rose-400 transition text-xs pl-2">↳ Mall Decor</Link>
              </li>
              <li>
                <Link to="/commercial/office-decor" className="hover:text-rose-400 transition text-xs pl-2">↳ Office Decor</Link>
              </li>
              <li>
                <Link to="/commercial/jewellery-shop-decor" className="hover:text-rose-400 transition text-xs pl-2">↳ Jewellery Shop Decor</Link>
              </li>
              <li>
                <Link to="/commercial/shop-decor" className="hover:text-rose-400 transition text-xs pl-2">↳ Shop Decor</Link>
              </li>
              <li>
                <Link to="/why-us" className="hover:text-rose-400 transition">Why FourCube (Warranty)</Link>
              </li>
              <li>
                <Link to="/guides" className="hover:text-rose-400 transition">Design Guides & Ideas</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-rose-400 transition">Contact & Studios</Link>
              </li>
            </ul>
          </div>

          {/* Offerings Links */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Our Interior Offerings
            </h5>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 text-sm text-slate-400">
              {navigationOfferings.map((offering) => (
                <li key={offering.id}>
                  <Link to={`/category/${offering.id}`} className="hover:text-rose-400 transition flex items-center gap-1.5">
                    <span>{offering.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Experience Studio & Contacts */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Studio & Contact
            </h5>
            
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-1" />
                <span>{companyContact.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-rose-500 shrink-0" />
                <a href={`tel:${companyContact.phoneRaw}`} className="hover:text-white transition">
                  {companyContact.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-rose-500 shrink-0" />
                <a href={`mailto:${companyContact.email}`} className="hover:text-white transition">
                  {companyContact.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>{companyContact.hours}</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-slate-300 mb-2">
                Get monthly interior trend report & decor discounts:
              </p>
              {subscribed ? (
                <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/60 p-2.5 rounded-xl border border-emerald-800">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Subscribed! Check your inbox soon.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={emailSub}
                    onChange={(e) => setEmailSub(e.target.value)}
                    className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-rose-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-semibold transition"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>



        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} FourCube Decor Technologies Pvt Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
            <span>Warranty Terms</span>
            <span>Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
