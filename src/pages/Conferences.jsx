import React, { useState } from 'react';
import { Calendar, MapPin, Search, Filter, ClipboardList, CheckCircle } from 'lucide-react';

export default function Conferences() {
  const [filter, setFilter] = useState('all');
  const [category, setCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    affiliation: '',
    role: 'author', // author, listener, presenter
    paperTitle: ''
  });

  const categories = [
    { id: 'all', label: 'All Fields' },
    { id: 'eng', label: 'Engineering & Tech' },
    { id: 'med', label: 'Medical & Life Sciences' },
    { id: 'mgmt', label: 'Business & Management' },
    { id: 'edu', label: 'Education & Humanities' }
  ];

  const conferencesData = [
    {
      id: 1,
      title: "15th World Congress on Applied Science, Engineering & Technology (WCASET)",
      date: "August 12-13, 2026",
      location: "Goa, India (Hybrid)",
      category: "eng",
      type: "upcoming",
      organizer: "Institute For Educational Research and Publication (IFERP)",
      deadline: "July 10, 2026",
      desc: "WCASET provides an opportunity for researchers, engineers, and scientists to share their findings on advancements in structural, system, software, and mechanical computing."
    },
    {
      id: 2,
      title: "Indo-Global Oncology & Allied Healthcare Summit",
      date: "September 05-07, 2026",
      location: "Bhubaneswar, Odisha",
      category: "med",
      type: "upcoming",
      organizer: "BioLEAGUES Worldwide",
      deadline: "August 01, 2026",
      desc: "Connecting oncologists, surgeons, and pathologists to exchange novel concepts in precision oncology, immunotherapies, and cancer prevention strategies."
    },
    {
      id: 3,
      title: "International FDP on Business Analytics & Strategic Management",
      date: "October 18-22, 2026",
      location: "Jaipur, Rajasthan (Virtual)",
      category: "mgmt",
      type: "upcoming",
      organizer: "Shazu Soft Technologies & SST",
      deadline: "October 05, 2026",
      desc: "A five-day Faculty Development Program focused on teaching methodologies for predictive analytics and data-driven corporate decision framework models."
    },
    {
      id: 4,
      title: "International Symposium on Curriculum Design & NAAC Preparedness",
      date: "November 12, 2026",
      location: "Delhi, India (In-Person)",
      category: "edu",
      type: "upcoming",
      organizer: "SST Academic Consulting",
      deadline: "October 20, 2026",
      desc: "A hands-on symposium addressing mapping standards, course attainments, and administrative audits required to clear NAAC A++ accreditation."
    },
    {
      id: 5,
      title: "14th World Congress on Applied Science, Engineering & Technology",
      date: "January 18-19, 2026",
      location: "Kuala Lumpur, Malaysia",
      category: "eng",
      type: "past",
      organizer: "IFERP",
      deadline: "Expired",
      desc: "Brought together 400+ delegates focusing on sustainable green energies, grid computing, and high-performance neural integrations."
    },
    {
      id: 6,
      title: "Global Summit on Pediatrics & Clinical Health Outcomes",
      date: "March 22-23, 2026",
      location: "Bangkok, Thailand",
      category: "med",
      type: "past",
      organizer: "BioLEAGUES & SFNP",
      deadline: "Expired",
      desc: "Delved into nutrition parameters, pediatric disease diagnostics, and post-pandemic clinical health outcomes in developing nations."
    }
  ];

  const filteredConferences = conferencesData.filter(conf => {
    const matchesSearch = conf.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          conf.organizer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          conf.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filter === 'all' || conf.type === filter;
    const matchesCat = category === 'all' || conf.category === category;
    
    return matchesSearch && matchesType && matchesCat;
  });

  const handleRegisterClick = (conf) => {
    setSelectedEvent(conf);
    setSubmitted(false);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a live system, this submits details to backend / sheet
    setSubmitted(true);
    setTimeout(() => {
      setSelectedEvent(null);
      setFormData({
        name: '',
        email: '',
        phone: '',
        affiliation: '',
        role: 'author',
        paperTitle: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="section-padding" style={{ minHeight: '80vh', position: 'relative' }}>
      <div className="glow-blob glow-blob-cyan" style={{ top: '10%', left: '5%' }}></div>
      <div className="glow-blob glow-blob-pink" style={{ bottom: '10%', right: '5%' }}></div>

      <div style={{ textAlign: 'center', marginBottom: '50px', position: 'relative', zIndex: 5 }}>
        <span className="badge">Conferences & Forums</span>
        <h2 className="section-title center" style={{ display: 'inline-block', marginTop: '10px' }}>
          Scientific & Academic Gatherings
        </h2>
        <p style={{ maxWidth: '600px', margin: '15px auto 0' }}>
          Participate in global research networks. Register for upcoming international conferences, present your research, or browse past conference proceedings.
        </p>
      </div>

      {/* Event Types Cards */}
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '12px', textAlign: 'center' }} className="section-title">Event Types</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '16px', marginTop: '10px',textAlign: 'center' }}>
          {[
            'Upcoming Conference',
            'Faculty Development Program',
            'Webinar',
            'Hands on training',
            'Internship',
            'Hackathon',
            'Seminar'
          ].map((label, i) => (
            <div key={i} className="glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <h4 style={{ marginBottom: '1px', color: 'var(--secondary)' }}>{label}</h4>

            </div>
          ))}
        </div>
      </div>

      {/* Control Panel: Search and Filters */}
      <div className="glass-card" style={{
        padding: '10px',
        marginBottom: '40px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        zIndex: 5
      }}>
        {/* Search */}
        <div style={{ position: 'relative', flexGrow: 1, maxWidth: '400px' }}>
          <Search size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)' }} />
          <input 
            type="text" 
            placeholder="Search by conference name, location or body..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 20px 12px 45px',
              borderRadius: '30px',
              background: 'var(--primary-light)',
              border: '1px solid var(--border-glass)',
              color: 'var(--text-main)',
              outline: 'none',
              fontSize: '0.9rem',
              transition: 'var(--transition-smooth)'
            }}
          />
        </div>

        {/* Type Filter */}
        <div style={{ display: 'flex', gap: '8px', background: 'var(--primary-light)', padding: '4px', borderRadius: '30px', border: '1px solid var(--border-glass)' }}>
          <button 
            onClick={() => setFilter('all')}
            style={{
              padding: '8px 20px', borderRadius: '25px', border: 'none', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600,
              background: filter === 'all' ? 'var(--secondary)' : 'transparent',
              color: filter === 'all' ? 'var(--text-dark)' : 'var(--text-main)',
              transition: 'var(--transition-smooth)'
            }}
          >
            All Events
          </button>
          <button 
            onClick={() => setFilter('upcoming')}
            style={{
              padding: '8px 20px', borderRadius: '25px', border: 'none', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600,
              background: filter === 'upcoming' ? 'var(--secondary)' : 'transparent',
              color: filter === 'upcoming' ? 'var(--text-dark)' : 'var(--text-main)',
              transition: 'var(--transition-smooth)'
            }}
          >
            Upcoming
          </button>
          <button 
            onClick={() => setFilter('past')}
            style={{
              padding: '8px 20px', borderRadius: '25px', border: 'none', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600,
              background: filter === 'past' ? 'var(--secondary)' : 'transparent',
              color: filter === 'past' ? 'var(--text-dark)' : 'var(--text-main)',
              transition: 'var(--transition-smooth)'
            }}
          >
            Past Events
          </button>
        </div>
      </div>

      {/* Categories Horizontal Selector */}
      <div style={{
        display: 'flex',
        gap: '12px',
        overflowX: 'auto',
        paddingBottom: '20px',
        marginBottom: '30px',
        scrollbarWidth: 'none',
        position: 'relative',
        zIndex: 5
      }}>
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setCategory(cat.id)}
            style={{
              padding: '10px 24px',
              borderRadius: '30px',
              border: '1px solid',
              borderColor: category === cat.id ? 'var(--secondary)' : 'var(--border-glass)',
              background: category === cat.id ? 'rgba(100, 255, 218, 0.1)' : 'var(--bg-card)',
              color: category === cat.id ? 'var(--secondary)' : 'var(--text-muted)',
              fontWeight: 600,
              fontSize: '0.85rem',
              whiteSpace: 'nowrap',
              cursor: 'pointer',
              transition: 'var(--transition-smooth)'
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Conference Grid List */}
      <div style={{ position: 'relative', zIndex: 5 }}>
        {filteredConferences.length > 0 ? (
          <div className="grid-container" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            {filteredConferences.map(conf => (
              <div key={conf.id} className="glass-card" style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderLeft: conf.type === 'upcoming' ? '4px solid var(--secondary)' : '4px solid var(--text-muted)'
              }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                    <span className={`badge ${conf.type === 'upcoming' ? '' : 'badge-accent'}`} style={{
                      background: conf.type === 'upcoming' ? 'rgba(100, 255, 218, 0.1)' : 'rgba(255,255,255,0.05)',
                      color: conf.type === 'upcoming' ? 'var(--secondary)' : 'var(--text-muted)',
                      border: conf.type === 'upcoming' ? '1px solid rgba(100, 255, 218, 0.2)' : '1px solid rgba(255,255,255,0.1)'
                    }}>
                      {conf.type}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600 }}>
                      Deadline: {conf.deadline}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', lineHeight: 1.4, color: 'var(--text-main)' }}>
                    {conf.title}
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Calendar size={16} color="var(--secondary)" />
                      <span>{conf.date}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <MapPin size={16} color="var(--secondary)" />
                      <span>{conf.location}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <ClipboardList size={16} color="var(--secondary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>Organized by: <strong style={{ color: 'var(--text-main)' }}>{conf.organizer}</strong></span>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '25px' }}>
                    {conf.desc}
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  {conf.type === 'upcoming' ? (
                    <>
                      <button 
                        onClick={() => handleRegisterClick(conf)}
                        className="btn btn-accent" 
                        style={{ flexGrow: 1, padding: '10px 15px', fontSize: '0.85rem' }}
                      >
                        Register Now
                      </button>
                      <button 
                        onClick={() => handleRegisterClick(conf)}
                        className="btn btn-primary" 
                        style={{ padding: '10px 15px', fontSize: '0.85rem' }}
                      >
                        Submit Paper
                      </button>
                    </>
                  ) : (
                    <button 
                      className="btn btn-secondary" 
                      style={{ width: '100%', padding: '10px', fontSize: '0.85rem' }}
                      disabled
                    >
                      Proceedings Closed
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="glass-card" style={{ textAlign: 'center', padding: '60px 20px' }}>
            <h3 style={{ marginBottom: '10px' }}>No Conferences Found</h3>
            <p>We couldn't find any scientific events matching your filter/search criteria. Please reset your search.</p>
          </div>
        )}
      </div>

      {/* Registration Modal Inline Panel */}
      {selectedEvent && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(2, 12, 27, 0.85)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '20px'
        }}>
          <div className="glass-card" style={{
            width: '100%',
            maxWidth: '550px',
            position: 'relative',
            maxHeight: '90vh',
            overflowY: 'auto'
          }}>
            <h3 style={{ marginBottom: '10px', fontSize: '1.4rem' }}>Event Registration</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
              Registering for: <strong style={{ color: 'var(--secondary)' }}>{selectedEvent.title}</strong>
            </p>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <CheckCircle size={60} color="var(--secondary)" style={{ marginBottom: '20px', display: 'inline-block' }} />
                <h3>Registration Successful!</h3>
                <p style={{ marginTop: '10px' }}>A confirmation email containing guidelines and schedules has been sent to you.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', fontWeight: 600 }}>Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    value={formData.name}
                    onChange={handleFormChange}
                    style={{
                      width: '100%', padding: '10px 15px', borderRadius: '8px', border: '1px solid var(--border-glass)',
                      background: 'var(--primary-light)', color: 'var(--text-main)', outline: 'none'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', fontWeight: 600 }}>Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      value={formData.email}
                      onChange={handleFormChange}
                      style={{
                        width: '100%', padding: '10px 15px', borderRadius: '8px', border: '1px solid var(--border-glass)',
                        background: 'var(--primary-light)', color: 'var(--text-main)', outline: 'none'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', fontWeight: 600 }}>Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      required 
                      value={formData.phone}
                      onChange={handleFormChange}
                      style={{
                        width: '100%', padding: '10px 15px', borderRadius: '8px', border: '1px solid var(--border-glass)',
                        background: 'var(--primary-light)', color: 'var(--text-main)', outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', fontWeight: 600 }}>Institution/Affiliation</label>
                  <input 
                    type="text" 
                    name="affiliation" 
                    required 
                    value={formData.affiliation}
                    onChange={handleFormChange}
                    style={{
                      width: '100%', padding: '10px 15px', borderRadius: '8px', border: '1px solid var(--border-glass)',
                      background: 'var(--primary-light)', color: 'var(--text-main)', outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', fontWeight: 600 }}>Participation Role</label>
                  <select 
                    name="role" 
                    value={formData.role}
                    onChange={handleFormChange}
                    style={{
                      width: '100%', padding: '10px 15px', borderRadius: '8px', border: '1px solid var(--border-glass)',
                      background: 'var(--primary-light)', color: 'var(--text-main)', outline: 'none', cursor: 'pointer'
                    }}
                  >
                    <option value="author">Author (Presenting Paper)</option>
                    <option value="listener">Listener (General Delegate)</option>
                    <option value="presenter">Keynote Speaker/Presenter</option>
                  </select>
                </div>

                {formData.role === 'author' && (
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', fontWeight: 600 }}>Proposed Paper/Abstract Title</label>
                    <input 
                      type="text" 
                      name="paperTitle" 
                      required 
                      value={formData.paperTitle}
                      onChange={handleFormChange}
                      placeholder="e.g. A Neural Network Approach to NAAC Audit Attainments"
                      style={{
                        width: '100%', padding: '10px 15px', borderRadius: '8px', border: '1px solid var(--border-glass)',
                        background: 'var(--primary-light)', color: 'var(--text-main)', outline: 'none'
                      }}
                    />
                  </div>
                )}

                <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
                  <button 
                    type="button" 
                    onClick={() => setSelectedEvent(null)}
                    className="btn btn-secondary" 
                    style={{ flexGrow: 1 }}
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="btn btn-accent" 
                    style={{ flexGrow: 1 }}
                  >
                    Submit Registration
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
