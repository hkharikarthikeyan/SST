import React, { useState } from 'react';
import { Users, BookOpen, Search, ShieldCheck, Mail, Send, CheckCircle, CreditCard } from 'lucide-react';

export default function Membership() {
  const [activeSegment, setActiveSegment] = useState('pro');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    chapterType: 'professional', // professional, student, institutional
    college: '',
    designation: '',
    address: ''
  });

  const segments = {
    pro: {
      title: "Professional Chapters",
      icon: <Users size={28} />,
      tagline: "For Academicians, Scientists & Senior Researchers",
      desc: "Designed for faculties, directors, and active research wizards. Professional membership helps you interact with global technical leaders, receive grants for doctoral advisory, and publish papers with extreme waivers.",
      benefits: [
        "Up to 40% discount on international conference registrations",
        "Assistance in drafting major research proposals (UGC/DST)",
        "Eligibility to join international journals as advisory review board members",
        "Global networking access to over 10,000+ senior academicians"
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
        "Setup of official Shazu Soft Technologies/Technoarete Incubation centers",
        "Free faculty development programs (FDP) for college staff",
        "Signed bilateral student delegation exchange structures"
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
        name: '',
        email: '',
        phone: '',
        chapterType: 'professional',
        college: '',
        designation: '',
        address: ''
      });
      setSubmitted(false);
    }, 4500);
  };

  return (
    <div className="section-padding" style={{ minHeight: '80vh', position: 'relative' }}>
      <div className="glow-blob glow-blob-cyan" style={{ top: '10%', left: '5%' }}></div>
      <div className="glow-blob glow-blob-pink" style={{ bottom: '10%', right: '5%' }}></div>

      <div style={{ textAlign: 'center', marginBottom: '50px', position: 'relative', zIndex: 5 }}>
        <span className="badge">Society Membership</span>
        <h2 className="section-title center" style={{ display: 'inline-block', marginTop: '10px' }}>
          Chapters & Associations Portal
        </h2>
        <p style={{ maxWidth: '600px', margin: '15px auto 0' }}>
          Connect with 25,000+ technical volunteers. Establish student chapters in your college or apply for individual professional memberships.
        </p>
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

      {/* Benefits Content & Registration Forms */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
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

        {/* Application Form */}
        <div className="glass-card" style={{ borderTop: '4px solid var(--secondary)' }}>
          <h3 style={{ marginBottom: '15px' }}>Apply For Society Membership</h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '25px' }}>
            Enter your academic profile details to initiate registration. Upon verification, our local coordinator will issue your membership certificate.
          </p>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <CheckCircle size={50} color="var(--secondary)" style={{ marginBottom: '15px', display: 'inline-block' }} />
              <h3>Application Submitted!</h3>
              <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>Our registration coordinators will review your affiliation and respond shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', fontWeight: 600 }}>Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="e.g. Dr. Vijay Singh Rathore"
                  style={{
                    width: '100%', padding: '10px 15px', borderRadius: '8px', border: '1px solid var(--border-glass)',
                    background: 'var(--primary-light)', color: 'var(--text-main)', outline: 'none', fontSize: '0.9rem'
                  }}
                />
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
                  <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', fontWeight: 600 }}>Institution/College</label>
                  <input 
                    type="text" 
                    name="college" 
                    required 
                    value={formData.college}
                    onChange={handleFormChange}
                    placeholder="College"
                    style={{
                      width: '100%', padding: '10px 15px', borderRadius: '8px', border: '1px solid var(--border-glass)',
                      background: 'var(--primary-light)', color: 'var(--text-main)', outline: 'none', fontSize: '0.9rem'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', fontWeight: 600 }}>Designation</label>
                  <input 
                    type="text" 
                    name="designation" 
                    required 
                    value={formData.designation}
                    onChange={handleFormChange}
                    placeholder="e.g. Professor / Scholar"
                    style={{
                      width: '100%', padding: '10px 15px', borderRadius: '8px', border: '1px solid var(--border-glass)',
                      background: 'var(--primary-light)', color: 'var(--text-main)', outline: 'none', fontSize: '0.9rem'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', fontWeight: 600 }}>Membership Type</label>
                <select 
                  name="chapterType" 
                  value={formData.chapterType}
                  onChange={handleFormChange}
                  style={{
                    width: '100%', padding: '10px 15px', borderRadius: '8px', border: '1px solid var(--border-glass)',
                    background: 'var(--primary-light)', color: 'var(--text-main)', outline: 'none', cursor: 'pointer', fontSize: '0.9rem',
                    height: '42px'
                  }}
                >
                  <option value="professional">Individual Professional Chapter</option>
                  <option value="student">Student Chapter Establishment</option>
                  <option value="institutional">Institutional Society Chapter</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', fontWeight: 600 }}>Postal Address</label>
                <textarea 
                  name="address" 
                  rows="2" 
                  value={formData.address}
                  onChange={handleFormChange}
                  placeholder="Where should certificates/letters be sent?"
                  style={{
                    width: '100%', padding: '10px 15px', borderRadius: '8px', border: '1px solid var(--border-glass)',
                    background: 'var(--primary-light)', color: 'var(--text-main)', outline: 'none', fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem', resize: 'vertical'
                  }}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-accent" style={{ width: '100%', padding: '12px' }}>
                <Send size={16} /> Submit Membership application
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
