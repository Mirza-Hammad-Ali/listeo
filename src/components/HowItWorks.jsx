import React, { useEffect, useRef, useState } from "react";
import { MapPin, Star, CalendarDays, ChevronDown } from "lucide-react";
import "./HowItWorks.css";

const stepsData = [
  {
    id: 1,
    title: "Find interesting places",
    description:
      "Search areas of interest, local events, friendly restaurants or things to do — filtered by what is around you.",
    button: "Start exploring →",
    icon: MapPin,
  },
  {
    id: 2,
    title: "Check real reviews",
    description:
      "Judge every place through verified ratings and photos from people who have actually been there.",
    button: "Browse top rated →",
    icon: Star,
  },
  {
    id: 3,
    title: "Make a reservation",
    description:
      "Contact the owner and reserve a table, book a stay or rent an apartment — confirmed online in seconds.",
    button: "Book your first visit →",
    icon: CalendarDays,
  },
];

function StepCard({ step, number, visible, onClick }) {
  const Icon = step.icon;

  return (
    <article className={`step-card ${visible ? "visible" : ""}`}>
      <div className="step-top">
        <div className="step-icon">
          <Icon size={17} strokeWidth={1.5} />
        </div>

        <span className="step-number">{number}</span>
      </div>

      <h3>{step.title}</h3>

      <p>{step.description}</p>

      <button className="step-button" onClick={onClick}>
        {step.button}
      </button>
    </article>
  );
}

function FeatureSection({
  id,
  label,
  title,
  highlight,
  description,
  image,
  theme,
  buttonText,
}) {
  return (
    <section id={id} className={`feature-section ${theme}`}>
      <div className="feature-content">
        <span className="feature-label">{label}</span>

        <h2>
          {title}
          <br />
          <span>{highlight}</span>
        </h2>

        <p>{description}</p>

        <div className="feature-buttons">
          <button
            className="feature-primary"
            onClick={() => alert(`${buttonText} clicked!`)}
          >
            {buttonText} →
          </button>

          <button
            className="feature-secondary"
            onClick={() =>
              document
                .getElementById(id)
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Learn more
          </button>
        </div>
      </div>

      <div className="feature-image">
        <img src={image} alt={title} loading="lazy" />
      </div>
    </section>
  );
}

export default function HowItWorks() {
  const [steps, setSteps] = useState(stepsData);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(section);
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const rotateCards = () => {
    setSteps((current) => [...current.slice(1), current[0]]);
  };

  useEffect(() => {
    const timer = setInterval(rotateCards, 6000);

    return () => clearInterval(timer);
  }, []);

  const handleStepClick = (step) => {
    const target =
      step.id === 1 ? "listings" : step.id === 2 ? "community" : "bookings";

    document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="how-page">
      <section className="how-section" ref={sectionRef}>
        <header className="how-heading">
          <h1>How It Works?</h1>
          <span className="heading-underline"></span>

          <p>
            Search nearby places, compare verified reviews, and make your
            reservation in three simple steps.
          </p>
        </header>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <StepCard
              key={step.id}
              step={step}
              number={`0${index + 1}`}
              visible={visible}
              onClick={() => handleStepClick(step)}
            />
          ))}
        </div>

        <div className="rotate-container">
          <button className="rotate-button" onClick={rotateCards}>
            Rotate steps <ChevronDown size={12} />
          </button>
        </div>
      </section>

      <main className="feature-list">
        <FeatureSection
          id="listings"
          label="LISTINGS"
          title="Beautiful listings,"
          highlight="published in minutes"
          description="Create a polished page with photos, opening hours, menus, videos and social links — all managed from one simple dashboard."
          image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85"
          theme="feature-pink"
          buttonText="Add your listing"
        />

        <FeatureSection
          id="bookings"
          label="BOOKINGS"
          title="Take bookings"
          highlight="while you sleep"
          description="Real-time availability, instant confirmation and secure payments built straight into every listing. Guests can book online with ease."
          image="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=900&q=85"
          theme="feature-orange"
          buttonText="Enable bookings"
        />

        <FeatureSection
          id="community"
          label="COMMUNITY"
          title="Turn visitors"
          highlight="into regulars"
          description="Verified reviews, star ratings, private messaging and bookmark collections help visitors find places they can trust."
          image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=85"
          theme="feature-green"
          buttonText="Read the reviews"
        />

        <FeatureSection
          id="revenue"
          label="REVENUE"
          title="Your directory,"
          highlight="your paycheck"
          description="Paid listing plans, featured placements and booking commissions help you manage your directory revenue."
          image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85"
          theme="feature-purple"
          buttonText="Set up your plan"
        />
      </main>
    </div>
  );
}
