import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Database, HelpCircle } from 'lucide-react';

// USER CONFIGURATION: Paste your deployed Google Apps Script Web App URL here
const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbzxFCUKVbE8-IQ2a7IlNxfTJxKFUEs6Ga--wNH-QNjXJcOREp97nBJdy8VP20O-vVthQQ/exec";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [sheetUrlConfigured, setSheetUrlConfigured] = useState(!!GOOGLE_SHEET_URL);
  const [customUrl, setCustomUrl] = useState(GOOGLE_SHEET_URL);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const targetUrl = customUrl || GOOGLE_SHEET_URL;

    if (!targetUrl) {
      // Mock Submission when no Google Sheet URL is set yet
      setTimeout(() => {
        setStatus('success');
        console.log("Mock Submit: Form submitted without Google Sheet URL.", formData);
      }, 1500);
      return;
    }

    try {
      // Submitting data to Google Sheets via Web App Apps Script
      // Note: we use 'no-cors' mode so the browser doesn't block the request due to Google Apps Script redirects.
      // e.postData.contents inside Google Script will parse this payload perfectly.
      await fetch(targetUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      // Since 'no-cors' returns an opaque response, we assume success if no network crash occurred
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      console.error("Submission error:", err);
      setStatus('error');
    }
  };

  const offices = [
    {
      title: "Jaipur Headquarters (KKCS)",
      address: "S-5, Bankers Colony, Maharana Pratap Road, Panchyawala, Jaipur, Rajasthan, India",
      phone: "+91-97833 07390",
      email: "vsr.kkconsultancy@gmail.com"
    },
    {
      title: "Scientific Events Office (Technoarete)",
      address: "India Trust Secretariat, Association Block, Chennai, Tamil Nadu, India",
      phone: "+91-44-2453-9090",
      email: "info@technoarete.org"
    }
  ];

  return (
    <div className="section-padding" style={{ minHeight: '80vh', position: 'relative' }}>
      <div className="glow-blob glow-blob-cyan" style={{ top: '10%', right: '5%' }}></div>
      <div className="glow-blob glow-blob-pink" style={{ bottom: '10%', left: '5%' }}></div>

      <div className="association-content" style={{ padding: '4vw' }}>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--text-main)', textAlign: 'center', marginBottom: '1rem' }}>Institute of Science, Engineering and Innovation (ISEI)</h1>
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--secondary)' }}>About ISEI</h2>
          <p style={{ color: 'var(--text-main)', lineHeight: 1.8 }}>
            The Institute of Science, Engineering and Innovation (ISEI) is a premier professional and academic association dedicated to advancing excellence in science, engineering, technology, innovation, research, and interdisciplinary education. ISEI serves as a global platform that fosters collaboration among researchers, academicians, scientists, engineers, industry professionals, policymakers, entrepreneurs, and students to drive innovation and create sustainable solutions for societal challenges.
          </p>
          <p style={{ color: 'var(--text-main)', lineHeight: 1.8 }}>
            Operating through a strong network of academic institutions, research organizations, industries, and professional communities, ISEI promotes knowledge exchange, scientific advancement, technological innovation, and professional development. Through conferences, publications, training programs, research initiatives, and industry‑academia partnerships, ISEI empowers individuals and organizations to contribute meaningfully to the advancement of science, engineering, and innovation worldwide.
          </p>
          <p style={{ color: 'var(--text-main)', lineHeight: 1.8 }}>
            With an expanding international presence across Asia, Europe, the Middle East, Africa, and the Americas, ISEI is committed to building a globally connected ecosystem that encourages interdisciplinary research, fosters innovation‑driven growth, and supports the achievement of the United Nations Sustainable Development Goals (SDGs).
          </p>
        </section>
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--secondary)' }}>Our Vision</h2>
          <p style={{ color: 'var(--text-main)', lineHeight: 1.8 }}>
            To become a globally recognized professional association that advances science, engineering, and innovation by creating an inclusive ecosystem for research excellence, technological progress, and sustainable development.
          </p>
        </section>
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--secondary)' }}>Our Mission</h2>
          <ul style={{ color: 'var(--text-main)', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
            <li>To promote high‑quality research and innovation across scientific, engineering, and technological disciplines.</li>
            <li>To facilitate collaboration between academia, industry, government agencies, and professional communities.</li>
            <li>To support researchers, educators, innovators, and students through networking, knowledge sharing, and professional development opportunities.</li>
            <li>To organize international conferences, workshops, seminars, and training programs that foster intellectual growth and technological advancement.</li>
            <li>To encourage interdisciplinary approaches that address global challenges and create sustainable solutions.</li>
            <li>To provide platforms for scholarly publication, research dissemination, and academic recognition.</li>
          </ul>
        </section>
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--secondary)' }}>What We Do</h2>
          <ul style={{ color: 'var(--text-main)', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
            <li><strong>Research and Innovation Promotion:</strong> ISEI supports cutting‑edge research and innovation by connecting experts, institutions, and industries through collaborative initiatives and knowledge‑sharing platforms.</li>
            <li><strong>International Conferences and Events:</strong> We organize international conferences, symposiums, workshops, and summits that bring together researchers, scientists, engineers, innovators, and professionals from around the world.</li>
            <li><strong>Publications and Knowledge Dissemination:</strong> ISEI facilitates the publication of high‑quality research through journals, conference proceedings, edited books, and digital knowledge repositories.</li>
            <li><strong>Professional Networking:</strong> Our global community enables members to build meaningful collaborations, establish professional networks, and engage with experts from diverse disciplines and industries.</li>
            <li><strong>Academic and Industry Partnerships:</strong> We strengthen the relationship between educational institutions, research organizations, industries, and government bodies to accelerate innovation and real‑world impact.</li>
            <li><strong>Skill Development and Training:</strong> ISEI conducts certification programs, faculty development initiatives, technical training sessions, and leadership programs to enhance professional competencies and career growth.</li>
          </ul>
        </section>
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--secondary)' }}>Our Global Community</h2>
          <ul style={{ color: 'var(--text-main)', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
            <li>Researchers and Scientists</li>
            <li>Engineers and Technologists</li>
            <li>Academicians and Educators</li>
            <li>Industry Experts and Innovators</li>
            <li>Entrepreneurs and Start‑up Leaders</li>
            <li>Policy Makers and Government Representatives</li>
            <li>Research Scholars and Students</li>
            <li>Professional Associations and Institutions</li>
          </ul>
        </section>
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--secondary)' }}>Our Commitment</h2>
          <p style={{ color: 'var(--text-main)', lineHeight: 1.8 }}>
            ISEI is committed to reducing the gap between academia, industry, government, and society by promoting digital transformation, research excellence, innovation ecosystems, and collaborative learning environments. Through our professional networking services, global community‑building initiatives, and knowledge‑sharing platforms, we strive to create a vibrant scientific and technological community that nurtures creativity, supports impactful research, and accelerates sustainable development.
          </p>
          <p style={{ color: 'var(--text-main)', lineHeight: 1.8 }}>
            By fostering mutual engagement, interdisciplinary collaboration, and lifelong learning, ISEI empowers individuals and institutions to unlock their full potential and contribute to a smarter, more innovative, and sustainable future.
          </p>
        </section>
        <hr style={{ margin: '3rem 0', borderColor: 'var(--border-glass)' }} />
        <h2 style={{ fontSize: '2.5rem', color: 'var(--text-main)', textAlign: 'center', marginBottom: '1rem' }}>International Association of Medical and Health Professionals (IAMHP)</h2>
        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '2rem', color: 'var(--secondary)' }}>About IAMHP</h3>
          <p style={{ color: 'var(--text-main)', lineHeight: 1.8 }}>
            The International Association of Medical and Health Professionals (IAMHP) is a leading global professional association dedicated to advancing healthcare, medical sciences, public health, clinical research, and healthcare innovation. IAMHP serves as a dynamic platform that connects healthcare professionals, medical practitioners, researchers, academicians, policymakers, healthcare organizations, and students to foster collaboration, knowledge exchange, and evidence‑based advancements in medicine and health sciences.
          </p>
          <p style={{ color: 'var(--text-main)', lineHeight: 1.8 }}>
            With a commitment to improving healthcare outcomes and promoting excellence in medical education, research, and practice, IAMHP facilitates interdisciplinary collaboration across various healthcare domains. Through international conferences, scientific publications, professional development programs, research collaborations, and healthcare initiatives, IAMHP empowers professionals to contribute to the continuous advancement of global healthcare systems.
          </p>
          <p style={{ color: 'var(--text-main)', lineHeight: 1.8 }}>
            Operating across Asia, Europe, the Middle East, Africa, and the Americas, IAMHP promotes innovation, ethical healthcare practices, scientific discovery, and sustainable healthcare solutions that address emerging global health challenges and support the achievement of the United Nations Sustainable Development Goals (SDGs).
          </p>
        </section>
        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '2rem', color: 'var(--secondary)' }}>Our Vision</h3>
          <p style={{ color: 'var(--text-main)', lineHeight: 1.8 }}>
            To be a globally recognized association that advances medical knowledge, healthcare innovation, and professional excellence while improving health outcomes and quality of life worldwide.
          </p>
        </section>
        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '2rem', color: 'var(--secondary)' }}>Our Mission</h3>
          <ul style={{ color: 'var(--text-main)', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
            <li>To promote excellence in medical, healthcare, and public health research.</li>
            <li>To facilitate collaboration among healthcare professionals, researchers, academic institutions, healthcare organizations, and policymakers.</li>
            <li>To support continuous professional development and lifelong learning in medicine and health sciences.</li>
            <li>To provide platforms for scientific publication, research dissemination, and evidence‑based practice.</li>
            <li>To foster innovation and interdisciplinary approaches to healthcare challenges.</li>
            <li>To strengthen global healthcare communities through networking, collaboration, and knowledge sharing.</li>
            <li>To contribute to sustainable healthcare development and public health improvement worldwide.</li>
          </ul>
        </section>
        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '2rem', color: 'var(--secondary)' }}>What We Do</h3>
          <ul style={{ color: 'var(--text-main)', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
            <li><strong>Healthcare Research and Innovation:</strong> IAMHP supports groundbreaking medical and healthcare research by creating opportunities for collaboration, innovation, and scientific advancement across clinical and public health disciplines.</li>
            <li><strong>International Medical Conferences and Scientific Events:</strong> We organize international conferences, congresses, symposiums, webinars, and workshops that bring together healthcare professionals, researchers, educators, and industry leaders from around the world.</li>
            <li><strong>Scientific Publications and Knowledge Sharing:</strong> IAMHP promotes the dissemination of high‑quality research through journals, conference proceedings, books, white papers, and digital knowledge platforms.</li>
            <li><strong>Professional Networking and Collaboration:</strong> Our global network enables members to connect with peers, experts, institutions, and healthcare organizations, fostering meaningful partnerships and interdisciplinary collaboration.</li>
            <li><strong>Medical Education and Professional Development:</strong> We offer training programs, certification courses, continuing medical education (CME) opportunities, faculty development programs, and healthcare leadership initiatives to enhance professional growth.</li>
            <li><strong>Healthcare Policy and Community Impact:</strong> IAMHP encourages evidence‑based healthcare practices, public health awareness, policy dialogue, and collaborative initiatives that contribute to healthier communities and stronger healthcare systems.</li>
          </ul>
        </section>
        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '2rem', color: 'var(--secondary)' }}>Areas of Focus</h3>
          <ul style={{ color: 'var(--text-main)', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
            <li>Medicine and Clinical Sciences</li>
            <li>Public Health and Epidemiology</li>
            <li>Nursing and Allied Health Sciences</li>
            <li>Pharmacy and Pharmaceutical Sciences</li>
            <li>Dentistry and Oral Health</li>
            <li>Medical Technology and Digital Health</li>
            <li>Healthcare Management and Administration</li>
            <li>Mental Health and Behavioral Sciences</li>
            <li>Biomedical Sciences and Biotechnology</li>
            <li>Rehabilitation and Physiotherapy</li>
            <li>Community Health and Preventive Medicine</li>
            <li>Global Health and Healthcare Policy</li>
          </ul>
        </section>
        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '2rem', color: 'var(--secondary)' }}>Our Global Community</h3>
          <ul style={{ color: 'var(--text-main)', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
            <li>Medical Practitioners and Physicians</li>
            <li>Healthcare Professionals</li>
            <li>Nurses and Allied Health Experts</li>
            <li>Clinical and Biomedical Researchers</li>
            <li>Public Health Specialists</li>
            <li>Academicians and Educators</li>
            <li>Healthcare Administrators</li>
            <li>Policy Makers and Government Representatives</li>
            <li>Industry Professionals</li>
            <li>Research Scholars and Students</li>
          </ul>
        </section>
        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '2rem', color: 'var(--secondary)' }}>Our Commitment</h3>
          <p style={{ color: 'var(--text-main)', lineHeight: 1.8 }}>
            IAMHP is committed to bridging the gap between healthcare practice, research, education, industry, and policy through professional networking, knowledge‑sharing platforms, and collaborative initiatives. We strive to create an integrated global healthcare community that supports scientific excellence, ethical practice, innovation, and continuous learning.
          </p>
          <p style={{ color: 'var(--text-main)', lineHeight: 1.8 }}>
            Through our dedication to advancing medical knowledge and healthcare innovation, IAMHP empowers professionals and institutions to address evolving healthcare challenges, improve patient outcomes, and contribute to a healthier and more sustainable future for all.
          </p>
        </section>
        <hr style={{ margin: '3rem 0', borderColor: 'var(--border-glass)' }} />
        <h2 style={{ fontSize: '2.5rem', color: 'var(--text-main)', textAlign: 'center', marginBottom: '1rem' }}>Association of Creative Arts and Research (ACAR)</h2>
        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '2rem', color: 'var(--secondary)' }}>About ACAR</h3>
          <p style={{ color: 'var(--text-main)', lineHeight: 1.8 }}>
            The Association of Creative Arts and Research (ACAR) is a global professional and academic association dedicated to promoting excellence in creative arts, design, humanities, cultural studies, interdisciplinary research, and innovation. ACAR serves as a vibrant platform that brings together artists, designers, researchers, educators, scholars, creative professionals, cultural practitioners, and students to foster collaboration, knowledge exchange, and artistic advancement.
          </p>
          <p style={{ color: 'var(--text-main)', lineHeight: 1.8 }}>
            ACAR is committed to nurturing creativity, supporting research‑driven artistic practices, and encouraging meaningful dialogue across diverse creative disciplines. Through international conferences, exhibitions, publications, workshops, cultural programs, and collaborative research initiatives, ACAR empowers individuals and institutions to explore new ideas, inspire innovation, and contribute to the enrichment of society through arts and culture.
          </p>
          <p style={{ color: 'var(--text-main)', lineHeight: 1.8 }}>
            With an expanding international presence across Asia, Europe, the Middle East, Africa, and the Americas, ACAR promotes global engagement, cultural diversity, artistic excellence, and creative scholarship. The association provides opportunities for professionals and emerging talents to connect, collaborate, showcase their work, and contribute to the evolving landscape of creative arts and research.
          </p>
        </section>
        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '2rem', color: 'var(--secondary)' }}>Our Vision</h3>
          <p style={{ color: 'var(--text-main)', lineHeight: 1.8 }}>
            To be a globally recognized association that advances creativity, artistic excellence, cultural understanding, and research innovation for the benefit of society and future generations.
          </p>
        </section>
        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '2rem', color: 'var(--secondary)' }}>Our Mission</h3>
          <ul style={{ color: 'var(--text-main)', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
            <li>To promote research, innovation, and excellence in creative arts, design, and cultural studies.</li>
            <li>To support artists, researchers, educators, and creative professionals through global networking and collaboration opportunities.</li>
            <li>To facilitate the exchange of knowledge, ideas, and best practices across diverse artistic and academic disciplines.</li>
            <li>To encourage interdisciplinary research that integrates creativity, technology, culture, and social impact.</li>
            <li>To provide platforms for exhibitions, publications, conferences, and professional development.</li>
            <li>To foster cultural appreciation, artistic expression, and creative leadership at local, national, and international levels.</li>
            <li>To contribute to sustainable cultural development through education, research, and community engagement.</li>
          </ul>
        </section>
        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '2rem', color: 'var(--secondary)' }}>What We Do</h3>
          <ul style={{ color: 'var(--text-main)', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
            <li><strong>Creative Arts Research and Innovation:</strong> ACAR promotes scholarly and practice‑based research that explores contemporary trends, emerging technologies, cultural heritage, artistic methodologies, and creative innovation across various disciplines.</li>
            <li><strong>International Conferences and Creative Forums:</strong> We organize international conferences, symposiums, seminars, panel discussions, and creative forums that bring together artists, researchers, educators, and industry professionals from around the world.</li>
            <li><strong>Art Exhibitions and Showcases:</strong> ACAR provides opportunities for artists and creative practitioners to present their work through exhibitions, virtual galleries, cultural festivals, design showcases, and international art events.</li>
            <li><strong>Publications and Knowledge Sharing:</strong> The association supports the dissemination of creative and academic work through journals, conference proceedings, books, magazines, and digital publishing platforms.</li>
            <li><strong>Professional Networking and Collaboration:</strong> Our global community enables members to build meaningful partnerships, engage in collaborative projects, and connect with professionals across creative, academic, and cultural sectors.</li>
            <li><strong>Education and Skill Development:</strong> ACAR offers workshops, certification programs, masterclasses, faculty development initiatives, and professional training opportunities to support lifelong learning and creative growth.</li>
          </ul>
        </section>
        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '2rem', color: 'var(--secondary)' }}>Areas of Focus</h3>
          <ul style={{ color: 'var(--text-main)', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
            <li>Visual Arts</li>
            <li>Fine Arts</li>
            <li>Performing Arts</li>
            <li>Music and Sound Studies</li>
            <li>Theatre and Drama</li>
            <li>Dance and Movement Arts</li>
            <li>Film, Media, and Communication Studies</li>
            <li>Graphic Design and Visual Communication</li>
            <li>Fashion and Textile Design</li>
            <li>Interior and Spatial Design</li>
            <li>Digital Arts and Multimedia</li>
            <li>Animation and Creative Technologies</li>
            <li>Cultural Studies and Heritage Research</li>
            <li>Literature and Creative Writing</li>
            <li>Arts Education and Pedagogy</li>
            <li>Creative Entrepreneurship and Innovation</li>
          </ul>
        </section>
        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '2rem', color: 'var(--secondary)' }}>Our Global Community</h3>
          <ul style={{ color: 'var(--text-main)', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
            <li>Artists and Creative Practitioners</li>
            <li>Designers and Innovators</li>
            <li>Researchers and Scholars</li>
            <li>Educators and Academic Professionals</li>
            <li>Cultural Organizations and Institutions</li>
            <li>Media and Communication Professionals</li>
            <li>Curators and Art Administrators</li>
            <li>Creative Entrepreneurs</li>
            <li>Research Scholars and Students</li>
            <li>Industry Experts and Community Leaders</li>
          </ul>
        </section>
        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '2rem', color: 'var(--secondary)' }}>Our Commitment</h3>
          <p style={{ color: 'var(--text-main)', lineHeight: 1.8 }}>
            ACAR is committed to bridging the gap between creative practice, academic research, cultural institutions, industry, and society. Through professional networking, collaborative projects, knowledge‑sharing platforms, and creative initiatives, we strive to build an inclusive and globally connected creative community.
          </p>
          <p style={{ color: 'var(--text-main)', lineHeight: 1.8 }}>
            By encouraging artistic exploration, research excellence, cultural dialogue, and innovation, ACAR empowers individuals and institutions to make meaningful contributions to the arts, enrich cultural understanding, and inspire positive social change.
          </p>
        </section>
        <hr style={{ margin: '3rem 0', borderColor: 'var(--border-glass)' }} />
        <h2 style={{ fontSize: '2.5rem', color: 'var(--text-main)', textAlign: 'center', marginBottom: '1rem' }}>World Association of Scholars and Professionals (WASP)</h2>
        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '2rem', color: 'var(--secondary)' }}>About WASP</h3>
          <p style={{ color: 'var(--text-main)', lineHeight: 1.8 }}>
            The World Association of Scholars and Professionals (WASP) is a distinguished global association dedicated to advancing knowledge, research, innovation, professional excellence, and interdisciplinary collaboration across diverse academic and professional domains.
          </p>
          <p style={{ color: 'var(--text-main)', lineHeight: 1.8 }}>
            WASP serves as an international platform that connects scholars, researchers, academicians, professionals, industry leaders, policymakers, entrepreneurs, and students to foster intellectual growth, knowledge exchange, and sustainable development.
          </p>
          <p style={{ color: 'var(--text-main)', lineHeight: 1.8 }}>
            WASP is committed to creating a globally connected ecosystem where education, research, innovation, and professional practice converge to address contemporary challenges and drive societal progress.
          </p>
        </section>
        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '2rem', color: 'var(--secondary)' }}>Our Vision</h3>
          <p style={{ color: 'var(--text-main)', lineHeight: 1.8 }}>
            To be a globally recognized association that unites scholars and professionals in advancing knowledge, innovation, leadership, and sustainable development for the betterment of society.
          </p>
        </section>
        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '2rem', color: 'var(--secondary)' }}>Our Mission</h3>
          <ul style={{ color: 'var(--text-main)', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
            <li>To promote excellence in research, education, innovation, and professional practice.</li>
            <li>To facilitate collaboration among scholars, professionals, institutions, industries, and governments worldwide.</li>
            <li>To provide opportunities for knowledge sharing, networking, and interdisciplinary engagement.</li>
            <li>To support the dissemination of high‑quality research and scholarly contributions through publications and academic platforms.</li>
            <li>To encourage lifelong learning, leadership development, and professional growth.</li>
            <li>To foster innovation and evidence‑based solutions that address global challenges.</li>
            <li>To strengthen international cooperation and contribute to sustainable social, economic, and technological progress.</li>
          </ul>
        </section>
        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '2rem', color: 'var(--secondary)' }}>What We Do</h3>
          <ul style={{ color: 'var(--text-main)', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
            <li><strong>Global Research and Knowledge Exchange:</strong> WASP promotes research excellence by creating opportunities for scholars and professionals to collaborate, share knowledge, and engage in interdisciplinary research initiatives that generate meaningful societal impact.</li>
            <li><strong>International Conferences and Professional Forums:</strong> We organize international conferences, congresses, summits, symposiums, workshops, and webinars that bring together experts, researchers, educators, and professionals from around the world.</li>
            <li><strong>Publications and Scholarly Communication:</strong> WASP supports the publication and dissemination of research through journals, conference proceedings, edited books, white papers, and digital knowledge platforms that promote academic excellence and innovation.</li>
            <li><strong>Professional Networking and Global Collaboration:</strong> Our international network enables members to build professional relationships, establish strategic partnerships, and engage in collaborative projects across disciplines and geographical boundaries.</li>
            <li><strong>Leadership and Professional Development:</strong> WASP offers training programs, certifications, mentoring opportunities, leadership development initiatives, and capacity‑building activities that enhance career growth and professional competence.</li>
            <li><strong>Innovation and Industry Engagement:</strong> The association encourages collaboration between academia, industry, government agencies, and professional organizations to foster innovation, entrepreneurship, technology transfer, and real‑world impact.</li>
          </ul>
        </section>
        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '2rem', color: 'var(--secondary)' }}>Areas of Focus</h3>
          <ul style={{ color: 'var(--text-main)', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
            <li>Science and Technology</li>
            <li>Engineering and Innovation</li>
            <li>Medical and Health Sciences</li>
            <li>Education and Learning Technologies</li>
            <li>Business, Management, and Entrepreneurship</li>
            <li>Social Sciences and Public Policy</li>
            <li>Arts, Humanities, and Cultural Studies</li>
            <li>Environmental and Sustainability Studies</li>
            <li>Information Technology and Artificial Intelligence</li>
            <li>Economics and Development Studies</li>
            <li>Law, Governance, and International Relations</li>
            <li>Interdisciplinary and Emerging Research Areas</li>
          </ul>
        </section>
        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '2rem', color: 'var(--secondary)' }}>Our Global Community</h3>
          <ul style={{ color: 'var(--text-main)', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
            <li>Scholars and Researchers</li>
            <li>Academicians and Educators</li>
            <li>Scientists and Engineers</li>
            <li>Healthcare Professionals</li>
            <li>Industry Experts and Consultants</li>
            <li>Entrepreneurs and Innovators</li>
            <li>Policymakers and Government Representatives</li>
            <li>Professional Associations and Institutions</li>
            <li>Research Scholars and Students</li>
            <li>Non‑Governmental and International Organizations</li>
          </ul>
        </section>
        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '2rem', color: 'var(--secondary)' }}>Our Commitment</h3>
          <p style={{ color: 'var(--text-main)', lineHeight: 1.8 }}>
            WASP is committed to bridging the gap between academia, industry, government, and society through professional networking, collaborative research, digital knowledge‑sharing platforms, and innovation‑driven initiatives. We strive to create an integrated global community where scholars and professionals can exchange ideas, develop partnerships, and contribute to transformative solutions that address local and global challenges.
          </p>
          <p style={{ color: 'var(--text-main)', lineHeight: 1.8 }}>
            By fostering mutual engagement, interdisciplinary collaboration, ethical leadership, and continuous learning, WASP empowers individuals and institutions to achieve excellence, inspire innovation, and contribute to a more sustainable and prosperous future.
          </p>
        </section>
      </div>

      {/* Google Sheets Integration Bar / Indicator */}
      <div className="glass-card" style={{
        padding: '20px',
        marginBottom: '40px',
        border: '1px solid rgba(100, 255, 218, 0.2)',
        background: 'rgba(10, 25, 47, 0.9)',
        position: 'relative',
        zIndex: 5
      }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <Database size={24} color={customUrl ? "var(--secondary)" : "var(--accent)"} />
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 600 }}>Google Sheets Status</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {customUrl
                  ? "Connected! Submissions will save directly to your deployed Google Spreadsheet."
                  : "Draft Mode: Form submissions are mocked. Paste your Apps Script Web App URL to link a live sheet."
                }
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px', flexGrow: 1, maxWidth: '500px', justifyContent: 'flex-end' }}>
            <input
              type="text"
              placeholder="Paste Google Web App URL here..."
              value={customUrl}
              onChange={(e) => setCustomUrl(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 15px',
                borderRadius: '20px',
                border: '1px solid var(--border-glass)',
                background: 'var(--primary-light)',
                color: 'var(--text-main)',
                fontSize: '0.8rem',
                outline: 'none'
              }}
            />
          </div>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '40px',
        position: 'relative',
        zIndex: 5
      }}>
        {/* Office details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {offices.map((office, idx) => (
            <div key={idx} className="glass-card" style={{ borderLeft: idx === 0 ? '4px solid var(--secondary)' : '4px solid var(--accent)' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '15px', color: 'var(--text-main)' }}>{office.title}</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <MapPin size={18} color="var(--secondary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{office.address}</span>
                </li>
                <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Phone size={16} color="var(--secondary)" />
                  <span>{office.phone}</span>
                </li>
                <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Mail size={16} color="var(--secondary)" />
                  <span>{office.email}</span>
                </li>
              </ul>
            </div>
          ))}

          {/* Setup Guide Link */}
          <div className="glass-card" style={{ display: 'flex', gap: '15px', padding: '20px', background: 'rgba(255,255,255,0.01)' }}>
            <HelpCircle size={24} color="var(--secondary)" style={{ flexShrink: 0 }} />
            <div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '4px' }}>Need help connecting Google Sheets?</h4>
              <p style={{ fontSize: '0.8rem', lineHeight: 1.5 }}>
                Open the file [GoogleSheetsSetup.md](file:///d:/client/sst/web/GoogleSheetsSetup.md) in your project workspace for a step-by-step tutorial on deploying your script.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass-card" style={{ borderTop: '4px solid var(--secondary)' }}>
          <h3 style={{ marginBottom: '10px' }}>Send Message</h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '25px' }}>
            We look forward to receiving your queries. Fields marked with an asterisk (*) are mandatory.
          </p>

          {status === 'success' && (
            <div style={{ textAlign: 'center', padding: '30px 0' }}>
              <CheckCircle size={45} color="var(--secondary)" style={{ marginBottom: '15px', display: 'inline-block' }} />
              <h3>Message Submitted!</h3>
              <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>
                Your message has been sent successfully. {customUrl ? "It was recorded directly to your Google Sheet." : "It was logged to the browser console as a mock submission."}
              </p>
              <button onClick={() => setStatus('idle')} className="btn btn-primary" style={{ marginTop: '20px', padding: '8px 20px', fontSize: '0.85rem' }}>
                Send Another Message
              </button>
            </div>
          )}

          {status === 'error' && (
            <div style={{ textAlign: 'center', padding: '30px 0' }}>
              <AlertCircle size={45} color="var(--accent)" style={{ marginBottom: '15px', display: 'inline-block' }} />
              <h3>Submission Failed</h3>
              <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>
                Something went wrong while submitting to Google Sheets. Check your Apps Script URL deployment configurations.
              </p>
              <button onClick={() => setStatus('idle')} className="btn btn-accent" style={{ marginTop: '20px', padding: '8px 20px', fontSize: '0.85rem' }}>
                Try Again
              </button>
            </div>
          )}

          {status === 'idle' && (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', fontWeight: 600 }}>Your Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Dr. Vijay Singh Rathore"
                  style={{
                    width: '100%', padding: '10px 15px', borderRadius: '8px', border: '1px solid var(--border-glass)',
                    background: 'var(--primary-light)', color: 'var(--text-main)', outline: 'none', fontSize: '0.9rem'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', fontWeight: 600 }}>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    style={{
                      width: '100%', padding: '10px 15px', borderRadius: '8px', border: '1px solid var(--border-glass)',
                      background: 'var(--primary-light)', color: 'var(--text-main)', outline: 'none', fontSize: '0.9rem'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', fontWeight: 600 }}>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone"
                    style={{
                      width: '100%', padding: '10px 15px', borderRadius: '8px', border: '1px solid var(--border-glass)',
                      background: 'var(--primary-light)', color: 'var(--text-main)', outline: 'none', fontSize: '0.9rem'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', fontWeight: 600 }}>Subject *</label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="e.g. Inquiry regarding NAAC audit schedules"
                  style={{
                    width: '100%', padding: '10px 15px', borderRadius: '8px', border: '1px solid var(--border-glass)',
                    background: 'var(--primary-light)', color: 'var(--text-main)', outline: 'none', fontSize: '0.9rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', fontWeight: 600 }}>Message *</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Outline your detailed question or consulting request here..."
                  style={{
                    width: '100%', padding: '10px 15px', borderRadius: '8px', border: '1px solid var(--border-glass)',
                    background: 'var(--primary-light)', color: 'var(--text-main)', outline: 'none', fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem', resize: 'vertical'
                  }}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-accent" style={{ width: '100%', padding: '12px' }}>
                <Send size={16} /> Send Message
              </button>
            </form>
          )}

          {status === 'loading' && (
            <div style={{ textAlign: 'center', padding: '50px 0' }}>
              <div className="spinner" style={{
                width: '40px', height: '40px', border: '4px solid rgba(100, 255, 218, 0.1)',
                borderTop: '4px solid var(--secondary)', borderRadius: '50%', display: 'inline-block',
                animation: 'spin 1s linear infinite'
              }}></div>
              <h4 style={{ marginTop: '15px' }}>Sending Message...</h4>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
