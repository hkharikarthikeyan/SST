import React, { useState } from 'react';
import { Users, BookOpen, ShieldCheck, Send, Award, Briefcase } from 'lucide-react';

const MEMBERSHIPS = [
  {
    id: 'isei',
    title: 'Institute of Science, Engineering and Innovation (ISEI)',
    desc: 'Advancing science, engineering, technology and innovation.'
  },
  {
    id: 'iamhp',
    title: 'International Association of Medical and Health Professionals (IAMHP)',
    desc: 'Promoting healthcare, medical sciences and clinical research.'
  },
  {
    id: 'acar',
    title: 'Association of Creative Arts and Research (ACAR)',
    desc: 'Fostering excellence in creative arts and cultural studies.'
  },
  {
    id: 'wasp',
    title: 'World Association of Scholars and Professionals (WASP)',
    desc: 'Uniting scholars across disciplines for global impact.'
  }
];

const membershipBenefits = [
  { title: 'Attend Workshops, Seminars, and Guest Lectures', desc: 'Access exclusive member rates for events that advance your knowledge and professional connections.' },
  { title: 'Publish Your Research Papers', desc: 'Receive discounted publication fees and support for disseminating your work.' },
  { title: 'Collaborate on Research Projects', desc: 'Partner with international universities and global researchers on meaningful projects.' },
  { title: 'Serve as Editorial or Advisory Member', desc: 'Become part of editorial boards or advisory committees for conferences and academic events.' },
  { title: 'Expand Your Professional Network', desc: 'Connect with researchers, academicians, and industry experts worldwide.' },
  { title: 'Access Exclusive Learning Resources', desc: 'Benefit from webinars, technical sessions, and research guidance resources.' },
  { title: 'Stay Updated with Emerging Technologies', desc: 'Receive regular insights on the latest advancements in technology, research, and innovation.' },
];

const membershipCategories = [
  { id: 'professional', title: 'Professional Member', subtitle: 'Academicians, Researchers, Corporate Individuals' },
  { id: 'student', title: 'Student Member', subtitle: 'UG, PG Students' },
  { id: 'institutional', title: 'Institutional Member', subtitle: 'Universities / Colleges / Institutions' }
];

const membershipOpportunities = [
  { title: 'Scientific and Technical Review Committee', desc: 'Participate in evaluating and reviewing technical papers and research' },
  { title: 'Conference Organizing Committee', desc: 'Help plan and execute international conferences and seminars' },
  { title: 'Editorial and Publication Board', desc: 'Review and publish research in peer-reviewed journals' },
  { title: 'National Advisory Committee', desc: 'Guide national-level initiatives and policy development' },
  { title: 'International Advisory Committee', desc: 'Shape global research direction and collaboration' },
  { title: 'Research and Innovation Council', desc: 'Drive cutting-edge research projects and innovation' },
  { title: 'Industry-Academia Collaboration Committee', desc: 'Bridge industry and academic partnerships' },
  { title: 'Professional Development Committee', desc: 'Design and deliver training programs and workshops' },
  { title: 'Student and Young Researcher Committee', desc: 'Mentor emerging researchers and lead youth initiatives' },
  { title: 'Chapter Establishment', desc: 'Establish and lead Institutional, Professional, or Student Chapters' },
];

