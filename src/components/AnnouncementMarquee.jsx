import React from 'react';
import { Bell } from 'lucide-react';

export default function AnnouncementMarquee({ setActiveTab }) {
  const announcements = [
    "🎓 Internship Opportunity — Shazu Soft Technologies now offering internships for 2nd & 3rd year students!",
    "📝 Research Paper Writing Support — Topic selection, IEEE/APA formatting, journal submission guidance",
    "💻 Hackathon Event Coming Soon — 24/48hr coding challenge",
    "🎤 Conference Announcement — Registration details coming soon!",
    "🔬 IEEE Conference Co-Author Collaboration "
  ];

  return (
    <div style={{
      background: 'rgba(255, 74, 90, 0.1)',
      borderTop: '1px solid rgba(255, 74, 90, 0.2)',
      borderBottom: '1px solid rgba(255, 74, 90, 0.2)',
      height: '45px',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      position: 'relative',
      zIndex: 10
    }}>
      {/* Clickable Title Tag */}
      <button
        onClick={() => setActiveTab('announcements')}
        style={{
          background: 'var(--accent)',
          color: 'white',
          height: '100%',
          padding: '0 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontWeight: 'bold',
          fontSize: '0.85rem',
          fontFamily: 'var(--font-heading)',
          zIndex: 5,
          boxShadow: '4px 0 10px rgba(0,0,0,0.3)',
          whiteSpace: 'nowrap',
          border: 'none',
          cursor: 'pointer',
          flexShrink: 0
        }}
      >
        <Bell size={14} className="alert-bell" />
        HAPPENING NOW ›
      </button>

      {/* Marquee */}
      <div style={{ flex: 1, overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <div className="marquee-content" style={{
          display: 'flex',
          gap: '80px',
          whiteSpace: 'nowrap',
          paddingLeft: '100%',
          fontSize: '0.9rem',
          fontWeight: 500,
          color: 'var(--text-main)'
        }}>
          {[...announcements, ...announcements].map((text, idx) => (
            <span key={idx}>{text}</span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .marquee-content { animation: scroll-marquee 60s linear infinite; }
        .alert-bell { animation: bell-bounce 1s infinite alternate; }
        @keyframes bell-bounce {
          0% { transform: rotate(-10deg); }
          100% { transform: rotate(10deg); }
        }
      `}</style>
    </div>
  );
}
