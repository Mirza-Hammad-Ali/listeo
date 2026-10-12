import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./Hero.css";
import { HiSparkles } from "react-icons/hi";
import { MdOfflineBolt } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { PiLineVerticalThin } from "react-icons/pi";
import { TfiMapAlt } from "react-icons/tfi";
import { LuHouse } from "react-icons/lu";
import { MdPersonOutline } from "react-icons/md";
import { VscMusic } from "react-icons/vsc";

export default function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Find Nearby Sports Cars",
        "Find Nearby Coffee Spot",
        "Find Nearby Restaurants",
      ],
      typeSpeed: 70,
      backSpeed: 60,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="hero">
      {/* Overlay text + search bar */}
      <div className="hero-content">
        <h1>
          <span ref={el}></span>
        </h1>
        <p>Explore top-rated attractions, activities and more!</p>

        {/* Search Bar */}
        <div className="search-bar">
          <div className="search-field">
            <span className="icon">
              <HiSparkles color="rgb(255, 194, 102)" />
            </span>
            <input type="text" placeholder="AI Search" />
            <MdOfflineBolt color="rgb(191, 81, 196)" size={23} />
          </div>
          <PiLineVerticalThin color="rgb(153, 153, 153)" size={43} />

          <div className="search-field">
            <span className="icon"></span>
            <input type="text" placeholder="Location" />
            <FaLocationDot color="rgb(153, 153, 153)" />
          </div>
          <PiLineVerticalThin color="rgb(153, 153, 153)" size={43} />

          <div className="search-field">
            <span className="icon"></span>
            <input type="text" placeholder="Category" />
            <IoIosArrowDown color="rgb(153, 153, 153)" />
          </div>

          <button className="search-btn">Search </button>
        </div>

        {/* Categories */}
        <div className="categories-section">
          <h3>Or browse featured categories:</h3>
          <div className="categories">
            <button className="cat-btn">
              <TfiMapAlt />
              Eat & Drink
            </button>
            <button className="cat-btn">
              <LuHouse />
              Apartments
            </button>
            <button className="cat-btn">
              <MdPersonOutline />
              Services
            </button>
            <button className="cat-btn">
              <VscMusic />
              Events
            </button>
          </div>
        </div>
      </div>

      {/* Chat Bubble */}
      <div className="chat-bubble">👋 Hello! I can help you find listings!</div>
    </section>
  );
}
