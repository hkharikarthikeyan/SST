import React from 'react';

const ASSOCIATIONS = [
  {
    id: 'isei',
    title: 'Institute of Science, Engineering and Innovation (ISEI)',
    short: 'A global professional association advancing science, engineering and innovation.'
  },
  {
    id: 'iamhp',
    title: 'International Association of Medical and Health Professionals (IAMHP)',
    short: 'Advancing healthcare, medical sciences, public health and clinical research.'
  },
  {
    id: 'acar',
    title: 'Association of Creative Arts and Research (ACAR)',
    short: 'Promotes excellence in creative arts, design, humanities and interdisciplinary research.'
  },
  {
    id: 'wasp',
    title: 'World Association of Scholars and Professionals (WASP)',
    short: 'A global network uniting scholars and professionals across disciplines.'
  }
];

export default function Associations({ setActiveAssociation }) {
  return (
    <div className="section-padding" style={{ minHeight: '70vh' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 className="section-title">Associations</h2>
        <p style={{ maxWidth: 720, margin: '12px auto', color: 'var(--text-muted)' }}>
          Explore our partner professional associations. Click a name to view details.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
        {ASSOCIATIONS.map(a => (
          <div key={a.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <h3 style={{ margin: 0, color: 'var(--secondary)' }}>{a.title}</h3>
            <p style={{ color: 'var(--text-muted)', marginTop: 0 }}>{a.short}</p>
            <div style={{ marginTop: 'auto', display: 'flex', gap: '10px' }}>
              <button
                className="btn btn-primary"
                onClick={() => setActiveAssociation(a)}
                style={{ padding: '8px 12px' }}
              >
                View
              </button>
              <a href="#" onClick={(e)=>{e.preventDefault(); setActiveAssociation(a);}} className="btn btn-accent" style={{ padding: '8px 12px' }}>Details</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
