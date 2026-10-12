import { useState } from "react";
import {
  Tag,
  House,
  Scissors,
  Music,
  Utensils,
  ChevronDown,
  Flame,
} from "lucide-react";

import "./LocalDeals.css";

const categories = [
  { name: "All Coupons", icon: Tag },
  { name: "Apartments", icon: House },
  { name: "Barber", icon: Scissors },
  { name: "Events", icon: Music },
  { name: "Eat & Drink", icon: Utensils },
];

const deals = [
  {
    id: 1,
    title: "George Barber",
    category: "Barber",
    discount: 20,
    description: "Get 20% off your entire order today only",
    validity: "Valid till: November 9, 2027",
    code: "SAVE20NOW",
    image:
      "../images/barber.jpg",
  },
  {
    id: 2,
    title: "Sunny Apartment",
    category: "Apartments",
    discount: 30,
    description: "Get 10% off your booking by using code below!",
    validity: "No expiry date",
    code: "LIST30",
    image:
      "../images/apartment-sunny.jpg",
  },
  {
    id: 3,
    title: "Sticky Band",
    category: "Events",
    discount: 20,
    description: "Get 20% off your entire order today only",
    validity: "Valid till: November 9, 2027",
    code: "SAVE20NOW",
    image:
      "../images/band.jpg",
  },
  {
    id: 4,
    title: "Tom's Restaurant",
    category: "Eat & Drink",
    discount: 30,
    description: "Get 10% off your booking by using code below!",
    validity: "No expiry date",
    code: "LIST30",
    image:
      "../images/apartment-sunny.jpg",
  },
  {
    id: 5,
    title: "Fresh Cuts",
    category: "Barber",
    discount: 15,
    description: "Enjoy a discount on your next haircut",
    validity: "Valid till: December 31, 2027",
    code: "CUT15",
    image:
      "../images/apartment-sunny.jpg",
  },
];

function DealCard({ deal }) {
  const copyCoupon = async () => {
    try {
      await navigator.clipboard.writeText(deal.code);
      alert(`Coupon code ${deal.code} copied!`);
    } catch {
      alert(`Your coupon code is: ${deal.code}`);
    }
  };

  return (
    <article className="deal-card">
      <div className="deal-image">
        <img src={deal.image} alt={deal.title} />

        <span className="discount-badge">
          <Flame size={15} fill="#ff8c42" color="#ff8c42" />-{deal.discount}%
        </span>
      </div>

      <div className="deal-content">
        <h3>{deal.title}</h3>

        <p className="deal-description">{deal.description}</p>

        <p className="deal-validity">{deal.validity}</p>

        <button className="coupon-button" onClick={copyCoupon}>
          {deal.code}
        </button>
      </div>
    </article>
  );
}

export default function LocalDeals() {
  const [activeCategory, setActiveCategory] = useState("All Coupons");

  const [showAll, setShowAll] = useState(false);

  const filteredDeals =
    activeCategory === "All Coupons"
      ? deals
      : deals.filter((deal) => deal.category === activeCategory);

  const visibleDeals = showAll ? filteredDeals : filteredDeals.slice(0, 4);

  return (
    <section className="local-deals">
      <header className="section-heading">
        <h1>Local Deals</h1>
        <span className="heading-line"></span>
        <p>Exclusive neighborhood coupons</p>
      </header>

      <nav className="category-nav">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <button
              key={category.name}
              className={`category-item ${
                activeCategory === category.name ? "active" : ""
              }`}
              onClick={() => {
                setActiveCategory(category.name);
                setShowAll(false);
              }}
            >
              <Icon size={20} strokeWidth={1.3} />
              <span>{category.name}</span>
            </button>
          );
        })}
      </nav>

      <div className="deals-grid">
        {visibleDeals.map((deal) => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </div>

      {filteredDeals.length > 4 && (
        <div className="show-more-wrapper">
          <button
            className="show-more-button"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show More"}

            <ChevronDown size={14} className={showAll ? "rotate-icon" : ""} />
          </button>
        </div>
      )}
    </section>
  );
}
