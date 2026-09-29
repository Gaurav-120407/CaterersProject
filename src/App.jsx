import React, { useState, useMemo, useEffect } from 'react';
import { caterers } from './data/caterers';
import Navbar from './components/Navbar';
import HeroSearch from './components/HeroSearch';
import CatererCard from './components/CatererCard';
import CatererProfile from './components/CatererProfile';
import Footer from './components/Footer';
import { SearchX, RotateCcw, Filter } from 'lucide-react';

export default function App() {
  const [selectedCity, setSelectedCity] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFoodType, setSelectedFoodType] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [waiterOnly, setWaiterOnly] = useState(false);
  const [activeCatererId, setActiveCatererId] = useState(null);

  // Scroll to top whenever caterer profile opens or closes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeCatererId]);

  // Compute counts per city for easy discovery
  const cityCounts = useMemo(() => {
    const counts = { All: caterers.length, Mumbai: 0, 'Navi Mumbai': 0, Thane: 0 };
    caterers.forEach((c) => {
      if (counts[c.city] !== undefined) {
        counts[c.city] += 1;
      }
    });
    return counts;
  }, []);

  const activeCaterer = useMemo(() => {
    if (!activeCatererId) return null;
    return caterers.find((c) => c.id === activeCatererId) || null;
  }, [activeCatererId]);

  const filteredCaterers = useMemo(() => {
    return caterers.filter((c) => {
      // 1. City Discovery filter
      if (selectedCity !== 'All' && c.city !== selectedCity) {
        return false;
      }

      // 2. Food Type filter
      if (selectedFoodType !== 'All' && c.foodType !== selectedFoodType) {
        return false;
      }

      // 3. Waiter Staff availability filter
      if (waiterOnly && !c.waiterAvailable) {
        return false;
      }

      // 4. Budget / Price Range filter
      if (priceRange === 'under-200' && c.startingPrice > 200) {
        return false;
      }
      if (priceRange === '200-250' && (c.startingPrice < 200 || c.startingPrice > 250)) {
        return false;
      }
      if (priceRange === 'above-250' && c.startingPrice <= 250) {
        return false;
      }

      // 5. Area / Locality / Name / Address / Speciality search
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchName = c.name.toLowerCase().includes(query);
        const matchArea = c.area.toLowerCase().includes(query);
        const matchCity = c.city.toLowerCase().includes(query);
        const matchAddress = c.fullAddress.toLowerCase().includes(query);
        const matchSpeciality = c.specialities.some((s) => s.toLowerCase().includes(query));

        if (!matchName && !matchArea && !matchCity && !matchAddress && !matchSpeciality) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCity, selectedFoodType, priceRange, waiterOnly, searchQuery]);

  const hasActiveFilters = selectedCity !== 'All' || selectedFoodType !== 'All' || priceRange !== 'All' || waiterOnly || searchQuery.trim() !== '';

  const handleResetFilters = () => {
    setSelectedCity('All');
    setSearchQuery('');
    setSelectedFoodType('All');
    setPriceRange('All');
    setWaiterOnly(false);
  };

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar 
        onSelectHome={() => {
          setActiveCatererId(null);
          handleResetFilters();
        }} 
      />

      <main style={{ flexGrow: 1 }}>
        {activeCaterer ? (
          <CatererProfile 
            caterer={activeCaterer} 
            onBack={() => setActiveCatererId(null)} 
          />
        ) : (
          <>
            <HeroSearch
              selectedCity={selectedCity}
              onCityChange={(city) => setSelectedCity(city)}
              searchQuery={searchQuery}
              onSearchChange={(q) => setSearchQuery(q)}
              selectedFoodType={selectedFoodType}
              onFoodTypeChange={(ft) => setSelectedFoodType(ft)}
              priceRange={priceRange}
              onPriceRangeChange={(pr) => setPriceRange(pr)}
              waiterOnly={waiterOnly}
              onWaiterToggle={() => setWaiterOnly(!waiterOnly)}
              totalResults={filteredCaterers.length}
              cityCounts={cityCounts}
            />

            <section id="caterers-list" className="listings-section">
              <div className="container">
                <div className="section-header">
                  <div>
                    <h2 className="section-title">
                      {selectedCity === 'All' 
                        ? 'Local Caterers across Mumbai, Navi Mumbai & Thane' 
                        : `Verified Caterers in ${selectedCity}`}
                    </h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.2rem' }}>
                      Showing {filteredCaterers.length} caterers {selectedCity !== 'All' ? `in ${selectedCity}` : ''} ready for your event
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
                    <span className="results-badge">
                      {filteredCaterers.length} of {caterers.length} Available
                    </span>
                    {hasActiveFilters && (
                      <button
                        type="button"
                        onClick={handleResetFilters}
                        style={{
                          background: '#f1f5f9',
                          border: '1px solid var(--border-subtle)',
                          padding: '0.3rem 0.75rem',
                          borderRadius: '9999px',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          color: 'var(--text-muted)',
                          cursor: 'pointer'
                        }}
                        title="Clear all active filters"
                      >
                        <RotateCcw size={13} />
                        <span>Reset Filters</span>
                      </button>
                    )}
                  </div>
                </div>

                {filteredCaterers.length === 0 ? (
                  <div className="empty-state">
                    <div style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      background: '#fef2f2',
                      color: '#ef4444',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1rem auto'
                    }}>
                      <SearchX size={28} />
                    </div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                      No caterers found for this search.
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '480px', margin: '0 auto 1.5rem auto' }}>
                      Try another area or remove a filter to explore more local catering partners.
                    </p>

                    {/* Active applied filter summary */}
                    <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                      {selectedCity !== 'All' && (
                        <span style={{ background: '#f1f5f9', padding: '0.2rem 0.65rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600 }}>
                          City: {selectedCity}
                        </span>
                      )}
                      {searchQuery && (
                        <span style={{ background: '#f1f5f9', padding: '0.2rem 0.65rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600 }}>
                          Search: "{searchQuery}"
                        </span>
                      )}
                      {selectedFoodType !== 'All' && (
                        <span style={{ background: '#f1f5f9', padding: '0.2rem 0.65rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600 }}>
                          Food: {selectedFoodType}
                        </span>
                      )}
                      {priceRange !== 'All' && (
                        <span style={{ background: '#f1f5f9', padding: '0.2rem 0.65rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600 }}>
                          Budget: {priceRange}
                        </span>
                      )}
                      {waiterOnly && (
                        <span style={{ background: '#f1f5f9', padding: '0.2rem 0.65rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600 }}>
                          Waiters only
                        </span>
                      )}
                    </div>

                    <button 
                      type="button" 
                      className="btn-search" 
                      onClick={handleResetFilters}
                      style={{ margin: '0 auto', display: 'inline-flex' }}
                    >
                      <RotateCcw size={15} />
                      <span>Reset All Filters</span>
                    </button>
                  </div>
                ) : (
                  <div className="caterers-grid">
                    {filteredCaterers.map((cat) => (
                      <CatererCard 
                        key={cat.id} 
                        caterer={cat} 
                        onSelect={(item) => setActiveCatererId(item.id)}
                      />
                    ))}
                  </div>
                )}
              </div>
            </section>
          </>
        )}
      </main>

      <Footer 
        onSelectCity={(city) => {
          setActiveCatererId(null);
          setSelectedCity(city);
          setSearchQuery('');
          const elem = document.getElementById('caterers-list');
          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        }} 
      />
    </div>
  );
}
