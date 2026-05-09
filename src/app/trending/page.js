"use client";
import React, { useState } from "react";
import "../styles/globals.css";

export default function TrendingPage() {
  const [timeFilter, setTimeFilter] = useState("TODAY");

  const trendingData = [
    {
      id: 1,
      category: "ECONOMICS",
      title:
        "Transformasi Ekonomi Hijau: Bagaimana Indonesia Memimpin Arus Asia Tenggara",
      description:
        "Langkah berani dalam dekarbonisasi industri menempatkan nusantara di garis depan revolusi industri berkelanjutan.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    },
    // ... data lainnya
  ];

  return (
    <div className="trending-page-container">
      <div className="content-wrapper">
        {/* Bagian Atas: Judul & Filter */}
        <div className="header-section">
          <h1 className="main-title">What's Trending Now?</h1>
          <div className="filter-row">
            {["TODAY", "THIS WEEK", "THIS MONTH"].map((filter) => (
              <button
                key={filter}
                className={`filter-pill ${timeFilter === filter ? "active" : ""}`}
                onClick={() => setTimeFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Bagian Konten: List Berita */}
        <main className="news-list">
          {trendingData.map((item, index) => (
            <article key={item.id} className="news-card">
              <div className="image-wrapper">
                {index === 0 && (
                  <span className="badge-trending">#1 TRENDING</span>
                )}
                <img src={item.image} alt={item.title} className="news-image" />
              </div>
              <div className="text-wrapper">
                <span className="news-category">{item.category}</span>
                <h2 className="news-headline">{item.title}</h2>
                <p className="news-summary">{item.description}</p>
              </div>
            </article>
          ))}
        </main>
      </div>
    </div>
  );
}
