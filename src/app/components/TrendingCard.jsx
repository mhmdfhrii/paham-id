"use client";
import React from 'react';
import Link from 'next/link'; // Import Link untuk navigasi

export default function TrendingCard({ news }) {
  return (
    /* Gunakan Link untuk mengarahkan ke dynamic route detail berita */
    <Link href={`/news/${news.id}`} className="trending-card-anchor">
      <article className="trending-card">
        <div className="trending-img-wrapper">
          <img src={news.image} alt={news.title} />
        </div>

        {/* Badge kategori dengan styling pink khas Paham.id */}
        <span className="cat-pink">{news.category}</span>

        <h3 className="trending-card-title">{news.title}</h3>

        <p className="trending-card-excerpt">{news.excerpt}</p>

        <div className="meta-footer">
          <span className="bold-meta">{news.readTime || "5 MIN READ"}</span>
          <span className="dot-divider">•</span>
          <span>{news.date}</span>
        </div>
      </article>
    </Link>
  );
}