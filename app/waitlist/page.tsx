'use client';

import { useState } from 'react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import WaitlistForm from '../components/WaitlistForm';
import WaitlistCounter from '../components/WaitlistCounter';
import ScrollReveal from '../components/ScrollReveal';

const QUOTES = [
  { quote: 'kinda shocked that it turned out that well', name: 'early user', role: '' },
  { quote: 'the replies felt quite natural', name: 'early user', role: '' },
  { quote: 'it lowk copied my tone', name: 'early user', role: '' },
];

const FAQS = [
  {
    q: 'what exactly is genUine?',
    a: "genUine is an AI that learns how you write — your vocabulary, your tone, whether you use exclamation marks — then helps you write LinkedIn messages that actually sound like you. not generic AI. you.",
  },
  {
    q: 'how does it learn my voice?',
    a: "you paste a few messages you've already sent (texts, DMs, anything), or react to a quick scenario. genUine reads how you write and builds a voice profile. takes under 2 minutes.",
  },
  {
    q: 'is it free?',
    a: "yes — 3 messages a day, free forever. unlimited messages with Pro at $12/month. early waitlist members get a special launch discount.",
  },
  {
    q: "what if i'm new to linkedin and haven't sent messages?",
    a: "no problem. you can skip the voice setup and just pick a tone (casual, professional, friendly, direct). genUine will still write something way better than staring at a blank box.",
  },
  {
    q: 'when will i get access?',
    a: "we're onboarding waitlist members in batches. you'll get an email with early access before we open to everyone. the earlier you join, the sooner you're in.",
  },
];

