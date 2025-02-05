import React, { useState } from "react";
import "./backCard.css";
import MoreVertIcon from "@mui/icons-material/MoreVert"; // Material UI 3-dot menu icon
const BackCard = () => {
  const [service, setService] = useState([
    "service 1",
    "service 2",
    "service 3",
  ]);
  return (
    <div className="wrapper">
      <div className="card">
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
            <MoreVertIcon className="menu-icon" />
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
    </div>
  );
};

export default BackCard;
