// Blog.js
import React from "react";
import blog from '../assets/blog.png';
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog-section">
      <div className="container">
        <h2 className="blog-title">Our Latest Blog Posts</h2>
        <p className="blog-description">Stay updated with our recent activities, stories, and news.</p>

        <div className="blog-grid">
          <div className="blog-card">
            <img src={blog} alt="Blog 1" />
            <h3>Impact of Small Donations</h3>
            <p>Discover how even the smallest contributions can lead to significant changes in the lives of many.</p>
            <a href="#" className="read-more">Read More</a>
          </div>

          <div className="blog-card">
            <img src={blog} alt="Blog 2" />
            <h3>Volunteering Changed My Life</h3>
            <p>Hear from our amazing volunteers and the transformations they’ve witnessed first-hand.</p>
            <a href="#" className="read-more">Read More</a>
          </div>

          <div className="blog-card">
            <img src={blog} alt="Blog 3" />
            <h3>Charity in the Digital Age</h3>
            <p>How modern technology and digital platforms are revolutionizing the way we support causes.</p>
            <a href="#" className="read-more">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
