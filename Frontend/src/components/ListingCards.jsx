
import {
  FiMapPin,
  FiInfo,
  FiCheckCircle,
  FiWifi,
  FiZap,
  FiTv,
  FiShield,
  FiWind,
  FiMusic,
  FiTruck,
  FiCoffee,
  FiThermometer,
  FiLayers,
  FiSettings,
  FiRadio,
} from "react-icons/fi";

import { FaStar } from "react-icons/fa";
import "./ListingCard.css";

const iconMap = {
  tv: FiTv,
  power: FiZap,
  shield: FiShield,
  wifi: FiWifi,
  wind: FiWind,
  music: FiMusic,
  truck: FiTruck,
  coffee: FiCoffee,
  temperature: FiThermometer,
  layers: FiLayers,
  settings: FiSettings,
  radio: FiRadio,
};

export default function ListingCard({
  category,
  image,
  title,
  location,
  tags = [],
  amenities = [],
  rating,
  price,
  featured = false,
  available = false,
  verified = false,
  imageAlt,
}) {
  return (
    <article className="listing-card">
      <div className="listing-image">
        <img src={image} alt={imageAlt || title} />

        <span className="listing-category">{category}</span>

        {available && (
          <span className="listing-availability">Now Open</span>
        )}

        {/* Image navigation controls, as in the reference */}
        {category.startsWith("Business Coach") && (
          <>
            <button
              type="button"
              className="image-arrow image-arrow-left"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              type="button"
              className="image-arrow image-arrow-right"
              aria-label="Next image"
            >
              ›
            </button>
          </>
        )}
      </div>

      <div className="listing-details">
        {featured && (
          <span className="featured-badge">
            <FaStar />
            Featured
          </span>
        )}

        <h3 className="listing-title">
          {title}

          {verified && (
            <FiCheckCircle
              className="verified-icon"
              aria-label="Verified listing"
            />
          )}

          <FiInfo className="info-icon" aria-label="Listing information" />
        </h3>

        <p className="listing-location">
          <FiMapPin />
          <span>{location}</span>
        </p>

        {tags.length > 0 && (
          <div className="listing-tags">
            {tags.map((tag) => {
              const TagIcon = iconMap[tag.icon] || FiSettings;

              return (
                <span className="listing-tag" key={tag.label}>
                  <TagIcon />
                  {tag.label}
                </span>
              );
            })}
          </div>
        )}

        {amenities.length > 0 && (
          <div className="listing-amenities">
            {amenities.map((amenity, index) => {
              const AmenityIcon = iconMap[amenity] || FiSettings;

              return (
                <span
                  className="amenity-icon"
                  key={`${amenity}-${index}`}
                  title={amenity}
                >
                  <AmenityIcon />
                </span>
              );
            })}
          </div>
        )}
      </div>

      <div className="listing-footer">
        <span className="listing-rating">
          <FaStar />
          {rating}
        </span>

        <span className="listing-price">{price}</span>
      </div>
    </article>
  );
}
