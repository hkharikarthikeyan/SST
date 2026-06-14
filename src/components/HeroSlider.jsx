import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Award, Flame, Lightbulb, ArrowRight } from 'lucide-react';

export default function HeroSlider({ setActiveTab, theme }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Global Academic & R&D Consultancy",
      subtitle: "SST PORTAL",
      badge: "Institutional Excellence",
      badgeIcon: <Award size={14} />,
      desc: "Guiding premier educational institutions through accreditation audits (NAAC, NBA, NIRF), establishing international student exchange programs, and developing research capabilities.",
      actionText: "Request Academic Audit",
      actionTab: "consultancy",
      accentColor: "var(--secondary)",
      bgGradient: "linear-gradient(rgba(10, 25, 47, 0.85), rgba(2, 12, 27, 0.95))",
      bgGradientLight: "linear-gradient(rgba(242, 242, 240, 0.85), rgba(250, 250, 250, 0.95))"
    },
    {
      title: "Advancing Innovation & Global Conferences",
      subtitle: "sst OPERATIONS",
      badge: "Scientific Events",
      badgeIcon: <Flame size={14} />,
      desc: "The world's largest professional body for engineering, technology, and health sciences. Over 500+ conferences, guest seminars, conventions, and skill development symposia annually.",
      actionText: "Browse Conferences",
      actionTab: "conferences",
      accentColor: "var(--accent)",
      bgGradient: "linear-gradient(rgba(20, 10, 25, 0.85), rgba(2, 12, 27, 0.95))",
      bgGradientLight: "linear-gradient(rgba(242, 207, 119, 0.85), rgba(255, 255, 255, 0.95))"
    },
    {
      title: "Peer-Reviewed Scientific Publications",
      subtitle: "DIGITAL LIBRARY & JOURNALS",
      badge: "Academic Journals",
      badgeIcon: <Lightbulb size={14} />,
      desc: "Get published in highly indexed international journals and book chapters. Leverage our Scientific Database Management (DBMS) including DOI directories and ResearchPedia.",
      actionText: "Submit Research Paper",
      actionTab: "publications",
      accentColor: "#facc15",
      bgGradient: "linear-gradient(rgba(10, 20, 47, 0.85), rgba(2, 12, 27, 0.95))",
      bgGradientLight: "linear-gradient(rgba(242, 207, 119, 0.85), rgba(255, 255, 255, 0.95))"
    }
  ];

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section style={{
      position: 'relative',
      height: '80vh',
      minHeight: '500px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center'
    }}>
      {/* Background Blobs */}
      <div className="glow-blob glow-blob-cyan" style={{ top: '10%', left: '5%' }}></div>
      <div className="glow-blob glow-blob-pink" style={{ bottom: '10%', right: '5%' }}></div>

      {/* Slide Container */}
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: currentSlide === index ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              display: 'flex',
              alignItems: 'center',
              padding: '0 8vw',
              background: theme === 'light' ? slide.bgGradientLight : slide.bgGradient,
              zIndex: currentSlide === index ? 1 : 0
            }}
          >
            {/* Visual background pattern/overlay */}
            <div style={{
              position: 'absolute',
              right: '10%',
              width: '400px',
              height: '400px',
              border: `2px dashed ${slide.accentColor}`,
              opacity: 0.05,
              borderRadius: '50%',
              transform: 'scale(1.5)',
              pointerEvents: 'none'
            }} />

            {/* Slide Content */}
            <div style={{ maxWidth: '750px', position: 'relative', zIndex: 2 }}>
              {/* Badge */}
              <div
                className="animate-slide-left"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '6px 16px',
                  borderRadius: '30px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: theme === 'light' ? '#073A59' : slide.accentColor,
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  marginBottom: '20px'
                }}
              >
                {slide.badgeIcon} {slide.subtitle}
              </div>

              {/* Title */}
              <h1
                className="gradient-text animate-fade-up"
                style={{
                  lineHeight: 1.1,
                  marginBottom: '24px',
                  fontWeight: 800,
                  fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                  color: theme === 'light' ? '#073A59' : 'inherit',
                  textShadow: theme === 'light' ? 'none' : '0 4px 12px rgba(0,0,0,0.5)'
                }}
              >
                {slide.title}
              </h1>

              {/* Description */}
              <p
                className="animate-fade-up"
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                  lineHeight: 1.7,
                  color: theme === 'light' ? '#073A59' : 'var(--text-muted)',
                  marginBottom: '40px'
                }}
              >
                {slide.desc}
              </p>

              {/* Actions */}
              <div className="animate-fade-up" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setActiveTab(slide.actionTab)}
                  className="btn"
                  style={{
                    background: slide.accentColor,
                    borderColor: slide.accentColor,
                    color: theme === 'light' ? '#073A59' : (slide.accentColor === "var(--secondary)" ? 'var(--text-dark)' : 'white')
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = slide.accentColor;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = slide.accentColor;
                    e.target.style.color = theme === 'light' ? '#073A59' : (slide.accentColor === "var(--secondary)" ? 'var(--text-dark)' : 'white');
                  }}
                >
                  {slide.actionText} <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => setActiveTab('about')}
                  className="btn btn-secondary"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Desktop only */}
      <button
        onClick={prevSlide}
        className="flex-center hero-arrow"
        style={{
          position: 'absolute',
          left: '20px',
          zIndex: 10,
          background: 'rgba(255,255,255,0.12)',
          border: '1px solid rgba(255,255,255,0.2)',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          color: 'var(--text-main)',
          cursor: 'pointer',
          transition: 'var(--transition-smooth)'
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="flex-center hero-arrow"
        style={{
          position: 'absolute',
          right: '20px',
          zIndex: 10,
          background: 'rgba(255,255,255,0.12)',
          border: '1px solid rgba(255,255,255,0.2)',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          color: 'var(--text-main)',
          cursor: 'pointer',
          transition: 'var(--transition-smooth)'
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
>
        <ChevronRight size={24} />
      </button>
      <style>{`
        @media (max-width: 768px) {
          .hero-arrow { display: none !important; }
        }
      `}</style>
      {/* Slide Indicators */}
      <div style={{
        position: 'absolute',
        bottom: '30px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        gap: '12px',
        zIndex: 10
      }}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            style={{
              width: currentSlide === idx ? '32px' : '10px',
              height: '10px',
              borderRadius: '5px',
              background: currentSlide === idx ? 'var(--secondary)' : 'rgba(255,255,255,0.2)',
              border: 'none',
              cursor: 'pointer',
              transition: 'var(--transition-smooth)',
              boxShadow: currentSlide === idx ? 'var(--shadow-glow)' : 'none'
            }}
          />
        ))}
      </div>
    </section>
  );
}
