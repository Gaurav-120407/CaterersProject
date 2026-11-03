import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Phone, 
  Star, 
  MapPin, 
  CheckCircle, 
  ShieldCheck, 
  Users, 
  AlertCircle, 
  Sparkles, 
  Utensils, 
  Check, 
  Copy,
  Info,
  ExternalLink
} from 'lucide-react';

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=900&q=80";

export default function CatererProfile({ caterer, onBack }) {
  const [selectedTier, setSelectedTier] = useState('normal');
  const [copied, setCopied] = useState(false);
  const [bannerImg, setBannerImg] = useState(caterer.imageUrl);

  const cleanPhone = caterer.phone.replace(/[^0-9+]/g, '');

  const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(`${caterer.name} ${caterer.area} ${caterer.city} reviews ratings`)}`;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${caterer.name} ${caterer.fullAddress}`)}`;

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(caterer.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getFoodTypeClass = (type) => {
    if (type === 'Pure Veg') return 'pure-veg';
    if (type === 'Non-Veg') return 'non-veg';
    return 'mixed';
  };

  const activePackage = caterer.packages[selectedTier] || caterer.packages.normal;

  return (
    <div className="profile-page">
      <div className="container">
        {/* Back navigation */}
        <button type="button" className="back-btn" onClick={onBack}>
          <ArrowLeft size={16} />
          <span>Back to All Caterers</span>
        </button>

        {/* Hero Card */}
        <div className="profile-hero-card">
          <div className="profile-banner-wrap">
            <img 
              src={bannerImg} 
              alt={caterer.name} 
              className="profile-banner-img" 
              onError={() => setBannerImg(FALLBACK_IMAGE)}
            />
            {caterer.isVerified && (
              <div className="verified-pill" style={{ top: 18, left: 18, padding: '0.4rem 0.85rem', fontSize: '0.85rem' }}>
                <ShieldCheck size={16} />
                <span>Verified Caterer</span>
              </div>
            )}
            <div className="city-pill" style={{ top: 18, right: 18, padding: '0.4rem 0.85rem', fontSize: '0.85rem' }}>
              {caterer.city}
            </div>
          </div>

          <div className="profile-header-content">
            <div className="profile-title-row">
              <div>
                <h1 className="profile-name">{caterer.name}</h1>
                <div className="caterer-location" style={{ fontSize: '0.98rem', marginBottom: '0.65rem' }}>
                  <MapPin size={18} color="var(--primary)" />
                  <span>{caterer.fullAddress}</span>
                </div>

                <div className="profile-badges">
                  <div className="rating-badge" style={{ padding: '0.35rem 0.75rem', fontSize: '0.95rem' }}>
                    <Star size={16} fill="#ffffff" color="#ffffff" />
                    <span>{caterer.rating.toFixed(1)}</span>
                  </div>
                  <span className="review-count" style={{ fontSize: '0.92rem' }}>
                    Based on {caterer.reviewCount} customer reviews
                  </span>
                  <span className={`tag-food ${getFoodTypeClass(caterer.foodType)}`} style={{ fontSize: '0.85rem', padding: '0.3rem 0.7rem' }}>
                    ● {caterer.foodType}
                  </span>
                </div>
              </div>

              {/* Prominent Call & Contact Action Box */}
              <div className="profile-cta-box">
                <a 
                  href={`tel:${cleanPhone}`} 
                  className="btn-profile-call"
                  title="Direct Call to Caterer"
                >
                  <Phone size={22} />
                  <span>Call Caterer Now</span>
                </a>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                  <span style={{ fontWeight: 800, fontSize: '1.1rem', color: '#0f172a' }}>
                    {caterer.phone}
                  </span>
                  <button 
                    type="button" 
                    onClick={handleCopyPhone} 
                    style={{ background: 'none', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', padding: '0.2rem' }}
                    title="Copy phone number"
                  >
                    {copied ? <Check size={16} color="#16a34a" /> : <Copy size={16} />}
                  </button>
                </div>
                <div className="phone-display-sub">
                  Direct connection • No booking commission
                </div>
              </div>
            </div>

            {/* Key stats row */}
            <div className="profile-stats-grid">
              <div className="stat-item">
                <span className="stat-label">Food Type</span>
                <span className="stat-value">{caterer.foodType}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Serving Staff (Waiters)</span>
                <span className="stat-value">
                  {caterer.waiterAvailable ? `Available (₹${caterer.perWaiterCost} / waiter)` : "Not Available"}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Indicative Starting Rate</span>
                <span className="stat-value" style={{ color: 'var(--primary)' }}>
                  From ₹{caterer.startingPrice} / plate
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Verification Credibility</span>
                <span className="stat-value" style={{ color: '#0284c7', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <ShieldCheck size={18} /> Verified Partner
                </span>
              </div>
            </div>

            {caterer.description && (
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginTop: '0.5rem' }}>
                {caterer.description}
              </p>
            )}

            {caterer.specialities && caterer.specialities.length > 0 && (
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                  Cuisine Specialities:
                </span>
                {caterer.specialities.map((item, idx) => (
                  <span key={idx} style={{ background: '#f1f5f9', padding: '0.2rem 0.65rem', borderRadius: '4px', fontSize: '0.82rem', fontWeight: 600 }}>
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Notices */}
        <div className="unlimited-notice">
          <Sparkles size={20} color="#15803d" />
          <span>All listed menu items are unlimited.</span>
        </div>

        <div className="custom-menu-notice-red">
          <AlertCircle size={20} color="#b91c1c" />
          <span>Any specific customer menu is also accepted. Cost may vary.</span>
        </div>

        {/* Menu Packages Section */}
        <section className="packages-section">
          <h2 className="packages-heading">Catering Packages & Representative Menus</h2>
          <p className="packages-subtitle">
            Select a package below to view its full representative menu and indicative price per plate.
          </p>

          {/* Package Selector Tabs */}
          <div className="packages-tabs">
            <button
              type="button"
              className={`package-tab-btn ${selectedTier === 'normal' ? 'active' : ''}`}
              onClick={() => setSelectedTier('normal')}
            >
              {selectedTier === 'normal' && <CheckCircle size={18} className="active-check-icon" />}
              <span className="pkg-tier">Tier 1</span>
              <div className="pkg-name">Normal Package</div>
              <div className="pkg-price">{caterer.packages.normal.indicativePrice}</div>
            </button>

            <button
              type="button"
              className={`package-tab-btn ${selectedTier === 'premium' ? 'active' : ''}`}
              onClick={() => setSelectedTier('premium')}
            >
              {selectedTier === 'premium' && <CheckCircle size={18} className="active-check-icon" />}
              <span className="pkg-tier">Tier 2</span>
              <div className="pkg-name">Premium Package</div>
              <div className="pkg-price">{caterer.packages.premium.indicativePrice}</div>
            </button>

            <button
              type="button"
              className={`package-tab-btn ${selectedTier === 'lavish' ? 'active' : ''}`}
              onClick={() => setSelectedTier('lavish')}
            >
              {selectedTier === 'lavish' && <CheckCircle size={18} className="active-check-icon" />}
              <span className="pkg-tier">Tier 3</span>
              <div className="pkg-name">Lavish Package</div>
              <div className="pkg-price">{caterer.packages.lavish.indicativePrice}</div>
            </button>
          </div>

          {/* Active Package Menu Box */}
          <div className="package-menu-card">
            <div className="menu-card-header">
              <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a' }}>
                  {activePackage.name}
                </h3>
                <p className="menu-desc">{activePackage.description}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, display: 'block' }}>
                  Approximate Rate
                </span>
                <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)' }}>
                  {activePackage.indicativePrice}
                </span>
              </div>
            </div>

            <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              <Utensils size={15} color="var(--primary)" />
              <span style={{ fontWeight: 700 }}>Representative Menu Items ({activePackage.items.length} items):</span>
            </div>

            <div className="menu-items-grid">
              {activePackage.items.map((item, idx) => (
                <div key={idx} className="menu-item-row">
                  <div className="menu-item-dot" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                <Info size={16} />
                <span>Customization available. Lower per-plate rates can apply for larger guest counts (200+ guests).</span>
              </div>
              <a 
                href={`tel:${cleanPhone}`} 
                style={{
                  background: 'var(--primary)',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                <Phone size={14} />
                <span>Inquire About This Menu</span>
              </a>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="reviews-section">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.25rem', flexWrap: 'wrap' }}>
                <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a' }}>
                  Customer Credibility & Reviews
                </h2>
                <span style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.3rem', 
                  fontSize: '0.75rem', 
                  background: '#f0fdf4', 
                  color: '#15803d', 
                  border: '1px solid #bbf7d0', 
                  padding: '0.15rem 0.55rem', 
                  borderRadius: '4px', 
                  fontWeight: 700 
                }}>
                  <ShieldCheck size={13} /> Verified Event Testimonials
                </span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Curated client feedback & public Google business credibility for events in Mumbai / Navi Mumbai / Thane.
              </p>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div className="rating-badge" style={{ fontSize: '1rem', padding: '0.4rem 0.75rem' }}>
                  <Star size={16} fill="#ffffff" color="#ffffff" />
                  <span>{caterer.rating.toFixed(1)}</span>
                </div>
                <span style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.95rem' }}>
                  {caterer.reviewCount} Verified Reviews
                </span>
              </div>

              <a 
                href={googleSearchUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-google-reviews"
                title="View Google Reviews & ratings"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <span>Google Reviews</span>
                <ExternalLink size={13} color="#64748b" />
              </a>
            </div>
          </div>

          <div className="reviews-grid">
            {caterer.reviews.map((rev) => (
              <div key={rev.id} className="review-item-card">
                <div className="review-author-row">
                  <span className="review-author">{rev.author}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={13} 
                        fill={i < Math.floor(rev.rating) ? "#eab308" : "#e2e8f0"} 
                        color={i < Math.floor(rev.rating) ? "#eab308" : "#e2e8f0"} 
                      />
                    ))}
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="review-event">{rev.eventType}</span>
                  <span className="review-date">{rev.date}</span>
                </div>
                <p className="review-text">"{rev.comment}"</p>
              </div>
            ))}
          </div>

          {/* Authentic Google Trust & Maps Card */}
          <div className="google-trust-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div className="google-icon-box">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '0.92rem', color: '#0f172a' }}>
                  Authentic & Spam-Free Credibility
                </div>
                <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                  View real customer photos, live ratings, and location on Google Maps for <strong>{caterer.name}</strong>.
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-google-pill"
              >
                <MapPin size={14} />
                <span>Open on Google Maps</span>
              </a>
              <a
                href={googleSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-google-reviews"
                style={{ padding: '0.45rem 0.85rem', fontSize: '0.84rem' }}
              >
                <span>Read Google Reviews</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Sticky Mobile Contact Bar */}
      <div className="mobile-sticky-bar">
        <div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Caterer Direct Phone</div>
          <div style={{ fontWeight: 800, fontSize: '1rem', color: '#0f172a' }}>{caterer.phone}</div>
        </div>
        <a 
          href={`tel:${cleanPhone}`} 
          className="btn-call" 
          style={{ padding: '0.75rem 1.25rem', fontSize: '0.95rem' }}
        >
          <Phone size={16} />
          <span>Call Caterer</span>
        </a>
      </div>
    </div>
  );
}
