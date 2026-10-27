import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Industries & Services', path: '/services' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass py-3 shadow-lg shadow-black/25' : 'border-b border-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo with Shine Effect */}
        <Link
          to="/"
          aria-label="Auronex Tech Park home"
          className="group relative flex shrink-0 items-center overflow-hidden rounded-md p-0.5"
        >
          <img
            src="/auronex-logo.jpeg"
            alt="Auronex Tech Park"
            className={`object-contain rounded-md animate-logo-enter transition-transform duration-500 ease-out group-hover:scale-110 ${
              scrolled ? 'h-16 w-16' : 'h-20 w-20'
            }`}
            height="96"
            width="96"
          />
          {/* Gleaming shine sweep on hover */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden rounded-md"
          >
            <span className="shine-overlay" />
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `link-underline text-sm font-semibold tracking-wide transition-colors ${
                  isActive ? 'text-on-dark active font-bold' : 'text-on-dark-muted hover:text-on-dark'
                }`
              }
              data-status={location.pathname === link.path ? 'active' : undefined}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={businessInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-4 py-2 text-sm font-bold text-on-dark hover:text-cyan transition-colors"
          >
            Talk to us
          </a>
          <Link
            to="/contact"
            className="bg-brand shadow-glow rounded-full px-6 py-2.5 text-sm font-bold text-white transition-all hover:scale-105 active:scale-95"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-lg p-2 text-on-dark lg:hidden hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden animate-fade-up bg-navy/95 backdrop-blur-2xl border-b border-cyan/20 px-6 py-6 shadow-2xl">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-base font-semibold py-2 transition-colors ${
                    isActive ? 'text-cyan font-bold pl-2 border-l-2 border-cyan' : 'text-on-dark-muted hover:text-on-dark'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-4 flex flex-col gap-3 pt-4 border-t border-white/10">
              <a
                href={businessInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center rounded-full border border-cyan/40 px-5 py-3 text-sm font-bold text-on-dark hover:bg-white/5"
              >
                Talk to us (WhatsApp)
              </a>
              <Link
                to="/contact"
                className="w-full text-center bg-brand shadow-glow rounded-full px-5 py-3 text-sm font-bold text-white"
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
