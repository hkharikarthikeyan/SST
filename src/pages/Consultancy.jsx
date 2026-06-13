import React, { useState } from 'react';
import { Award, Globe, Search, BookOpen, Send, CheckCircle, ShieldCheck } from 'lucide-react';

export default function Consultancy() {
  const [activeTab, setActiveTab] = useState('accredit');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    collegeName: '',
    contactPerson: '',
    email: '',
    phone: '',
    serviceRequested: 'naac',
    message: ''
  });

  const services = {
    accredit: {
      title: "Accreditation & Quality Auditing",
      icon: <ShieldCheck size={28} />,
      badge: "Accreditation Support",
      tagline: "Secure A++ with NAAC & NBA Preparedness Programs",
      desc: "Our senior auditing consultants, led by expert academic wizards, help colleges draft Self Study Reports (SSR), execute criteria audits (1 to 7), build Course Outcomes (CO) & Program Outcomes (PO) attainment models, and perform mock audit panels.",
      bullets: [
        "Complete SSR documentation and gap analysis",
        "Mock Peer Team Auditing simulating exact NAAC/NBA schedules",
        "CO-PO mapping systems and attainment calculations",
        "Infrastructure development and academic file audit consulting"
      ]
    },
    exchange: {
      title: "Global Exchange & Collaboration",
      icon: <Globe size={28} />,
      badge: "Bilateral Delegations",
      tagline: "Forge Relationships with Universities in Over 30 Countries",
      desc: "We facilitate international academic delegations, dual-degree exchange integrations, global research MOUs, and overseas study visits for students and faculties.",
      bullets: [
        "MOU drafting & execution with highly ranked foreign universities",
        "Bilateral exchange programs for students & research scholars",
        "Faculty exchange tours and international teaching assignments",
        "Assistance with global joint research publications"
      ]
    },
    research: {
      title: "R&D Outsourcing & Project Funding",
      icon: <Search size={28} />,
      badge: "Research & Development",
      tagline: "Translate Ideas to Patents & Government Grants",
      desc: "Providing research advisory to setup incubation centers, outsource engineering simulations, file patents (intellectual property rights), and secure research grants from DST, AICTE, and UGC.",
      bullets: [
        "DST, UGC, and AICTE proposal drafting and submission assistance",
        "Patent filing, search, and IP registration workflows",
        "Incubation center setup and venture consulting",
        "Simulation & analysis outsourcing (MATLAB, ANSYS, CAD setups)"
      ]
    },
    phd: {
      title: "Doctoral Guidance & Peer Mentoring",
      icon: <BookOpen size={28} />,
      badge: "PhD Support",
      tagline: "Peer Mentors Assisting in Thesis & Scopus Publications",
      desc: "Complete PhD support starting from research topic selection, literature survey, core implementation (experimental design), and journal publication guidance (Scopus, WoS, IEEE).",
      bullets: [
        "Topic formulation and literature survey support",
        "Implementation and coding (Python, MATLAB, R, SPSS)",
        "Manuscript drafting and publication response review",
        "Thesis writing guidelines and mock viva panels"
      ]
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        collegeName: '',
        contactPerson: '',
        email: '',
        phone: '',
        serviceRequested: 'naac',
        message: ''
      });
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="section-padding" style={{ minHeight: '80vh', position: 'relative' }}>
      <div className="glow-blob glow-blob-cyan" style={{ top: '15%', right: '5%' }}></div>
      <div className="glow-blob glow-blob-pink" style={{ bottom: '15%', left: '5%' }}></div>

      <div style={{ textAlign: 'center', marginBottom: '50px', position: 'relative', zIndex: 5 }}>
        <span className="badge">Consulting Division</span>
        <h2 className="section-title center" style={{ display: 'inline-block', marginTop: '10px' }}>
          Academic & R&D Advisory Services
        </h2>
        <p style={{ maxWidth: '600px', margin: '15px auto 0' }}>
          Facilitating NAAC audits, global exchange agreements, government research grants, and PhD thesis publications for colleges, scholars, and scientists.
        </p>
      </div>

      {/* Interactive Tabs */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '16px',
        marginBottom: '40px',
        position: 'relative',
        zIndex: 5
      }}>
        {Object.keys(services).map(key => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              padding: '20px',
              borderRadius: '12px',
              border: '1px solid',
              borderColor: activeTab === key ? 'var(--secondary)' : 'var(--border-glass)',
              background: activeTab === key ? 'rgba(100, 255, 218, 0.08)' : 'var(--bg-card)',
              color: activeTab === key ? 'var(--secondary)' : 'var(--text-main)',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.95rem',
              boxShadow: activeTab === key ? 'var(--shadow-glow)' : 'none',
              transition: 'var(--transition-smooth)'
            }}
          >
            <span style={{ color: activeTab === key ? 'var(--secondary)' : 'var(--text-muted)' }}>
              {services[key].icon}
            </span>
            {services[key].title.split(' & ')[0]}
          </button>
        ))}
      </div>

      {/* Tab Content Display */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', marginBottom: '60px', position: 'relative', zIndex: 5 }}>
        {/* Service Details */}
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span className="badge" style={{ alignSelf: 'flex-start', marginBottom: '15px' }}>
            {services[activeTab].badge}
          </span>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>{services[activeTab].title}</h2>
          <h4 style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '1.05rem', marginBottom: '20px' }}>
            {services[activeTab].tagline}
          </h4>
          <p style={{ lineHeight: 1.8, marginBottom: '25px', color: 'var(--text-muted)' }}>
            {services[activeTab].desc}
          </p>

          <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {services[activeTab].bullets.map((bullet, idx) => (
              <li key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--secondary)', fontWeight: 'bold' }}>&#10003;</span>
                <span style={{ color: 'var(--text-main)' }}>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Inquiry Form */}
        <div className="glass-card" style={{ borderTop: '4px solid var(--secondary)' }}>
          <h3 style={{ marginBottom: '15px' }}>Request Consultation Support</h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '25px' }}>
            Fill in your details below and our academic wizards will contact you to schedule an introductory audit panel.
          </p>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <CheckCircle size={50} color="var(--secondary)" style={{ marginBottom: '15px', display: 'inline-block' }} />
              <h3>Inquiry Received!</h3>
              <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>Our consultancy managers will contact you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', fontWeight: 600 }}>College/Institution Name</label>
                <input 
                  type="text" 
                  name="collegeName" 
                  required 
                  value={formData.collegeName}
                  onChange={handleFormChange}
                  placeholder="e.g. National Institute of Tech"
                  style={{
                    width: '100%', padding: '10px 15px', borderRadius: '8px', border: '1px solid var(--border-glass)',
                    background: 'var(--primary-light)', color: 'var(--text-main)', outline: 'none', fontSize: '0.9rem'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', fontWeight: 600 }}>Contact Person</label>
                  <input 
                    type="text" 
                    name="contactPerson" 
                    required 
                    value={formData.contactPerson}
                    onChange={handleFormChange}
                    placeholder="Name"
                    style={{
                      width: '100%', padding: '10px 15px', borderRadius: '8px', border: '1px solid var(--border-glass)',
                      background: 'var(--primary-light)', color: 'var(--text-main)', outline: 'none', fontSize: '0.9rem'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', fontWeight: 600 }}>Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    required 
                    value={formData.phone}
                    onChange={handleFormChange}
                    placeholder="Phone"
                    style={{
                      width: '100%', padding: '10px 15px', borderRadius: '8px', border: '1px solid var(--border-glass)',
                      background: 'var(--primary-light)', color: 'var(--text-main)', outline: 'none', fontSize: '0.9rem'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', fontWeight: 600 }}>Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    value={formData.email}
                    onChange={handleFormChange}
                    placeholder="Email"
                    style={{
                      width: '100%', padding: '10px 15px', borderRadius: '8px', border: '1px solid var(--border-glass)',
                      background: 'var(--primary-light)', color: 'var(--text-main)', outline: 'none', fontSize: '0.9rem'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', fontWeight: 600 }}>Service</label>
                  <select 
                    name="serviceRequested" 
                    value={formData.serviceRequested}
                    onChange={handleFormChange}
                    style={{
                      width: '100%', padding: '10px 15px', borderRadius: '8px', border: '1px solid var(--border-glass)',
                      background: 'var(--primary-light)', color: 'var(--text-main)', outline: 'none', cursor: 'pointer', fontSize: '0.9rem',
                      height: '42px'
                    }}
                  >
                    <option value="naac">NAAC/NBA Accreditation</option>
                    <option value="exchange">Global Exchange Agreements</option>
                    <option value="funding">R&D Projects & Funding</option>
                    <option value="phd">PhD Thesis Publications</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', fontWeight: 600 }}>Brief Requirements</label>
                <textarea 
                  name="message" 
                  rows="3" 
                  value={formData.message}
                  onChange={handleFormChange}
                  placeholder="Outline your accreditation timeline, target grants, or research scope..."
                  style={{
                    width: '100%', padding: '10px 15px', borderRadius: '8px', border: '1px solid var(--border-glass)',
                    background: 'var(--primary-light)', color: 'var(--text-main)', outline: 'none', fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem', resize: 'vertical'
                  }}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-accent" style={{ width: '100%', padding: '12px' }}>
                <Send size={16} /> Submit Consultation request
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
