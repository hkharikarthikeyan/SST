import React, { useState } from 'react';
import { Bell, Briefcase, FileText, Code, Mic, BookOpen, Award, Star } from 'lucide-react';

const ANNOUNCEMENTS = [
  {
    id: 1,
    icon: <Briefcase size={22} color="#64ffda" />,
    badge: 'Internship',
    badgeColor: '#64ffda',
    title: 'Internship Opportunity at Shazu Soft Technologies',
    date: 'June 2026',
    contact: '9080340803, 9361680077',
    highlights: [
      'Industry-based practical training',
      'Real-time project experience',
      'Skill development sessions',
      'Mentorship from experienced professionals',
      'Certificate of Completion'
    ],
    desc: `Shazu Soft Technologies is now offering internship opportunities for 2nd year and 3rd year students across relevant academic disciplines. This internship is designed to provide hands-on industry exposure, practical learning experience, and the opportunity to work on real-time projects under expert guidance. Students will gain valuable insights into professional workflows, technical skills, and workplace practices that will enhance their career readiness.

We welcome enthusiastic and motivated students who are eager to learn and grow in the field of technology and innovation.`
  },
  {
    id: 2,
    icon: <FileText size={22} color="#ff4a5a" />,
    badge: 'Research Support',
    badgeColor: '#ff4a5a',
    title: 'Research Paper Writing Support Service',
    date: 'June 2026',
    contact: '9080340803, 89391 50442',
    highlights: [
      'Topic selection and research guidance',
      'Literature review assistance',
      'Paper structuring and formatting (IEEE / APA / Springer)',
      'Data analysis support',
      'Proofreading and editing assistance',
      'Journal submission guidance'
    ],
    desc: `Shazu Soft Technologies is now offering Research Paper Writing Support Services for students, scholars, and academic professionals. Our service is designed to assist researchers in developing high-quality research papers that meet academic standards and publication requirements. We provide structured guidance throughout the research process, ensuring clarity, originality, and proper formatting.`
  },
  {
    id: 3,
    icon: <Code size={22} color="#facc15" />,
    badge: 'Hackathon',
    badgeColor: '#facc15',
    title: 'Hackathon Event — Coming Soon!',
    date: 'Upcoming 2026',
    contact: '9080340803, 9361680077',
    highlights: [
      '24/48-hour intensive coding challenge',
      'Real-world problem statements',
      'Team participation (individuals/teams allowed)',
      'Mentorship from industry experts',
      'Exciting prizes and certificates',
      'Internship & career opportunities for top performers'
    ],
    desc: `Shazu Soft Technologies is excited to announce an upcoming Hackathon Event! This event is a platform for innovative minds to come together, collaborate, and build creative solutions for real-world challenges. Participants will have the opportunity to showcase their technical skills, problem-solving abilities, and innovative thinking.

Registration details will be shared soon. Stay tuned!`
  },
  {
    id: 4,
    icon: <Mic size={22} color="#38bdf8" />,
    badge: 'Conference',
    badgeColor: '#38bdf8',
    title: 'Conference Announcement',
    date: 'Upcoming 2026',
    contact: '9080340803, 9361680077',
    highlights: [
      'Technical paper presentations',
      'Keynote sessions by industry experts',
      'Knowledge sharing and networking opportunities',
      'Research and innovation discussions',
      'Participation certificates for all attendees',
      'Best paper awards and recognition'
    ],
    desc: `Shazu Soft Technologies is pleased to announce an upcoming Conference. This conference aims to bring together students, researchers, academicians, and industry professionals to share knowledge, present innovative ideas, and discuss emerging trends in technology and innovation.

Registration details and schedule will be announced soon.`
  },
  {
    id: 5,
    icon: <BookOpen size={22} color="#a78bfa" />,
    badge: 'IEEE Collaboration',
    badgeColor: '#a78bfa',
    title: 'IEEE Conference Co-Author Collaboration',
    date: 'June 2026',
    contact: '9080340803, 89391 50442',
    highlights: [
      'Research topic selection and refinement',
      'Paper writing and technical structuring (IEEE format)',
      'Literature review and methodology support',
      'Data analysis and result preparation',
      'Plagiarism checking and proofreading',
      'IEEE conference submission guidance',
      'Co-author collaboration support'
    ],
    desc: `Shazu Soft Technologies is now offering IEEE Conference Co-Author Collaboration Support for researchers, scholars, and academicians. This initiative is designed to assist individuals in publishing high-quality research papers in reputed IEEE conferences through expert co-author guidance and academic support.

This program aims to strengthen research quality and increase the chances of acceptance in reputed international conferences.`
  },
  {
    id: 6,
    icon: <Award size={22} color="#64ffda" />,
    badge: 'Achievement',
    badgeColor: '#64ffda',
    title: 'Faculty Industrial Training Program Successfully Completed!',
    date: '23–28 June 2026',
    contact: null,
    highlights: [
      'Industry-oriented technologies',
      'Software development practices',
      'Research methodologies',
      'Emerging technology trends',
      'Hands-on learning experiences'
    ],
    desc: `We are delighted to share the successful completion of our Faculty Industrial Training Program conducted at Shazu Soft Technologies, Salem from 23.06.2026 to 28.06.2026.

It was a privilege to host the esteemed Assistant Professors from the Department of Artificial Intelligence and Data Science (AI&DS), Mahendra Engineering College, Mallasamudram. The program focused on bridging the gap between academia and industry by providing hands-on learning experiences, technical knowledge, and opportunities for collaborative research and innovation.

We sincerely thank the faculty members for their enthusiastic participation, active engagement, and valuable contributions throughout the program.`
  },
  {
    id: 7,
    icon: <Star size={22} color="#facc15" />,
    badge: 'Milestone',
    badgeColor: '#facc15',
    title: 'A Proud Milestone — Shazu Soft Technologies Inauguration Ceremony',
    date: '21 June 2026',
    contact: null,
    highlights: [
      'Official launch of Shazu Soft Technologies',
      'Education • Software • Research',
      'Transforming Ideas into Digital Excellence'
    ],
    desc: `We are delighted to share that the Inaugural Ceremony of Shazu Soft Technologies was successfully completed. We are excited about the journey ahead and remain committed to delivering quality, innovation, and value to our clients and partners.

Thank you for being part of our new beginning.`
  }
];

