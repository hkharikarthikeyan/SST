import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Award, Flame, Lightbulb, ArrowRight } from 'lucide-react';

export default function HeroSlider({ setActiveTab, theme }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "A Proud Milestone – Shazu Soft Technologies Inauguration Ceremony",
      subtitle: "NEW BEGINNING",
      badgeIcon: <Flame size={14} />,
      desc: "The Inaugural Ceremony of Shazu Soft Technologies was successfully completed. Committed to delivering quality, innovation, and value. Education • Software • Research — Transforming Ideas into Digital Excellence.",
      actionText: "About Us",
      actionTab: "about",
      accentColor: "#facc15",
      bgGradient: "linear-gradient(rgba(20,10,5,0.82), rgba(2,12,27,0.94))",
      bgGradientLight: "linear-gradient(rgba(255,250,230,0.88), rgba(255,255,245,0.96))",
      image: "/MDwith Inaugural.jpeg"
    },
    {
      title: "Faculty Industrial Training Program Successfully Completed!",
      subtitle: "INDUSTRY MILESTONE",
      badgeIcon: <Award size={14} />,
      desc: "Assistant Professors from AI&DS Dept, Mahendra Engineering College completed 6-day Faculty Industrial Training at Shazu Soft Technologies, Salem (23–28 June 2026).",
      actionText: "Know More",
      actionTab: "conferences",
      accentColor: "var(--secondary)",
      bgGradient: "linear-gradient(rgba(5,20,40,0.82), rgba(2,12,27,0.94))",
      bgGradientLight: "linear-gradient(rgba(230,245,255,0.88), rgba(245,250,255,0.96))",
      image: "/mahendra.jpeg"
    },
    {
      title: "Global Academic & R&D Consultancy",
      subtitle: "SST PORTAL",
      badgeIcon: <Award size={14} />,
      desc: "Guiding premier educational institutions through accreditation audits (NAAC, NBA, NIRF), establishing international student exchange programs, and developing research capabilities.",
      actionText: "Request Academic Audit",
      actionTab: "consultancy",
      accentColor: "var(--secondary)",
      bgGradient: "linear-gradient(rgba(10,25,47,0.85), rgba(2,12,27,0.95))",
      bgGradientLight: "linear-gradient(rgba(242,242,240,0.85), rgba(250,250,250,0.95))"
    },
    {
      title: "Advancing Innovation & Global Conferences",
      subtitle: "SST OPERATIONS",
      badgeIcon: <Flame size={14} />,
      desc: "500+ conferences, guest seminars, conventions, and skill development symposia annually across engineering, technology, and health sciences.",
      actionText: "Browse Conferences",
      actionTab: "conferences",
      accentColor: "var(--accent)",
      bgGradient: "linear-gradient(rgba(20,10,25,0.85), rgba(2,12,27,0.95))",
      bgGradientLight: "linear-gradient(rgba(242,207,119,0.85), rgba(255,255,255,0.95))"
    },
    {
      title: "Peer-Reviewed Scientific Publications",
      subtitle: "DIGITAL LIBRARY & JOURNALS",
      badgeIcon: <Lightbulb size={14} />,
      desc: "Get published in highly indexed international journals and book chapters. Leverage our Scientific Database Management including DOI directories and ResearchPedia.",
      actionText: "Submit Research Paper",
      actionTab: "publications",
      accentColor: "#facc15",
      bgGradient: "linear-gradient(rgba(10,20,47,0.85), rgba(2,12,27,0.95))",
      bgGradientLight: "linear-gradient(rgba(242,207,119,0.85), rgba(255,255,255,0.95))"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section style={{ position: 'relative', height: '80vh', minHeight: '500px', overflow: 'hidden' }}>
      <div className="glow-blob glow-blob-cyan" style={{ top: '10%', left: '5%' }} />
      <div className="glow-blob glow-blob-pink" style={{ bottom: '10%', right: '5%' }} />

      {slides.map((slide, index) => (
        <div
          key={index}
          style={{
            position: 'absolute', inset: 0,
            opacity: currentSlide === index ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            zIndex: currentSlide === index ? 1 : 0,
            background: theme === 'light' ? slide.bgGradientLight : slide.bgGradient,
            display: 'flex',
            alignItems: 'center',
            padding: '0 6vw',
            gap: '40px'
          }}
          className="hero-slide-inner"
        >
          {/* Content — left side */}
          <div className="hero-slide-content" style={{ flex: slide.image ? '0 0 52%' : '1', maxWidth: slide.image ? '52%' : '750px', position: 'relative', zIndex: 2 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)',
              padding: '5px 14px', borderRadius: '30px', fontSize: '0.75rem', fontWeight: 600,
              color: theme === 'light' ? '#073A59' : slide.accentColor,
              textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '16px'
            }}>
              {slide.badgeIcon} {slide.subtitle}
            </div>

            <h1 style={{
              lineHeight: 1.15, marginBottom: '18px', fontWeight: 800,
              fontSize: 'clamp(1.5rem, 3.5vw, 3.2rem)',
              color: theme === 'light' ? '#073A59' : 'var(--text-main)',
              textShadow: theme === 'light' ? 'none' : '0 4px 12px rgba(0,0,0,0.5)'
            }}>
              {slide.title}
            </h1>

            <p style={{
              fontSize: 'clamp(0.88rem, 1.6vw, 1.05rem)', lineHeight: 1.7, marginBottom: '32px',
              color: theme === 'light' ? '#073A59cc' : 'var(--text-muted)'
            }}>
              {slide.desc}
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setActiveTab(slide.actionTab)}
                className="btn"
                style={{ background: slide.accentColor, borderColor: slide.accentColor, color: '#073A59' }}
              >
                {slide.actionText} <ArrowRight size={15} />
              </button>
              <button onClick={() => setActiveTab('about')} className="btn btn-secondary">
                Learn More
              </button>
            </div>
          </div>

          {/* Image — right side (only for image slides) */}
          {slide.image && (
            <div className="hero-slide-img" style={{ flex: '0 0 44%', height: '70%', position: 'relative', zIndex: 2 }}>
              <img
                src={slide.image}
                alt={slide.title}
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', objectPosition: 'center',
                  borderRadius: '16px',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                  border: `2px solid ${slide.accentColor}50`
                }}
              />
            </div>
          )}
        </div>
      ))}

      {/* Arrows */}
      {['left', 'right'].map(dir => (
        <button
          key={dir}
          onClick={() => setCurrentSlide(prev => dir === 'left' ? (prev - 1 + slides.length) % slides.length : (prev + 1) % slides.length)}
          className="hero-arrow"
          style={{
            position: 'absolute', [dir]: '20px', top: '50%', transform: 'translateY(-50%)',
            zIndex: 10, background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)',
            width: '46px', height: '46px', borderRadius: '50%', color: 'white',
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 0.3s'
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.28)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
        >
          {dir === 'left' ? <ChevronLeft size={22} /> : <ChevronRight size={22} />}
        </button>
      ))}

      {/* Dots */}
      <div style={{
        position: 'absolute', bottom: '24px', width: '100%',
        display: 'flex', justifyContent: 'center', gap: '10px', zIndex: 10
      }}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            style={{
              width: currentSlide === idx ? '28px' : '9px', height: '9px',
              borderRadius: '5px', border: 'none', cursor: 'pointer',
              background: currentSlide === idx ? 'var(--secondary)' : 'rgba(255,255,255,0.25)',
              transition: 'all 0.3s',
              boxShadow: currentSlide === idx ? 'var(--shadow-glow)' : 'none'
            }}
          />
        ))}
      </div>

      <style>{`
        .hero-arrow { display: flex !important; }
        @media (max-width: 768px) {
          .hero-arrow { display: none !important; }
          .hero-slide-inner { flex-direction: column !important; padding: 0 5vw !important; justify-content: center !important; gap: 16px !important; }
          .hero-slide-content { flex: unset !important; max-width: 100% !important; }
          .hero-slide-img { flex: unset !important; width: 100% !important; height: 38% !important; }
        }
      `}</style>
    </section>
  );
}
