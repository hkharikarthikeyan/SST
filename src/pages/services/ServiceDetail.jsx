import React from 'react';
import { ChevronRight, ArrowLeft } from 'lucide-react';

export default function ServiceDetail({ service, category, onBack }) {
  const serviceDetails = {
    hackathon: {
      title: 'Hackathon',
      subtitle: 'Innovation Through Collaboration',
      description: 'Participate in intensive coding competitions that bring together developers, designers, and innovators to solve real-world problems.',
      features: [
        '24-48 hour coding marathons',
        'Mentorship from industry experts',
        'Prizes and recognition',
        'Networking opportunities',
        'Portfolio building'
      ],
      benefits: [
        'Develop practical coding skills',
        'Build professional network',
        'Gain industry exposure',
        'Win exciting prizes',
        'Create portfolio projects'
      ]
    },
    internship: {
      title: 'Internship',
      subtitle: 'Gain Real-World Experience',
      description: 'Pursue meaningful internships that bridge the gap between academic learning and industry practice.',
      features: [
        'Placements with top companies',
        'Mentorship programs',
        'Stipend opportunities',
        'Certificate of completion',
        'Career guidance'
      ],
      benefits: [
        'Practical industry experience',
        'Professional development',
        'Networking opportunities',
        'Resume enhancement',
        'Career acceleration'
      ]
    },
    innovativeproject: {
      title: 'Innovative Project',
      subtitle: 'Transform Ideas into Reality',
      description: 'Support and resources to develop innovative projects that address societal challenges.',
      features: [
        'Project funding support',
        'Expert mentorship',
        'Technical resources',
        'Incubation programs',
        'Intellectual property protection'
      ],
      benefits: [
        'Bring ideas to market',
        'Access funding',
        'Professional guidance',
        'Market validation',
        'Patent support'
      ]
    },
    handsontraining: {
      title: 'Hands-on Training',
      subtitle: 'Learn by Doing',
      description: 'Practical, skill-focused training programs designed for real-world application.',
      features: [
        'Industry-relevant curriculum',
        'Expert instructors',
        'Hands-on labs',
        'Project-based learning',
        'Job placement assistance'
      ],
      benefits: [
        'Acquire practical skills',
        'Industry certification',
        'Job-ready preparation',
        'Networking with peers',
        'Career advancement'
      ]
    },
    fdpseminar: {
      title: 'FDP / Seminar',
      subtitle: 'Faculty Development & Knowledge Sharing',
      description: 'Professional development programs for educators and researchers to stay updated with latest trends.',
      features: [
        'Expert-led workshops',
        'Certification programs',
        'Research seminars',
        'Industry insights',
        'Interactive sessions'
      ],
      benefits: [
        'Stay updated with trends',
        'Enhance teaching methods',
        'Research collaboration',
        'Credential recognition',
        'Professional growth'
      ]
    },
    skillsdevelopment: {
      title: 'Skills Development',
      subtitle: 'Empower with Knowledge',
      description: 'Comprehensive skill development programs tailored for student and professional growth.',
      features: [
        'Customized curricula',
        'Multiple skill tracks',
        'Expert trainers',
        'Industry certification',
        'Lifetime support'
      ],
      benefits: [
        'Employability enhancement',
        'Career diversification',
        'Competitive advantage',
        'Continuous learning',
        'Personal growth'
      ]
    },
    fullstackdeveloper: {
      title: 'Full Stack Developer',
      subtitle: 'Master End-to-End Web Development',
      description: 'Comprehensive program to become proficient in front-end, back-end, and database technologies.',
      features: [
        'Complete web stack training',
        'Modern frameworks & tools',
        'Real-world project experience',
        'Industry mentorship',
        'Portfolio projects'
      ],
      benefits: [
        'High-demand job skills',
        'Full development capability',
        'Better job prospects',
        'Higher earning potential',
        'Entrepreneurship readiness'
      ]
    },
    dataanalytics: {
      title: 'Data Analytics',
      subtitle: 'Turn Data into Insights',
      description: 'Learn to collect, process, and analyze data to drive business decisions.',
      features: [
        'Data manipulation tools',
        'Statistical analysis',
        'Visualization techniques',
        'Business intelligence',
        'Real-world datasets'
      ],
      benefits: [
        'In-demand career field',
        'Problem-solving skills',
        'Business impact',
        'Competitive salaries',
        'Growth opportunities'
      ]
    },
    uiuxdesign: {
      title: 'UI & UX Design',
      subtitle: 'Create Beautiful User Experiences',
      description: 'Master the art and science of user interface and user experience design.',
      features: [
        'Design principles',
        'Wireframing & prototyping',
        'User research methods',
        'Design tools mastery',
        'Case study projects'
      ],
      benefits: [
        'Creative career path',
        'High-value skill set',
        'Portfolio building',
        'Freelance opportunities',
        'Tech industry demand'
      ]
    },
    digitalmarketing: {
      title: 'Digital Marketing',
      subtitle: 'Master Online Marketing Strategies',
      description: 'Learn to promote businesses and brands through digital channels effectively.',
      features: [
        'SEO & SEM',
        'Social media marketing',
        'Content strategy',
        'Analytics & metrics',
        'Campaign management'
      ],
      benefits: [
        'Growing industry',
        'Multiple career paths',
        'Freelance potential',
        'Business growth skills',
        'Remote work opportunities'
      ]
    },
    trainingprograms: {
      title: 'Training Programs',
      subtitle: 'Structured Learning Pathways',
      description: 'Curated training programs designed to build specific technical and professional competencies.',
      features: [
        'Structured curriculum',
        'Progressive learning',
        'Practical assignments',
        'Industry certification',
        'Career support'
      ],
      benefits: [
        'Focused skill development',
        'Accelerated learning',
        'Certification achievement',
        'Career transition support',
        'Continuous advancement'
      ]
    },
    researchassociates: {
      title: 'Research Associates',
      subtitle: 'Advance Your Research Career',
      description: 'Opportunities to collaborate with leading researchers and institutions on impactful research projects.',
      features: [
        'Research placement',
        'Collaborative projects',
        'Publication opportunities',
        'Funding access',
        'Expert mentorship'
      ],
      benefits: [
        'Academic advancement',
        'Research experience',
        'Publication record',
        'Network expansion',
        'Career development'
      ]
    },
    researchpublications: {
      title: 'Research Publications',
      subtitle: 'Share Your Research with the World',
      description: 'Support for publishing research in reputable journals and conferences globally.',
      features: [
        'Publication assistance',
        'Peer review support',
        'Journal connections',
        'Conference submissions',
        'Impact tracking'
      ],
      benefits: [
        'Academic recognition',
        'Career advancement',
        'Global visibility',
        'Collaboration opportunities',
        'Research validation'
      ]
    },
    conferences: {
      title: 'Conferences',
      subtitle: 'Connect & Collaborate Globally',
      description: 'Organize and participate in international conferences to share knowledge and network.',
      features: [
        'Conference organization',
        'Speaker opportunities',
        'Networking events',
        'Publication platform',
        'International reach'
      ],
      benefits: [
        'Knowledge dissemination',
        'Professional visibility',
        'Global networking',
        'Collaboration creation',
        'Industry recognition'
      ]
    },
    bookpublications: {
      title: 'Book Publications',
      subtitle: 'Publish Your Research as a Book',
      description: 'Comprehensive support for publishing research monographs and edited volumes.',
      features: [
        'Publishing guidance',
        'Editing support',
        'Distribution channels',
        'ISBN registration',
        'Marketing assistance'
      ],
      benefits: [
        'Established authority',
        'Permanent record',
        'Wider reach',
        'Academic credibility',
        'Revenue potential'
      ]
    },
    awardceremony: {
      title: 'Award Ceremony',
      subtitle: 'Recognize Excellence & Achievement',
      description: 'Annual ceremonies to recognize and celebrate outstanding research and contributions.',
      features: [
        'Recognition programs',
        'Award categories',
        'Certification',
        'Media coverage',
        'Networking events'
      ],
      benefits: [
        'Professional recognition',
        'Career boost',
        'Motivation',
        'Public acknowledgment',
        'Leadership platform'
      ]
    },
    patent: {
      title: 'Patent',
      subtitle: 'Protect Your Innovations',
      description: 'Complete support for filing, protecting, and commercializing your patent inventions.',
      features: [
        'Patent filing assistance',
        'IP protection',
        'Legal guidance',
        'Commercialization support',
        'Global filing'
      ],
      benefits: [
        'Intellectual property rights',
        'Innovation protection',
        'Commercialization',
        'Competitive advantage',
        'Revenue generation'
      ]
    },
    fundingprojects: {
      title: 'Funding Projects',
      subtitle: 'Secure Grants for Your Research',
      description: 'Access to funding opportunities and support for securing grants for research projects.',
      features: [
        'Funding database access',
        'Proposal writing support',
        'Grant management',
        'Funding networking',
        'Compliance support'
      ],
      benefits: [
        'Research support',
        'Project advancement',
        'Reduced financial burden',
        'Network expansion',
        'Career growth'
      ]
    }
  };

  const details = serviceDetails[service?.toLowerCase().replace(/[^a-z0-9]/g, '')] || {
    title: service,
    subtitle: 'Professional Service',
    description: 'Discover comprehensive solutions tailored to your needs.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3', 'Benefit 4', 'Benefit 5']
  };

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* Back Button */}
      <div style={{ padding: '20px 5vw' }}>
        <button
          onClick={onBack}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--secondary)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.95rem',
            fontWeight: 600,
            transition: 'var(--transition-fast)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(-4px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
        >
          <ArrowLeft size={18} /> Back to Services
        </button>
      </div>

      {/* Hero Section */}
      <section style={{
        padding: '80px 5vw',
        background: 'linear-gradient(135deg, rgba(242, 199, 119, 0.15), rgba(191, 138, 73, 0.1))',
        borderBottom: '1px solid var(--border-glass)'
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', color: 'var(--text-main)' }}>
          {details.title}
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--secondary)', marginBottom: '20px' }}>
          {details.subtitle}
        </p>
        <p style={{ maxWidth: '700px', fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
          {details.description}
        </p>
      </section>

      {/* Features & Benefits */}
      <section style={{ padding: '80px 5vw' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '60px'
        }}>
          {/* Features */}
          <div>
            <h2 style={{
              fontSize: '1.8rem',
              marginBottom: '30px',
              color: 'var(--text-main)',
              paddingBottom: '15px',
              borderBottom: '2px solid var(--secondary)'
            }}>
              Key Features
            </h2>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {details.features.map((feature, idx) => (
                <li key={idx} style={{
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'flex-start'
                }}>
                  <ChevronRight size={20} color="var(--secondary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div>
            <h2 style={{
              fontSize: '1.8rem',
              marginBottom: '30px',
              color: 'var(--text-main)',
              paddingBottom: '15px',
              borderBottom: '2px solid var(--accent)'
            }}>
              Benefits
            </h2>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {details.benefits.map((benefit, idx) => (
                <li key={idx} style={{
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'flex-start'
                }}>
                  <ChevronRight size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '60px 5vw',
        background: 'rgba(23, 42, 69, 0.2)',
        borderTop: '1px solid var(--border-glass)',
        textAlign: 'center'
      }}>
        <h2 style={{ marginBottom: '20px', fontSize: '2rem' }}>Ready to Get Started?</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 30px', color: 'var(--text-muted)' }}>
          Join thousands of students and professionals who have already benefited from our programs.
        </p>
        <button className="btn btn-accent" style={{ padding: '12px 32px' }}>
          Enroll Now
        </button>
      </section>
    </div>
  );
}
