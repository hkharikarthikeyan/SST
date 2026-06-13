import React, { useState } from 'react';
import { BookOpen, Search, ArrowRight, CheckCircle, Database, FileText } from 'lucide-react';

export default function Publications() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searched, setSearched] = useState(false);

  const journals = [
    { code: "IJERCSE", title: "Int. Journal of Engineering Research in Computer Science & Engineering", impact: "4.82", indexed: "Scopus, ResearchPedia, DOI Directory" },
    { code: "IJERECE", title: "Int. Journal of Engineering Research in Electronics & Communication Engineering", impact: "4.15", indexed: "Google Scholar, CrossRef, Academic Research Library" },
    { code: "IJEREEE", title: "Int. Journal of Engineering Research in Electrical & Electronic Engineering", impact: "3.95", indexed: "Index Copernicus, DOI Directory" },
    { code: "JMLS", title: "Journal of Medical & Life Sciences", impact: "5.12", indexed: "PubMed (PMC), Scopus, BioLEAGUES" },
    { code: "JTBCS", title: "Transaction & Book Chapters on Social Sciences & Humanities", impact: "2.80", indexed: "CrossRef, Shazu Soft Technologies Research" }
  ];

  const publishingSteps = [
    { number: "01", title: "Paper Submission", desc: "Submit your manuscript in word format complying with the standard double-column layout guide." },
    { number: "02", title: "Double-Blind Review", desc: "Undergo double-blind evaluation by two senior peer reviewers of the specific scientific advisory board." },
    { number: "03", title: "Acceptance & DOI Registration", desc: "Upon approval, receive an official acceptance letter and register a unique DOI prefix code." },
    { number: "04", title: "Index & Publication", desc: "Get published in the journal volume and indexed across databases like ResearchPedia and Academic Research Library." }
  ];

  const mockDb = [
    { title: "A Machine Learning Framework for Predicting NAAC Institutional Audits", author: "Dr. Vijay Singh Rathore", journal: "IJERCSE Vol 12, 2025", doi: "10.5281/zenodo.4729" },
    { title: "Review of Precision Oncology Methodologies and Clinical Outcomes", author: "Dr. Sarah Jenkins", journal: "JMLS Vol 8, 2026", doi: "10.1016/j.jmls.2026.02" },
    { title: "Sustainable Green Energies: Grid Computing and Cloud Operations", author: "Prof. Rajesh Kumar", journal: "IJEREEE Vol 11, 2025", doi: "10.1109/ijereee.2025.12" },
    { title: "Innovative Methods in Academic Curriculum Outlines", author: "Dr. Vijay Singh Rathore", journal: "JTBCS Vol 4, 2026", doi: "10.5281/jtbcs.2026.09" }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    setSearched(true);
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    const results = mockDb.filter(doc => 
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.journal.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="section-padding" style={{ minHeight: '80vh', position: 'relative' }}>
      <div className="glow-blob glow-blob-cyan" style={{ bottom: '15%', left: '5%' }}></div>
      <div className="glow-blob glow-blob-pink" style={{ top: '15%', right: '5%' }}></div>

      <div style={{ textAlign: 'center', marginBottom: '50px', position: 'relative', zIndex: 5 }}>
        <span className="badge">Digital Library & Publications</span>
        <h2 className="section-title center" style={{ display: 'inline-block', marginTop: '10px' }}>
          Peer-Reviewed Research Journals
        </h2>
        <p style={{ maxWidth: '600px', margin: '15px auto 0' }}>
          Publish your findings in widely indexed databases. Explore our peer-reviewed journals, book chapters, and research bulletins.
        </p>
      </div>

      {/* Mock Digital Library Search Bar */}
      <div className="glass-card" style={{
        padding: '30px',
        marginBottom: '50px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 5,
        borderTop: '3px solid var(--secondary)'
      }}>
        <h3 style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          <Database size={22} color="var(--secondary)" /> Search Academic Research Library
        </h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
          Query over 150,000+ scientific articles, DOI registries, and published conference proceedings.
        </p>

        <form onSubmit={handleSearch} style={{ display: 'flex', maxWidth: '600px', margin: '0 auto', gap: '12px', position: 'relative' }}>
          <input 
            type="text" 
            placeholder="Search by topic, author name, DOI code or journal..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              flexGrow: 1,
              padding: '12px 20px',
              borderRadius: '30px',
              background: 'var(--primary-light)',
              border: '1px solid var(--border-glass)',
              color: 'var(--text-main)',
              outline: 'none',
              fontSize: '0.9rem'
            }}
          />
          <button type="submit" className="btn btn-accent" style={{ padding: '0 25px', borderRadius: '30px' }}>
            <Search size={16} /> Search
          </button>
        </form>

        {searched && (
          <div style={{ marginTop: '30px', textAlign: 'left', borderTop: '1px solid var(--border-glass)', paddingTop: '20px' }}>
            <h4 style={{ fontSize: '1rem', color: 'var(--secondary)', marginBottom: '15px' }}>
              Search Results ({searchResults.length})
            </h4>
            {searchResults.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {searchResults.map((res, idx) => (
                  <div key={idx} style={{
                    padding: '16px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px',
                    border: '1px solid var(--border-glass)'
                  }}>
                    <h5 style={{ fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '6px' }}>{res.title}</h5>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      <span>👤 Author: <strong style={{ color: 'var(--text-main)' }}>{res.author}</strong></span>
                      <span>📖 Journal: {res.journal}</span>
                      <span>🔗 DOI: <a href={`https://doi.org/${res.doi}`} target="_blank" rel="noreferrer" style={{ color: 'var(--secondary)' }}>{res.doi}</a></span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>No research articles match your query. Try searching for "Rathore", "Oncology" or "Green Energies".</p>
            )}
          </div>
        )}
      </div>

      {/* Featured Journals List */}
      <h3 style={{ marginBottom: '25px', position: 'relative', zIndex: 5 }} className="section-title">
        Featured Peer-Reviewed Journals
      </h3>
      <div className="grid-container" style={{ marginBottom: '60px', position: 'relative', zIndex: 5 }}>
        {journals.map((jn, idx) => (
          <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <span className="badge">{jn.code}</span>
                <span style={{ fontSize: '0.85rem', color: '#facc15', fontWeight: 600 }}>
                  Impact: {jn.impact}
                </span>
              </div>
              <h4 style={{ fontSize: '1.05rem', lineHeight: 1.4, marginBottom: '15px', color: 'var(--text-main)' }}>
                {jn.title}
              </h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                🔍 Indexed: {jn.indexed}
              </p>
            </div>
            <div style={{ marginTop: '20px', borderTop: '1px solid var(--border-glass)', paddingTop: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>ISSN Online Registration</span>
              <button className="btn" style={{
                padding: '4px 12px', fontSize: '0.75rem', borderRadius: '15px', background: 'transparent',
                borderColor: 'var(--secondary)', color: 'var(--secondary)'
              }}>
                Guidelines
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Visual Timeline of Publishing Flow */}
      <h3 style={{ marginBottom: '25px', position: 'relative', zIndex: 5 }} className="section-title">
        Journal Processing Workflow
      </h3>
      <div className="grid-container" style={{
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '24px',
        position: 'relative',
        zIndex: 5
      }}>
        {publishingSteps.map((step, idx) => (
          <div key={idx} className="glass-card" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Step Number behind */}
            <div style={{
              position: 'absolute', right: '-10px', top: '-10px', fontSize: '4.5rem', fontWeight: 800,
              color: 'rgba(255,255,255,0.02)', pointerEvents: 'none', fontFamily: 'var(--font-heading)'
            }}>
              {step.number}
            </div>

            <div style={{
              width: '36px', height: '36px', borderRadius: '50%', background: 'var(--secondary)',
              color: 'var(--text-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 'bold', fontFamily: 'var(--font-heading)', marginBottom: '20px',
              boxShadow: 'var(--shadow-glow)'
            }}>
              {step.number}
            </div>

            <h4 style={{ fontSize: '1.1rem', marginBottom: '10px', color: 'var(--text-main)' }}>{step.title}</h4>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
