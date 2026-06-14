import React from 'react';
import { Code2, BarChart2, Palette, Megaphone, MonitorPlay } from 'lucide-react';

const items = [
  { icon: <Code2 size={32} />, title: 'Full Stack Development', desc: 'End-to-end web application development covering both frontend and backend technologies.' },
  { icon: <MonitorPlay size={32} />, title: 'Webinar', desc: 'Live and recorded online sessions connecting professionals and learners with expert knowledge globally.' },
  { icon: <BarChart2 size={32} />, title: 'Data Analytics', desc: 'Transform raw data into actionable insights using modern analytics tools and techniques.' },
  { icon: <Palette size={32} />, title: 'UI & UX Design', desc: 'User-centered design solutions focused on creating intuitive and engaging digital experiences.' },
  { icon: <Megaphone size={32} />, title: 'Digital Marketing', desc: 'Strategic online marketing campaigns to grow brand visibility and drive engagement.' },
  { icon: <MonitorPlay size={32} />, title: 'Training Programs', desc: 'Industry-aligned software training programs tailored for beginners to advanced learners.' },
  
];

export default function Software({ onBack }) {
  return (
    <div style={{ padding: '40px 5vw' }}>
      <button onClick={onBack} style={{ background: 'none', border: '1px solid var(--border)', color: 'var(--secondary)', padding: '8px 18px', borderRadius: '8px', cursor: 'pointer', marginBottom: '32px', fontSize: '0.9rem' }}>
        ← Back to Services
      </button>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--text-main)', marginBottom: '8px' }}>
        Software Services
      </h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '36px' }}>Cutting-edge software solutions and training to power your digital journey.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
        {items.map((item) => (
          <div key={item.title} className="glass-card" style={{ padding: '28px', borderRadius: '16px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '14px', transition: 'var(--transition-fast)' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--secondary)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
          >
            <div style={{ color: 'var(--secondary)' }}>{item.icon}</div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: 'var(--text-main)', margin: 0 }}>{item.title}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          div[style*="repeat(3, 1fr)"] { grid-template-columns: repeat(1, 1fr) !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          div[style*="repeat(3, 1fr)"] { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
