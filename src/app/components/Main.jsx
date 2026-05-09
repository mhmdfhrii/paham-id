"use client";
import React from 'react';
import Link from 'next/link';
import TrendingCard from './TrendingCard';
import SidebarTrending from './SidebarTrending';
import { allNewsData } from "@/data/dummyNews";
import "../styles/mainTrending.css";

export default function TrendingSection() {
  const trendingNews = allNewsData.slice(0, 4);

  return (
    <div className="main-wrapper">
      <section className="trending-layout">
        <div className="trending-left">
          <div className="trending-header">
            <h2 className="serif-title italic">Trending News</h2>
            <div className="header-divider"></div>
            <Link href="/news" className="view-all-link">
              <span className="view-all">VIEW ALL</span>
            </Link>
          </div>
          
          <div className="news-grid">
            {trendingNews.map((news) => (
              <Link 
                href={`/news/${news.id}`} 
                key={news.id} 
                className="card-anchor"
              >
                {/* Pastikan di dalam TrendingCard tidak ada tag <a> lagi */}
                <TrendingCard news={news} />
              </Link>
            ))}
          </div>
        </div>

        <div className="trending-right">
           <SidebarTrending />
        </div>
      </section>
    </div>
  );
}