export default function WaitlistPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ backgroundColor: '#FAF9F7', color: '#2D2D2D', minHeight: '100vh' }}>

      <SiteHeader />

      {/* ── HERO ── */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '100px 24px 80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background glow */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(242, 169, 34, 0.09) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(196, 120, 74, 0.07) 0%, transparent 60%)',
        }} />

        <div style={{ position: 'relative', maxWidth: '560px', margin: '0 auto', textAlign: 'center' }}>
          {/* Badge */}
          <div
            className="fade-up stagger-1"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              backgroundColor: 'rgba(196, 120, 74, 0.1)',
              border: '1px solid rgba(196, 120, 74, 0.2)',
              borderRadius: '100px', padding: '5px 14px',
              marginBottom: '20px',
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: '#C4784A', display: 'inline-block' }} />
            <span style={{ fontSize: '12px', fontWeight: 600, color: '#C4784A', fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '0.02em' }}>
              early access — limited spots
            </span>
          </div>

          <h1
            className="fade-up stagger-2"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(36px, 7vw, 60px)',
              letterSpacing: '-0.03em',
              color: '#2D2D2D',
              lineHeight: 1.1,
              marginBottom: '20px',
            }}
          >
            be first in line.
          </h1>

          <p
            className="fade-up stagger-3"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(16px, 2.5vw, 18px)',
              color: '#6B5E52',
              lineHeight: 1.7,
              marginBottom: '40px',
              maxWidth: '440px',
              margin: '0 auto 40px',
            }}
          >
            genUine is launching soon. join the waitlist and get early access — plus a special discount for being here early.
          </p>

          {/* Counter */}
          <div className="fade-up stagger-4" style={{ marginBottom: '32px' }}>
            <WaitlistCounter />
          </div>

          {/* Form card */}
          <div
            className="fade-up"
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(196, 120, 74, 0.12)',
              borderRadius: '24px',
              padding: 'clamp(28px, 5vw, 48px)',
              boxShadow: '0 8px 48px rgba(196, 120, 74, 0.1)',
              animationDelay: '320ms',
            }}
          >
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ── */}
      <section style={{ padding: 'clamp(60px, 10vw, 100px) 24px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <ScrollReveal style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ fontSize: '12px', fontWeight: 600, color: '#C4784A', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
              what early users said
            </p>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(26px, 4vw, 36px)',
                fontWeight: 700, letterSpacing: '-0.02em',
                color: '#2D2D2D',
              }}
            >
              people were genuinely surprised.
            </h2>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            {QUOTES.map((q, i) => (
              <ScrollReveal key={q.name} delay={i * 100}>
                <div
                  style={{
                    backgroundColor: '#FAF9F7',
                    border: '1px solid rgba(196, 120, 74, 0.12)',
                    borderRadius: '18px',
                    padding: '24px',
                    height: '100%',
                  }}
                >
                  <p style={{ fontSize: '18px', color: '#C4784A', marginBottom: '12px', lineHeight: 1 }}>❝</p>
                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '16px', fontWeight: 600,
                      color: '#2D2D2D', lineHeight: 1.5, marginBottom: '16px',
                    }}
                  >
                    {q.quote}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: 'rgba(196, 120, 74, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontSize: '12px', fontWeight: 700, color: '#C4784A' }}>{q.name[0]}</span>
                    </div>
                    <span style={{ fontSize: '13px', color: '#A08C7C', fontWeight: 500 }}>{q.name} · {q.role}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY WAITLIST ── */}
      <section style={{ padding: 'clamp(60px, 10vw, 100px) 24px', backgroundColor: '#FAF9F7' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <ScrollReveal style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '12px', fontWeight: 600, color: '#C4784A', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '20px' }}>
              why join early
            </p>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(26px, 4vw, 36px)',
                fontWeight: 700, letterSpacing: '-0.02em',
                color: '#2D2D2D', marginBottom: '40px',
              }}
            >
              early access comes with perks.
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { icon: '⚡', title: 'skip the line', desc: 'waitlist members get access before everyone else.' },
                { icon: '🎁', title: 'launch discount', desc: 'early joiners get a special deal on Pro — locked in at signup.' },
                { icon: '🔧', title: 'shape the product', desc: "we'll actually reach out and ask what you need. your feedback matters." },
              ].map((perk) => (
                <div
                  key={perk.title}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(196, 120, 74, 0.1)',
                    borderRadius: '16px',
                    padding: '20px 24px',
                    textAlign: 'left',
                  }}
                >
                  <span style={{ fontSize: '24px', flexShrink: 0 }}>{perk.icon}</span>
                  <div>
                    <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '15px', color: '#2D2D2D', marginBottom: '4px' }}>{perk.title}</p>
                    <p style={{ fontSize: '14px', color: '#6B5E52', lineHeight: 1.6 }}>{perk.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: 'clamp(60px, 10vw, 100px) 24px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <ScrollReveal style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ fontSize: '12px', fontWeight: 600, color: '#C4784A', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
              faq
            </p>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(26px, 4vw, 34px)',
                fontWeight: 700, letterSpacing: '-0.02em',
                color: '#2D2D2D',
              }}
            >
              questions? answered.
            </h2>
          </ScrollReveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {FAQS.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div
                  style={{
                    backgroundColor: '#FAF9F7',
                    border: '1px solid rgba(196, 120, 74, 0.12)',
                    borderRadius: '14px',
                    overflow: 'hidden',
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '16px',
                      padding: '18px 20px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 600, fontSize: '15px',
                        color: '#2D2D2D',
                      }}
                    >
                      {faq.q}
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#C4784A"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        flexShrink: 0,
                        transition: 'transform 0.2s ease',
                        transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 20px 18px' }}>
                      <p style={{ fontSize: '14px', color: '#6B5E52', lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif" }}>
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section
        style={{
          padding: 'clamp(80px, 12vw, 120px) 24px',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #FAF9F7 0%, #F3EDE7 100%)',
        }}
      >
        <ScrollReveal>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 'clamp(28px, 5vw, 44px)',
              fontWeight: 800, letterSpacing: '-0.03em',
              color: '#2D2D2D', lineHeight: 1.2, marginBottom: '16px',
            }}
          >
            your voice. your messages.
            <br />
            <span style={{ color: '#C4784A' }}>just not the blank-page panic.</span>
          </h2>
          <p style={{ fontSize: '16px', color: '#6B5E52', marginBottom: '36px', lineHeight: 1.6 }}>
            join the waitlist. be there from day one.
          </p>
          <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <button
              className="btn-primary"
              style={{ padding: '14px 36px', borderRadius: '14px', fontSize: '16px' }}
            >
              join the waitlist →
            </button>
          </a>
        </ScrollReveal>
      </section>

      <SiteFooter />
    </div>
  );
}
