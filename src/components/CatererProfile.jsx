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
  Pencil,
  X
} from 'lucide-react';

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=900&q=80";

export default function CatererProfile({ caterer, onBack }) {
  const [selectedTier, setSelectedTier] = useState('normal');
  const [copied, setCopied] = useState(false);
  const [bannerImg, setBannerImg] = useState(caterer.imageUrl);

  // User-submitted reviews stored in localStorage
  const [userReviews, setUserReviews] = useState(() => {
    try {
      const saved = localStorage.getItem(`caterer_reviews_${caterer.id}`);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [showReviewModal, setShowReviewModal] = useState(false);
  const [formAuthor, setFormAuthor] = useState('');
  const [formRating, setFormRating] = useState(5);
  const [formHoverRating, setFormHoverRating] = useState(0);
  const [formEventType, setFormEventType] = useState('Wedding / Reception');
  const [formComment, setFormComment] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const cleanPhone = caterer.phone.replace(/[^0-9+]/g, '');

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

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!formAuthor.trim() || !formComment.trim()) return;

    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });

    const newRev = {
      id: `user-rev-${Date.now()}`,
      author: formAuthor.trim(),
      rating: Number(formRating),
      eventType: formEventType.trim() || 'General Catering',
      date: formattedDate,
      comment: formComment.trim(),
      isUserSubmitted: true
    };

    const updated = [newRev, ...userReviews];
    setUserReviews(updated);
    try {
      localStorage.setItem(`caterer_reviews_${caterer.id}`, JSON.stringify(updated));
    } catch (err) {
      console.error('Error saving review to localStorage', err);
    }

    setSubmitSuccess(true);
    setTimeout(() => {
      setSubmitSuccess(false);
      setShowReviewModal(false);
      setFormAuthor('');
      setFormComment('');
      setFormRating(5);
    }, 1200);
  };

  const allReviews = [...userReviews, ...caterer.reviews];
  const totalReviewsCount = caterer.reviewCount + userReviews.length;

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
              <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a' }}>
                Customer Credibility & Reviews
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Direct feedback from customers who booked catering for events in Mumbai / Navi Mumbai / Thane.
              </p>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div className="rating-badge" style={{ fontSize: '1rem', padding: '0.4rem 0.75rem' }}>
                  <Star size={16} fill="#ffffff" color="#ffffff" />
                  <span>{caterer.rating.toFixed(1)}</span>
                </div>
                <span style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.95rem' }}>
                  {totalReviewsCount} Total Reviews
                </span>
              </div>

              <button 
                type="button" 
                className="btn-write-review"
                onClick={() => setShowReviewModal(true)}
              >
                <Pencil size={15} />
                <span>Write a Review</span>
              </button>
            </div>
          </div>

          <div className="reviews-grid">
            {allReviews.map((rev) => (
              <div key={rev.id} className="review-item-card">
                <div className="review-author-row">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span className="review-author">{rev.author}</span>
                    {rev.isUserSubmitted && (
                      <span className="review-badge-verified">
                        <CheckCircle size={11} /> Verified Customer
                      </span>
                    )}
                  </div>
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
        </section>
      </div>

      {/* Add Review Modal */}
      {showReviewModal && (
        <div className="modal-backdrop" onClick={() => setShowReviewModal(false)}>
          <div className="review-modal" onClick={(e) => e.stopPropagation()}>
            <div className="review-modal-header">
              <div>
                <div className="review-modal-title">Write a Customer Review</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  Sharing feedback for {caterer.name}
                </div>
              </div>
              <button 
                type="button" 
                className="review-modal-close"
                onClick={() => setShowReviewModal(false)}
                title="Close"
              >
                <X size={20} />
              </button>
            </div>

            {submitSuccess ? (
              <div style={{ padding: '2.5rem 1.5rem', textAlign: 'center' }}>
                <CheckCircle size={48} color="#16a34a" style={{ margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                  Review Added Successfully!
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  Thank you for your feedback. Your review is now visible on this caterer's profile.
                </p>
              </div>
            ) : (
              <form className="review-form" onSubmit={handleReviewSubmit}>
                <div className="form-group">
                  <label className="form-label">Your Rating *</label>
                  <div className="star-rating-picker" onMouseLeave={() => setFormHoverRating(0)}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        className="star-btn"
                        onClick={() => setFormRating(star)}
                        onMouseEnter={() => setFormHoverRating(star)}
                        title={`${star} Star`}
                      >
                        <Star
                          size={28}
                          fill={(formHoverRating || formRating) >= star ? "#eab308" : "none"}
                          color={(formHoverRating || formRating) >= star ? "#eab308" : "#cbd5e1"}
                          strokeWidth={1.8}
                        />
                      </button>
                    ))}
                    <span style={{ marginLeft: '0.5rem', fontWeight: 700, fontSize: '0.9rem', color: '#0f172a' }}>
                      {formHoverRating || formRating} / 5 Stars
                    </span>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="review-author">Your Name *</label>
                  <input
                    id="review-author"
                    type="text"
                    className="form-input"
                    placeholder="e.g. Sunil Kulkarni / Sneha Patel"
                    value={formAuthor}
                    onChange={(e) => setFormAuthor(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="review-event">Function / Event Type</label>
                  <select
                    id="review-event"
                    className="form-select"
                    value={formEventType}
                    onChange={(e) => setFormEventType(e.target.value)}
                  >
                    <option value="Wedding / Reception">Wedding / Reception</option>
                    <option value="Birthday Party">Birthday Party</option>
                    <option value="Housewarming (Griha Pravesh)">Housewarming (Griha Pravesh)</option>
                    <option value="Family Function / Pooja">Family Function / Pooja</option>
                    <option value="Corporate Event / Lunch">Corporate Event / Lunch</option>
                    <option value="Anniversary Celebration">Anniversary Celebration</option>
                    <option value="General Gathering">General Gathering</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="review-comment">Your Feedback & Experience *</label>
                  <textarea
                    id="review-comment"
                    className="form-textarea"
                    placeholder="Tell other hosts about food taste, cleanliness, waiter service, punctuality..."
                    value={formComment}
                    onChange={(e) => setFormComment(e.target.value)}
                    required
                  />
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
                  <button
                    type="button"
                    className="btn-outline"
                    style={{ padding: '0.6rem 1.1rem', fontSize: '0.9rem' }}
                    onClick={() => setShowReviewModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn-call"
                    style={{ padding: '0.6rem 1.3rem', fontSize: '0.9rem' }}
                  >
                    <Pencil size={15} />
                    <span>Submit Review</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

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
