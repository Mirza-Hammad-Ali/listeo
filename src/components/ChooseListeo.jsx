import React, { useRef } from "react";
import {
  FiArrowRight,
  FiArrowLeft,
  FiArrowUpRight,
  FiHome,
  FiTruck,
  FiMapPin,
  FiStar,
  FiCheckCircle,
  FiSearch,
  FiBriefcase,
} from "react-icons/fi";
import "./ChooseListeo.css";

const cards = [
  {
    id: 1,
    type: "intro",
    title: "Fine Dining Revolution 🚀",
    description:
      "Premium restaurant Bella Vista increased table bookings by 140% and reduced no-shows by 60% after implementing Listeo's advanced reservation system. Their seamless integration with social media booking and automated reminder system transformed their customer experience.",
    link: "Read full case study",
  },
  {
    id: 2,
    type: "started",
    title: "Get Started",
    description:
      "Join thousands of successful businesses using Listeo to transform their operations.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 3,
    type: "industry",
    title: "Every Industry",
    description:
      "Whether you're running a restaurant, spa, fitness studio, or professional service, Listeo has specialized features for 300 business categories. Our flexible platform grows with your unique industry needs and requirements.",
  },
  {
    id: 4,
    type: "category",
    title: "Apartments",
    subtitle: "2 Listings",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=85",
    icon: <FiHome />,
  },
  {
    id: 5,
    type: "category",
    title: "Cars",
    subtitle: "1 Listing",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=85",
    icon: <FiTruck />,
  },
  {
    id: 6,
    type: "reach",
    title: "Global Reach",
    description:
      "From bustling New York to sunny California, Listeo powers businesses across 50+ major cities and regions. Our platform adapts to local preferences and business needs, helping you connect with customers wherever your business operates.",
  },
  {
    id: 7,
    type: "city",
    title: "New York",
    subtitle: "7 Listings",
    image:
      "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 8,
    type: "city",
    title: "Chicago",
    subtitle: "3 Listings",
    image:
      "https://images.unsplash.com/photo-1494522358652-f30e61a60313?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 9,
    type: "testimonial",
    title: "This is an amazing testimonial quote from a satisfied customer.",
    author: "John Doe",
    company: "CEO, Company Name",
  },
  {
    id: 10,
    type: "testimonial testimonial-light",
    title: "This is an amazing testimonial quote from a satisfied customer.",
    author: "John Doe",
    company: "CEO, Company Name",
  },
];

function ChooseListeo() {
  const sliderRef = useRef(null);

  const scrollCards = (direction) => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction * (sliderRef.current.clientWidth * 0.75),
      behavior: "smooth",
    });
  };

  return (
    <section className="choose-listeo">
      <div className="choose-heading">
        <h2>Choose Listeo</h2>
        <span className="heading-underline" />

        <p>
          There's a reason businesses choose Listeo: from powerful directory
          <br className="desktop-break" />
          features to seamless booking systems to comprehensive analytics.
        </p>

        <div className="choose-tabs">
          <button className="choose-tab active-tab">Success Stories</button>
          <button className="choose-tab">Popular Categories</button>
          <button className="choose-tab">Popular Regions</button>
          <button className="choose-tab">Reviews</button>
        </div>
      </div>

      <div className="choose-carousel">
        <div className="choose-track" ref={sliderRef}>
          {cards.map((card) => (
            <article
              className={`choose-card ${card.type}`}
              key={card.id}
              style={
                card.image
                  ? { "--card-image": `url("${card.image}")` }
                  : undefined
              }
            >
              {card.type === "intro" && (
                <div className="intro-content">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <a href="#case-study" className="case-study-link">
                    {card.link}
                  </a>
                </div>
              )}

              {card.type === "started" && (
                <div className="started-overlay">
                  <FiBriefcase className="started-icon" />
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <a href="#get-started" className="started-link">
                    Get started <FiArrowUpRight />
                  </a>
                </div>
              )}

              {card.type === "industry" && (
                <div className="industry-content">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              )}

              {card.type === "category" && (
                <div className="category-overlay">
                  <span className="category-icon">{card.icon}</span>
                  <h3>{card.title}</h3>
                  <span className="card-count">{card.subtitle}</span>
                </div>
              )}

              {card.type === "reach" && (
                <div className="reach-content">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              )}

              {card.type === "city" && (
                <div className="city-overlay">
                  <FiMapPin className="city-pin" />
                  <h3>{card.title}</h3>
                  <span className="card-count">{card.subtitle}</span>
                </div>
              )}

              {card.type.includes("testimonial") && (
                <div className="testimonial-content">
                  <p>{card.title}</p>
                  <strong>{card.author}</strong>
                  <span>{card.company}</span>
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="choose-controls">
          <button
            type="button"
            className="choose-arrow"
            aria-label="Scroll cards left"
            onClick={() => scrollCards(-1)}
          >
            <FiArrowLeft />
          </button>

          <button
            type="button"
            className="choose-arrow"
            aria-label="Scroll cards right"
            onClick={() => scrollCards(1)}
          >
            <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default ChooseListeo;
