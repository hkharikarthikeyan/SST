import React, { useState } from 'react';
import { Menu, X, Search, Globe, ChevronDown, User, UserPlus, BookOpen, Sun, Moon } from 'lucide-react';

export default function Header({ activeTab, setActiveTab, theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(null);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { 
      id: 'services', 
      label: 'Services',
      megaMenu: [
        {
          category: 'Education',
          items: [
            'Hackathon',
            'Internship',
            'Innovative Project',
            'Hands-on Training',
            'FDP / Seminar',
            'Skills Development'
          ]
        },
        {
          category: 'Software',
          items: [
            'Full Stack Developer',
            'Data Analytics',
            'UI & UX Design',
            'Digital Marketing',
            'Training Programs'
          ]
        },
        {
          category: 'Research',
          items: [
            'Research Associates',
            'Research Publications',
            'Conferences',
            'Book Publications',
            'Award Ceremony',
            'Patent',
            'Funding Projects'
          ]
        }
      ]
    },
    { id: 'conferences', label: 'Events' },
    { id: 'contact', label: 'Contact Us' },
    { id: 'publications', label: 'Journals' }
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setIsOpen(false);
    setShowDropdown(null);
  };

  return (
    <header className="glass-nav" style={{
      position: 'sticky',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: '0 5vw',
      height: '80px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      {/* Logo Area */}
      <div className="flex-center" style={{ gap: '10px', cursor: 'pointer' }} onClick={() => handleTabClick('home')}>
        <div className="flex-center" style={{
          width: '60px',
          height: '60px',
          borderRadius: '50px',
          background: 'linear-gradient(135deg, var(--secondary), var(--accent))',
          boxShadow: 'var(--shadow-glow)',
          
        }}>
          <img src="/sst.svg" alt="SST Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>
        <div>
          <span style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            fontSize: '1.15rem',
            letterSpacing: '0.5px',
            color: 'var(--text-main)'
          }}>
            SHAZU<span style={{ color: 'var(--secondary)' }}>SOFT</span>
          </span>
          <div style={{
            fontSize: '0.65rem',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            marginTop: '-4px',
            fontWeight: 600
          }}>
            Technologies
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav style={{ display: 'flex', alignItems: 'center', gap: '30px' }} className="desktop-nav">
        <ul style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          {navItems.map((item) => (
            <li key={item.id} style={{ position: 'relative' }}
                onMouseEnter={() => (item.dropdown || item.megaMenu) && setShowDropdown(item.id)}
                onMouseLeave={() => (item.dropdown || item.megaMenu) && setShowDropdown(null)}>
              {item.megaMenu ? (
                <button style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '8px 0',
                  transition: 'var(--transition-fast)'
                }}>
                  {item.label} <ChevronDown size={14} />
                </button>
              ) : (
                <button 
                  onClick={() => handleTabClick(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: activeTab === item.id ? 'var(--secondary)' : 'var(--text-muted)',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    padding: '8px 0',
                    transition: 'var(--transition-fast)',
                    position: 'relative'
                  }}>
                  {item.label}
                  {activeTab === item.id && (
                    <span style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: 0,
                      width: '100%',
                      height: '2px',
                      background: 'var(--secondary)',
                      borderRadius: '2px',
                      boxShadow: 'var(--shadow-glow)'
                    }} />
                  )}
                </button>
              )}

              {/* Mega Menu */}
              {item.megaMenu && showDropdown === item.id && (
                <div className="glass-card" style={{
                  position: 'absolute',
                  top: '100%',
                  left: '-120px',
                  width: '600px',
                  padding: '20px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '12px',
                  boxShadow: 'var(--shadow-lg)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  zIndex: 2000
                }}>
                  {item.megaMenu.map((col) => (
                    <div key={col.category}>
                      <div style={{
                        color: 'var(--secondary)',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700,
                        fontSize: '0.8rem',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        marginBottom: '8px',
                        paddingBottom: '6px',
                        borderBottom: '1px solid var(--border)'
                      }}>
                        {col.category}
                      </div>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        {col.items.map((subItem) => (
                          <li key={subItem}>
                            <button
                              onClick={() => setShowDropdown(null)}
                              style={{
                                width: '100%',
                                textAlign: 'left',
                                background: 'none',
                                border: 'none',
                                padding: '7px 10px',
                                color: 'var(--text-main)',
                                fontFamily: 'var(--font-body)',
                                fontSize: '0.85rem',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                transition: 'var(--transition-fast)'
                              }}
                              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(100, 255, 218, 0.08)'}
                              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                            >
                              {subItem}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button 
            onClick={() => handleTabClick('membership')}
            className="btn btn-primary" 
            style={{ padding: '8px 20px', fontSize: '0.85rem' }}
          >
            <UserPlus size={16} /> Join Us
          </button>
          <button 
            onClick={() => handleTabClick('contact')}
            className="btn btn-accent" 
            style={{ padding: '8px 20px', fontSize: '0.85rem' }}
          >
            <User size={16} /> Member Login
          </button>
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            title="Toggle light/dark mode"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-main)' }}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Toggle */}
      <button 
        className="mobile-toggle"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--text-main)',
          cursor: 'pointer',
          display: 'none'
        }}
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="glass-nav animate-fade-up" style={{
          position: 'fixed',
          top: '80px',
          left: 0,
          width: '100vw',
          height: 'calc(100vh - 80px)',
          padding: '30px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          borderTop: '1px solid var(--border-glass)',
          zIndex: 999,
          overflowY: 'auto'
        }}>
          {/* Mobile Header with Theme Toggle */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '20px' }}>
            <div className="flex-center" style={{ gap: '12px', cursor: 'pointer' }} onClick={() => handleTabClick('home')}>
              <div className="flex-center" style={{
                width: '45px',
                height: '45px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, var(--secondary), var(--accent))',
                boxShadow: 'var(--shadow-glow)'
              }}>
                <BookOpen size={24} color="#0a192f" strokeWidth={2.5} />
              </div>
              <div>
                <span style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: '1.15rem',
                  letterSpacing: '0.5px',
                  color: 'var(--text-main)'
                }}>
                  SHAZU<span style={{ color: 'var(--secondary)' }}>SOFT</span>
                </span>
                <div style={{
                  fontSize: '0.65rem',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginTop: '-4px',
                  fontWeight: 600
                }}>
                  Technologies
                </div>
              </div>
            </div>
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              title="Toggle light/dark mode"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            {navItems.map((item) => (
              <li key={item.id}>
                {item.megaMenu ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <button
                      onClick={() => setMobileServicesOpen(mobileServicesOpen ? null : item.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--text-main)',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 600,
                        fontSize: '1.1rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        padding: '10px'
                      }}
                    >
                      {item.label} <ChevronDown size={16} style={{ transform: mobileServicesOpen === item.id ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
                    </button>
                    {mobileServicesOpen === item.id && (
                      <div style={{ paddingLeft: '10px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {item.megaMenu.map((col) => (
                          <div key={col.category}>
                            <div style={{
                              color: 'var(--secondary)',
                              fontFamily: 'var(--font-heading)',
                              fontWeight: 700,
                              fontSize: '0.75rem',
                              textTransform: 'uppercase',
                              letterSpacing: '1px',
                              marginBottom: '6px'
                            }}>
                              {col.category}
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                              {col.items.map((subItem) => (
                                <li key={subItem}>
                                  <button
                                    onClick={() => setIsOpen(false)}
                                    style={{
                                      background: 'none',
                                      border: 'none',
                                      color: 'var(--text-main)',
                                      fontSize: '0.9rem',
                                      cursor: 'pointer',
                                      padding: '5px 0'
                                    }}
                                  >
                                    {subItem}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button 
                    onClick={() => handleTabClick(item.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: activeTab === item.id ? 'var(--secondary)' : 'var(--text-main)',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      width: '100%',
                      textAlign: 'left',
                      padding: '10px'
                    }}
                  >
                    {item.label}
                  </button>
                )}
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: 'auto' }}>
            <button 
              onClick={() => handleTabClick('membership')}
              className="btn btn-primary" 
              style={{ width: '100%' }}
            >
              <UserPlus size={18} /> Join Us
            </button>
            <button 
              onClick={() => handleTabClick('contact')}
              className="btn btn-accent" 
              style={{ width: '100%' }}
            >
              <User size={18} /> Member Login
            </button>
          </div>
        </div>
      )}

      {/* Embedded CSS for responsive header toggles */}
      <style>{`
        @media (max-width: 992px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
