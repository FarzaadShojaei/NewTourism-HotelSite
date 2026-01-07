import React from 'react';
import PageNavigator from '../components/PageNavigator.jsx';

const HomePage = () => {
  return (
    <main className="te-page te-page--home" id="te-page-home">
      <header className="te-hero te-hero--home" id="te-hero-home">
        <h1 className="te-heading te-heading--home" id="te-heading-home">
          Discover the World with World Explorer
        </h1>
        <p className="te-subtitle te-subtitle--home" id="te-subtitle-home">
          Curated journeys, luxury stays, and unforgettable memories.
        </p>
        <button
          className="te-btn te-btn--primary te-btn--home-cta"
          id="btn-home-primary-cta"
        >
          Start Planning Your Trip
        </button>
      </header>

      <section className="te-section te-section--highlights" id="te-section-highlights">
        <h2 className="te-section-title" id="te-section-title-highlights">
          Featured Highlights
        </h2>
        <div className="te-card-grid te-card-grid--highlights" id="te-card-grid-highlights">
          <article className="te-card te-card--highlight" id="te-card-home-beach">
            <h3 className="te-card-title te-card-title--beach">
              Tropical Beach Escapes
            </h3>
            <p className="te-card-text te-card-text--beach">
              Crystal-clear waters, white sand, and all-inclusive resorts tailored to your style.
            </p>
            <button
              className="te-btn te-btn--ghost te-btn--home-beach"
              id="btn-home-beach-details"
            >
              Explore Beach Trips
            </button>
          </article>

          <article className="te-card te-card--highlight" id="te-card-home-city">
            <h3 className="te-card-title te-card-title--city">
              Iconic City Breaks
            </h3>
            <p className="te-card-text te-card-text--city">
              Immerse yourself in culture, cuisine, and nightlife in the world&apos;s top cities.
            </p>
            <button
              className="te-btn te-btn--ghost te-btn--home-city"
              id="btn-home-city-details"
            >
              View City Experiences
            </button>
          </article>
        </div>
      </section>

      <section
        className="te-section te-section--themes"
        id="te-section-home-themes"
      >
        <h2 className="te-section-title" id="te-section-title-home-themes">
          Travel by Theme
        </h2>
        <div
          className="te-card-grid te-card-grid--themes"
          id="te-card-grid-home-themes"
        >
          <article
            className="te-card te-card--theme te-card--adventure"
            id="te-card-home-adventure"
          >
            <h3 className="te-card-title te-card-title--adventure">
              Adventure Trails
            </h3>
            <p className="te-card-text te-card-text--adventure">
              Hiking, rafting, and adrenaline-filled getaways across the globe.
            </p>
            <button
              className="te-btn te-btn--outline te-btn--home-adventure-learn"
              id="btn-home-adventure-learn"
            >
              Learn About Adventure Trips
            </button>
            <button
              className="te-btn te-btn--ghost te-btn--home-adventure-save"
              id="btn-home-adventure-save"
            >
              Save to Wishlist
            </button>
          </article>

          <article
            className="te-card te-card--theme te-card--culture"
            id="te-card-home-culture"
          >
            <h3 className="te-card-title te-card-title--culture">
              Culture &amp; Heritage
            </h3>
            <p className="te-card-text te-card-text--culture">
              Explore museums, old towns, and UNESCO heritage sites.
            </p>
            <button
              className="te-btn te-btn--outline te-btn--home-culture-learn"
              id="btn-home-culture-learn"
            >
              Discover Cultural Routes
            </button>
            <button
              className="te-btn te-btn--ghost te-btn--home-culture-share"
              id="btn-home-culture-share"
            >
              Share With Friends
            </button>
          </article>

          <article
            className="te-card te-card--theme te-card--wellness"
            id="te-card-home-wellness"
          >
            <h3 className="te-card-title te-card-title--wellness">
              Wellness Retreats
            </h3>
            <p className="te-card-text te-card-text--wellness">
              Spa resorts, hot springs, and yoga escapes designed to restore you.
            </p>
            <button
              className="te-btn te-btn--outline te-btn--home-wellness-learn"
              id="btn-home-wellness-learn"
            >
              See Wellness Ideas
            </button>
            <button
              className="te-btn te-btn--ghost te-btn--home-wellness-remind"
              id="btn-home-wellness-remind"
            >
              Remind Me Later
            </button>
          </article>
        </div>
      </section>

      <section
        className="te-section te-section--why-us"
        id="te-section-home-why-us"
      >
        <h2 className="te-section-title" id="te-section-title-home-why-us">
          Why Travel With World Explorer?
        </h2>
        <div
          className="te-card-grid te-card-grid--why-us"
          id="te-card-grid-home-why-us"
        >
          <article
            className="te-card te-card--reason te-card--experts"
            id="te-card-home-experts"
          >
            <h3 className="te-card-title te-card-title--experts">
              Local Travel Experts
            </h3>
            <p className="te-card-text te-card-text--experts">
              Our on-the-ground specialists design itineraries with insider tips.
            </p>
            <button
              className="te-btn te-btn--ghost te-btn--home-experts-talk"
              id="btn-home-experts-talk"
            >
              Talk to an Expert
            </button>
          </article>

          <article
            className="te-card te-card--reason te-card--support"
            id="te-card-home-support"
          >
            <h3 className="te-card-title te-card-title--support">
              24/7 Support
            </h3>
            <p className="te-card-text te-card-text--support">
              Assistance before, during, and after your trip, wherever you are.
            </p>
            <button
              className="te-btn te-btn--ghost te-btn--home-support-chat"
              id="btn-home-support-chat"
            >
              Open Live Chat
            </button>
          </article>

          <article
            className="te-card te-card--reason te-card--value"
            id="te-card-home-value"
          >
            <h3 className="te-card-title te-card-title--value">
              Best Value Promise
            </h3>
            <p className="te-card-text te-card-text--value">
              Transparent pricing with curated benefits and upgrades.
            </p>
            <button
              className="te-btn te-btn--ghost te-btn--home-value-compare"
              id="btn-home-value-compare"
            >
              Compare Trip Options
            </button>
          </article>
        </div>
      </section>

      <footer className="te-footer te-footer--home" id="te-footer-home">
        <PageNavigator current="home" />
      </footer>
    </main>
  );
};

export default HomePage;


