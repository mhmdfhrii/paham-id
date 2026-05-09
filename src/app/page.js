"use client";
import React, { useState } from "react";
// Import komponen dari folder baru yang sudah kita rapikan
import MainTrending from "./components/MainTrending";
import Main from "./components/Main";
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
        <Main />
        <Newsletter />
      </section>
    </main>
  );
}
