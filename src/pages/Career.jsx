import React, { useState } from 'react';
import { Briefcase, MapPin, GraduationCap, CheckCircle, ChevronDown, ChevronUp, Mail, Phone } from 'lucide-react';

const jobs = [
  {
    title: 'Process Associate',
    type: 'Full-Time',
    location: 'Salem, Tamil Nadu',
    qualification: 'Any Undergraduate Degree (UG). Freshers and experienced candidates are welcome.',
    overview: 'We are looking for motivated and detail-oriented Process Associates to support our day-to-day business operations. The ideal candidate should possess good communication skills, basic computer knowledge, and a willingness to learn and adapt in a fast-paced environment.',
    responsibilities: [
      'Perform operational and process-related tasks accurately and efficiently.',
      'Review, verify, and maintain business data.',
      'Ensure assigned work is completed within defined timelines.',
      'Maintain quality standards and process compliance.',
      'Identify issues and escalate them to the appropriate team when necessary.',
      'Coordinate with internal teams to ensure smooth workflow.',
      'Prepare reports and maintain process documentation.',
    ],
    skills: [
      'Good verbal and written communication skills.',
      'Basic knowledge of MS Office (Word, Excel, Outlook).',
      'Strong attention to detail and analytical skills.',
      'Ability to work both independently and as part of a team.',
      'Positive attitude with a willingness to learn.',
      'Good organizational and time management skills.',
    ],
    why: [
      'Friendly and collaborative work environment.',
      'Comprehensive training and continuous learning opportunities.',
      'Career growth and professional development.',
      'Performance-based recognition and advancement.',
      'Opportunity to work with a dynamic and talented team.',
    ],
    applyNote: 'Interested candidates can share your resume through email us at hr@shazusofttechnologies.org',
    closing: 'Start your career journey with Shazu Soft Technologies and grow with us!',
  },
  {
    title: 'Graphics Designer',
    type: 'Full-Time',
    location: 'Salem, Tamil Nadu',
    qualification: "Bachelor's Degree (Any Undergraduate Degree). Freshers and experienced candidates are welcome.",
    overview: 'We are seeking a creative and detail-oriented Graphics Designer with a passion for visual storytelling. The ideal candidate should have a strong eye for design, creativity, and the ability to transform ideas into compelling visual content for both digital and print media.',
    responsibilities: [
      'Design creative graphics for websites, social media, digital marketing campaigns, and branding materials.',
      'Create brochures, banners, flyers, presentations, and promotional materials.',
      'Develop logos, icons, infographics, and other visual assets.',
      'Collaborate with the marketing and development teams to produce engaging designs.',
      'Ensure all designs align with brand guidelines and quality standards.',
      'Stay updated with the latest design trends, tools, and technologies.',
      'Revise designs based on feedback and project requirements.',
    ],
    skills: [
      'Proficiency in Adobe Photoshop, Illustrator, CorelDRAW, Canva, or similar design software.',
      'Basic knowledge of Adobe InDesign, Figma, or Adobe XD is an added advantage.',
      'Strong creativity, typography, color theory, and layout skills.',
      'Good communication and teamwork abilities.',
      'Attention to detail and the ability to meet deadlines.',
      'Basic understanding of UI/UX design principles is a plus.',
    ],
    why: [
      'Work in a creative and collaborative environment.',
      'Opportunities to work on diverse and exciting projects.',
      'Continuous learning and skill development.',
      'Career growth based on performance and innovation.',
      'Supportive team culture with professional development opportunities.',
    ],
    applyNote: 'Submit your resume along with your portfolio through email us at hr@shazusofttechnologies.org',
    closing: 'Bring your creativity to life with Shazu Soft Technologies and shape impactful digital experiences!',
  },
  {
    title: 'Digital Marketing Executive',
    type: 'Full-Time',
    location: 'Salem, Tamil Nadu',
    qualification: "Bachelor's Degree (Any Undergraduate Degree). Freshers and experienced candidates are welcome.",
    overview: 'We are seeking a motivated Digital Marketing Executive to support our online marketing initiatives and help strengthen our digital presence. The ideal candidate should have a creative mindset, strong analytical skills, and a passion for digital marketing strategies.',
    responsibilities: [
      'Plan, execute, and monitor digital marketing campaigns across various online platforms.',
      'Manage social media accounts and create engaging content.',
      'Assist in Search Engine Optimization (SEO) and Search Engine Marketing (SEM) activities.',
      'Create and schedule email marketing campaigns.',
      'Monitor website and campaign performance using analytics tools.',
      'Generate reports and provide insights to improve marketing effectiveness.',
      'Coordinate with the design and content teams to develop promotional materials.',
      'Stay updated with the latest digital marketing trends and best practices.',
    ],
    skills: [
      'Basic knowledge of SEO, SEM, Social Media Marketing, and Email Marketing.',
      'Familiarity with Google Analytics, Google Ads, and Meta Ads Manager is an added advantage.',
      'Good written and verbal communication skills.',
      'Creative thinking and content creation abilities.',
      'Strong analytical and problem-solving skills.',
      'Basic knowledge of MS Office and digital marketing tools.',
      'Ability to work independently and collaboratively in a team environment.',
    ],
    why: [
      'Work on innovative digital marketing projects.',
      'Learn from experienced professionals in a collaborative environment.',
      'Continuous training and career development opportunities.',
      'Performance-based growth and recognition.',
      'Friendly workplace with opportunities to build a rewarding career.',
    ],
    applyNote: "If you're ready to build your career in digital marketing, submit your resume through email us at hr@shazusofttechnologies.org",
    closing: 'Join Shazu Soft Technologies and help create impactful digital experiences that drive business success!',
  },
  {
    title: 'Website Developer',
    type: 'Full-Time',
    location: 'Salem, Tamil Nadu',
    qualification: "Bachelor's Degree (Any Undergraduate Degree). Freshers and experienced candidates are welcome.",
    overview: 'We are seeking a talented Website Developer to design, develop, and maintain modern, responsive websites. The ideal candidate should have a strong understanding of web technologies, attention to detail, and a passion for delivering exceptional user experiences.',
    responsibilities: [
      'Design, develop, and maintain responsive websites and web applications.',
      'Write clean, efficient, and well-documented code.',
      'Collaborate with designers and project teams to implement website features.',
      'Optimize websites for speed, performance, and SEO.',
      'Troubleshoot and resolve website issues and bugs.',
      'Ensure cross-browser and mobile compatibility.',
      'Maintain website security and perform regular updates.',
      'Stay updated with the latest web development technologies and industry trends.',
    ],
    skills: [
      'Basic knowledge of HTML, CSS, JavaScript, and Bootstrap.',
      'Familiarity with PHP, WordPress, React, Angular, or other web technologies is an added advantage.',
      'Understanding of responsive web design principles.',
      'Basic knowledge of databases such as MySQL.',
      'Strong problem-solving and analytical skills.',
      'Good communication and teamwork abilities.',
      'Ability to manage multiple tasks and meet project deadlines.',
    ],
    why: [
      'Work on exciting web development projects across various industries.',
      'Gain hands-on experience with modern web technologies.',
      'Continuous learning, training, and career development opportunities.',
      'Collaborative and supportive work environment.',
      'Performance-based career growth and recognition.',
    ],
    applyNote: 'Submit your resume through email us at hr@shazusofttechnologies.org',
    closing: 'Build the future of the web with Shazu Soft Technologies and grow your career with us!',
  },
  {
    title: 'Data Analyst',
    type: 'Full-Time',
    location: 'Salem, Tamil Nadu',
    qualification: "Bachelor's Degree (Any Undergraduate Degree). Freshers and experienced candidates are welcome.",
    overview: 'We are seeking a motivated Data Analyst to collect, analyze, and interpret data to support business operations and strategic decision-making. The ideal candidate should possess strong analytical skills, attention to detail, and a passion for working with data to generate valuable insights.',
    responsibilities: [
      'Collect, clean, and analyze data from multiple sources.',
      'Prepare reports, dashboards, and visualizations to present business insights.',
      'Identify trends, patterns, and opportunities for process improvement.',
      'Collaborate with cross-functional teams to understand data requirements.',
      'Ensure data accuracy, consistency, and integrity.',
      'Assist in developing performance metrics and business reports.',
      'Support decision-making through data-driven recommendations.',
      'Maintain documentation and follow data management best practices.',
    ],
    skills: [
      'Basic knowledge of Microsoft Excel, SQL, and data analysis techniques.',
      'Familiarity with Power BI, Tableau, or other data visualization tools is an added advantage.',
      'Basic understanding of databases and reporting tools.',
      'Strong analytical and problem-solving skills.',
      'Good communication and presentation skills.',
      'Attention to detail and the ability to work with large datasets.',
      'Ability to work independently and as part of a collaborative team.',
    ],
    why: [
      'Work on real-world data and analytics projects.',
      'Learn from experienced professionals in a collaborative environment.',
      'Continuous training and career development opportunities.',
      'Performance-based growth and recognition.',
      'Innovative workplace with opportunities to enhance your analytical skills.',
    ],
    applyNote: "If you're passionate about data and eager to build a career in analytics, submit your resume through email us at hr@shazusofttechnologies.org",
    closing: 'Join Shazu Soft Technologies and turn data into impactful business solutions while building a successful career in analytics!',
  },
];

