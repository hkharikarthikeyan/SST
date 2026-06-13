import React from 'react';
import { Award, ShieldCheck, Heart, User, CheckCircle2 } from 'lucide-react';

export default function AboutTeam() {
  const leadership = [
    {
      name: "Prof. (Dr.) Vijay Singh Rathore",
      role: "Academic President & Lead Advisor",
      desc: "Rajasthan's first Ph.D. holder in Computer Science with over 22 years of higher education experience. Specialist in NAAC accreditation audits and global bilateral academic exchange setups.",
      details: ["PhD in Computer Science", "NBA Lead Assessor Audit Panelist", "20+ Patent Filings", "Ex-President Computer Society of India"]
    },
    {
      name: "Prof. (Dr.) Sarah Jenkins",
      role: "Vice President - Global Exchange & Delegations",
      desc: "Oversees research partnerships and exchange delegations across 30+ countries. Coordinates double-degree programs and foreign university MOUs.",
      details: ["PhD in International Studies", "Former Dean of Global Relations", "MOU Negotiator (30+ Countries)", "Senior Fellow, Higher Education Academy"]
    },
    {
      name: "Prof. Rajesh Kumar",
      role: "Director - Scientific Publications",
      desc: "Manages peer-reviewed academic journals (IJERCSE, JMLS) and digital libraries. Directs editor teams for Scopus/WoS indexed proceedings.",
      details: ["PhD in Electrical Engineering", "150+ Published Papers", "Scopus Advisory Board Editor", "Fellow of IFERP"]
    }
  ];

  const coreValues = [
    {
      title: "Academic Excellence",
      icon: <Award size={24} color="var(--secondary)" />,
      desc: "We ensure curriculum outputs align perfectly with global industrial requirements through rigid quality audits."
    },
    {
      title: "Incubating Innovation",
      icon: <ShieldCheck size={24} color="var(--accent)" />,
      desc: "Providing researchers with financial aid, computational labs, and patent filing assistance to protect breakthrough intellectual property."
    },
    {
      title: "Technology for Humanity",
      icon: <Heart size={24} color="#facc15" />,
      desc: "Deploying our 25,000+ student volunteers to offer free tech seminars, FDPs, and vocational training across developing nations."
    }
  ];

  return (
    <div className="section-padding" style={{ minHeight: '80vh', position: 'relative' }}>
      <div className="glow-blob glow-blob-cyan" style={{ bottom: '10%', right: '5%' }}></div>
      <div className="glow-blob glow-blob-pink" style={{ top: '10%', left: '5%' }}></div>

  
      <div style={{ textAlign: 'center', marginBottom: '50px', position: 'relative', zIndex: 5 }}>
        <span className="badge">Who We Are</span>
        <h2 className="section-title center" style={{ display: 'inline-block', marginTop: '10px' }}>
          Mission, Vision & Leadership
        </h2>
        <p style={{ maxWidth: '600px', margin: '15px auto 0' }}>
          A centralized professional committee operating worldwide to reinforce the boundaries of engineering, medicine, life sciences, and management.
        </p>
      </div>

      {/* Narrative Section */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '40px',
        marginBottom: '60px',
        position: 'relative',
        zIndex: 5
      }}>
        {/* About Info */}
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h3 style={{ marginBottom: '15px', color: 'var(--secondary)' }}>Our Era & Aspirations</h3>
          <p style={{ lineHeight: 1.8, marginBottom: '20px' }}>
            Technoarete & KKCS started with a single focus: **to reduce the gap between curriculum and practical execution**. 
            Registered under the India Trust Act (1882), we have grown into the largest network linking educational institutions, publishers, and conglomerates.
          </p>
          <p style={{ lineHeight: 1.8 }}>
            Today, we consult for over 1,200+ colleges on NIRF rankings, NAAC preparations, and foreign university partnerships, while operating as a premier publisher of indexed scientific research papers.
          </p>
        </div>

        {/* Core Values grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {coreValues.map((val, idx) => (
            <div key={idx} className="glass-card" style={{ display: 'flex', gap: '20px', padding: '24px' }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {val.icon}
              </div>
              <div>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--text-main)', marginBottom: '8px' }}>{val.title}</h4>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership Profile Cards */}
      <h3 style={{ marginBottom: '30px', position: 'relative', zIndex: 5 }} className="section-title">
        Academic Advisory Board & Leadership
      </h3>
      <div className="grid-container" style={{ position: 'relative', zIndex: 5 }}>
        {leadership.map((member, idx) => (
          <div key={idx} className="glass-card" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderTop: idx === 0 ? '3px solid var(--secondary)' : '3px solid var(--accent)'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: idx === 0 ? 'var(--secondary)' : 'var(--accent)',
                  border: '1px solid var(--border-glass)'
                }}>
                  <User size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)' }}>{member.name}</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    {member.role}
                  </span>
                </div>
              </div>

              <p style={{ fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '20px', color: 'var(--text-muted)' }}>
                {member.desc}
              </p>
            </div>

            {/* Bullet achievements */}
            <ul style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              borderTop: '1px solid var(--border-glass)',
              paddingTop: '15px',
              fontSize: '0.8rem',
              color: 'var(--text-main)'
            }}>
              {member.details.map((det, index) => (
                <li key={index} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <CheckCircle2 size={12} color="var(--secondary)" />
                  <span>{det}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
