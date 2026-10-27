import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Code2,
  BrainCircuit,
  GraduationCap,
  Rocket,
  ArrowRight,
  Sparkles,
  Target,
  Cpu,
  Wrench,
  BookOpen,
  Users,
  Check,
  BarChart3,
  Cloud,
  ShieldCheck,
  Workflow,
  Compass
} from 'lucide-react';
import ConstellationCanvas from '../components/ConstellationCanvas';
import HeroGraphic from '../components/HeroGraphic';
import BrandFilm from '../components/BrandFilm';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeader from '../components/SectionHeader';
import TiltCard from '../components/TiltCard';
import { services, whyUs, heroStats } from '../data/servicesData';

// Map icon names to Lucide icons
const iconMap = {
  Code2,
  BrainCircuit,
  GraduationCap,
  Rocket,
  Sparkles,
  Target,
  Cpu,
  Wrench,
  BookOpen,
  Users,
  BarChart3,
  Cloud,
  ShieldCheck,
  Workflow,
  Compass
};

export default function Home() {
  const [activeTabKey, setActiveTabKey] = useState(services[0].key);
  const activeService = services.find((s) => s.key === activeTabKey) || services[0];
  const ActiveIcon = iconMap[activeService.iconName] || Code2;

  const featuredServices = services.filter((s) =>
    ['software', 'ai', 'data', 'cloud', 'consulting', 'training'].includes(s.key)
  );

  return (
    <>
      {/* Hero Section */}
      <section className="bg-night relative min-h-screen overflow-hidden pt-32 text-on-dark flex flex-col justify-between">
        <ConstellationCanvas density={70} />
        <div className="grid-lines pointer-events-none absolute inset-0" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="glass animate-fade-up inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold tracking-[0.18em] text-cyan">
              <span className="h-2 w-2 rounded-full bg-cyan shadow-glow" />
              SOFTWARE DEVELOPMENT &amp; AI EXCELLENCE CENTER
            </p>

            <h1
              className="animate-fade-up mt-7 text-4xl font-bold leading-[1.04] md:text-6xl xl:text-7xl font-display tracking-tight text-white"
              style={{ animationDelay: '80ms' }}
            >
              Building the digital future with{' '}
              <span className="text-brand">software &amp; AI</span>
            </h1>

            <p
              className="animate-fade-up mt-6 max-w-xl text-lg text-on-dark-muted leading-relaxed"
              style={{ animationDelay: '160ms' }}
            >
              Auronex Tech Park is a Software Development &amp; AI Excellence Center delivering intelligent digital solutions, technology consulting, practical training and career-focused opportunities.
            </p>

            <div
              className="animate-fade-up mt-9 flex flex-wrap gap-3"
              style={{ animationDelay: '240ms' }}
            >
              <Link
                to="/contact"
                className="bg-brand shadow-glow inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-bold text-white transition-all hover:scale-105"
              >
                Start a project <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="glass rounded-full px-7 py-3.5 font-bold hover:text-cyan transition-colors"
              >
                Explore our services
              </Link>
              <Link
                to="/careers"
                className="rounded-full px-5 py-3.5 font-semibold text-on-dark-muted hover:text-on-dark transition-colors inline-flex items-center gap-1"
              >
                Explore careers →
              </Link>
            </div>
          </div>

          <HeroGraphic />
        </div>

        {/* 4 Cards Stat Bar */}
        <div className="relative mx-auto max-w-7xl px-6 pb-16 w-full">
          <div className="glass grid gap-px overflow-hidden rounded-2xl sm:grid-cols-2 lg:grid-cols-4 border border-cyan/15">
            {heroStats.map((item, idx) => {
              const Icon = iconMap[item.iconName] || Code2;
              return (
                <div
                  key={item.t}
                  className="animate-fade-up flex items-center gap-4 p-6"
                  style={{ animationDelay: `${300 + idx * 90}ms` }}
                >
                  <div className="bg-brand flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white shadow-md">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-white">{item.t}</p>
                    <p className="text-sm text-on-dark-muted">{item.d}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brand Film Section (Image 1) */}
      <BrandFilm />

      {/* What We Do / Real Business Value Section (Image 2) */}
      <SectionWrapper className="py-24 md:py-32">
        <SectionHeader
          eyebrow="What we do"
          title={
            <>
              Technology that creates <br className="hidden sm:inline" />
              <span className="text-brand">real business value</span>
            </>
          }
          intro="From product engineering to applied AI and skill development, we bring the full spectrum of modern technology under one roof."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => {
            const Icon = iconMap[service.iconName] || Code2;
            return (
              <TiltCard key={service.key} className="rounded-3xl">
                <div className="shadow-card flex h-full flex-col rounded-3xl border border-border/80 bg-card p-8 md:p-9 transition-colors hover:border-cyan/40">
                  <div className="bg-[#00a8ff] flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-md shadow-cyan-500/25">
                    <Icon className="h-6 w-6 stroke-[2.2]" />
                  </div>
                  <h3 className="mt-6 text-xl md:text-2xl font-bold font-display text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-muted-foreground leading-relaxed text-sm md:text-base">
                    {service.desc}
                  </p>
                  <Link
                    to="/services"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-[#0091ff] hover:text-[#0070cc] transition-colors"
                  >
                    Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Why Auronex Tech Park (Dark) */}
      <SectionWrapper dark={true}>
        <SectionHeader
          dark={true}
          center={true}
          eyebrow="Our difference"
          title={
            <>
              Why Auronex <span className="text-brand">Tech Park?</span>
            </>
          }
          intro="A single ecosystem where engineering, intelligence and talent development reinforce each other."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item, idx) => {
            const Icon = iconMap[item.iconName] || Sparkles;
            return (
              <div
                key={item.t}
                className="glass group rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-7 w-7 text-cyan" />
                  <span className="font-display text-sm text-on-dark-muted font-bold">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold font-display text-white">{item.t}</h3>
                <p className="mt-2 text-on-dark-muted text-sm leading-relaxed">{item.d}</p>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Interactive Service Spectrum Section */}
      <SectionWrapper>
        <SectionHeader
          eyebrow="Capabilities"
          title={
            <>
              Explore our <span className="text-brand">service spectrum</span>
            </>
          }
        />

        {/* Tab Pills */}
        <div className="mt-10 flex flex-wrap gap-2">
          {services.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTabKey(tab.key)}
              className={`rounded-full border px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] transition-all cursor-pointer ${
                activeTabKey === tab.key
                  ? 'bg-brand border-transparent text-white shadow-glow'
                  : 'bg-card text-muted-foreground hover:text-foreground border-border'
              }`}
            >
              {tab.tab}
            </button>
          ))}
        </div>

        {/* Active Tab Card Preview */}
        <div className="bg-night animate-fade-up relative mt-8 grid gap-10 overflow-hidden rounded-3xl p-8 text-on-dark md:grid-cols-2 md:p-14 border border-cyan/20 shadow-2xl">
          <div className="grid-lines pointer-events-none absolute inset-0" />
          <div className="relative">
            <ActiveIcon className="h-12 w-12 text-cyan" />
            <h3 className="mt-6 text-3xl font-bold font-display text-white">{activeService.title}</h3>
            <p className="mt-4 text-lg text-on-dark-muted leading-relaxed">{activeService.desc}</p>
            <Link
              to="/services"
              className="bg-brand mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold text-white transition-transform hover:scale-105"
            >
              View details <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <ul className="relative grid content-center gap-3">
            {activeService.points.map((point) => (
              <li
                key={point}
                className="glass flex items-center gap-3 rounded-xl px-5 py-4 text-sm md:text-base font-medium"
              >
                <Check className="h-5 w-5 text-cyan shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>
    </>
  );
}
