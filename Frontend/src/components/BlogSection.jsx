import React from "react";
import "./BlogSection.css";

const blogPosts = [
  {
    category: "Tips",
    date: "November 16, 2025",
    title: "Top 20 Places to Stay in Europe",
    description:
      "Dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in malesuada vitae, tempus...",
    image:
      "../images/paris.jpg",
  },
  {
    category: "Tips",
    date: "November 16, 2025",
    title: "Experience In The Spotlight",
    description:
      "Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in...",
    image:
      "../images/girl.jpg",
  },
  {
    category: "Room Design",
    date: "November 16, 2025",
    title: "7 Big Ideas For Small Places",
    description:
      "Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in...",
    image:
      "../images/sofa.jpg",
  },
];

function BlogCard({ post }) {
  return (
    <article className="blog-card">
      <img src={post.image} alt={post.title} className="blog-card-image" />

      <div className="blog-card-overlay" />

      <span className="blog-category">{post.category}</span>

      <div className="blog-card-content">
        <time className="blog-date">{post.date}</time>

        <h3 className="blog-card-title">{post.title}</h3>

        <p className="blog-card-description">{post.description}</p>
      </div>
    </article>
  );
}

export default function BlogSection() {
  return (
    <section className="blog-section">
      <div className="blog-container">
        <header className="blog-header">
          <h2>From The Blog</h2>
          <span className="heading-underline" />
        </header>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <BlogCard key={post.title} post={post} />
          ))}
        </div>

        <div className="blog-footer">
          <a href="/blog" className="view-blog-button">
            View Blog
          </a>
        </div>
      </div>
    </section>
  );
}
