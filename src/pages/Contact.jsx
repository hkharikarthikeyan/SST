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
      title: "Headquarters — Chennai",
      address: "55A, 1st Street, Kannikaburam, KK Nagar, Chennai - 78",
      phone: "+91 89391 50442, +91 90803 40803",
      email: "info@shazusofttechnologies.org"
    },
    {
      title: "Salem Branch",
      address: "2nd Agraharam, Chairman Rajarathinam Street, Near Kamala Hospital, Salem, Tamil Nadu - 636001",
      phone: "+91 89391 50442, +91 90803 40803",
      email: "info@shazusofttechnologies.org"
    }
  ];

  return (
    <div className="section-padding" style={{ minHeight: '80vh', position: 'relative' }}>
      <div className="glow-blob glow-blob-cyan" style={{ top: '10%', right: '5%' }}></div>
      <div className="glow-blob glow-blob-pink" style={{ bottom: '10%', left: '5%' }}></div>

      <div style={{ textAlign: 'center', marginBottom: '50px', position: 'relative', zIndex: 5 }}>
        <span className="badge">Get in Touch</span>
        <h2 className="section-title center" style={{ display: 'inline-block', marginTop: '10px' }}>
          Connect Globally or Locally
        </h2>
        <p style={{ maxWidth: '600px', margin: '15px auto 0' }}>
          Submit academic consultancy requests, arrange FDP guest speakers, register local student chapters, or resolve general inquiries.
        </p>
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
