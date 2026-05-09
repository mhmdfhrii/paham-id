"use client";
import React from "react";
import { dummyComments } from "@/data/dummyNews";
import AuthFooter from "@/app/components/AuthFooter";

export default function CommentSection() {
  return (
    <section className="comment-section">
      {/* Share Section */}
      <div className="share-story-bar">
        <span className="share-label">SHARE THIS STORY:</span>
        <div className="share-actions">
          <button className="icon-btn-round">
            <img src="/img/share.png" alt="Share" />
          </button>
          <button className="icon-btn-round">
            <img src="/img/simpan.png" alt="Simpan" />
          </button>
        </div>
      </div>

      {/* Header Komentar */}
      <div className="comment-header-row">
        <h2 className="comment-title">Komentar</h2>
        <span className="comment-badge">12 Comments</span>
      </div>

      {/* Input Utama */}
      <div className="comment-input-card">
        <div className="input-row-top">
          <img src="/img/user-avatar.png" className="avatar-small" alt="User" />
          <div className="input-field-pill">
            <textarea placeholder="Add to the conversation..."></textarea>
          </div>
        </div>
        <div className="input-row-bottom">
          <button className="btn-post-comment">Post Comment</button>
        </div>
      </div>

      {/* List Komentar Bubble */}
      <div className="comments-list">
        {dummyComments.map((comment) => (
          <div key={comment.id} className="comment-item-row">
            <img 
              src={comment.avatar || "/img/author.png"} 
              className="avatar-small" 
              alt={comment.author} 
            />
            <div className="comment-capsule">
              <div className="comment-meta-info">
                <span className="comment-user-name">{comment.author}</span>
                <span className="meta-dot">•</span>
                <span className="comment-time-text">{comment.time}</span>
              </div>
              <p className="comment-body-text">{comment.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Komponen Baru di Bawah Komentar */}
      <AuthFooter />
    </section>
  );
}