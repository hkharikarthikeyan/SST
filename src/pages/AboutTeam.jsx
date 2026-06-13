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

  
      <div className="about-content" style={{ padding: '4vw' }}>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--text-main)', textAlign: 'center', marginBottom: '1rem' }}>Shaju Soft Technologies</h1>
        <p style={{ color: 'var(--text-main)', lineHeight: 1.8 }}>
          Accomplishing a decade of excellence since its establishment in 2018, Shaju Soft Technologies has continuously contributed to technological innovation, professional development, and digital transformation across diverse sectors.
        </p>
        <p style={{ color: 'var(--text-main)', lineHeight: 1.8 }}>
          Shaju Soft Technologies is a dynamic technology‑driven organization committed to fostering innovation, digital transformation, and professional excellence across diverse industries. Established with a vision to bridge the gap between emerging technologies and practical business solutions, the company serves as a catalyst for technological advancement, research, skill development, and industry‑academia collaboration.
        </p>
        <p style={{ color: 'var(--text-main)', lineHeight: 1.8 }}>
          Shaju Soft Technologies addresses contemporary business and societal challenges through specialized training programs, technology‑enabled services, research collaborations, and digital transformation strategies. The company is dedicated to enhancing professional competencies by delivering continuous learning opportunities, industry‑relevant certifications, and hands‑on training in emerging fields such as Artificial Intelligence, Data Science, Cloud Computing, Cybersecurity, Internet of Things (IoT), and Software Engineering.
        </p>
        <p style={{ color: 'var(--text-main)', lineHeight: 1.8 }}>
          By connecting industry experts, researchers, educators, and technology professionals, Shaju Soft Technologies cultivates collaborative communities that promote innovation, mentorship, networking, and knowledge sharing. The organization supports research and development activities while facilitating partnerships that drive impactful outcomes across technology, education, healthcare, and business sectors.
        </p>
        <p style={{ color: 'var(--text-main)', lineHeight: 1.8 }}>
          As a technology solutions provider and knowledge partner, Shaju Soft Technologies develops and disseminates valuable digital content, software products, educational resources, and research‑driven insights through multiple platforms. Through its commitment to excellence, innovation, and continuous improvement, the company strives to empower organizations and professionals to achieve sustainable growth and create meaningful impact in an increasingly digital world.
        </p>
        <h2 style={{ fontSize: '2rem', color: 'var(--secondary)', marginTop: '2rem' }}>Vision</h2>
        <p style={{ color: 'var(--text-main)', lineHeight: 1.8 }}>
          To be a globally recognized technology and innovation partner, empowering organizations, institutions, and individuals through transformative digital solutions, advanced research, and continuous professional development, while contributing to sustainable technological and societal progress.
        </p>
        <h2 style={{ fontSize: '2rem', color: 'var(--secondary)', marginTop: '2rem' }}>Mission</h2>
        <ul style={{ color: 'var(--text-main)', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
          <li>To deliver innovative, reliable, and scalable technology solutions that address real‑world challenges across industries.</li>
          <li>To foster a culture of research, creativity, and digital transformation through cutting‑edge technologies and strategic collaborations.</li>
          <li>To enhance professional competencies through industry‑oriented training, skill development programs, and knowledge‑sharing initiatives.</li>
          <li>To bridge the gap between academia and industry by facilitating research partnerships, innovation ecosystems, and practical learning opportunities.</li>
          <li>To uphold the highest standards of quality, integrity, customer satisfaction, and technological excellence in all our endeavors.</li>
        </ul>
        <h2 style={{ fontSize: '2rem', color: 'var(--secondary)', marginTop: '2rem' }}>Objectives</h2>
        <ol style={{ color: 'var(--text-main)', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
          <li>Develop and implement innovative software products and technology solutions that create measurable value for clients and stakeholders.</li>
          <li>Promote research, development, and innovation in emerging fields such as Artificial Intelligence, Data Science, Cloud Computing, Cybersecurity, and IoT.</li>
          <li>Provide professional training, certification programs, and technical workshops to enhance workforce readiness and employability.</li>
          <li>Support startups, entrepreneurs, researchers, and institutions through mentorship, consultation, and technology enablement.</li>
          <li>Establish strong partnerships with academic institutions, industries, and professional organizations to facilitate knowledge exchange and collaborative growth.</li>
          <li>Encourage continuous learning and professional excellence through educational resources, seminars, conferences, and digital learning platforms.</li>
          <li>Contribute to sustainable development by leveraging technology to address social, educational, healthcare, and environmental challenges.</li>
          <li>Expand global outreach and create opportunities for innovation, collaboration, and business growth across diverse sectors.</li>
        </ol>
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
