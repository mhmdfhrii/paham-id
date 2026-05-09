"use client";
import React from "react";

export default function AuthFootbar() {
  return (
    <div className="auth-footbar-container">
      <h3 className="auth-footbar-title">Want to join the conversation?</h3>
      <div className="auth-footbar-buttons">
        <button className="btn-auth-login">Login</button>
        <button className="btn-auth-register">Register</button>
      </div>
    </div>
  );
}