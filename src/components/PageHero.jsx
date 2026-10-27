import React from 'react';
import ConstellationCanvas from './ConstellationCanvas';

export default function PageHero({ eyebrow, title, intro }) {
  return (
    <section className="bg-night relative overflow-hidden pt-40 pb-24 text-on-dark">
      <ConstellationCanvas density={45} />
      <div className="grid-lines pointer-events-none absolute inset-0 z-0" />
      <div className="blue-fade pointer-events-none absolute inset-0 z-0" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <p className="eyebrow animate-fade-up !text-cyan font-bold">{eyebrow}</p>
        <h1
          className="animate-fade-up mt-5 max-w-4xl text-4xl font-bold leading-[1.05] md:text-6xl font-display tracking-tight text-white"
          style={{ animationDelay: '80ms' }}
        >
          {title}
        </h1>
        {intro && (
          <p
            className="animate-fade-up mt-6 max-w-2xl text-lg text-on-dark-muted leading-relaxed"
            style={{ animationDelay: '160ms' }}
          >
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
