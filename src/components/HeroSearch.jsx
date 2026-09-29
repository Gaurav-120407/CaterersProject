import React from 'react';
import { Search, MapPin, Filter, Sparkles, CheckCircle2, X } from 'lucide-react';
import { CITIES, FOOD_TYPES } from '../data/caterers';

export default function HeroSearch({
  selectedCity,
  onCityChange,
  searchQuery,
  onSearchChange,
  selectedFoodType,
  onFoodTypeChange,
  priceRange,
  onPriceRangeChange,
  waiterOnly,
  onWaiterToggle,
  totalResults,
  cityCounts
}) {
  const getSearchPlaceholder = () => {
    if (selectedCity === 'Mumbai') {
      return 'Search Mumbai areas (e.g. Dadar, Bandra, Colaba, Andheri) or caterer...';
    }
    if (selectedCity === 'Navi Mumbai') {
      return 'Search Navi Mumbai areas (e.g. Vashi, Nerul, Kharghar, Panvel) or caterer...';
    }
    if (selectedCity === 'Thane') {
      return 'Search Thane areas (e.g. Ghodbunder, Naupada, Majiwada, Kalyan) or caterer...';
    }
    return 'Search by area (e.g. Dadar, Vashi, Ghodbunder) or caterer name...';
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-tag">
            <Sparkles size={14} />
            <span>Customer-First Catering Discovery</span>
          </div>

          <h1 className="hero-title">
            Find Trusted Local Caterers <span>for Your Function</span>
          </h1>

          <p className="hero-subtitle">
            Discover verified catering partners across <strong>Mumbai</strong>, <strong>Navi Mumbai</strong>, and <strong>Thane</strong>. Compare authentic menu packages, check waiter availability, and connect directly by phone.
          </p>

          <div className="search-panel">
            {/* Quick 1-Click City Discovery Tabs */}
            <div className="city-tabs-bar" role="tablist" aria-label="City Selection">
              <button
                type="button"
                className={`city-tab-btn ${selectedCity === 'All' ? 'active' : ''}`}
                onClick={() => onCityChange('All')}
              >
                <MapPin size={15} />
                <span>All Cities</span>
                <span className="city-count-pill">{cityCounts?.All || 33}</span>
              </button>

              {CITIES.map((city) => (
                <button
                  key={city}
                  type="button"
                  className={`city-tab-btn ${selectedCity === city ? 'active' : ''}`}
                  onClick={() => onCityChange(city)}
                >
                  <span>{city}</span>
                  <span className="city-count-pill">{cityCounts?.[city] || 11}</span>
                </button>
              ))}
            </div>

            {/* Primary Search Inputs Row */}
            <div className="search-primary-row">
              {/* City Dropdown Selector (synced with tabs) */}
              <div className="input-group">
                <MapPin size={18} color="var(--primary)" />
                <select 
                  value={selectedCity} 
                  onChange={(e) => onCityChange(e.target.value)}
                  aria-label="Filter by City"
                >
                  <option value="All">All Cities (Mumbai / Navi Mumbai / Thane)</option>
                  {CITIES.map((c) => (
                    <option key={c} value={c}>
                      {c} ({cityCounts?.[c] || 11})
                    </option>
                  ))}
                </select>
              </div>

              {/* Location or Keyword Search Input */}
              <div className="input-group" style={{ position: 'relative' }}>
                <Search size={18} color="var(--text-muted)" />
                <input
                  type="text"
                  placeholder={getSearchPlaceholder()}
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  aria-label="Search area, locality, or caterer name"
                />
                {searchQuery && (
                  <button
                    type="button"
                    className="clear-search-btn"
                    onClick={() => onSearchChange('')}
                    title="Clear search"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              {/* View Results Button */}
              <button 
                type="button" 
                className="btn-search"
                onClick={() => {
                  const elem = document.getElementById('caterers-list');
                  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>View {totalResults} Caterers</span>
              </button>
            </div>

            {/* Quick Filters Row */}
            <div className="filter-row">
              {/* Food Type Filter */}
              <div className="filter-group">
                <span className="filter-label">Food:</span>
                <button
                  type="button"
                  className={`filter-chip ${selectedFoodType === 'All' ? 'active' : ''}`}
                  onClick={() => onFoodTypeChange('All')}
                >
                  All
                </button>
                {FOOD_TYPES.map((ft) => (
                  <button
                    key={ft}
                    type="button"
                    className={`filter-chip ${selectedFoodType === ft ? 'active-primary' : ''}`}
                    onClick={() => onFoodTypeChange(ft)}
                  >
                    {ft}
                  </button>
                ))}
              </div>

              {/* Simple Price Filter */}
              <div className="filter-group">
                <span className="filter-label">Budget:</span>
                <button
                  type="button"
                  className={`filter-chip ${priceRange === 'All' ? 'active' : ''}`}
                  onClick={() => onPriceRangeChange('All')}
                >
                  Any
                </button>
                <button
                  type="button"
                  className={`filter-chip ${priceRange === 'under-200' ? 'active' : ''}`}
                  onClick={() => onPriceRangeChange('under-200')}
                >
                  Under ₹200
                </button>
                <button
                  type="button"
                  className={`filter-chip ${priceRange === '200-250' ? 'active' : ''}`}
                  onClick={() => onPriceRangeChange('200-250')}
                >
                  ₹200 – ₹250
                </button>
                <button
                  type="button"
                  className={`filter-chip ${priceRange === 'above-250' ? 'active' : ''}`}
                  onClick={() => onPriceRangeChange('above-250')}
                >
                  ₹250+
                </button>
              </div>

              {/* Staff Availability Filter */}
              <div className="filter-group">
                <button
                  type="button"
                  className={`filter-chip ${waiterOnly ? 'active' : ''}`}
                  onClick={onWaiterToggle}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  {waiterOnly && <CheckCircle2 size={14} color="#22c55e" />}
                  <span>Serving Staff Available</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
