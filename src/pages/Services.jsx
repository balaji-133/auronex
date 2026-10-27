import React from 'react';
import { Link } from 'react-router-dom';
import {
  Code2,
  BrainCircuit,
  BarChart3,
  Cloud,
  ShieldCheck,
  Workflow,
  Compass,
  GraduationCap,
  Check
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeader from '../components/SectionHeader';
import TiltCard from '../components/TiltCard';
import { services, industries, workSteps } from '../data/servicesData';

const iconMap = {
  Code2,
  BrainCircuit,
  BarChart3,
  Cloud,
  ShieldCheck,
  Workflow,
  Compass,
  GraduationCap
};

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Industries & services"
        title={
          <>
            Software. AI. Skills.{' '}
            <span className="text-brand">Innovation.</span>
          </>
        }
        intro="End-to-end capabilities that help organizations modernize, automate and grow — delivered with engineering discipline."
      />

      {/* Services Grid (8 Services in 3D TiltCards) */}
      <SectionWrapper>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((item) => {
            const Icon = iconMap[item.iconName] || Code2;
            return (
              <TiltCard key={item.key} className="rounded-2xl">
                <div
                  id={item.key}
                  className="shadow-card h-full rounded-2xl border bg-card p-8 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start gap-5">
                      <div className="bg-brand flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-primary-foreground shadow-md">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <ul className="mt-6 grid gap-2.5 sm:grid-cols-2 pt-4 border-t border-border/50">
                      {item.points.map((pt) => (
                        <li key={pt} className="flex items-center gap-2 text-sm text-foreground/85">
                          <Check className="h-4 w-4 text-cyan shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-2">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                    >
                      Enquire about {item.title} →
                    </Link>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Industries Section (Dark) */}
      <SectionWrapper dark={true}>
        <SectionHeader
          dark={true}
          eyebrow="Industries"
          title="Solutions shaped for your sector"
          intro="Our approach adapts to the realities of each industry we work with."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <div
              key={industry}
              className="glass rounded-xl px-6 py-5 font-display font-semibold transition-all duration-300 hover:shadow-glow hover:border-cyan/40"
            >
              {industry}
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* How We Work */}
      <SectionWrapper>
        <SectionHeader
          center={true}
          eyebrow="How we work"
          title="A clear path from idea to impact"
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-5">
          {workSteps.map((step) => (
            <div
              key={step.num}
              className="relative rounded-2xl border bg-card p-6 text-center hover:shadow-card transition-shadow"
            >
              <span className="bg-brand mx-auto flex h-10 w-10 items-center justify-center rounded-full font-display font-bold text-primary-foreground shadow-sm">
                {step.num}
              </span>
              <p className="mt-4 font-semibold text-lg">{step.title}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/contact"
            className="bg-brand shadow-glow inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Discuss your project
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}
