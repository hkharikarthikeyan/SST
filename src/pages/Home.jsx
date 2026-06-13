import React, { useEffect, useState } from 'react';
import HeroSlider from '../components/HeroSlider';
import AnnouncementMarquee from '../components/AnnouncementMarquee';
import QuickLinks from '../components/QuickLinks';
import { Users, FileCheck, Award, Smile, ChevronRight, Newspaper, Calendar } from 'lucide-react';

export default function Home({ setActiveTab, theme }) {
  const [counts, setCounts] = useState({
    audits: 0,
    conferences: 0,
    papers: 0,
    volunteers: 0
  });

  const targets = {
    audits: 1250,
    conferences: 580,
    papers: 145000,
    volunteers: 25000
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds animation
    const steps = 50;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setCounts({
        audits: Math.floor((targets.audits / steps) * step),
        conferences: Math.floor((targets.conferences / steps) * step),
        papers: Math.floor((targets.papers / steps) * step),
        volunteers: Math.floor((targets.volunteers / steps) * step)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    { label: "Institutional Audits", value: counts.audits.toLocaleString() + "+", icon: <Award size={32} color="var(--secondary)" /> },
    { label: "Scientific Conferences", value: counts.conferences.toLocaleString() + "+", icon: <Calendar size={32} color="var(--accent)" /> },
    { label: "Papers Published", value: counts.papers.toLocaleString() + "+", icon: <FileCheck size={32} color="#facc15" /> },
    { label: "Active Volunteers", value: counts.volunteers.toLocaleString() + "+", icon: <Users size={32} color="#38bdf8" /> }
  ];

  const coreValues = [
    {
      title: "Professional Networking",
      desc: "Essential to the global technical community. We connect professional wizards, academicians, and overseas technical leaders who have left no stone unturned in reinforcing the fields of science, engineering, and technology."
    },
    {
      title: "Innovation & Incubation",
      desc: "Interactive scientific forums including international expos, guest lectures, seminars, and panel discussions. We provide secure channels for filing patents and protecting intellectual property."
    },
    {
      title: "Technology for Humanity",
      desc: "Our volunteers serve underprivileged children, grant free industrial courses to youth with financial constraints, and provide technical curriculums to unemployed youths to improve employment scopes globally."
    },
    {
      title: "Our Foundation",
      desc: "An open platform where educational institutes, professional organizations, and industries collaborate to carry out inventions and achieve centralized committee operations worldwide."
    }
  ];

  const stories = [
    "Student Chapter Inaugurated at Dhanekula Institute of Engineering & Technology, Vijayawada.",
    "Student Chapter Inaugurated at B K Birla Institute of Engineering & Technology, Pilani, Rajasthan.",
    "BioLEAGUES Indo-Global Oncology Summit-18 successfully conducted, leading to advanced clinical guidelines.",
    "Institutional audit completed for top 10 engineering institutes in South India, paving the path to NAAC A++."
  ];

  const events = [
    { title: "Int. Conference on Advances in Computing Applications", loc: "National Institute of Technology, Uttarakhand" },
    { title: "Int. Conference on Technological Innovations in Engineering", loc: "Deogiri Institute of Engineering & Management, Maharashtra" },
    { title: "Int. Conference on Recent Advances in Bio-Science", loc: "Parul Institute of Applied Science, Gujarat" },
    { title: "Int. Conference on Innovations & Practices in Electrical Engineering", loc: "KDK College of Engineering, Nagpur" }
  ];

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* Slider */}
      <HeroSlider setActiveTab={setActiveTab} theme={theme} />

      {/* Marquee */}
      <AnnouncementMarquee />

      {/* Audience Quick Links */}
      <QuickLinks setActiveTab={setActiveTab} />

      {/* Stats Section */}
      <section style={{
        padding: '60px 5vw',
        background: theme === 'light' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(1, 56, 78, 0.4)',
        borderTop: '1px solid var(--border-glass)',
        borderBottom: '1px solid var(--border-glass)',
        position: 'relative'
      }}>
        <div className="grid-container" style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '30px',
          textAlign: 'center'
        }}>
          {stats.map((stat, idx) => (
            <div key={idx} className="flex-center" style={{
              flexDirection: 'column',
              padding: '20px',
              background: 'rgba(255, 253, 253, 0.27)',
              borderRadius: '12px',
              border: '1px solid var(--border-glass)'
            }}>
              <div style={{ marginBottom: '15px' }}>{stat.icon}</div>
              <h2 style={{ fontSize: '2rem', color: 'var(--text-main)', marginBottom: '5px', fontWeight: 800 }}>
                {stat.value}
              </h2>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Merged Value & Vision */}
      <section className="section-padding" style={{ position: 'relative' }}>
        <div className="glow-blob glow-blob-cyan" style={{ top: '30%', right: '0' }}></div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center' }}>
          <div>
            <span className="badge" style={{ marginBottom: '15px' }}>Our Mission</span>
            <h2 className="section-title" style={{ marginBottom: '25px' }}>
              Bridging the Gap Between Curriculum & Practical Excellence
            </h2>
            <p style={{ marginBottom: '20px', lineHeight: 1.8 }}>
              Technoarete & KKCS work in tandem to minimize the academic gap. Through scientific events, conferences, seminars, and accreditation consultancy, we assist researchers and educational institutions in establishing global footprints.
            </p>
            <p style={{ marginBottom: '30px', lineHeight: 1.8 }}>
              We provide financial aid, project mentoring, and publishing partnerships so that economic constraints never hinder technical growth and research advancement.
            </p>
            <button onClick={() => setActiveTab('about')} className="btn btn-primary">
              Read Our Profile <ChevronRight size={16} />
            </button>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px'
          }}>
            <div className="glass-card" style={{ padding: '24px', marginTop: '20px' }}>
              <h4 style={{ color: 'var(--secondary)', marginBottom: '12px', fontSize: '1.1rem' }}>Accreditation Audits</h4>
              <p style={{ fontSize: '0.8rem', lineHeight: 1.6 }}>Preparing colleges for NAAC & NBA audits through rigorous auditing procedures.</p>
            </div>
            <div className="glass-card" style={{ padding: '24px', marginTop: '20px' }}>
              <h4 style={{ color: 'var(--accent)', marginBottom: '12px', fontSize: '1.1rem' }}>Global Exchanges</h4>
              <p style={{ fontSize: '0.8rem', lineHeight: 1.6 }}>Facilitating bilateral delegations, academic exchanges and partnerships across 30+ nations.</p>
            </div>
            <div className="glass-card" style={{ padding: '24px', }}>
              <h4 style={{ color: '#facc15', marginBottom: '12px', fontSize: '1.1rem' }}>Indexed Publications</h4>
              <p style={{ fontSize: '0.8rem', lineHeight: 1.6 }}>Peer-reviewed article distributions across indexed repositories and registers.</p>
            </div>
            <div className="glass-card" style={{ padding: '24px' }}>
              <h4 style={{ color: '#a4cadaff', marginBottom: '12px', fontSize: '1.1rem' }}>Scientific Networks</h4>
              <p style={{ fontSize: '0.8rem', lineHeight: 1.6 }}>Access to 25,000+ active scholars, developers, and field leaders globally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / Features Grid */}
      <section className="section-padding" style={{ background: 'rgba(23, 42, 69, 0.2)', borderTop: '1px solid var(--border-glass)' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="badge badge-accent" style={{ marginBottom: '15px' }}>Core Capabilities</span>
          <h2 className="section-title center" style={{ display: 'inline-block' }}>Centralized Innovation Operations</h2>
        </div>

        <div className="grid-container">
          {coreValues.map((val, idx) => (
            <div key={idx} className="glass-card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '15px', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: idx % 2 === 0 ? 'var(--secondary)' : 'var(--accent)' }}>0{idx + 1}.</span> {val.title}
              </h3>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stories & Happenings side-by-side */}
      <section className="section-padding">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          {/* Top Stories */}
          <div className="glass-card" style={{ borderLeft: '4px solid var(--secondary)' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px', fontSize: '1.3rem' }}>
              <Newspaper size={20} color="var(--secondary)" /> Top Stories & Highlights
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {stories.map((story, index) => (
                <li key={index} style={{
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'flex-start',
                  borderBottom: index !== stories.length - 1 ? '1px solid var(--border-glass)' : 'none',
                  paddingBottom: index !== stories.length - 1 ? '16px' : '0'
                }}>
                  <span style={{ color: 'var(--secondary)', fontWeight: 'bold' }}>&#9656;</span>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-main)' }}>{story}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Happenings */}
          <div className="glass-card" style={{ borderLeft: '4px solid var(--accent)' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px', fontSize: '1.3rem' }}>
              <Calendar size={20} color="var(--accent)" /> Happenings & Forums
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {events.map((ev, index) => (
                <li key={index} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  borderBottom: index !== events.length - 1 ? '1px solid var(--border-glass)' : 'none',
                  paddingBottom: index !== events.length - 1 ? '14px' : '0'
                }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)' }}>{ev.title}</h4>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>📍 {ev.loc}</span>
                    <button
                      onClick={() => setActiveTab('conferences')}
                      style={{ background: 'none', border: 'none', color: 'var(--accent)', cursor: 'pointer', fontSize: '0.8rem', display: 'flex', alignItems: 'center' }}
                    >
                      Details &rsaquo;
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Quick service prompt */}
      <section className="section-padding" style={{ textAlign: 'center', background: 'linear-gradient(135deg, rgba(239, 240, 243, 0.8), rgba(255,74,90,0.08))', borderTop: '1px solid var(--border-glass)' }}>
        <h2 style={{ marginBottom: '20px', fontSize: '2rem' }}>Are You Planning an Academic Accredit or Event?</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 30px', color: 'var(--text-muted)' }}>
          Get comprehensive guidance for setting up institutional audits, organizing a conference, publishing proceedings, or establishing a local student chapter.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <button onClick={() => setActiveTab('contact')} className="btn btn-accent">Request Consultation</button>
          <button onClick={() => setActiveTab('membership')} className="btn btn-primary">Join Society</button>
        </div>
      </section>
    </div>
  );
}
