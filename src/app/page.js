"use client";
import React, { useState } from "react";
// Import komponen dari folder baru yang sudah kita rapikan
import MainTrending from "./components/MainTrending";
<<<<<<< HEAD
import TrendingSection from "./components/TrendingSection";
=======
import Main from "./components/Main";
>>>>>>> 6b71656 (update project)
import Newsletter from "./components/Newsletter";

export default function HomePage() {
  return (
    // Pastikan pakai class wrapper agar tidak melebar ke seluruh layar
    <main className="main-wrapper">
      {/* 1. Area Highlight (Bento Grid) */}
      <section className="bento-section">
        <MainTrending />
      </section>

      {/* 2. Area Trending List */}
      <section className="list-section">
<<<<<<< HEAD
        <TrendingSection />
=======
        <Main />
>>>>>>> 6b71656 (update project)
        <Newsletter />
      </section>
    </main>
  );
}
