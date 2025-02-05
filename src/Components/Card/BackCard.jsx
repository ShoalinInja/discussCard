import React, { useState } from "react";
import "./backCard.css";
import { motion } from "framer-motion";
import MoreVertIcon from "@mui/icons-material/MoreVert"; // Material UI 3-dot menu icon

import { Phone, Email } from "@mui/icons-material"; // For Phone & Email
import { Instagram, WhatsApp, Facebook, LinkedIn } from "@mui/icons-material"; // For Social Media

const BackCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleFlip = () => {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
      setMenuOpen(false);
    }
  };
  const [service, setService] = useState([
    "service 1",
    "service 2",
    "service 3",
  ]);

  return (
    <div className="wrapper">
      <div className="card" onClick={handleFlip}>
        <motion.div
          className="flip-card-inner"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div className="flip-card-front">
            <div className="left-container">
              {/* Content for the left container goes here */}
              <div className="company-container"> F Levon Techno</div>

              <div className="image-container">
                <img
                  src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
                  alt="Placeholder"
                />
              </div>
            </div>
            <div className="right-container">
              {/* Content for the right container goes here */}
              <div className="designation-container">
                <div className="name-container">
                  <div className="name">Injamul</div>
                  <div className="designation">CTO</div>
                </div>
              </div>
              <div className="divider"></div>
              {/* Content for the left container goes here */}
              <div className="contact-container">
                <div className="services-container">
                  <div className="services-title-container">Contact</div>
                  <div className="service" onClick={(e) => e.stopPropagation()}>
                    <div className="contact-phone-container">
                      <a
                        href="tel:8108546589"
                        style={{
                          textDecoration: "none",
                          color: "black",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <Phone style={{ color: "black", fontSize: "18px" }} />
                        <span>81085 46589</span>
                      </a>
                    </div>
                    <div className="contact-email-container">
                      <a
                        href="mailto:shaikh.injamul06905@gmail.com"
                        style={{
                          textDecoration: "none",
                          color: "black",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Email style={{ color: "black", fontSize: "18px" }} />
                        <span>shaikh.injamul06905@gmail.com</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="social-container">
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
            </div>
          </div>
          <div className="flip-card-back">
            <div className="left-container">
              {/* Content for the left container goes here */}
              <div className="company-container"> B Levon Techno</div>

              <div className="image-container">
                <img
                  src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
                  alt="Placeholder"
                />
              </div>
            </div>
            <div className="right-container">
              {/* Content for the right container goes here */}
              <div className="designation-container">
                <div className="name-container">
                  <div className="name">Injamul</div>
                  <div className="designation">CTO</div>
                </div>
                <MoreVertIcon
                  className="menu-icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    setMenuOpen(!menuOpen);
                  }}
                />
                {menuOpen && (
                  <div className="menu-options">
                    <button>Edit</button>
                    <button>Delete</button>
                  </div>
                )}
              </div>
              {/* Content for the left container goes here */}
              <div className="contact-container">
                <div className="services-container">
                  <div className="services-title-container">
                    Top Products/Services
                  </div>
                  <div className="divider"></div>{" "}
                  {service.map((item, index) => (
                    <div className="service" index={index}>
                      {item}
                    </div>
                  ))}
                </div>
                <a
                  href="https://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()} // Prevent flip
                  style={{ textDecoration: "none" }} // Remove default underline
                >
                  <div
                    style={{
                      cursor: "pointer", // Ensures it's clickable\
                      textDecoration: "none", // Adds underline like a normal link
                      color: "black",
                    }}
                  >
                    www.google.com
                  </div>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BackCard;