export default function Career() {
  const [openJob, setOpenJob] = useState(null);

  return (
    <div className="section-padding" style={{ minHeight: '80vh', position: 'relative' }}>
      <div className="glow-blob glow-blob-cyan" style={{ top: '10%', left: '5%' }}></div>
      <div className="glow-blob glow-blob-pink" style={{ bottom: '10%', right: '5%' }}></div>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '50px', position: 'relative', zIndex: 5 }}>
        <span className="badge">We're Hiring</span>
        <h2 className="section-title center" style={{ display: 'inline-block', marginTop: '10px' }}>
          Join Our Team
        </h2>
        <p style={{ maxWidth: '700px', margin: '15px auto 0', lineHeight: 1.8 }}>
          At Shazu Soft Technologies, we believe our people are our greatest strength. We are committed to building a
          collaborative, innovative, and growth-oriented workplace where every employee can thrive.
        </p>
      </div>

      {/* Job Listings */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative', zIndex: 5, maxWidth: '900px', margin: '0 auto' }}>
        {jobs.map((job, idx) => (
          <div key={idx} className="glass-card" style={{ padding: '0', overflow: 'hidden', borderLeft: '4px solid var(--secondary)' }}>
            {/* Job Header */}
            <button
              onClick={() => setOpenJob(openJob === idx ? null : idx)}
              style={{
                width: '100%', background: 'none', border: 'none', cursor: 'pointer',
                padding: '24px 28px', display: 'flex', alignItems: 'center',
                justifyContent: 'space-between', gap: '16px', textAlign: 'left',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <h3 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--text-main)' }}>{job.title}</h3>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.85rem', color: 'var(--secondary)' }}>
                    <Briefcase size={14} /> {job.type}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    <MapPin size={14} /> {job.location}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    <GraduationCap size={14} /> UG Degree
                  </span>
                </div>
              </div>
              <div style={{ color: 'var(--secondary)', flexShrink: 0 }}>
                {openJob === idx ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
              </div>
            </button>

            {/* Job Details */}
            {openJob === idx && (
              <div style={{ padding: '0 28px 28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <hr style={{ border: 'none', borderTop: '1px solid var(--border-glass)', margin: 0 }} />

                {/* Qualification */}
                <div>
                  <h4 style={{ color: 'var(--secondary)', marginBottom: '6px', fontSize: '1rem' }}>Qualification</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>{job.qualification}</p>
                </div>

                {/* Overview */}
                <div>
                  <h4 style={{ color: 'var(--secondary)', marginBottom: '6px', fontSize: '1rem' }}>Job Overview</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>{job.overview}</p>
                </div>

                {/* Responsibilities */}
                <div>
                  <h4 style={{ color: 'var(--secondary)', marginBottom: '10px', fontSize: '1rem' }}>Key Responsibilities</h4>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {job.responsibilities.map((r, i) => (
                      <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                        <CheckCircle size={15} color="var(--secondary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div>
                  <h4 style={{ color: 'var(--secondary)', marginBottom: '10px', fontSize: '1rem' }}>Required Skills</h4>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {job.skills.map((s, i) => (
                      <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                        <CheckCircle size={15} color="var(--accent)" style={{ flexShrink: 0, marginTop: '3px' }} />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Why Join */}
                <div>
                  <h4 style={{ color: 'var(--secondary)', marginBottom: '10px', fontSize: '1rem' }}>Why Join Shazu Soft Technologies?</h4>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {job.why.map((w, i) => (
                      <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                        <CheckCircle size={15} color="#3c9413" style={{ flexShrink: 0, marginTop: '3px' }} />
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Apply */}
                <div className="glass-card" style={{ background: 'rgba(var(--secondary-rgb),0.06)', borderLeft: '3px solid var(--secondary)', padding: '16px 20px' }}>
                  <a
                    href="https://forms.gle/h3ENbLzv4si6bDrR7"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                      background: 'var(--secondary)', color: 'var(--text-dark)', padding: '10px 22px',
                      borderRadius: '30px', fontSize: '0.9rem', fontWeight: 700,
                      textDecoration: 'none', marginBottom: '12px',
                    }}
                  >
                    Apply Now
                  </a>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '10px' }}>{job.applyNote}</p>
                  <a
                    href="mailto:hr@shazusofttechnologies.org"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                      background: 'var(--accent)', color: 'white', padding: '10px 20px',
                      borderRadius: '30px', fontSize: '0.85rem', fontWeight: 600,
                      textDecoration: 'none', transition: 'var(--transition-fast)',
                    }}
                  >
                    <Mail size={15} /> hr@shazusofttechnologies.org
                  </a>
                  <p style={{ color: 'var(--secondary)', fontSize: '0.85rem', marginTop: '12px', fontStyle: 'italic' }}>{job.closing}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Contact HR Section */}
      <div className="glass-card" style={{ maxWidth: '900px', margin: '40px auto 0', textAlign: 'center', borderTop: '4px solid var(--secondary)', position: 'relative', zIndex: 5 }}>
        <h3 style={{ marginBottom: '10px' }}>Ready to Take the Next Step?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '20px', lineHeight: 1.8 }}>
          Interested candidates can send their updated resume or contact our HR team for more information about current openings and the recruitment process.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Phone size={16} color="var(--secondary)" /> +91 93616 80077
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Mail size={16} color="var(--secondary)" /> hr@shazusofttechnologies.org
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MapPin size={16} color="var(--secondary)" /> Salem, Tamil Nadu
          </span>
        </div>
        <a
          href="https://forms.gle/h3ENbLzv4si6bDrR7"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'var(--secondary)', color: 'var(--text-dark)', padding: '12px 28px',
            borderRadius: '30px', fontSize: '0.9rem', fontWeight: 700,
            textDecoration: 'none',
          }}
        >
          Apply Now
        </a>
        <p style={{ color: 'var(--secondary)', marginTop: '16px', fontWeight: 600 }}>
          Join Shazu Soft Technologies and build a rewarding career with us!
        </p>
      </div>
    </div>
  );
}
