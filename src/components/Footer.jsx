import React from 'react';
import { Mail, Phone, MapPin, Send, BookOpen } from 'lucide-react';

// Inline SVG brand icons (lucide-react v1.18 removed brand icons)
const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const TwitterIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);
const YoutubeIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon fill="#0a192f" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
);
const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer({ setActiveTab }) {
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    window.scrollTo(0, 0);
  };

  return (
    <footer style={{
      background: 'var(--primary)',
      borderTop: '1px solid var(--border-glass)',
      padding: '80px 5vw 40px',
      position: 'relative',
      zIndex: 10
    }}>
      {/* Background Glow */}
      <div className="glow-blob glow-blob-pink" style={{ bottom: '0', right: '5%' }}></div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '40px',
        marginBottom: '60px'
      }}>
        {/* Profile Info */}
        <div>
          <div className="flex-center" style={{ gap: '10px', justifyContent: 'flex-start', marginBottom: '20px' }}>
            <div className="flex-center" style={{
              width: '40px',
              height: '40px',
              borderRadius: '50px',
              background: 'linear-gradient(135deg, var(--secondary), var(--accent))'
            }}>
              <img src="/sst.svg" alt="SST Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.2rem', letterSpacing: '1px' }}>
              SHAZU<span style={{ color: 'var(--secondary)' }}>SOFT</span> Technologies
            </span>
          </div>
          <p style={{ fontSize: '0.9rem', marginBottom: '24px', lineHeight: 1.7 }}>
            World's largest academic consulting and professional events network. We integrate R&D innovation, accreditation support, scientific publications, and international conferences to transform higher education.
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon" style={{
              width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.05)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'var(--transition-smooth)'
            }}><FacebookIcon size={18} /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon" style={{
              width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.05)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'var(--transition-smooth)'
            }}><TwitterIcon size={18} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon" style={{
              width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.05)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'var(--transition-smooth)'
            }}><LinkedinIcon size={18} /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-icon" style={{
              width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.05)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'var(--transition-smooth)'
            }}><YoutubeIcon size={18} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '25px', position: 'relative' }}>
            Quick Links
            <span style={{ position: 'absolute', bottom: '-8px', left: 0, width: '30px', height: '2px', background: 'var(--secondary)' }} />
          </h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
            {['Home', 'Conferences & Events', 'Consultancy', 'Publications', 'Membership', 'About & Team'].map((item, idx) => {
              const tabIds = ['home', 'conferences', 'consultancy', 'publications', 'membership', 'about'];
              return (
                <li key={item}>
                  <button 
                    onClick={() => handleTabClick(tabIds[idx])}
                    style={{
                      background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer',
                      transition: 'var(--transition-fast)', textAlign: 'left', padding: 0
                    }}
                    onMouseEnter={(e) => { e.target.style.color = 'var(--secondary)'; e.target.style.paddingLeft = '6px'; }}
                    onMouseLeave={(e) => { e.target.style.color = 'var(--text-muted)'; e.target.style.paddingLeft = '0'; }}
                  >
                    &rsaquo;&nbsp; {item}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Services & Support */}
        <div>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '25px', position: 'relative' }}>
            Consultancy Area
            <span style={{ position: 'absolute', bottom: '-8px', left: 0, width: '30px', height: '2px', background: 'var(--secondary)' }} />
          </h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
            {['Accreditation (NAAC/NBA)', 'Doctoral PhD Guidance', 'R&D Outsourcing', 'Patent Filing', 'Faculty Development (FDP)', 'Student Chapter Services'].map((item) => (
              <li key={item}>
                <button 
                  onClick={() => handleTabClick('consultancy')}
                  style={{
                    background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer',
                    transition: 'var(--transition-fast)', textAlign: 'left', padding: 0
                  }}
                  onMouseEnter={(e) => { e.target.style.color = 'var(--secondary)'; e.target.style.paddingLeft = '6px'; }}
                  onMouseLeave={(e) => { e.target.style.color = 'var(--text-muted)'; e.target.style.paddingLeft = '0'; }}
                >
                  &rsaquo;&nbsp; {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Headquarters Address */}
        <div>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '25px', position: 'relative' }}>
            Headquarters
            <span style={{ position: 'absolute', bottom: '-8px', left: 0, width: '30px', height: '2px', background: 'var(--secondary)' }} />
          </h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <MapPin size={22} color="var(--secondary)" style={{ flexShrink: 0 }} />
              <span>55A, 1st Street, Kannikaburam, KK Nagar, Chennai - 78</span>
            </li>
            <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <Phone size={18} color="var(--secondary)" style={{ flexShrink: 0 }} />
              <span>+91 8939150442 </span>
            </li>
            <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <Phone size={18} color="var(--secondary)" style={{ flexShrink: 0 }} />
              <span>+91 9080340803</span>
            </li>
            <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <Mail size={18} color="var(--secondary)" style={{ flexShrink: 0 }} />
              <span>info@shazusofttechnologies.org</span>
            </li>
          </ul>

          {/* Mini Newsletter */}
          <div style={{ marginTop: '25px' }}>
            <h5 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '10px' }}>Subscribe to Newsletters</h5>
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', position: 'relative' }}>
              <input 
                type="email" 
                placeholder="Your email address" 
                required
                style={{
                  width: '100%', padding: '10px 45px 10px 15px', borderRadius: '30px', border: '1px solid var(--border-glass)',
                  background: 'var(--primary-light)', color: 'var(--text-main)', fontSize: '0.85rem', outline: 'none'
                }}
              />
              <button type="submit" style={{
                position: 'absolute', right: '4px', top: '4px', bottom: '4px', border: 'none', background: 'var(--secondary)',
                borderRadius: '50%', width: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                transition: 'var(--transition-smooth)'
              }}>
                <Send size={14} color="#0a192f" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid var(--border-glass)', paddingTop: '30px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '16px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
        <div>
          &copy; {new Date().getFullYear()} Shazu Soft Technologies. All Rights Reserved.
        </div>
        <div style={{ display: 'flex', gap: '24px' }}>
          <a href="#" style={{ transition: 'var(--transition-fast)' }} onMouseEnter={(e) => e.target.style.color = 'var(--secondary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Privacy Policy</a>
          <a href="#" style={{ transition: 'var(--transition-fast)' }} onMouseEnter={(e) => e.target.style.color = 'var(--secondary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Terms of Service</a>
          <a href="#" style={{ transition: 'var(--transition-fast)' }} onMouseEnter={(e) => e.target.style.color = 'var(--secondary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Cookies Settings</a>
        </div>
      </div>
      <style>{`
        .social-icon:hover {
          background: var(--secondary) !important;
          color: var(--text-dark) !important;
          transform: translateY(-3px);
          box-shadow: var(--shadow-glow);
        }
      `}</style>
    </footer>
  );
}
