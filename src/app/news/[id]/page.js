"use client";
import React, { use, useState } from "react";
import PopularSidebar from "@/app/components/PopularSidebar";
import SidebarMore from "@/app/components/SidebarMore";
import AuthSidebar from "@/app/components/AuthSidebar";
import CommentSection from "@/app/components/CommentSection"; // Import komponen baru
import { allNewsData } from "@/data/dummyNews";
import "@/app/styles/articleDetail.css";

export default function ArticleDetail({ params }) {
  const { id } = use(params);
  const [isFullArticle, setIsFullArticle] = useState(false);
  
  // Mencari data berdasarkan ID dari dummy
  const article = allNewsData.find((item) => item.id === id);

  if (!article) return <div className="error-msg">Artikel Tidak Ditemukan</div>;

  return (
    <div className="article-detail-wrapper">
      <div className="container-custom">
        <main className="main-content">
          <article className="article-card">
            {/* Hero Image & Category Badge */}
            <div className="hero-section">
              <span className="floating-badge">{article.category}</span>
              <img src={article.image} alt={article.title} className="hero-img-full" />
            </div>

            {/* Headline Editorial */}
            <h1 className="article-title-main">{article.title}</h1>

            {/* Meta Penulis & Tanggal */}
            <div className="author-meta-row">
              <div className="author-info">
                <img src={article.authorImage || "/img/author.png"} alt={article.author} className="author-avatar" />
                <div className="author-details">
                  <span className="author-name">{article.author}</span>
                  <span className="author-role">{article.role || "Jurnalis"}</span>
                </div>
              </div>
              <div className="article-date-meta">
                <span className="publish-date">{article.date}</span>
                <span className="read-summary-badge">{article.readTime}</span>
              </div>
            </div>

            {/* Konten Artikel */}
            <div className="article-content-body">
              <p className="summary-paragraph">{article.description}</p>
              
              {!isFullArticle ? (
                <div className="view-full-section">
                  <button className="btn-view-full-article" onClick={() => setIsFullArticle(true)}>
                    VIEW FULL ARTICLE
                  </button>
                </div>
              ) : (
                <div className="full-text-animation">
                  {/* Gunakan summary/content dari dummy */}
                  <p>{article.summary}</p>
                  <p>{article.content || "Konten lengkap artikel tersedia untuk dibaca lebih lanjut..."}</p>
                </div>
              )}
            </div>

            {/* Bar Reaksi */}
            <div className="article-footer-interaction">
              <div className="reactions-pill-group">
                <span className="react-label">REACTIONS:</span>
                {article.reactions && (
                  <>
                    <div className="pill-item">👏 {article.reactions.clap}</div>
                    <div className="pill-item">💡 {article.reactions.light}</div>
                    <div className="pill-item">🤔 {article.reactions.idea || article.reactions.think}</div>
                  </>
                )}
                {/* Fallback jika data reaksi lain tidak ada di dummy tertentu */}
                <div className="pill-item">❤️ {article.reactions?.heart || 0}</div>
              </div>
            </div>

            {/* KOMPONEN COMMENT SECTION BARU */}
            <CommentSection articleId={article.id} />
            
          </article>
        </main>

        <aside className="sidebar">
          <PopularSidebar />
          <AuthSidebar />
          <SidebarMore category={article.category} />
        </aside>
      </div>
    </div>
  );
}