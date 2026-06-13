import React from 'react';
import { GraduationCap, Award, Search, BookOpen, Building, ShieldCheck } from 'lucide-react';

export default function QuickLinks({ setActiveTab }) {
  const cards = [
    {
      title: "Students Hub",
      icon: <GraduationCap size={28} />,
      desc: "Join student chapters, register for fests, and secure training programs.",
      actionTab: "membership",
      color: "var(--secondary)"
    },
    {
      title: "Authors Portal",
      icon: <BookOpen size={28} />,
      desc: "Submit papers, review formatting rules, and track publication statuses.",
      actionTab: "publications",
      color: "var(--accent)"
    },
    {
      title: "Researchers Support",
      icon: <Search size={28} />,
      desc: "Get R&D guidance, PhD thesis counseling, and research funding.",
      actionTab: "consultancy",
      color: "#facc15"
    },
    {
      title: "Institutions Accredit",
      icon: <ShieldCheck size={28} />,
      desc: "Prepare for NAAC, NBA, and NIRF audits with expert consulting.",
      actionTab: "consultancy",
      color: "#38bdf8"
    },
    {
      title: "Corporate & Industries",
      icon: <Building size={28} />,
      desc: "Outsource R&D projects and arrange specialized implant courses.",
      actionTab: "consultancy",
      color: "#a855f7"
    }
  ];

  return (
    <div style={{ padding: '60px 5vw 40px', position: 'relative', zIndex: 5 }}>
      <div style={{ textAlign: 'center', marginBottom: '45px' }}>
        <h2 className="section-title center" style={{ display: 'inline-block', marginBottom: '15px' }}>
          Explore Portals By Audience
        </h2>
        <p style={{ maxWidth: '600px', margin: '0 auto' }}>
          Find resources, services, and opportunities tailored precisely to your background and academic goals.
        </p>
      </div>

      <div className="grid-container" style={{
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '24px'
      }}>
        {cards.map((card, idx) => (
          <div 
            key={idx}
            className="glass-card"
            onClick={() => setActiveTab(card.actionTab)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              cursor: 'pointer',
              padding: '30px 20px',
              borderTop: `3px solid ${card.color}`
            }}
          >
            <div style={{
              color: card.color,
              marginBottom: '20px',
              background: 'rgba(255,255,255,0.03)',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: `0 0 15px rgba(255,255,255,0.02)`
            }}>
              {card.icon}
            </div>

            <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', fontWeight: 600 }}>
              {card.title}
            </h3>

            <p style={{ fontSize: '0.85rem', lineHeight: 1.6, flexGrow: 1 }}>
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
