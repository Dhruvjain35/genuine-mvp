'use client';

import { useEffect, useState } from 'react';

export default function WaitlistCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/waitlist')
      .then((r) => r.json())
      .then((data) => {
        if (typeof data.count === 'number') {
          setCount(Math.floor(data.count / 10) * 10);
        }
      })
      .catch(() => {});
  }, []);

  if (count === null || count < 5) return null;

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        backgroundColor: 'rgba(196, 120, 74, 0.08)',
        border: '1px solid rgba(196, 120, 74, 0.15)',
        borderRadius: '100px',
        padding: '5px 14px',
        marginBottom: '20px',
      }}
    >
      <span style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: '#C4784A', display: 'inline-block', flexShrink: 0 }} />
      <span
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '13px',
          color: '#6B5E52',
          fontWeight: 500,
        }}
      >
        join <strong style={{ color: '#C4784A' }}>{count}+</strong> people already waiting
      </span>
    </div>
  );
}
