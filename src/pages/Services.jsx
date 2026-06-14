import React from 'react';
import { ChevronRight, Briefcase, Code, FlaskConical } from 'lucide-react';

export default function Services({ setActiveTab, setActiveService }) {
  const serviceCategories = [
    {
      id: 'education',
      title: 'Education',
      icon: <Briefcase size={32} color="var(--secondary)" />,
      description: 'Comprehensive educational programs and skill development initiatives',
      services: [
        'Hackathon',
        'Internship',
        'Innovative Project',
        'Hands-on Training',
        'FDP / Seminar',
        'Skills Development'
      ]
    },
    {
      id: 'software',
      title: 'Software',
      icon: <Code size={32} color="var(--accent)" />,
      description: 'Professional software development and digital transformation services',
      services: [
        'Full Stack Developer',
        'Data Analytics',
        'UI & UX Design',
        'Digital Marketing',
        'Training Programs'
      ]
    },
    {
      id: 'research',
      title: 'Research',
      icon: <FlaskConical size={32} color="#facc15" />,
      description: 'Research support, publications, and academic advancement programs',
      services: [
        'Research Associates',
        'Research Publications',
        'Conferences',
        'Book Publications',
        'Award Ceremony',
        'Patent',
        'Funding Projects'
      ]
    }
  ];

  const handleServiceClick = (category, service) => {
    setActiveService({ category, service });
  };

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* Hero Section */}
      <section style={{
        padding: '80px 5vw',
        background: 'linear-gradient(135deg, rgba(242, 199, 119, 0.15), rgba(191, 138, 73, 0.1))',
        borderBottom: '1px solid var(--border-glass)',
        textAlign: 'center'
      }}>
        <span className="badge" style={{ marginBottom: '15px' }}>Our Services</span>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--text-main)' }}>
          Comprehensive Service Solutions
        </h1>
        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)', fontSize: '1.05rem' }}>
          Discover our wide range of services across education, software development, and research that empower institutions and professionals.
        </p>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '80px 5vw' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '40px'
        }}>
          {serviceCategories.map((category) => (
            <div key={category.id} className="glass-card" style={{ padding: '32px' }}>
              <div style={{ marginBottom: '16px' }}>{category.icon}</div>
              <h2 style={{
                fontSize: '1.6rem',
                marginBottom: '8px',
                color: 'var(--text-main)'
              }}>
                {category.title}
              </h2>
              <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-muted)',
                marginBottom: '24px',
                lineHeight: 1.6
              }}>
                {category.description}
              </p>

              {/* Service Items */}
              <ul style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                marginBottom: '24px'
              }}>
                {category.services.map((service, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => handleServiceClick(category.id, service)}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        background: 'none',
                        border: 'none',
                        color: 'var(--text-muted)',
                        fontSize: '0.95rem',
                        cursor: 'pointer',
                        padding: '8px 0',
                        transition: 'var(--transition-fast)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--secondary)';
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--text-muted)';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      <ChevronRight size={16} /> {service}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Category CTA */}
              <button
                onClick={() => handleServiceClick(category.id, null)}
                style={{
                  width: '100%',
                  padding: '12px',
                  background: 'linear-gradient(135deg, var(--secondary), var(--accent))',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#0a192f',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'var(--transition-fast)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Explore {category.title} Services
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '60px 5vw',
        background: 'rgba(23, 42, 69, 0.2)',
        borderTop: '1px solid var(--border-glass)',
        borderBottom: '1px solid var(--border-glass)',
        textAlign: 'center'
      }}>
        <h2 style={{ marginBottom: '20px', fontSize: '2rem' }}>Need Help Choosing the Right Service?</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 30px', color: 'var(--text-muted)' }}>
          Our expert team is ready to guide you through our services and find the perfect solution for your needs.
        </p>
        <button
          onClick={() => setActiveTab('contact')}
          className="btn btn-accent"
        >
          Contact Our Team
        </button>
      </section>
    </div>
  );
}
