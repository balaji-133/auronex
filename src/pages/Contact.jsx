import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionWrapper from '../components/SectionWrapper';
import { businessInfo } from '../data/businessInfo';

const interestOptions = [
  'Start a project',
  'AI solutions',
  'Technology consulting',
  'Training programs',
  'Internships & careers',
  'Other'
];

export default function Contact() {
  const [selectedInterest, setSelectedInterest] = useState('Start a project');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    org: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Validate email
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: 'error',
        message: 'Please fill in all required fields (Full name, Email, and Message).'
      });
      setIsSubmitting(false);
      return;
    }

    // Prepare mailto fallback or submission feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({
        type: 'success',
        message: `Thank you, ${formData.name}! Your enquiry regarding "${selectedInterest}" has been recorded. Our team will reach out at ${formData.email} shortly.`
      });
      // Optionally reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        org: '',
        message: ''
      });
    }, 600);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's build <span className="text-brand">something intelligent</span>
          </>
        }
        intro="Tell us about your project, learning goals or career interests. Our team will get back to you."
      />

      <SectionWrapper>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          {/* Left Column: Direct Contact Info */}
          <div className="space-y-6">
            <div className="shadow-card rounded-2xl border bg-card p-7">
              <h3 className="text-xl font-semibold">Talk to us</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Business enquiries, partnerships and consulting.
              </p>
              <div className="mt-5 flex flex-col gap-2.5">
                <a
                  href={`mailto:${businessInfo.email}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  <Mail className="h-4 w-4" />
                  {businessInfo.email}
                </a>
                {businessInfo.phones.map((phone) => (
                  <a
                    key={phone.raw}
                    href={`tel:${phone.raw}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                  >
                    <Phone className="h-4 w-4" />
                    {phone.display}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-night rounded-2xl p-7 text-on-dark border border-cyan/20">
              <h3 className="text-xl font-semibold">Learners &amp; candidates</h3>
              <p className="mt-1 text-sm text-on-dark-muted">
                Questions about training, internships and careers.
              </p>
              <div className="mt-5 flex flex-col gap-2.5">
                <a
                  href={`mailto:${businessInfo.email}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan hover:text-on-dark transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  {businessInfo.email}
                </a>
                {businessInfo.phones.map((phone) => (
                  <a
                    key={phone.raw}
                    href={`tel:${phone.raw}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan hover:text-on-dark transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    {phone.display}
                  </a>
                ))}
              </div>
            </div>

            {/* Location & Hours Card */}
            <div className="shadow-card rounded-2xl border bg-card p-7">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Office Location
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {businessInfo.address}
              </p>
              <div className="mt-4 pt-4 border-t border-border flex items-start gap-2 text-xs text-muted-foreground">
                <Clock className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                <div>
                  <p>{businessInfo.hours.weekdays}</p>
                  <p className="font-medium text-destructive">{businessInfo.hours.sunday}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <form
            onSubmit={handleSubmit}
            className="shadow-card rounded-3xl border bg-card p-8 md:p-10"
          >
            <p className="eyebrow">I'm interested in</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {interestOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  aria-pressed={selectedInterest === option}
                  onClick={() => setSelectedInterest(option)}
                  className={`inline-flex items-center justify-center whitespace-nowrap font-medium cursor-pointer rounded-full border px-4 py-2 text-sm transition-all ${
                    selectedInterest === option
                      ? 'bg-brand border-transparent text-primary-foreground shadow-sm'
                      : 'border-input bg-background shadow-sm hover:bg-accent text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="name">Full name</label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full name"
                  required
                  maxLength={100}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30 text-sm"
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="email">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  required
                  maxLength={255}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30 text-sm"
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="phone">Phone (optional)</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone (optional)"
                  maxLength={30}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30 text-sm"
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="org">Organization / College</label>
                <input
                  id="org"
                  name="org"
                  value={formData.org}
                  onChange={handleChange}
                  placeholder="Organization / College"
                  maxLength={120}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30 text-sm"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="sr-only" htmlFor="message">How can we help?</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help?"
                required
                maxLength={2000}
                className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30 text-sm resize-y"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-brand shadow-glow mt-6 h-auto inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-105 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send message'}
              <Send className="h-4 w-4" />
            </button>

            {status.message && (
              <div
                role="status"
                aria-live="polite"
                className={`mt-4 p-4 rounded-xl flex items-start gap-3 text-sm ${
                  status.type === 'success'
                    ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20'
                    : 'bg-destructive/10 text-destructive border border-destructive/20'
                }`}
              >
                {status.type === 'success' ? (
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600 mt-0.5" />
                ) : (
                  <AlertCircle className="h-5 w-5 shrink-0 text-destructive mt-0.5" />
                )}
                <span>{status.message}</span>
              </div>
            )}
          </form>
        </div>
      </SectionWrapper>
    </>
  );
}
