import React, { useState } from 'react';
import { Menu, X, Search, Globe, ChevronDown, User, UserPlus, BookOpen, Sun, Moon } from 'lucide-react';

export default function Header({ activeTab, setActiveTab, theme, toggleTheme, setActiveService }) {
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
        { id: 'education', label: 'Education' },
        { id: 'software', label: 'Software' },
        { id: 'research', label: 'Research' },
      ]
    },
    { id: 'conferences', label: 'Events' },
    { id: 'contact', label: 'Contact Us' },
    { id: 'career', label: 'Career' },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setIsOpen(false);
    setShowDropdown(null);
  };

  return (
    <header className="glass-nav" style={{
      position: 'fixed',
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
      <div className="flex-center" style={{ gap: '12px', cursor: 'pointer' }} onClick={() => handleTabClick('home')}>
        <div style={{
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #F2C777, #BF8A49)',
          boxShadow: '0 0 14px rgba(242,199,119,0.7), 0 0 28px rgba(242,199,119,0.3)',
          border: '2px solid rgba(242,199,119,0.5)',
          flexShrink: 0,
          overflow: 'hidden'
        }}>
          <img src="/sst.svg" alt="SST Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
          <div style={{ display: 'flex', alignItems: 'center', lineHeight: 1 }}>
            <span style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 900,
              fontSize: '1.5rem',
              letterSpacing: '2px',
              color: '#F2C777',
              textShadow: '0 0 2px rgba(53, 47, 87, 0.9), 0 0 3px rgba(29, 28, 26, 0.6), 0 0 3px rgba(93, 63, 63, 0.3)',
            }}>SHAZU</span>
            <span style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 900,
              fontSize: '1.5rem',
              letterSpacing: '2px',
              color: 'var(--text-main)',
              textShadow: '0 0 8px rgba(242,199,119,0.5), 0 0 16px rgba(242,199,119,0.2)',
            }}>SOFT</span>
          </div>
          <div style={{
            fontSize: '1.1rem',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            fontWeight: 900,
            color: '#BF8A49',
            textShadow: '0 0 6px rgba(191,138,73,0.6)',
          }}>Technologies</div>
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
                  left: '-40px',
                  width: '200px',
                  padding: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  boxShadow: 'var(--shadow-lg)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  zIndex: 2000
                }}>
                  {item.megaMenu.map((col) => (
                    <button
                      key={col.id}
                      onClick={() => { handleTabClick(col.id); }}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        background: 'none',
                        border: 'none',
                        padding: '10px 14px',
                        color: 'var(--text-main)',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.9rem',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'var(--transition-fast)'
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(100, 255, 218, 0.08)'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                      {col.label}
                    </button>
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
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingBottom: '20px' }}>
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
                      <ul style={{ paddingLeft: '20px', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {item.megaMenu.map((col) => (
                          <li key={col.id}>
                            <button
                              onClick={() => handleTabClick(col.id)}
                              style={{
                                background: 'none',
                                border: 'none',
                                color: activeTab === col.id ? 'var(--secondary)' : 'var(--text-main)',
                                fontSize: '0.95rem',
                                cursor: 'pointer',
                                padding: '6px 0'
                              }}
                            >
                              {col.label}
                            </button>
                          </li>
                        ))}
                      </ul>
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
