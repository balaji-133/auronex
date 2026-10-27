import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Instagram, Linkedin, Facebook } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

export default function Footer() {
  return (
    <footer className="bg-night relative overflow-hidden text-on-dark pt-10">
      <div className="grid-lines pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        {/* Callout Card (Matching Image 3) */}
        <div className="glass mb-16 flex flex-col items-start justify-between gap-6 rounded-3xl p-8 md:flex-row md:items-center md:p-12 border border-cyan/20 shadow-2xl">
          <div>
            <h3 className="text-2xl font-bold font-display md:text-3xl lg:text-4xl text-white">
              From ideas to{' '}
              <span className="text-brand">intelligent solutions.</span>
            </h3>
            <p className="mt-2 text-base md:text-lg text-on-dark-muted">
              Tell us what you're building. We'll help you engineer it.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-brand shadow-glow rounded-full px-8 py-4 font-bold text-white transition-all duration-300 hover:scale-105 active:scale-95 shrink-0 text-base shadow-cyan-500/30"
          >
            Start a project
          </Link>
        </div>

        {/* Footer Links & Info (Matching Image 3) */}
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2 space-y-5">
            {/* Logo Card with Shine Effect */}
            <Link
              to="/"
              aria-label="Auronex Tech Park home"
              className="group relative inline-flex items-center justify-center p-2 rounded-2xl bg-white shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-cyan-500/30 overflow-hidden cursor-pointer w-20 h-20"
            >
              <img
                src="/auronex-logo.jpeg"
                alt="Auronex Tech Park"
                className="w-full h-full object-contain rounded-xl animate-logo-enter"
                height="80"
                width="80"
              />
              {/* Brilliant diagonal shine beam on hover */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl"
              >
                <span className="shine-overlay" />
              </span>
            </Link>

            <p className="max-w-md text-sm text-on-dark-muted leading-relaxed">
              Software Development &amp; AI Excellence Center. Engineering Digital Excellence. Empowering Intelligent Futures.
            </p>

            <div className="flex items-start gap-2 text-xs text-on-dark-muted max-w-md pt-1">
              <MapPin className="h-4 w-4 shrink-0 text-cyan mt-0.5" />
              <span>{businessInfo.address}</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-on-dark-muted">
              <Clock className="h-4 w-4 shrink-0 text-cyan" />
              <span>{businessInfo.hours.weekdays} | {businessInfo.hours.sunday}</span>
            </div>

            <div className="flex flex-col gap-2.5 pt-2">
              <a
                href={`mailto:${businessInfo.email}`}
                className="inline-flex items-center gap-2 text-sm font-bold text-cyan hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-cyan" />
                {businessInfo.email}
              </a>
              {businessInfo.phones.map((phone) => (
                <a
                  key={phone.raw}
                  href={`tel:${phone.raw}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-cyan hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 text-cyan" />
                  {phone.display}
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-3">
              {businessInfo.socials.instagram && (
                <a
                  href={businessInfo.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Auronex Tech Park Instagram"
                  className="glass flex h-10 w-10 items-center justify-center rounded-full text-cyan hover:text-white hover:border-cyan transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              )}
              {businessInfo.socials.linkedin ? (
                <a
                  href={businessInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="glass flex h-10 w-10 items-center justify-center rounded-full text-cyan hover:text-white hover:border-cyan transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              ) : (
                <span
                  title="LinkedIn (Configurable)"
                  className="glass flex h-10 w-10 items-center justify-center rounded-full text-on-dark-muted/40 cursor-not-allowed"
                >
                  <Linkedin className="h-4 w-4" />
                </span>
              )}
              {businessInfo.socials.facebook ? (
                <a
                  href={businessInfo.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="glass flex h-10 w-10 items-center justify-center rounded-full text-cyan hover:text-white hover:border-cyan transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              ) : (
                <span
                  title="Facebook (Configurable)"
                  className="glass flex h-10 w-10 items-center justify-center rounded-full text-on-dark-muted/40 cursor-not-allowed"
                >
                  <Facebook className="h-4 w-4" />
                </span>
              )}
            </div>
          </div>

          <div>
            <h4 className="eyebrow !text-cyan tracking-[0.2em] font-bold text-xs uppercase">EXPLORE</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-on-dark-muted font-medium">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Industries &amp; Services
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow !text-cyan tracking-[0.2em] font-bold text-xs uppercase">FOCUS</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-on-dark-muted font-medium">
              <li>Software Engineering</li>
              <li>Artificial Intelligence</li>
              <li>Data &amp; Cloud</li>
              <li>Training &amp; Careers</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-on-dark-muted md:flex-row">
          <p>© 2026 Auronex Tech Park. All rights reserved.</p>
          <p>Build. Innovate. Transform.</p>
        </div>
      </div>
    </footer>
  );
}
