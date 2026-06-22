import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/services/ServiceDetail';
import Education from './pages/services/Education';
import Software from './pages/services/Software';
import Research from './pages/services/Research';
import Conferences from './pages/Conferences';
import Associations from './pages/Associations';
import AssociationDetail from './pages/AssociationDetail';
import Publications from './pages/Publications';
import Consultancy from './pages/Consultancy';
import Membership from './pages/Membership';
import AboutTeam from './pages/AboutTeam';
import Contact from './pages/Contact';
import Career from './pages/Career';

export default function App() {
  const [theme, setTheme] = React.useState('light');
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  const [activeTab, setActiveTab] = useState(() => localStorage.getItem('activeTab') || 'home');
  React.useEffect(() => { localStorage.setItem('activeTab', activeTab); }, [activeTab]);
  const [activeService, setActiveService] = useState(null);
  const [activeAssociation, setActiveAssociation] = useState(null);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} theme={theme} />;
      case 'services':
        return activeService ? (
          <ServiceDetail 
            service={activeService.service} 
            category={activeService.category} 
            onBack={() => setActiveService(null)} 
          />
        ) : (
          <Services setActiveTab={setActiveTab} setActiveService={setActiveService} />
        );
      case 'education':
        return <Education onBack={() => setActiveTab('services')} />;
      case 'software':
        return <Software onBack={() => setActiveTab('services')} />;
      case 'research':
        return <Research onBack={() => setActiveTab('services')} />;
      case 'conferences':
        return <Conferences />;
      case 'associations':
        return activeAssociation ? (
          <AssociationDetail association={activeAssociation} onBack={() => setActiveAssociation(null)} />
        ) : (
          <Associations setActiveAssociation={setActiveAssociation} />
        );
      case 'publications':
        return <Publications />;
      case 'consultancy':
        return <Consultancy />;
      case 'membership':
        return <Membership />;
      case 'about':
        return <AboutTeam />;
      case 'contact':
        return <Contact />;
      case 'career':
        return <Career />;
      default:
        return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      position: 'relative',
      background: 'var(--bg-dark)'
    }}>
      {/* Dynamic Background Blobs */}
      <div className="glow-blob glow-blob-cyan" style={{ top: '2%', left: '10%' }}></div>
      
      {/* Navigation Header */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} theme={theme} toggleTheme={toggleTheme} setActiveService={setActiveService} />

      {/* Main Page Area */}
      <main style={{ flex: 1, position: 'relative', zIndex: 5, paddingTop: '80px' }}>
        {renderContent()}
      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
