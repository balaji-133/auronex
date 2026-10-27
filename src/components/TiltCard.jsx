import React, { useRef } from 'react';

export default function TiltCard({ children, className = '' }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(900px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) translateY(-4px)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = '';
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative transition-transform duration-300 ease-out ${className}`}
    >
      <div className="bg-brand pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-40" />
      <div className="relative h-full rounded-[inherit]">{children}</div>
    </div>
  );
}
