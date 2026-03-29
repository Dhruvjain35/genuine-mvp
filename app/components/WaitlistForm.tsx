'use client';

import { useState } from 'react';
import WaitlistSuccess from './WaitlistSuccess';

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([k, v]) => encodeURIComponent(k) + '=' + encodeURIComponent(v))
    .join('&');
}

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [focused, setFocused] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'waitlist', email: email.trim() }),
      });

      if (res.ok) {
        setStatus('success');
      } else {
        setErrorMsg('something went wrong. please try again.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('network error. please try again.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return <WaitlistSuccess name="" />;
  }

  return (
    <form
      onSubmit={handleSubmit}
      data-netlify="true"
      name="waitlist"
      style={{ width: '100%', maxWidth: '480px', margin: '0 auto' }}
    >
      {/* Required hidden field for Netlify */}
      <input type="hidden" name="form-name" value="waitlist" />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <input
          type="email"
          name="email"
          placeholder="your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required
          style={{
            width: '100%',
            padding: '14px 18px',
            backgroundColor: '#FFFFFF',
            border: focused
              ? '1.5px solid #C4784A'
              : '1.5px solid rgba(196, 120, 74, 0.2)',
            borderRadius: '14px',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '16px',
            color: '#2D2D2D',
            outline: 'none',
            boxSizing: 'border-box',
            boxShadow: focused ? '0 0 0 3px rgba(196, 120, 74, 0.1)' : 'none',
            transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
          }}
        />

        {status === 'error' && (
          <p style={{
            fontSize: '13px',
            color: '#C4784A',
            fontFamily: "'DM Sans', sans-serif",
            textAlign: 'center',
          }}>
            {errorMsg}
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'loading' || !email.trim()}
          className="btn-primary"
          style={{
            width: '100%',
            padding: '15px',
            borderRadius: '14px',
            fontSize: '16px',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            opacity: !email.trim() ? 0.5 : 1,
            cursor: !email.trim() ? 'not-allowed' : 'pointer',
          }}
        >
          {status === 'loading' ? 'joining...' : 'join the waitlist →'}
        </button>

        <p style={{
          textAlign: 'center',
          fontSize: '12px',
          color: '#A08C7C',
          fontFamily: "'DM Sans', sans-serif",
        }}>
          no spam. ever. we&apos;ll only email you when genUine is ready.
        </p>
      </div>
    </form>
  );
}
