import React from 'react';

export default function SectionWrapper({ children, dark = false, className = '' }) {
  return (
    <section className={`relative overflow-hidden ${dark ? 'bg-night text-on-dark' : ''} ${className}`}>
      {dark && (
        <>
          <div className="grid-lines pointer-events-none absolute inset-0 z-0" />
          <div className="blue-fade pointer-events-none absolute inset-0 z-0" />
        </>
      )}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32">
        {children}
      </div>
    </section>
  );
}
