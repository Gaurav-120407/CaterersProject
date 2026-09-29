import React from 'react';
import { Utensils, MapPin, PhoneCall } from 'lucide-react';

export default function Navbar({ onSelectHome }) {
  return (
    <header className="header">
      <div className="container header-inner">
        <div 
          className="brand-logo" 
          onClick={onSelectHome} 
          role="button" 
          style={{ cursor: 'pointer' }}
          title="Return to Home"
        >
          <div style={{
            background: 'var(--primary)',
            color: '#fff',
            borderRadius: '10px',
            width: '38px',
            height: '38px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(230, 81, 0, 0.3)'
          }}>
            <Utensils size={20} strokeWidth={2.4} />
          </div>
          <div>
            Mumbai<span style={{ color: '#0f172a' }}>Caterers</span>
          </div>
          <span className="brand-badge">Direct Connect</span>
        </div>

        <div className="nav-location-pill">
          <MapPin size={16} color="var(--primary)" />
          <span>Mumbai • Navi Mumbai • Thane</span>
        </div>
      </div>
    </header>
  );
}
