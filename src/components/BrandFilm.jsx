import React, { useRef, useState } from 'react';
import { Play } from 'lucide-react';

export default function BrandFilm() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.muted = false;
        video.play().then(() => setIsPlaying(true)).catch(() => {});
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className="relative overflow-hidden bg-night text-on-dark py-24 md:py-32">
      {/* Background Grid Lines & Luminous Blue Fade */}
      <div className="grid-lines pointer-events-none absolute inset-0 z-0" />
      <div className="blue-fade pointer-events-none absolute inset-0 z-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header matching user screenshots */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow !text-cyan text-xs tracking-[0.24em] font-bold">
            BRAND FILM
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl text-white font-display tracking-tight">
            A first look at <span className="text-brand">Auronex</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-on-dark-muted max-w-2xl mx-auto leading-relaxed">
            A short animated intro built from our official logo — the same clip we use in presentations and promos.
          </p>
        </div>

        {/* Video Container with Blue Glow & Glass Border */}
        <div className="relative mx-auto mt-12 md:mt-16 max-w-4xl">
          {/* Luminous Ambient Blue Glow Aura */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/35 via-cyan-400/25 to-blue-600/35 rounded-[36px] blur-3xl opacity-80 pointer-events-none" />

          {/* Glass Enclosure */}
          <div className="glass relative overflow-hidden rounded-[28px] p-2 md:p-3 border border-cyan-400/25 shadow-2xl bg-navy/60">
            <div
              role="button"
              tabIndex={0}
              aria-label="Play or pause the Auronex animated intro"
              onClick={handlePlay}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handlePlay();
                }
              }}
              className="bg-navy relative aspect-video overflow-hidden rounded-[20px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan group"
            >
              <video
                ref={videoRef}
                poster="/auronex-logo.jpeg"
                controls={isPlaying}
                playsInline
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
              >
                <source src="/auronex-logo-intro.webm" type="video/webm" />
                <source src="/auronex-logo-intro.mp4" type="video/mp4" />
              </video>

              {/* Play icon overlay if not currently playing */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/25 transition-opacity group-hover:bg-black/10">
                  <div className="bg-brand/90 shadow-glow flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full text-white transition-transform duration-300 group-hover:scale-110">
                    <Play className="h-7 w-7 md:h-8 md:w-8 fill-current ml-1" />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Watch the intro button matching media_1793108192119_d98f1d29.png */}
          {!isPlaying && (
            <div className="relative mt-8 flex justify-center">
              <button
                type="button"
                onClick={handlePlay}
                className="bg-gradient-to-r from-[#0091ff] to-[#00d4ff] shadow-lg shadow-cyan-500/40 inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 font-bold text-white transition-all duration-300 hover:scale-105 hover:brightness-110 active:scale-95 cursor-pointer text-sm md:text-base"
              >
                <Play className="h-4 w-4 fill-current" />
                Watch the intro
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
