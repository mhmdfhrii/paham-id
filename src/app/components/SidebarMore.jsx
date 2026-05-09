"use client";
import React from 'react';
import Link from 'next/link';
// Import data dari file pusat
import { moreData } from "@/data/dummyNews";

export default function SidebarMore({ category }) {
  return (
    <div className="sidebar-section more-from">
      <h4 className="sidebar-title">
        <span className="title-dash"></span> MORE FROM {category}
      </h4>
      <div className="more-list">
        {moreData.map((item, index) => (
          <div key={index} className="more-item">
            {/* Tambahkan Link supaya bisa diklik ke detail berita */}
            <Link href={`/news/${item.id}`} className="more-link-wrapper">
              <img src={item.img} alt={item.title} className="more-thumb" />
              <div className="more-info">
                <h6 className="more-item-title">{item.title}</h6>
                <small className="more-item-date">{item.date}</small>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}