
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ListingCard from "./ListingCards";
import "./TrendingListings.css";

const listings = [
  {
    id: 1,
    category: "Apartments",
    image: "../images/apartment.jpg",
    title: "Sunny Apartment",
    location: "Dorothea Lane, New York",
    featured: true,
    tags: [
      { label: "City skyline", icon: "layers" },
      { label: "Included", icon: "truck" },
      { label: "In-unit", icon: "coffee" },
    ],
    amenities: ["tv", "power", "shield", "layers", "wifi"],
    rating: "4.8",
    price: "$25.99 - $35.00",
  },
  {
    id: 2,
    category: "Cars, For Rent",
    image:
      "../images/car.jpg",
    title: "Sports Car",
    location: "Suffolk County, New York",
    available: true,
    tags: [
      { label: "V6 Turbo", icon: "settings" },
      { label: "Burmester", icon: "music" },
      { label: "Full Coverage", icon: "shield" },
    ],
    amenities: ["wind", "temperature", "wind", "layers"],
    rating: "4.3",
    price: "Starts from $20.00",
  },
  {
    id: 3,
    category: "Business Coach, Coaching, Life Coach",
    image:
      "../images/men.jpg",
    title: "George Burton – Life Coach",
    location: "Ocean Avenue, New York",
    featured: true,
    verified: true,
    tags: [],
    amenities: [],
    rating: "4.9",
    price: "Starts from $100.00",
  },
];

export default function TrendingListings() {
  const [activePage, setActivePage] = useState(0);

  return (
    <section className="trending-section">
      <div className="trending-heading">
        <h2>Trending Listings</h2>
        <span className="heading-underline" />
        <p>A selection of listings verified for quality</p>
      </div>

      <div className="trending-grid">
        {listings.map((listing) => (
          <ListingCard key={listing.id} {...listing} />
        ))}
      </div>

      <nav className="listing-pagination" aria-label="Listing pages">
        <button
          type="button"
          aria-label="Previous page"
          disabled={activePage === 0}
          onClick={() =>
            setActivePage((page) => Math.max(0, page - 1))
          }
          className="pagination-arrow"
        >
          <FiChevronLeft />
        </button>

        {Array.from({ length: 10 }, (_, index) => (
          <button
            type="button"
            key={index}
            aria-label={`Page ${index + 1}`}
            aria-current={activePage === index ? "page" : undefined}
            onClick={() => setActivePage(index)}
            className={`pagination-dot ${
              activePage === index ? "active" : ""
            }`}
          />
        ))}

        <button
          type="button"
          aria-label="Next page"
          disabled={activePage === 9}
          onClick={() =>
            setActivePage((page) => Math.min(9, page + 1))
          }
          className="pagination-arrow"
        >
          <FiChevronRight />
        </button>
      </nav>
    </section>
  );
}
