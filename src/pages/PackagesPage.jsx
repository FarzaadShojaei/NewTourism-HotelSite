import React from 'react';
import PageNavigator from '../components/PageNavigator.jsx';

const PackagesPage = () => {
  return (
    <main className="te-page te-page--packages" id="te-page-packages">
      <header className="te-hero te-hero--packages" id="te-hero-packages">
        <h1
          className="te-heading te-heading--packages"
          id="te-heading-packages"
        >
          Tailored Tour Packages
        </h1>
        <p
          className="te-subtitle te-subtitle--packages"
          id="te-subtitle-packages"
        >
          Ready-made journeys or fully customized experiences for every budget.
        </p>
        <button
          className="te-btn te-btn--primary te-btn--packages-cta"
          id="btn-packages-primary-cta"
        >
          Request a Custom Itinerary
        </button>
      </header>

      <section
        className="te-section te-section--packages-list"
        id="te-section-packages-list"
      >
        <h2 className="te-section-title" id="te-section-title-packages">
          Popular Packages
        </h2>

        <div
          className="te-card-grid te-card-grid--packages"
          id="te-card-grid-packages"
        >
          <article
            className="te-card te-card--package te-card--weekend"
            id="te-card-package-weekend"
          >
            <h3 className="te-card-title te-card-title--weekend">
              Weekend City Escape
            </h3>
            <p className="te-card-text te-card-text--weekend">
              3 days, 2 nights including city tour, hotel stay, and airport
              transfers.
            </p>
            <button
              className="te-btn te-btn--outline te-btn--package-weekend"
              id="btn-package-weekend-details"
            >
              View Weekend Package
            </button>
          </article>

          <article
            className="te-card te-card--package te-card--honeymoon"
            id="te-card-package-honeymoon"
          >
            <h3 className="te-card-title te-card-title--honeymoon">
              Honeymoon Retreat
            </h3>
            <p className="te-card-text te-card-text--honeymoon">
              Romantic beachfront villas, candle-lit dinners, and spa sessions.
            </p>
            <button
              className="te-btn te-btn--outline te-btn--package-honeymoon"
              id="btn-package-honeymoon-details"
            >
              View Honeymoon Package
            </button>
          </article>

          <article
            className="te-card te-card--package te-card--family"
            id="te-card-package-family"
          >
            <h3 className="te-card-title te-card-title--family">
              Family Discovery
            </h3>
            <p className="te-card-text te-card-text--family">
              Kid-friendly activities, flexible schedules, and spacious rooms.
            </p>
            <button
              className="te-btn te-btn--outline te-btn--package-family"
              id="btn-package-family-details"
            >
              View Family Package
            </button>
          </article>
        </div>
      </section>

      <section
        className="te-section te-section--packages-duration"
        id="te-section-packages-duration"
      >
        <h2
          className="te-section-title"
          id="te-section-title-packages-duration"
        >
          Trip Duration Options
        </h2>
        <div
          className="te-card-grid te-card-grid--packages-duration"
          id="te-card-grid-packages-duration"
        >
          <article
            className="te-card te-card--duration te-card--short-break"
            id="te-card-package-short-break"
          >
            <h3 className="te-card-title te-card-title--short-break">
              3–5 Day Breaks
            </h3>
            <p className="te-card-text te-card-text--short-break">
              Ideal for long weekends and city escapes with minimal travel time.
            </p>
            <button
              className="te-btn te-btn--ghost te-btn--package-short-break-view"
              id="btn-package-short-break-view"
            >
              View Short Trips
            </button>
          </article>

          <article
            className="te-card te-card--duration te-card--classic-week"
            id="te-card-package-classic-week"
          >
            <h3 className="te-card-title te-card-title--classic-week">
              7–10 Day Journeys
            </h3>
            <p className="te-card-text te-card-text--classic-week">
              Balanced itineraries with time to explore and relax.
            </p>
            <button
              className="te-btn te-btn--ghost te-btn--package-classic-week-view"
              id="btn-package-classic-week-view"
            >
              View Week-Long Trips
            </button>
          </article>

          <article
            className="te-card te-card--duration te-card--extended"
            id="te-card-package-extended"
          >
            <h3 className="te-card-title te-card-title--extended">
              14+ Day Expeditions
            </h3>
            <p className="te-card-text te-card-text--extended">
              Multi-country adventures and slow travel experiences.
            </p>
            <button
              className="te-btn te-btn--ghost te-btn--package-extended-view"
              id="btn-package-extended-view"
            >
              View Extended Trips
            </button>
          </article>
        </div>
      </section>

      <section
        className="te-section te-section--packages-addons"
        id="te-section-packages-addons"
      >
        <h2
          className="te-section-title"
          id="te-section-title-packages-addons"
        >
          Add-Ons &amp; Upgrades
        </h2>
        <div
          className="te-card-grid te-card-grid--packages-addons"
          id="te-card-grid-packages-addons"
        >
          <article
            className="te-card te-card--addon te-card--transfers"
            id="te-card-package-transfers"
          >
            <h3 className="te-card-title te-card-title--transfers">
              Private Transfers
            </h3>
            <p className="te-card-text te-card-text--transfers">
              Door-to-door airport and station transfers for a smooth journey.
            </p>
            <button
              className="te-btn te-btn--outline te-btn--package-transfers-add"
              id="btn-package-transfers-add"
            >
              Add Transfers
            </button>
          </article>

          <article
            className="te-card te-card--addon te-card--guided"
            id="te-card-package-guided"
          >
            <h3 className="te-card-title te-card-title--guided">
              Guided Tours
            </h3>
            <p className="te-card-text te-card-text--guided">
              Local guides to help you discover hidden stories and sights.
            </p>
            <button
              className="te-btn te-btn--outline te-btn--package-guided-add"
              id="btn-package-guided-add"
            >
              Add Guided Tours
            </button>
          </article>

          <article
            className="te-card te-card--addon te-card--insurance"
            id="te-card-package-insurance"
          >
            <h3 className="te-card-title te-card-title--insurance">
              Travel Insurance
            </h3>
            <p className="te-card-text te-card-text--insurance">
              Comprehensive coverage for peace of mind on every journey.
            </p>
            <button
              className="te-btn te-btn--outline te-btn--package-insurance-add"
              id="btn-package-insurance-add"
            >
              Add Insurance
            </button>
          </article>
        </div>
      </section>

      <footer
        className="te-footer te-footer--packages"
        id="te-footer-packages"
      >
        <PageNavigator current="packages" />
      </footer>
    </main>
  );
};

export default PackagesPage;


