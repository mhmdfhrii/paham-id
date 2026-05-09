"use client";
import React from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <main className="register-container">
      {/* Sisi Kiri: Logo & Wave */}
      <div className="register-left">
        <div className="logo-section">
          <img src="/img/logoregister.png" alt="Logo" className="reg-logo-img" />
          <img src="/img/tulisanregister.png" alt="Paham.ID" className="reg-text-img" />
        </div>
        
        {/* Elemen Wave SVG */}
        <div className="wave-divider">
          <svg viewBox="0 0 500 1500" preserveAspectRatio="none">
            <path d="M0,0 L150,0 C350,300 100,600 300,900 C450,1150 250,1500 150,1500 L0,1500 Z" fill="#172554" />
          </svg>
        </div>
      </div>

      {/* Sisi Kanan: Form */}
      <div className="register-right">
        <div className="form-wrapper">
          <h1 className="form-title">Create Account</h1>
          <p className="form-subtitle">Please fill the details below</p>

          <form className="reg-form">
            <div className="input-group">
              <label>Full name <span className="required">*</span></label>
              <div className="input-box">
                <i className="icon-user"></i>
                <input type="text" placeholder="Enter your full name" />
              </div>
            </div>

            <div className="input-group">
              <label>Email <span className="required">*</span></label>
              <div className="input-box">
                <i className="icon-mail"></i>
                <input type="email" placeholder="Enter your email" />
              </div>
            </div>

            <div className="input-group">
              <label>Password <span className="required">*</span></label>
              <div className="input-box">
                <i className="icon-lock"></i>
                <input type="password" placeholder="Create a password" />
              </div>
            </div>

            <div className="input-group">
              <label>Confirm Password <span className="required">*</span></label>
              <div className="input-box">
                <i className="icon-lock"></i>
                <input type="password" placeholder="Confirm your password" />
              </div>
            </div>

            <button type="submit" className="btn-create">Create Account</button>
          </form>

          <p className="footer-text">
            Already have an account? <Link href="/login">Sign In</Link>
          </p>
        </div>
      </div>
    </main>
  );
}