export default function Membership() {
  const [activeSegment, setActiveSegment] = useState('pro');

  const segments = {
    pro: {
      title: "Professional Chapters",
      icon: <Users size={28} />,
      tagline: "For Academicians, Scientists & Senior Researchers",
      desc: "Designed for faculties, directors, and active research wizards. Professional membership helps you interact with global technical leaders, receive grants for doctoral advisory, and publish papers with extreme waivers.",
      benefits: [
        "Exclusive discounts are available on international conference registrations.",
        "Expert guidance and support for preparing major research proposals (UGC, DST)",
        "Eligibility to join international journals as advisory review board members",
        "Opportunities to engage with international journals through editorial and review board networks"
      ]
    },
    student: {
      title: "Student Chapters",
      icon: <BookOpen size={28} />,
      tagline: "For Engineering, Medical & Management Undergraduates",
      desc: "Ideal for establishing student clubs inside colleges. We help host guest lectures, technical fests, FDP training, and internship tours, boosting standard accreditation files for institutions.",
      benefits: [
        "Access to digital databases (ResearchPedia & Academic Library)",
        "Assistance for industrial courses and implant training tours",
        "Organizing internal college tech fests with sponsor support",
        "Free student webinars, FDPs and certificate credentials"
      ]
    },
    institutional: {
      title: "Institutional Chapters",
      icon: <ShieldCheck size={28} />,
      tagline: "For Universities, Engineering & Medical Colleges",
      desc: "Provides centralized support for university accreditation (NAAC, NBA auditing). Helps link local chapters, execute exchange MOUs, host global conferences, and build R&D incubators.",
      benefits: [
        "Full accreditation SSR drafting and mock audit consultations",
        "Setup of official Shazu Soft Technologies/sst Incubation centers",
        "Free faculty development programs (FDP) for college staff",
        "Signed bilateral student delegation exchange structures"
      ]
    }
  };

  const handleFormChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: checked }));
      return;
    }

    if (type === 'file') {
      setFormData(prev => ({ ...prev, [name]: files?.[0] ?? null }));
      return;
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        title: 'Mr',
        name: '',
        dob: '',
        address: '',
        interest: '',
        email: '',
        phone: '',
        membershipType: 'professional',
        associationName: 'isei',
        qualification: '',
        designation: '',
        orgAddress: '',
        resume: null,
        declaration: false
      });
      setSubmitted(false);
    }, 4500);
  };

  return (
    <div className="section-padding" style={{ minHeight: '80vh', position: 'relative' }}>
      <div className="glow-blob glow-blob-cyan" style={{ top: '10%', left: '5%' }}></div>
      <div className="glow-blob glow-blob-pink" style={{ bottom: '10%', right: '5%' }}></div>

      <div style={{ textAlign: 'center', marginBottom: '50px', position: 'relative', zIndex: 5 }}>
        <span className="badge">Professional Membership</span>
        <h2 className="section-title center" style={{ display: 'inline-block', marginTop: '10px' }}>
          Join Our Global Community
        </h2>
        <p style={{ maxWidth: '720px', margin: '15px auto 0', color: 'var(--text-muted)' }}>
          Partnering with <strong>Shazusoft Technologies</strong> empowers businesses, professionals, and aspiring developers with innovative digital solutions, technical expertise, and continuous learning opportunities.
        </p>
        <p style={{ maxWidth: '720px', margin: '15px auto 20px', color: 'var(--text-muted)' }}>
          Once you connect with us, our team will understand your business goals, technical requirements, and growth objectives to provide customized solutions that drive success. We specialize in software development, cloud and mobile applications, AI-powered innovation, and training programs that keep you ahead of emerging technologies.
        </p>
        <a
          href="https://forms.gle/YTb2QGYZizsprwzK9"
          target="_blank"
          rel="noreferrer"
          className="btn btn-accent"
          style={{ marginTop: '10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
        >
          Fill Membership Form
        </a>
      </div>

      {/* Associations Cards */}
      <div style={{ marginBottom: '40px', position: 'relative', zIndex: 5 }}>
        <h3 style={{ marginBottom: '12px', textAlign: 'center' }} className="section-title">Member Associations</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginTop: '12px' }}>
          {MEMBERSHIPS.map(m => (
            <div key={m.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <h4 style={{ margin: 0, color: 'var(--secondary)', fontSize: '1rem' }}>{m.title}</h4>
              <p style={{ color: 'var(--text-muted)', marginTop: 0, fontSize: '0.9rem' }}>{m.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Membership Categories */}
      <div style={{ marginBottom: '40px', position: 'relative', zIndex: 5 }}>
        <h3 style={{ marginBottom: '12px', textAlign: 'center' }} className="section-title">Membership Categories</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginTop: '12px' }}>
          {membershipCategories.map(cat => (
            <div key={cat.id} className="glass-card" style={{ padding: '20px' }}>
              <h4 style={{ margin: 0, color: 'var(--secondary)', fontSize: '1rem' }}>{cat.title}</h4>
              <p style={{ color: 'var(--text-muted)', marginTop: '10px', fontSize: '0.92rem' }}>{cat.subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Membership Benefits */}
      <div style={{ marginBottom: '40px', position: 'relative', zIndex: 5 }}>
        <h3 style={{ marginBottom: '16px', textAlign: 'center' }} className="section-title">Member Benefits</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
          {membershipBenefits.map((benefit, idx) => (
            <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Award size={20} color="var(--secondary)" />
                <h4 style={{ margin: 0, color: 'var(--secondary)', fontSize: '0.95rem' }}>{benefit.title}</h4>
              </div>
              <p style={{ color: 'var(--text-muted)', marginTop: 0, fontSize: '0.85rem', lineHeight: 1.5 }}>{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Member Opportunities */}
      <div style={{ marginBottom: '40px', position: 'relative', zIndex: 5 }}>
        <h3 style={{ marginBottom: '16px', textAlign: 'center' }} className="section-title">Opportunities for Members</h3>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '24px', maxWidth: '720px', margin: '0 auto 24px' }}>
          Members may contribute to and serve in the following committees and leadership roles
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
          {membershipOpportunities.map((opportunity, idx) => (
            <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Briefcase size={20} color="var(--secondary)" />
                <h4 style={{ margin: 0, color: 'var(--secondary)', fontSize: '0.95rem' }}>{opportunity.title}</h4>
              </div>
              <p style={{ color: 'var(--text-muted)', marginTop: 0, fontSize: '0.85rem', lineHeight: 1.5 }}>{opportunity.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Segment Selector Tabs */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
        marginBottom: '40px',
        flexWrap: 'wrap',
        position: 'relative',
        zIndex: 5
      }}>
        {Object.keys(segments).map(key => (
          <button
            key={key}
            onClick={() => setActiveSegment(key)}
            style={{
              padding: '12px 24px',
              borderRadius: '30px',
              border: '1px solid',
              borderColor: activeSegment === key ? 'var(--secondary)' : 'var(--border-glass)',
              background: activeSegment === key ? 'rgba(100, 255, 218, 0.1)' : 'var(--bg-card)',
              color: activeSegment === key ? 'var(--secondary)' : 'var(--text-muted)',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              transition: 'var(--transition-smooth)'
            }}
          >
            {segments[key].icon}
            {segments[key].title}
          </button>
        ))}
      </div>

      {/* Benefits Content */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '40px',
        position: 'relative',
        zIndex: 5
      }}>
        {/* Benefits Display Card */}
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span className="badge badge-accent" style={{ alignSelf: 'flex-start', marginBottom: '15px' }}>
            Benefits Overview
          </span>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>{segments[activeSegment].title}</h2>
          <h4 style={{ color: 'var(--secondary)', fontWeight: 600, fontSize: '1.05rem', marginBottom: '20px' }}>
            {segments[activeSegment].tagline}
          </h4>
          <p style={{ lineHeight: 1.8, marginBottom: '25px', color: 'var(--text-muted)' }}>
            {segments[activeSegment].desc}
          </p>

          <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {segments[activeSegment].benefits.map((benefit, idx) => (
              <li key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '0.9rem' }}>
                <span style={{
                  color: 'var(--accent)',
                  fontWeight: 'bold',
                  background: 'rgba(255, 74, 90, 0.1)',
                  borderRadius: '50%',
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontSize: '0.8rem'
                }}>
                  {idx + 1}
                </span>
                <span style={{ color: 'var(--text-main)', lineHeight: 1.6 }}>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
