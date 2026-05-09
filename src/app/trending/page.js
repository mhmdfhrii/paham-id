"use client";
import React, { useState } from "react";
import Link from "next/link";
import { allNewsData } from "@/data/dummyNews"; 
import "../styles/globals.css";

export default function TrendingPage() {
  const [timeFilter, setTimeFilter] = useState("TODAY");

  // Logika Filter: Di dunia nyata ini biasanya berdasarkan timestamp.
  // Untuk dummy, kita simulasi saja pembagiannya:
  const getFilteredData = () => {
    if (timeFilter === "TODAY") {
      return allNewsData.slice(0, 3); // Ambil 3 berita pertama untuk hari ini
    } else if (timeFilter === "THIS WEEK") {
      return allNewsData.slice(2, 6); // Berita berbeda untuk minggu ini
    } else {
      return allNewsData.slice(0, 7); // Semua berita untuk bulan ini
    }
  };

  const filteredNews = getFilteredData();

  return (
    <div className="trending-page-container">
      <div className="content-wrapper">
        <header className="header-section">
          <h1 className="main-title">What's Trending Now?</h1>
          
          {/* Baris Filter */}
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
        </header>

        <main className="news-list">
          {filteredNews.map((item, index) => (
            <Link key={item.id} href={`/news/${item.id}`} className="trending-card-link">
              <article className="trending-news-card">
                <div className="trending-image-box">
                  {/* Badge Trending hanya muncul jika filter TODAY dan urutan pertama */}
                  {timeFilter === "TODAY" && index === 0 && (
                    <span className="badge-trending">#1 TRENDING</span>
                  )}
                  <img src={item.image} alt={item.title} className="trending-img" />
                </div>

                <div className="trending-text-box">
                  <span className="news-category">{item.category}</span>
                  <h2 className="news-headline">{item.title}</h2>
                  <p className="news-summary">{item.excerpt || item.description}</p>
                  
                  <div className="trending-meta">
                     <span>{item.readTime}</span>
                     <span className="dot">•</span>
                     <span>{item.date}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </main>
      </div>
    </div>
  );
}