export default function Announcements() {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="section-padding" style={{ minHeight: '80vh', position: 'relative' }}>
      <div className="glow-blob glow-blob-cyan" style={{ top: '5%', left: '5%' }} />
      <div className="glow-blob glow-blob-pink" style={{ bottom: '10%', right: '5%' }} />

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '50px', position: 'relative', zIndex: 5 }}>
        <span className="badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <Bell size={14} /> Latest Updates
        </span>
        <h2 className="section-title center" style={{ marginTop: '10px' }}>
          Announcements & Happenings
        </h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '10px auto 0' }}>
          Stay updated with the latest news, events, and opportunities from Shazu Soft Technologies.
        </p>
      </div>

      {/* Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative', zIndex: 5, maxWidth: '900px', margin: '0 auto' }}>
        {ANNOUNCEMENTS.map((item) => (
          <div
            key={item.id}
            className="glass-card"
            style={{ cursor: 'pointer', borderLeft: `4px solid ${item.badgeColor}`, transition: 'var(--transition-smooth)' }}
            onClick={() => setExpanded(expanded === item.id ? null : item.id)}
          >
            {/* Card Header */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{
                background: `${item.badgeColor}18`,
                border: `1px solid ${item.badgeColor}40`,
                borderRadius: '10px',
                padding: '10px',
                flexShrink: 0
              }}>
                {item.icon}
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '6px' }}>
                  <span style={{
                    background: `${item.badgeColor}20`,
                    color: item.badgeColor,
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '2px 10px',
                    borderRadius: '20px',
                    border: `1px solid ${item.badgeColor}40`
                  }}>
                    {item.badge}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>📅 {item.date}</span>
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '4px' }}>
                  {item.title}
                </h3>
                {item.contact && (
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>📞 {item.contact}</p>
                )}
              </div>

              <span style={{ color: 'var(--text-muted)', fontSize: '1.2rem', flexShrink: 0 }}>
                {expanded === item.id ? '▲' : '▼'}
              </span>
            </div>

            {/* Expanded Content */}
            {expanded === item.id && (
              <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid var(--border-glass)' }}>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '20px', whiteSpace: 'pre-line', fontSize: '0.92rem' }}>
                  {item.desc}
                </p>

                <div>
                  <p style={{ fontWeight: 700, color: item.badgeColor, marginBottom: '10px', fontSize: '0.9rem' }}>
                    ✨ Highlights:
                  </p>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {item.highlights.map((h, i) => (
                      <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.88rem' }}>
                        <span style={{ color: item.badgeColor, fontWeight: 'bold', flexShrink: 0 }}>•</span>
                        <span style={{ color: 'var(--text-main)' }}>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {item.contact && (
                  <div style={{
                    marginTop: '20px',
                    padding: '14px 18px',
                    background: `${item.badgeColor}10`,
                    borderRadius: '10px',
                    border: `1px solid ${item.badgeColor}30`,
                    fontSize: '0.88rem',
                    color: 'var(--text-main)'
                  }}>
                    📩 Interested? Contact us at <strong style={{ color: item.badgeColor }}>{item.contact}</strong>
                    <br />
                    <strong>Shazu Soft Technologies</strong> — Transforming Ideas into Digital Excellence
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
