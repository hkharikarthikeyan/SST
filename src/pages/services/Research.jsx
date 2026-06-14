import React from 'react';
import { UserCheck, FileText, CalendarDays, BookMarked, Award, FlaskConical, DollarSign } from 'lucide-react';

const items = [
  { icon: <UserCheck size={32} />, title: 'Research Associations', desc: 'Connecting qualified researchers with institutions for collaborative academic and industrial research.' },
  { icon: <FileText size={32} />, title: 'Research Publications', desc: 'Support for publishing research papers in reputed national and international journals.' },
  { icon: <CalendarDays size={32} />, title: 'Conferences', desc: 'Organizing and participating in academic conferences to share and advance research findings.' },
  { icon: <BookMarked size={32} />, title: 'Book Publications', desc: 'Assistance in authoring and publishing academic books, chapters, and reference materials.' },
  { icon: <Award size={32} />, title: 'Award Ceremony', desc: 'Recognizing outstanding contributions in research, academia, and innovation through award programs.' },
  { icon: <FlaskConical size={32} />, title: 'Patent', desc: 'End-to-end guidance for filing and securing patents for your innovations and inventions.' },
  { icon: <DollarSign size={32} />, title: 'Funding Projects', desc: 'Assistance in identifying, applying, and securing grants and funding for research projects.' },
];

export default function Research({ onBack }) {
  return (
    <div style={{ padding: '40px 5vw' }}>
      <button onClick={onBack} style={{ background: 'none', border: '1px solid var(--border)', color: 'var(--secondary)', padding: '8px 18px', borderRadius: '8px', cursor: 'pointer', marginBottom: '32px', fontSize: '0.9rem' }}>
        ← Back to Services
      </button>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--text-main)', marginBottom: '8px' }}>
        Research Services
      </h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '36px' }}>Comprehensive research support from publications to patents and funding.</p>

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
