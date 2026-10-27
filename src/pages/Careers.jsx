import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeader from '../components/SectionHeader';
import TiltCard from '../components/TiltCard';
import { careerOfferings, careerPathways } from '../data/servicesData';
import { businessInfo } from '../data/businessInfo';

export default function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers & opportunities"
        title={
          <>
            From skills to <span className="text-brand">careers that matter</span>
          </>
        }
        intro="Whether you're a student, a fresh graduate or an experienced professional, Auronex offers pathways to learn, build and grow."
      />

      {/* 4 Offerings Cards in TiltCards */}
      <SectionWrapper>
        <div className="grid gap-6 md:grid-cols-2">
          {careerOfferings.map((item) => (
            <TiltCard key={item.title} className="rounded-2xl">
              <div className="shadow-card h-full rounded-2xl border bg-card p-8 flex flex-col justify-between">
                <div>
                  <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/50">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                  >
                    {item.action} →
                  </Link>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </SectionWrapper>

      {/* Your Pathway (Dark) */}
      <SectionWrapper dark={true}>
        <SectionHeader
          dark={true}
          eyebrow="Your pathway"
          title="Skills to employment, step by step"
        />

        <ol className="mt-14 grid gap-5 md:grid-cols-4">
          {careerPathways.map((step) => (
            <li
              key={step.num}
              className="glass rounded-2xl p-7 hover:shadow-glow transition-all duration-300"
            >
              <span className="text-brand font-display text-3xl font-bold">
                {step.num}
              </span>
              <p className="mt-4 text-lg font-semibold">{step.title}</p>
            </li>
          ))}
        </ol>
      </SectionWrapper>

      {/* Open Positions Shared on Request */}
      <SectionWrapper>
        <div className="bg-night relative overflow-hidden rounded-3xl p-10 text-center text-on-dark md:p-16 border border-cyan/20 shadow-2xl">
          <div className="grid-lines pointer-events-none absolute inset-0" />
          <div className="relative">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Open positions are shared on request
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-on-dark-muted leading-relaxed">
              Send us your profile and areas of interest — we'll reach out when a matching opportunity opens.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="bg-brand shadow-glow inline-flex rounded-full px-7 py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-105"
              >
                Share your profile
              </Link>
            </div>
            <p className="mt-6 text-sm text-on-dark-muted">
              Or email your profile to{' '}
              <a
                href={`mailto:${businessInfo.email}`}
                className="font-semibold text-cyan hover:text-on-dark underline decoration-cyan/40 hover:decoration-cyan transition-colors"
              >
                {businessInfo.email}
              </a>{' '}
              · call{' '}
              <a
                href={`tel:${businessInfo.phones[0].raw}`}
                className="font-semibold text-cyan hover:text-on-dark underline decoration-cyan/40 hover:decoration-cyan transition-colors"
              >
                {businessInfo.phones[0].display}
              </a>{' '}
              or{' '}
              <a
                href={`tel:${businessInfo.phones[1].raw}`}
                className="font-semibold text-cyan hover:text-on-dark underline decoration-cyan/40 hover:decoration-cyan transition-colors"
              >
                {businessInfo.phones[1].display}
              </a>
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
