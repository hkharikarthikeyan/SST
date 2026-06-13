import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Conferences from './pages/Conferences';
import Publications from './pages/Publications';
import Consultancy from './pages/Consultancy';
import Membership from './pages/Membership';
import AboutTeam from './pages/AboutTeam';
import Contact from './pages/Contact';

export default function App() {
  const [theme, setTheme] = React.useState('dark');
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} theme={theme} />;
      case 'conferences':
        return <Conferences />;
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
      <Header activeTab={activeTab} setActiveTab={setActiveTab} theme={theme} toggleTheme={toggleTheme} />

      {/* Main Page Area */}
      <main style={{ flex: 1, position: 'relative', zIndex: 5 }}>
        {renderContent()}
      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
