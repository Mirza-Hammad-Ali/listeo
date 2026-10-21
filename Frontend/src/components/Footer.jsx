import React from "react";
import "./Footer.css";

const Footer = () => {
  const helpfulLinks = [
    { label: "Reviews", href: "/reviews" },
    { label: "Bookmarks", href: "/bookmarks" },
    { label: "Bookings", href: "/bookings" },
    { label: "Contact", href: "/contact" },
  ];

  const accountLinks = [
    { label: "My Profile", href: "/profile" },
    { label: "My Listings", href: "/my-listings" },
    { label: "Bookmarks", href: "/bookmarks" },
    { label: "Add Listing", href: "/add-listing" },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-main">
          {/* Brand section */}
          <div className="footer-brand">
            <a href="/" className="footer-logo">
              <svg
                className="footer-logo-icon"
                viewBox="0 0 32 36"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M16 2.5C8.8 2.5 3 8.1 3 15.1c0 5.1 4.1 10.1 8.2 15.1L16 35l4.8-4.8C24.9 25.2 29 20.2 29 15.1 29 8.1 23.2 2.5 16 2.5Z"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 7.5c-4.4 0-7.7 3.3-7.7 7.5 0 3.2 2.6 6.5 5.1 9.5L16 28l2.6-3.5c2.5-3 5.1-6.3 5.1-9.5 0-4.2-3.3-7.5-7.7-7.5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
              <span>listeo</span>
            </a>

            <p className="footer-description">
              Listeo is <strong>all-in-one WordPress directory theme</strong>{" "}
              with front-end user dashboard,{" "}
              <strong>built-in booking system, multi-vendor marketplace</strong>
              , private messaging and many more gorgeous features!
            </p>
          </div>

          {/* Helpful links */}
          <div className="footer-links-section">
            <h3 className="footer-heading">Helpful Links</h3>

            <div className="footer-links-columns">
              <ul className="footer-links">
                {helpfulLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>
                      <span className="footer-chevron">›</span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <ul className="footer-links">
                {accountLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>
                      <span className="footer-chevron">›</span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact section */}
          <div className="footer-contact">
            <h3 className="footer-heading">Contact Us</h3>

            <address className="footer-contact-details">
              <p>12345 Little Lonsdale St, Melbourne</p>
              <p>
                Phone: <a href="tel:123123456"> (123) 123-456</a>
              </p>
              <p>
                E-Mail:{" "}
                <a className="footer-email" href="mailto:office@example.com">
                  office@example.com
                </a>
              </p>
            </address>

            <div className="footer-payment-methods">
              <span className="payment-icon visa" aria-label="Visa">
                VISA
              </span>

              <span className="payment-icon mastercard" aria-label="Mastercard">
                <span />
                <span />
              </span>

              <span className="payment-icon skrill" aria-label="Skrill">
                skrill
              </span>

              <span className="payment-icon paypal" aria-label="PayPal">
                P
              </span>
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © Theme by Purethemes.net. All Rights Reserved.
          </p>

          <div className="footer-socials">
            <a href="https://x.com/" aria-label="X">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l7.3-8.5L1.8 2h6.5l4.5 6.7L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z" />
              </svg>
            </a>

            <a href="https://www.linkedin.com/" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.4 2H3.6C2.7 2 2 2.7 2 3.6v16.8c0 .9.7 1.6 1.6 1.6h16.8c.9 0 1.6-.7 1.6-1.6V3.6c0-.9-.7-1.6-1.6-1.6ZM8 18H5V9h3v9ZM6.5 7.8a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6ZM19 18h-3v-4.4c0-1.1 0-2.5-1.5-2.5S12.8 12.3 12.8 13.5V18h-3V9h2.9v1.2h.1a3.2 3.2 0 0 1 2.8-1.5c3 0 3.5 2 3.5 4.5V18Z" />
              </svg>
            </a>

            <a href="https://www.messenger.com/" aria-label="Messenger">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.3 2 2 6.2 2 11.7c0 3 1.3 5.6 3.5 7.4.2.2.3.5.3.8l-.2 2.1c0 .4.4.7.8.5l2.4-1.1c.2-.1.5-.1.7 0  .8.2 1.7.3 2.5.3 5.7 0 10-4.2 10-9.8C22 6.2 17.7 2 12 2Zm1 13.1-2.5-2.7a.9.9 0 0 0-1.1-.1l-3.1 2.1 3.4-3.6a.9.9 0 0 1 1.3 0l2.5 2.7a.9.9 0 0 0 1.1.1l3.1-2.1-3.4 3.6a.9.9 0 0 1-1.3 0Z" />
              </svg>
            </a>

            <a href="https://www.instagram.com/" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <circle cx="17.5" cy="6.8" r="1.2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
