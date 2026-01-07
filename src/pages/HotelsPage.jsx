import React from 'react';
import PageNavigator from '../components/PageNavigator.jsx';

const HotelsPage = () => {
  return (
    <main className="te-page te-page--hotels" id="te-page-hotels">
      <header className="te-hero te-hero--hotels" id="te-hero-hotels">
        <h1 className="te-heading te-heading--hotels" id="te-heading-hotels">
          Premium Hotels &amp; Resorts
        </h1>
        <p className="te-subtitle te-subtitle--hotels" id="te-subtitle-hotels">
          Hand-selected stays with comfort, character, and world-class service.
        </p>
        <button
          className="te-btn te-btn--primary te-btn--hotels-cta"
          id="btn-hotels-primary-cta"
        >
          Browse Hotel Collections
        </button>
      </header>

      <section
        className="te-section te-section--hotel-types"
        id="te-section-hotel-types"
      >
        <h2 className="te-section-title" id="te-section-title-hotels">
          Stay Your Way
        </h2>
        <div
          className="te-card-grid te-card-grid--hotels"
          id="te-card-grid-hotels"
        >
          <article
            className="te-card te-card--hotel te-card--boutique"
            id="te-card-hotel-boutique"
          >
            <h3 className="te-card-title te-card-title--boutique">
              Boutique Hotels
            </h3>
            <p className="te-card-text te-card-text--boutique">
              Intimate designs, local charm, and personalized service.
            </p>
            <button
              className="te-btn te-btn--outline te-btn--hotel-boutique"
              id="btn-hotel-boutique-details"
            >
              View Boutique Stays
            </button>
          </article>

          <article
            className="te-card te-card--hotel te-card--luxury"
            id="te-card-hotel-luxury"
          >
            <h3 className="te-card-title te-card-title--luxury">
              Luxury Resorts
            </h3>
            <p className="te-card-text te-card-text--luxury">
              Infinity pools, spas, and private lounges in stunning locations.
            </p>
            <button
              className="te-btn te-btn--outline te-btn--hotel-luxury"
              id="btn-hotel-luxury-details"
            >
              View Luxury Resorts
            </button>
          </article>

          <article
            className="te-card te-card--hotel te-card--budget"
            id="te-card-hotel-budget"
          >
            <h3 className="te-card-title te-card-title--budget">
              Smart Budget Stays
            </h3>
            <p className="te-card-text te-card-text--budget">
              Clean, comfortable, and well-connected hotels that save you money.
            </p>
            <button
              className="te-btn te-btn--outline te-btn--hotel-budget"
              id="btn-hotel-budget-details"
            >
              View Budget Options
            </button>
          </article>
        </div>
      </section>

      <section
        className="te-section te-section--hotel-amenities"
        id="te-section-hotel-amenities"
      >
        <h2
          className="te-section-title"
          id="te-section-title-hotel-amenities"
        >
          Signature Amenities
        </h2>
        <div
          className="te-card-grid te-card-grid--hotel-amenities"
          id="te-card-grid-hotel-amenities"
        >
          <article
            className="te-card te-card--amenity te-card--spa"
            id="te-card-hotel-spa"
          >
            <h3 className="te-card-title te-card-title--spa">
              Spa &amp; Wellness
            </h3>
            <p className="te-card-text te-card-text--spa">
              Massages, saunas, and signature treatments to help you unwind.
            </p>
            <button
              className="te-btn te-btn--ghost te-btn--hotel-spa-view"
              id="btn-hotel-spa-view"
            >
              View Spa-Friendly Hotels
            </button>
          </article>

          <article
            className="te-card te-card--amenity te-card--dining"
            id="te-card-hotel-dining"
          >
            <h3 className="te-card-title te-card-title--dining">
              Fine Dining
            </h3>
            <p className="te-card-text te-card-text--dining">
              Rooftop bars, tasting menus, and local food experiences.
            </p>
            <button
              className="te-btn te-btn--ghost te-btn--hotel-dining-view"
              id="btn-hotel-dining-view"
            >
              See Hotels With Dining
            </button>
          </article>

          <article
            className="te-card te-card--amenity te-card--business"
            id="te-card-hotel-business"
          >
            <h3 className="te-card-title te-card-title--business">
              Business Ready
            </h3>
            <p className="te-card-text te-card-text--business">
              Meeting rooms, fast Wi-Fi, and city-center locations.
            </p>
            <button
              className="te-btn te-btn--ghost te-btn--hotel-business-view"
              id="btn-hotel-business-view"
            >
              Browse Business Hotels
            </button>
          </article>
        </div>
      </section>

      <section
        className="te-section te-section--hotel-programs"
        id="te-section-hotel-programs"
      >
        <h2
          className="te-section-title"
          id="te-section-title-hotel-programs"
        >
          Membership &amp; Programs
        </h2>
        <div
          className="te-card-grid te-card-grid--hotel-programs"
          id="te-card-grid-hotel-programs"
        >
          <article
            className="te-card te-card--program te-card--loyalty"
            id="te-card-hotel-loyalty"
          >
            <h3 className="te-card-title te-card-title--loyalty">
              Loyalty Points
            </h3>
            <p className="te-card-text te-card-text--loyalty">
              Earn travel credits every time you book with partnered hotels.
            </p>
            <button
              className="te-btn te-btn--outline te-btn--hotel-loyalty-join"
              id="btn-hotel-loyalty-join"
            >
              Join Loyalty Program
            </button>
          </article>

          <article
            className="te-card te-card--program te-card--early-checkin"
            id="te-card-hotel-early-checkin"
          >
            <h3 className="te-card-title te-card-title--early-checkin">
              Early Check-In
            </h3>
            <p className="te-card-text te-card-text--early-checkin">
              Flexible check-in options for long-haul arrivals.
            </p>
            <button
              className="te-btn te-btn--outline te-btn--hotel-early-checkin-request"
              id="btn-hotel-early-checkin-request"
            >
              Request Early Check-In
            </button>
          </article>

          <article
            className="te-card te-card--program te-card--late-checkout"
            id="te-card-hotel-late-checkout"
          >
            <h3 className="te-card-title te-card-title--late-checkout">
              Late Check-Out
            </h3>
            <p className="te-card-text te-card-text--late-checkout">
              Stay a little longer with extended checkout privileges.
            </p>
            <button
              className="te-btn te-btn--outline te-btn--hotel-late-checkout-request"
              id="btn-hotel-late-checkout-request"
            >
              Request Late Check-Out
            </button>
          </article>
        </div>
      </section>

      <footer className="te-footer te-footer--hotels" id="te-footer-hotels">
        <PageNavigator current="hotels" />
      </footer>
    </main>
  );
};

export default HotelsPage;


