import React from "react";
import {
  FaHome,
  FaCar,
  FaBullhorn,
  FaUsers,
  FaUtensils,
  FaMusic,
} from "react-icons/fa";
import "./PopularCategories.css";

export default function PopularCategories() {
  const categories = [
    { icon: <FaHome/>, name: "Apartments", count: 2 },
    { icon: <FaCar />, name: "Cars", count: 1 },
    { icon: <FaBullhorn />, name: "Classifieds", count: 1 },
    { icon: <FaUsers />, name: "Coaching", count: 1 },
    { icon: <FaUtensils />, name: "Eat & Drink", count: 1 },
    { icon: <FaMusic />, name: "Events", count: 1 },
  ];

  return (
    <section className="popular-categories">
      <h2>Popular Categories</h2>
      <div className="category-grid">
        {categories.map((cat, index) => (
          <div className="category-card" key={index}>
            <span className="icon">{cat.icon}</span>
            <h3>{cat.name}</h3>
            <p>{cat.count}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
