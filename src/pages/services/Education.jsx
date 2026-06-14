import React from 'react';
import { GraduationCap, Users, Lightbulb, Wrench, BookOpen, TrendingUp } from 'lucide-react';

const items = [
  { icon: <GraduationCap size={32} />, title: 'Hackathon', desc: 'Competitive coding and innovation events to solve real-world problems under time constraints.' },
  { icon: <Users size={32} />, title: 'Internship', desc: 'Hands-on industry exposure programs connecting students with professional work environments.' },
  { icon: <Lightbulb size={32} />, title: 'Innovative Project', desc: 'Guided project development fostering creative thinking and practical problem-solving skills.' },
  { icon: <Wrench size={32} />, title: 'Hands-on Training', desc: 'Practical lab-based training sessions focused on real tools and technologies.' },
  { icon: <BookOpen size={32} />, title: 'FDP / Seminar', desc: 'Faculty Development Programs and seminars to upgrade knowledge and teaching methodologies.' },
  { icon: <TrendingUp size={32} />, title: 'Skills Development', desc: 'Structured programs to enhance technical and soft skills for career readiness.' },
];

export default function Education({ onBack }) {
  return (
    <div style={{ padding: '40px 5vw' }}>
      <button onClick={onBack} style={{ background: 'none', border: '1px solid var(--border)', color: 'var(--secondary)', padding: '8px 18px', borderRadius: '8px', cursor: 'pointer', marginBottom: '32px', fontSize: '0.9rem' }}>
        ← Back to Services
      </button>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--text-main)', marginBottom: '8px' }}>
        Education Services
      </h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '36px' }}>Empowering students and faculty through structured educational programs.</p>

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
