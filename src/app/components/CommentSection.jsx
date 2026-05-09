"use client";
import React from 'react';
// Import data dari file pusat
import { dummyComments } from "@/data/dummyNews";

export default function CommentSection() {
  return (
    <section className="comment-section">
      <h3 className="section-title">Komentar</h3>
      
      {/* Area Input Komentar */}
      <div className="comment-input-area">
        <div className="comment-bubble input-bubble">
          <div className="comment-main-row" style={{ display: 'flex', gap: '15px' }}>
            {/* Avatar Dummy */}
            <div style={{
              width: '40px', height: '40px', backgroundColor: '#ddd', 
              borderRadius: '50%', flexShrink: 0 
            }}></div>
            
            <textarea 
              placeholder="Add to the conversation..."
              style={{
                width: '100%', border: 'none', outline: 'none', 
                resize: 'none', fontSize: '15px', paddingTop: '10px'
              }}
            ></textarea>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
            <button className="btn-post">Post Comment</button>
          </div>
        </div>
      </div>

      {/* List Komentar dari dummyNews.jsx */}
      <div className="comment-list">
        {dummyComments.map((c) => (
          <div key={c.id} className="comment-bubble list-bubble">
            <div className="avatar-dummy" style={{
              width: '40px', height: '40px', backgroundColor: '#1a3a5c', 
              borderRadius: '50%', flexShrink: 0 
            }}></div>
            
            <div className="comment-content">
              <div style={{ marginBottom: '5px' }}>
                <strong>{c.author}</strong> 
                <small style={{ color: '#999', marginLeft: '8px' }}>• {c.time}</small>
              </div>
              <p style={{ fontSize: '14px', color: '#333', margin: 0, lineHeight: '1.5' }}>
                {c.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}