import React, { useState } from 'react';
import { Star, MapPin, Phone, Users, ShieldCheck, ChevronRight, Utensils } from 'lucide-react';

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=900&q=80";

export default function CatererCard({ caterer, onSelect }) {
  const [imgSrc, setImgSrc] = useState(caterer.imageUrl);

  const getFoodTypeClass = (type) => {
    if (type === 'Pure Veg') return 'pure-veg';
    if (type === 'Non-Veg') return 'non-veg';
    return 'mixed';
  };

  const cleanPhone = caterer.phone.replace(/[^0-9+]/g, '');

  return (
    <article className="caterer-card">
      <div 
        className="card-image-wrap" 
        onClick={() => onSelect(caterer)} 
        style={{ cursor: 'pointer' }}
        title={`View ${caterer.name} profile and menu`}
      >
        <img 
          src={imgSrc} 
          alt={caterer.name} 
          className="card-image"
          loading="lazy"
          onError={() => setImgSrc(FALLBACK_IMAGE)}
        />
        {caterer.isVerified && (
          <div className="verified-pill">
            <ShieldCheck size={14} />
            <span>Verified Caterer</span>
          </div>
        )}
        <div className="city-pill">
          {caterer.city}
        </div>
      </div>

      <div className="card-content">
        <div className="card-rating-row">
          <div className="rating-badge">
            <Star size={13} fill="#ffffff" color="#ffffff" />
            <span>{caterer.rating.toFixed(1)}</span>
          </div>
          <span className="review-count">
            {caterer.reviewCount} customer reviews
          </span>
        </div>

        <h3 
          className="caterer-name" 
          onClick={() => onSelect(caterer)} 
          style={{ cursor: 'pointer' }}
          title={caterer.name}
        >
          {caterer.name}
        </h3>

        <div className="caterer-location">
          <MapPin size={15} color="var(--primary)" />
          <span>{caterer.area}, {caterer.city}</span>
        </div>

        {/* Speciality Highlight Preview */}
        {caterer.specialities && caterer.specialities.length > 0 && (
          <div className="card-speciality-line" title={caterer.specialities.join(', ')}>
            <Utensils size={13} color="var(--primary)" />
            <span>{caterer.specialities.slice(0, 2).join(' • ')}</span>
          </div>
        )}

        <div className="card-tags">
          <span className={`tag-food ${getFoodTypeClass(caterer.foodType)}`}>
            ● {caterer.foodType}
          </span>
          <span className="tag-waiter">
            <Users size={13} />
            {caterer.waiterAvailable ? (
              <span>Waiters: ₹{caterer.perWaiterCost}/staff</span>
            ) : (
              <span>No Serving Staff</span>
            )}
          </span>
        </div>

        <div className="price-row">
          <span className="price-label">Starting Price</span>
          <span className="price-val">₹{caterer.startingPrice} <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>/ plate</span></span>
        </div>

        <div className="card-actions">
          <button 
            type="button" 
            className="btn-view-profile"
            onClick={() => onSelect(caterer)}
          >
            <span>View Profile</span>
            <ChevronRight size={15} />
          </button>

          <a 
            href={`tel:${cleanPhone}`} 
            className="btn-call"
            title={`Call ${caterer.name} directly at ${caterer.phone}`}
          >
            <Phone size={15} />
            <span>Call Caterer</span>
          </a>
        </div>
      </div>
    </article>
  );
}
