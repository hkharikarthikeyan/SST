import React, { useRef, useState, useEffect } from 'react';
import { Award, ShieldCheck, Heart, User, CheckCircle2 } from 'lucide-react';

export default function AboutTeam() {
  const carouselRef = useRef(null);
  const [currentCard, setCurrentCard] = useState(0);
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

      {/* Structured About Cards (stacked vertical column) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'stretch', marginBottom: '32px' }}>
        {[
          {
            title: 'Overview',
            content: (
              <>
                <p style={{ lineHeight: 1.8, color: 'var(--text-muted)' }}>
                  Accomplishing a decade of excellence since its establishment in 2018, Shaju Soft Technologies has continuously contributed to technological innovation, professional development, and digital transformation across diverse sectors.
                </p>
                <p style={{ lineHeight: 1.8, marginTop: '12px', color: 'var(--text-muted)' }}>
                  Shaju Soft Technologies is a dynamic technology-driven organization committed to fostering innovation, digital transformation, and professional excellence across diverse industries. Established with a vision to bridge the gap between emerging technologies and practical business solutions, the company serves as a catalyst for technological advancement, research, skill development, and industry-academia collaboration.
                </p>
              </>
            )
          },
          {
            title: 'Vision',
            content: (
              <p style={{ lineHeight: 1.7, color: 'var(--text-muted)' }}>
                To be a globally recognized technology and innovation partner, empowering organizations, institutions, and individuals through transformative digital solutions, advanced research, and continuous professional development, while contributing to sustainable technological and societal progress.
              </p>
            )
          },
          {
            title: 'Mission',
            content: (
              <ul style={{ lineHeight: 1.7, color: 'var(--text-muted)', paddingLeft: '18px' }}>
                <li>Deliver innovative, reliable, and scalable technology solutions that address real-world challenges across industries.</li>
                <li>Foster a culture of research, creativity, and digital transformation through cutting-edge technologies and strategic collaborations.</li>
                <li>Enhance professional competencies through industry-oriented training, skill development programs, and knowledge-sharing initiatives.</li>
                <li>Bridge the gap between academia and industry by facilitating research partnerships, innovation ecosystems, and practical learning opportunities.</li>
                <li>Uphold the highest standards of quality, integrity, customer satisfaction, and technological excellence.</li>
              </ul>
            )
          },
          {
            title: 'Objectives',
            content: (
              <ul style={{ lineHeight: 1.7, color: 'var(--text-muted)', paddingLeft: '18px' }}>
                <li>Develop and implement innovative software products and technology solutions that create measurable value for clients and stakeholders.</li>
                <li>Promote research, development, and innovation in emerging fields such as AI, Data Science, Cloud, Cybersecurity, and IoT.</li>
                <li>Provide professional training, certification programs, and technical workshops to enhance workforce readiness and employability.</li>
                <li>Support startups, entrepreneurs, researchers, and institutions through mentorship, consultation, and technology enablement.</li>
                <li>Establish strong partnerships with academic institutions, industries, and professional organizations to facilitate knowledge exchange and collaborative growth.</li>
              </ul>
            )
          },
          {
            title: 'Incorporation & Recognition',
            content: (
              <p style={{ lineHeight: 1.7, color: 'var(--text-muted)' }}>
                Shaju Soft Technologies is established as a technology-driven organization delivering innovative software solutions, IT services, digital transformation initiatives, and professional development programs. The company is a legally registered business entity and is recognized under the MSME framework in India.
              </p>
            )
          },
          {
            title: 'Innovation & Skill Development',
            content: (
              <p style={{ lineHeight: 1.7, color: 'var(--text-muted)' }}>
                With a strong emphasis on research, innovation, and capacity building, Shaju Soft Technologies develops technology-driven solutions and professional training programs that empower businesses, students, researchers, and industry professionals to thrive in the digital era.
              </p>
            )
          }
        ].map((card) => (
          <div key={card.title} style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="glass-card" style={{ width: '100%', maxWidth: '900px' }}>
              <h3 style={{ marginBottom: '12px', color: 'var(--secondary)' }}>{card.title}</h3>
              {card.content}
            </div>
          </div>
        ))}
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
