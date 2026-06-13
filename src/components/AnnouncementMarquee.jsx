import React from 'react';
import { Bell, Flame } from 'lucide-react';

export default function AnnouncementMarquee() {
  const announcements = [
    "📌 Signed MOU with Manipal University Jaipur, Rajasthan",
    "📌 Signed MOU with Rao Bahadur Y Mahabaleswarappa Engineering College (RYMEC), Bellary, Karnataka",
    "🔥 Call for Papers: 15th World Congress on Applied Science, Engineering & Technology (WCASET)",
    "📌 Student Chapter Inaugurated at Dhanekula Institute of Engineering & Technology, Vijayawada",
    "🚀 Unlimited Access to Technical Resources: ResearchPedia & Academic Research Library",
    "⚡ BioLEAGUES Indo-Global Oncology Summit successfully concluded in Bhubaneswar"
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
      {/* Title Tag */}
      <div style={{
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
        whiteSpace: 'nowrap'
      }}>
        <Bell size={14} className="alert-bell" />
        HAPPENING NOW
      </div>

      {/* Marquee Wrapper */}
      <div className="marquee-container" style={{
        flex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="marquee-content" style={{
          display: 'flex',
          gap: '60px',
          whiteSpace: 'nowrap',
          paddingLeft: '100%',
          animation: 'scroll-marquee 30s linear infinite',
          fontSize: '0.9rem',
          fontWeight: 500,
          color: 'var(--text-main)'
        }}>
          {announcements.map((text, idx) => (
            <span key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {text}
            </span>
          ))}
          {/* Duplicate to prevent gaps */}
          {announcements.map((text, idx) => (
            <span key={`dup-${idx}`} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {text}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .marquee-content {
          animation: scroll-marquee 35s linear infinite;
        }

        .alert-bell {
          animation: bell-bounce 1s infinite alternate;
        }

        @keyframes bell-bounce {
          0% { transform: translateY(-1px) rotate(-10deg); }
          100% { transform: translateY(1px) rotate(10deg); }
        }
      `}</style>
    </div>
  );
}
