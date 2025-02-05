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
                  <div className="service">
                    <div className="contact-phone-container">
                      <Phone style={{ color: "black", fontSize: "18px" }} />
                      <span>81085 46589</span>
                    </div>
                    <div className="contact-email-container">
                      <Email style={{ color: "black", fontSize: "18px" }} />
                      <span>shaikh.injamul06905@gmail.com</span>
                    </div>
                  </div>
                </div>

                <div className="social-container">
                  <Instagram style={{ color: "white", fontSize: "20px" }} />
                  <WhatsApp style={{ color: "white", fontSize: "20px" }} />
                  <Facebook style={{ color: "white", fontSize: "20px" }} />
                  <LinkedIn style={{ color: "white", fontSize: "20px" }} />
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
                    <button>Delete</button>
                    <button>{disabled ? "Enable" : "Disable"}</button>
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

                <div className="link-container">www.google.com</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BackCard;
