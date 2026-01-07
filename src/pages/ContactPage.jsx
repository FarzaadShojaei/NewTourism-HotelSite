import React from 'react';
import PageNavigator from '../components/PageNavigator.jsx';

const ContactPage = () => {
  return (
    <main className="te-page te-page--contact" id="te-page-contact">
      <header className="te-hero te-hero--contact" id="te-hero-contact">
        <h1
          className="te-heading te-heading--contact"
          id="te-heading-contact"
        >
          Contact &amp; Travel Support
        </h1>
        <p
          className="te-subtitle te-subtitle--contact"
          id="te-subtitle-contact"
        >
          Our travel specialists are here to help you finalize every detail.
        </p>
      </header>

      <section
        className="te-section te-section--contact-form"
        id="te-section-contact-form"
      >
        <h2 className="te-section-title" id="te-section-title-contact">
          Send an Enquiry
        </h2>

        <form
          className="te-form te-form--enquiry"
          id="te-form-enquiry"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="te-form-row te-form-row--name" id="te-form-row-name">
            <label
              className="te-label te-label--name"
              id="te-label-name"
              htmlFor="input-name"
            >
              Full Name
            </label>
            <input
              className="te-input te-input--name"
              id="input-name"
              type="text"
              placeholder="Enter your full name"
            />
          </div>

          <div
            className="te-form-row te-form-row--email"
            id="te-form-row-email"
          >
            <label
              className="te-label te-label--email"
              id="te-label-email"
              htmlFor="input-email"
            >
              Email Address
            </label>
            <input
              className="te-input te-input--email"
              id="input-email"
              type="email"
              placeholder="you@example.com"
            />
          </div>

          <div
            className="te-form-row te-form-row--message"
            id="te-form-row-message"
          >
            <label
              className="te-label te-label--message"
              id="te-label-message"
              htmlFor="input-message"
            >
              Trip Details
            </label>
            <textarea
              className="te-input te-input--message"
              id="input-message"
              rows="4"
              placeholder="Tell us where and when you would like to travel..."
            />
          </div>

          <button
            className="te-btn te-btn--primary te-btn--submit-enquiry"
            id="btn-submit-enquiry"
            type="submit"
          >
            Submit Enquiry
          </button>
        </form>
      </section>

      <section
        className="te-section te-section--contact-info"
        id="te-section-contact-info"
      >
        <h2 className="te-section-title" id="te-section-title-contact-info">
          Direct Contact
        </h2>
        <p className="te-contact-line te-contact-line--phone" id="te-phone">
          Phone: +1 (555) 123-4567
        </p>
        <p className="te-contact-line te-contact-line--email" id="te-email">
          Email: hello@worldexplorer.travel
        </p>
      </section>

      <section
        className="te-section te-section--contact-faq"
        id="te-section-contact-faq"
      >
        <h2 className="te-section-title" id="te-section-title-contact-faq">
          Frequently Asked Questions
        </h2>
        <div
          className="te-card-grid te-card-grid--contact-faq"
          id="te-card-grid-contact-faq"
        >
          <article
            className="te-card te-card--faq te-card--payments"
            id="te-card-contact-faq-payments"
          >
            <h3 className="te-card-title te-card-title--payments">
              Payments &amp; Refunds
            </h3>
            <p className="te-card-text te-card-text--payments">
              Learn how deposits, final balances, and refunds are handled.
            </p>
            <button
              className="te-btn te-btn--ghost te-btn--contact-faq-payments-read"
              id="btn-contact-faq-payments-read"
            >
              Read Payment Policies
            </button>
          </article>

          <article
            className="te-card te-card--faq te-card--changes"
            id="te-card-contact-faq-changes"
          >
            <h3 className="te-card-title te-card-title--changes">
              Trip Changes
            </h3>
            <p className="te-card-text te-card-text--changes">
              Understand how to reschedule or modify existing reservations.
            </p>
            <button
              className="te-btn te-btn--ghost te-btn--contact-faq-changes-read"
              id="btn-contact-faq-changes-read"
            >
              View Change Rules
            </button>
          </article>

          <article
            className="te-card te-card--faq te-card--support-levels"
            id="te-card-contact-faq-support-levels"
          >
            <h3 className="te-card-title te-card-title--support-levels">
              Support Levels
            </h3>
            <p className="te-card-text te-card-text--support-levels">
              See what is included in standard and premium support tiers.
            </p>
            <button
              className="te-btn te-btn--ghost te-btn--contact-faq-support-read"
              id="btn-contact-faq-support-read"
            >
              Compare Support Tiers
            </button>
          </article>
        </div>
      </section>

      <section
        className="te-section te-section--contact-offices"
        id="te-section-contact-offices"
      >
        <h2 className="te-section-title" id="te-section-title-contact-offices">
          Global Offices
        </h2>
        <div
          className="te-card-grid te-card-grid--contact-offices"
          id="te-card-grid-contact-offices"
        >
          <article
            className="te-card te-card--office te-card--office-nyc"
            id="te-card-contact-office-nyc"
          >
            <h3 className="te-card-title te-card-title--office-nyc">
              New York
            </h3>
            <p className="te-card-text te-card-text--office-nyc">
              10 Hudson Yards, New York, NY
            </p>
            <button
              className="te-btn te-btn--outline te-btn--contact-office-nyc-call"
              id="btn-contact-office-nyc-call"
            >
              Call New York Office
            </button>
          </article>

          <article
            className="te-card te-card--office te-card--office-london"
            id="te-card-contact-office-london"
          >
            <h3 className="te-card-title te-card-title--office-london">
              London
            </h3>
            <p className="te-card-text te-card-text--office-london">
              221B Baker Street, London
            </p>
            <button
              className="te-btn te-btn--outline te-btn--contact-office-london-call"
              id="btn-contact-office-london-call"
            >
              Call London Office
            </button>
          </article>

          <article
            className="te-card te-card--office te-card--office-sydney"
            id="te-card-contact-office-sydney"
          >
            <h3 className="te-card-title te-card-title--office-sydney">
              Sydney
            </h3>
            <p className="te-card-text te-card-text--office-sydney">
              5 Harbour View Rd, Sydney
            </p>
            <button
              className="te-btn te-btn--outline te-btn--contact-office-sydney-call"
              id="btn-contact-office-sydney-call"
            >
              Call Sydney Office
            </button>
          </article>
        </div>
      </section>

      <footer className="te-footer te-footer--contact" id="te-footer-contact">
        <PageNavigator current="contact" />
      </footer>
    </main>
  );
};

export default ContactPage;


