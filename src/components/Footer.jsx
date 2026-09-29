import React from 'react';
import { Utensils, Phone, ShieldCheck, Heart } from 'lucide-react';

export default function Footer({ onSelectCity }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-top">
          <div style={{ maxWidth: '420px' }}>
            <div className="footer-brand" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <Utensils size={20} color="var(--primary)" />
              <span>MumbaiCaterers</span>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: '1.6' }}>
              A customer-first local catering discovery platform. Connecting event hosts directly with verified caterers across Mumbai, Navi Mumbai, and Thane. No middlemen, no commission.
            </p>
          </div>

          <div>
            <div style={{ color: '#ffffff', fontWeight: 700, marginBottom: '0.75rem', fontSize: '0.95rem' }}>
              Coverage Areas
            </div>
            <div className="footer-areas">
              <button 
                type="button" 
                onClick={() => onSelectCity('Mumbai')}
                style={{ background: 'none', color: '#cbd5e1', fontSize: '0.875rem', textAlign: 'left' }}
              >
                Mumbai (Western & Central)
              </button>
              <button 
                type="button" 
                onClick={() => onSelectCity('Navi Mumbai')}
                style={{ background: 'none', color: '#cbd5e1', fontSize: '0.875rem', textAlign: 'left' }}
              >
                Navi Mumbai (Vashi to Belapur)
              </button>
              <button 
                type="button" 
                onClick={() => onSelectCity('Thane')}
                style={{ background: 'none', color: '#cbd5e1', fontSize: '0.875rem', textAlign: 'left' }}
              >
                Thane & Ghodbunder
              </button>
            </div>
          </div>

          <div>
            <div style={{ color: '#ffffff', fontWeight: 700, marginBottom: '0.75rem', fontSize: '0.95rem' }}>
              Credibility Guarantee
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#38bdf8', fontSize: '0.875rem', fontWeight: 600 }}>
              <ShieldCheck size={18} />
              <span>Verified Local Partners</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4ade80', fontSize: '0.875rem', fontWeight: 600, marginTop: '0.5rem' }}>
              <Phone size={16} />
              <span>Direct Phone Contact</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} MumbaiCaterers. Local Catering Discovery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
