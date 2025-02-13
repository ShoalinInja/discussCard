import React from "react";
import "./phoneContainer.css"; // Import the CSS file
import BackCard from "../Card/BackCard";
import Hero from "../Hero/Hero";
import { Instagram, WhatsApp, Facebook, LinkedIn } from "@mui/icons-material"; // For Social Media

const PhoneContainer = () => {
  return (
    <div className="phone-container">
      {/* iPhone Notch */}
      <div className="notch"></div>

      {/* Screen */}
      <div className="screen">
        <div className="Company-Box">
          <div className="comapany-box-name">Levon Techno</div>
        </div>
        <BackCard className="BackCard" />
        <Hero />
      </div>
      <div className="contact-box-logo">
        {" "}
        <div className="contact-social-container">
          <a
            href="https://www.instagram.com/your_username"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <Instagram style={{ color: "white", fontSize: "20px" }} />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/8108546589"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <WhatsApp style={{ color: "white", fontSize: "20px" }} />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/your_username"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <Facebook style={{ color: "white", fontSize: "20px" }} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/your_username"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <LinkedIn style={{ color: "white", fontSize: "20px" }} />
          </a>
        </div>
      </div>
      <div className="footer">
        <div className="footer-box-text">
          Invite Friends and family to Diskuss -seamless connections when you
          have everyone on Diskuss
        </div>
      </div>
    </div>
  );
};

export default PhoneContainer;
