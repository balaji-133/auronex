import React from 'react';

export default function HeroGraphic() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <div className="bg-brand absolute inset-[18%] rounded-full opacity-30 blur-3xl" />
      {[0, 1, 2].map((e) => (
        <div
          key={e}
          className="animate-spin-slow absolute rounded-full border border-cyan/25"
          style={{
            inset: `${e * 11}%`,
            animationDuration: `${40 + e * 20}s`,
            animationDirection: e % 2 ? 'reverse' : 'normal',
          }}
        >
          <span className="absolute -top-1.5 left-1/2 h-3 w-3 rounded-full bg-cyan shadow-glow" />
        </div>
      ))}
      <div className="bg-brand absolute inset-[24%] rounded-full opacity-50 blur-2xl" />
      <div className="bg-electric absolute inset-[34%] rounded-full opacity-60 blur-xl" />
      <div className="bg-cyan absolute inset-[44%] rounded-full opacity-80 blur-lg" />

      {/* Floating badges */}
      <div
        className="glass animate-float absolute left-0 top-[12%] rounded-xl px-4 py-3 font-mono text-xs text-cyan"
        style={{ animationDelay: '1s' }}
      >
        model.train(<span className="text-on-dark">data</span>)
      </div>

      <div
        className="glass animate-float absolute bottom-[14%] right-0 rounded-xl px-4 py-3 text-xs text-on-dark"
        style={{ animationDelay: '2s' }}
      >
        <span className="mr-2 inline-block h-2 w-2 rounded-full bg-cyan" />
        Deploy · cloud-ready
      </div>

      <div
        className="glass animate-float absolute bottom-[2%] left-[12%] rounded-xl px-4 py-3 font-mono text-xs text-on-dark-muted"
        style={{ animationDelay: '3s' }}
      >
        &lt;Software /&gt; + AI
      </div>
    </div>
  );
}
