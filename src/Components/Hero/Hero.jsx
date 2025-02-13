import React from "react";
import "./hero.css";
const Hero = () => {
  return (
    <div class="contact-card">
      <div class="contact-info">
        <h2 class="contact-name">John Doe</h2>
        <p class="contact-designation">CTO</p>
      </div>
      <svg class="divider-svg" width="80%" height="10">
        <line
          x1="0"
          y1="5"
          x2="100%"
          y2="5"
          stroke="#007bff"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>

      <div class="contact-item">
        <span class="icon">📞</span>
        <span class="contact-text">+1 234 567 890</span>
      </div>

      <div class="contact-item">
        <span class="icon">📧</span>
        <span class="contact-text">john.doe@email.com</span>
      </div>

      <button class="save-contact">Save Contact</button>
    </div>
  );
};

export default Hero;
