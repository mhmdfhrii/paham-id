"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import "../../styles/auth.css";

export default function SignInPage() {
  const [showPass, setShowPass] = useState(false);

  return (
    <main className="auth-clean-page login-final-container">
      {/* Background image penuh — tidak ada card kotak */}
      <div className="login-bg-layer" />

      <div className="login-content-wrapper">
        {/* Logo bulat */}
        <div className="login-logo-img-wrapper">
          <img
            src="/img/logosignin.png"
            alt="Logo Paham.ID"
            className="login-custom-logo"
          />
        </div>

        <h1 className="login-title">Sign In</h1>

        <div className="login-form">
          {/* Email / Username */}
          <div className="login-input-group">
            <label>
              Email / Username <span className="reg-star">*</span>
            </label>
            <div className="login-input-wrapper">
              <Mail size={18} className="login-icon" />
              <input
                type="text"
                placeholder="Enter your email or username"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="login-input-group">
            <label>
              Password <span className="reg-star">*</span>
            </label>
            <div className="login-input-wrapper">
              <Lock size={18} className="login-icon" />
              <input
                type={showPass ? "text" : "password"}
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                className="login-eye-btn"
                onClick={() => setShowPass((v) => !v)}
                tabIndex={-1}
              >
                {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <button type="submit" className="login-btn-submit">
            Sign In
          </button>
        </div>

        <p className="login-footer-text">
          Don't have an account?{" "}
          <Link href="/register">Register Now</Link>
        </p>
      </div>
    </main>
  );
}