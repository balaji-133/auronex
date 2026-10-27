import React from 'react';

export default function SectionHeader({ eyebrow, title, intro, dark = false, center = false }) {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p className={`eyebrow tracking-[0.22em] text-xs font-bold uppercase ${dark ? '!text-cyan' : 'text-primary'}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-4 text-3xl font-bold leading-[1.12] md:text-5xl lg:text-5xl font-display tracking-tight ${
          dark ? 'text-white' : 'text-foreground'
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 text-base md:text-lg leading-relaxed ${
            dark ? 'text-on-dark-muted' : 'text-muted-foreground'
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
