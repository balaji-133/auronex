import React from 'react';
import PageHero from '../components/PageHero';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeader from '../components/SectionHeader';
import { fourPillars, companyValues } from '../data/servicesData';

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            Where software, AI and <span className="text-brand">talent converge</span>
          </>
        }
        intro="Auronex Tech Park is a Software Development & AI Excellence Center — a place where businesses build intelligent solutions and people build future-ready careers."
      />

      {/* Our Story */}
      <SectionWrapper>
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeader
            eyebrow="Our story"
            title="Technology that moves business forward"
          />
          <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              We believe the most meaningful technology comes from combining strong engineering with real-world understanding. That's why Auronex brings together development, consulting and learning in a single ecosystem.
            </p>
            <p>
              Our teams design and deliver software and AI solutions, while our academy prepares the next generation of engineers with practical, hands-on skills.
            </p>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="mt-20 grid gap-6 md:grid-cols-2">
          <div className="shadow-card rounded-2xl border bg-card p-9">
            <h3 className="text-2xl font-semibold">Mission</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              To deliver intelligent, reliable digital solutions and develop practical technology skills that create measurable value for businesses and individuals.
            </p>
          </div>
          <div className="bg-night shadow-card rounded-2xl p-9 text-on-dark border border-cyan/20">
            <h3 className="text-2xl font-semibold">Vision</h3>
            <p className="mt-3 text-on-dark-muted leading-relaxed">
              To be a trusted center of excellence for software engineering, artificial intelligence and future-ready talent.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Four Pillars (Dark) */}
      <SectionWrapper dark={true}>
        <SectionHeader
          dark={true}
          eyebrow="What drives us"
          title="Four pillars, one ecosystem"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-4">
          {fourPillars.map((pillar) => (
            <div key={pillar.num} className="glass rounded-2xl p-7 hover:shadow-glow transition-all duration-300">
              <span className="text-brand font-display text-4xl font-bold">
                {pillar.num}
              </span>
              <h3 className="mt-4 text-xl font-semibold">{pillar.title}</h3>
              <p className="mt-2 text-on-dark-muted text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Our Values */}
      <SectionWrapper>
        <SectionHeader
          center={true}
          eyebrow="Our values"
          title="The principles behind our work"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {companyValues.map((val) => (
            <div
              key={val.title}
              className="rounded-2xl border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <h3 className="mt-2 font-semibold text-lg">{val.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
