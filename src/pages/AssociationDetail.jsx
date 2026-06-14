import React from 'react';

const CONTENT = {
  isei: {
    title: 'Institute of Science, Engineering and Innovation (ISEI)',
    html: `
      <h3>About ISEI</h3>
      <p>The <strong>Institute of Science, Engineering and Innovation (ISEI)</strong> is a premier professional and academic association dedicated to advancing excellence in science, engineering, technology, innovation, research, and interdisciplinary education. ISEI serves as a global platform that fosters collaboration among researchers, academicians, scientists, engineers, industry professionals, policymakers, entrepreneurs, and students to drive innovation and create sustainable solutions for societal challenges.</p>
      <p>Operating through a strong network of academic institutions, research organizations, industries, and professional communities, ISEI promotes knowledge exchange, scientific advancement, technological innovation, and professional development. Through conferences, publications, training programs, research initiatives, and industry-academia partnerships, ISEI empowers individuals and organizations to contribute meaningfully to the advancement of science, engineering, and innovation worldwide.</p>
      <h4>Vision</h4>
      <p>To become a globally recognized professional association that advances science, engineering, and innovation by creating an inclusive ecosystem for research excellence, technological progress, and sustainable development.</p>
      <h4>Mission</h4>
      <ul>
        <li>Promote high-quality research and innovation across scientific, engineering, and technological disciplines.</li>
        <li>Facilitate collaboration between academia, industry, government agencies, and professional communities.</li>
        <li>Support researchers, educators, innovators, and students through networking, knowledge sharing, and professional development opportunities.</li>
        <li>Organize international conferences, workshops, seminars, and training programs.</li>
        <li>Encourage interdisciplinary approaches that address global challenges and create sustainable solutions.</li>
        <li>Provide platforms for scholarly publication, research dissemination, and academic recognition.</li>
      </ul>
      <h4>What We Do</h4>
      <ul>
        <li><strong>Research and Innovation Promotion:</strong> Connect experts, institutions, and industries through collaborative initiatives and knowledge-sharing platforms.</li>
        <li><strong>International Conferences and Events:</strong> Organize conferences, symposiums, workshops and summits.</li>
        <li><strong>Publications:</strong> Facilitate publication of high-quality research through journals, proceedings, and digital repositories.</li>
        <li><strong>Professional Networking:</strong> Enable members to build collaborations and professional networks.</li>
        <li><strong>Academic and Industry Partnerships:</strong> Strengthen relationships between institutions and industry.</li>
        <li><strong>Skill Development:</strong> Conduct certification programs, faculty development initiatives, and technical trainings.</li>
      </ul>
      <h4>Global Community & Commitment</h4>
      <p>ISEI fosters an international presence and is committed to building a globally connected ecosystem that encourages interdisciplinary research, innovation-driven growth, and supports the United Nations Sustainable Development Goals.</p>
    `
  },
  iamhp: {
    title: 'International Association of Medical and Health Professionals (IAMHP)',
    html: `
      <h3>About IAMHP</h3>
      <p>The <strong>International Association of Medical and Health Professionals (IAMHP)</strong> is a leading global professional association dedicated to advancing healthcare, medical sciences, public health, clinical research, and healthcare innovation. IAMHP connects healthcare professionals, medical practitioners, researchers, academicians, policymakers, healthcare organizations, and students to foster collaboration and evidence-based advancements in medicine and health sciences.</p>
      <h4>Vision</h4>
      <p>To be a globally recognized association that advances medical knowledge, healthcare innovation, and professional excellence while improving health outcomes worldwide.</p>
      <h4>Mission & Activities</h4>
      <ul>
        <li>Promote excellence in medical, healthcare, and public health research.</li>
        <li>Facilitate collaboration among healthcare professionals, researchers, institutions, and policymakers.</li>
        <li>Support continuous professional development and lifelong learning.</li>
        <li>Provide platforms for scientific publication and research dissemination.</li>
        <li>Organize international medical conferences, webinars, and workshops.</li>
      </ul>
    `
  },
  acar: {
    title: 'Association of Creative Arts and Research (ACAR)',
    html: `
      <h3>About ACAR</h3>
      <p>The <strong>Association of Creative Arts and Research (ACAR)</strong> is dedicated to promoting excellence in creative arts, design, humanities, cultural studies, interdisciplinary research, and innovation. ACAR brings together artists, designers, researchers, educators, scholars, creative professionals, and students to foster collaboration and artistic advancement.</p>
      <h4>Vision & Mission</h4>
      <ul>
        <li>Promote research, innovation, and excellence in creative arts and cultural studies.</li>
        <li>Support artists and researchers through global networking and collaboration opportunities.</li>
        <li>Facilitate exhibitions, publications, conferences, and professional development.</li>
      </ul>
    `
  },
  wasp: {
    title: 'World Association of Scholars and Professionals (WASP)',
    html: `
      <h3>About WASP</h3>
      <p>The <strong>World Association of Scholars and Professionals (WASP)</strong> is a global association dedicated to advancing knowledge, research, innovation, professional excellence, and interdisciplinary collaboration across academic and professional domains. WASP organizes conferences, publishes scholarly work, and creates platforms for cross-disciplinary engagement.</p>
      <h4>Focus Areas</h4>
      <ul>
        <li>Research and knowledge exchange</li>
        <li>International conferences and professional forums</li>
        <li>Publications and scholarly communication</li>
        <li>Leadership and professional development</li>
      </ul>
    `
  }
};

export default function AssociationDetail({ association, onBack }) {
  if (!association) return null;
  const data = CONTENT[association.id] || { title: association.title, html: '<p>No content available.</p>' };

  return (
    <div className="section-padding" style={{ minHeight: '70vh' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <button className="btn btn-secondary" onClick={onBack} style={{ marginBottom: 18 }}>Back</button>
        <div className="glass-card">
          <h2 style={{ marginTop: 0 }}>{data.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: data.html }} style={{ color: 'var(--text-muted)', marginTop: 12 }} />
        </div>
      </div>
    </div>
  );
}
