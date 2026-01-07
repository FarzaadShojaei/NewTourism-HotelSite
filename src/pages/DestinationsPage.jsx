import React from 'react';
import PageNavigator from '../components/PageNavigator.jsx';

const DestinationsPage = () => {
  return (
    <main className="te-page te-page--destinations" id="te-page-destinations">
      <header
        className="te-hero te-hero--destinations"
        id="te-hero-destinations"
      >
        <h1
          className="te-heading te-heading--destinations"
          id="te-heading-destinations"
        >
          Handpicked Destinations
        </h1>
        <p
          className="te-subtitle te-subtitle--destinations"
          id="te-subtitle-destinations"
        >
          From snowy mountaintops to desert safaris, pick the escape that suits
          you.
        </p>
        <button
          className="te-btn te-btn--primary te-btn--destinations-cta"
          id="btn-destinations-primary-cta"
        >
          View Seasonal Picks
        </button>
      </header>

      <section
        className="te-section te-section--destination-list"
        id="te-section-destination-list"
      >
        <h2
          className="te-section-title"
          id="te-section-title-destination-list"
        >
          Popular Destinations
        </h2>

        <div
          className="te-card-grid te-card-grid--destinations"
          id="te-card-grid-destinations"
        >
          <article
            className="te-card te-card--destination"
            id="te-card-destination-alps"
          >
            <h3 className="te-card-title te-card-title--alps">
              Alpine Adventures
            </h3>
            <p className="te-card-text te-card-text--alps">
              Ski resorts, cozy chalets, and breathtaking mountain views.
            </p>
            <button
              className="te-btn te-btn--outline te-btn--alps"
              id="btn-destination-alps"
            >
              Details for Alps
            </button>
          </article>

          <article
            className="te-card te-card--destination"
            id="te-card-destination-safari"
          >
            <h3 className="te-card-title te-card-title--safari">
              African Safari
            </h3>
            <p className="te-card-text te-card-text--safari">
              Experience wildlife up close with guided tours and luxury camps.
            </p>
            <button
              className="te-btn te-btn--outline te-btn--safari"
              id="btn-destination-safari"
            >
              Details for Safari
            </button>
          </article>

          <article
            className="te-card te-card--destination"
            id="te-card-destination-islands"
          >
            <h3 className="te-card-title te-card-title--islands">
              Island Getaways
            </h3>
            <p className="te-card-text te-card-text--islands">
              Secluded villas and crystal lagoons for ultimate relaxation.
            </p>
            <button
              className="te-btn te-btn--outline te-btn--islands"
              id="btn-destination-islands"
            >
              Details for Islands
            </button>
          </article>
        </div>
      </section>

      <section
        className="te-section te-section--destination-styles"
        id="te-section-destination-styles"
      >
        <h2
          className="te-section-title"
          id="te-section-title-destination-styles"
        >
          Choose Your Travel Style
        </h2>
        <div
          className="te-card-grid te-card-grid--destination-styles"
          id="te-card-grid-destination-styles"
        >
          <article
            className="te-card te-card--style te-card--romantic"
            id="te-card-destination-romantic"
          >
            <h3 className="te-card-title te-card-title--romantic">
              Romantic Escapes
            </h3>
            <p className="te-card-text te-card-text--romantic">
              Sunset cruises, private dinners, and quiet scenic spots.
            </p>
            <button
              className="te-btn te-btn--ghost te-btn--destination-romantic-view"
              id="btn-destination-romantic-view"
            >
              View Romantic Spots
            </button>
            <button
              className="te-btn te-btn--outline te-btn--destination-romantic-shortlist"
              id="btn-destination-romantic-shortlist"
            >
              Add to Shortlist
            </button>
          </article>

          <article
            className="te-card te-card--style te-card--family-style"
            id="te-card-destination-family-style"
          >
            <h3 className="te-card-title te-card-title--family-style">
              Family-Friendly
            </h3>
            <p className="te-card-text te-card-text--family-style">
              Theme parks, kid-friendly museums, and wide open beaches.
            </p>
            <button
              className="te-btn te-btn--ghost te-btn--destination-family-view"
              id="btn-destination-family-view"
            >
              See Family Destinations
            </button>
            <button
              className="te-btn te-btn--outline te-btn--destination-family-plan"
              id="btn-destination-family-plan"
            >
              Plan Family Trip
            </button>
          </article>

          <article
            className="te-card te-card--style te-card--solo"
            id="te-card-destination-solo"
          >
            <h3 className="te-card-title te-card-title--solo">
              Solo Journeys
            </h3>
            <p className="te-card-text te-card-text--solo">
              Safe, vibrant cities and routes ideal for solo travelers.
            </p>
            <button
              className="te-btn te-btn--ghost te-btn--destination-solo-view"
              id="btn-destination-solo-view"
            >
              Explore Solo Ideas
            </button>
            <button
              className="te-btn te-btn--outline te-btn--destination-solo-guide"
              id="btn-destination-solo-guide"
            >
              Get Solo Travel Guide
            </button>
          </article>
        </div>
      </section>

      <section
        className="te-section te-section--destination-inspiration"
        id="te-section-destination-inspiration"
      >
        <h2
          className="te-section-title"
          id="te-section-title-destination-inspiration"
        >
          Inspiration Boards
        </h2>
        <div
          className="te-card-grid te-card-grid--destination-inspiration"
          id="te-card-grid-destination-inspiration"
        >
          <article
            className="te-card te-card--inspiration te-card--europe"
            id="te-card-destination-europe"
          >
            <h3 className="te-card-title te-card-title--europe">
              Classic Europe
            </h3>
            <p className="te-card-text te-card-text--europe">
              A curated collection of cities, villages, and coastal towns.
            </p>
            <button
              className="te-btn te-btn--ghost te-btn--destination-europe-itinerary"
              id="btn-destination-europe-itinerary"
            >
              See Sample Itinerary
            </button>
          </article>

          <article
            className="te-card te-card--inspiration te-card--asia"
            id="te-card-destination-asia"
          >
            <h3 className="te-card-title te-card-title--asia">
              Vibrant Asia
            </h3>
            <p className="te-card-text te-card-text--asia">
              Street food, ancient temples, and tropical islands in one trip.
            </p>
            <button
              className="te-btn te-btn--ghost te-btn--destination-asia-itinerary"
              id="btn-destination-asia-itinerary"
            >
              Build Asia Route
            </button>
          </article>

          <article
            className="te-card te-card--inspiration te-card--americas"
            id="te-card-destination-americas"
          >
            <h3 className="te-card-title te-card-title--americas">
              The Americas
            </h3>
            <p className="te-card-text te-card-text--americas">
              From Patagonia to Canada, pick your dream overland journey.
            </p>
            <button
              className="te-btn te-btn--ghost te-btn--destination-americas-itinerary"
              id="btn-destination-americas-itinerary"
            >
              Explore Routes
            </button>
          </article>
        </div>
      </section>

      <footer
        className="te-footer te-footer--destinations"
        id="te-footer-destinations"
      >
        <PageNavigator current="destinations" />
      </footer>
    </main>
  );
};

export default DestinationsPage;


