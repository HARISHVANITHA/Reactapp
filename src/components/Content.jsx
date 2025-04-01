import React from "react";
import "./css/Content.css";

const Content = () => {
  return (
    <div className="vision-mission-container">
      <div className="vision-section">
        <h2 className="vision-title">| <span>Our Vision</span></h2>
        <p className="vision-text">
          Our vision is to empower individuals from diverse backgrounds to
          become accomplished professionals. At Aptitude Guru Hem, we believe
          that knowledge has the power to transcend boundaries.
        </p>
      </div>
      <div className="divider"></div>
      <div className="mission-section">
        <h2 className="mission-title">| <span>Our Mission</span></h2>
        <p className="mission-text">
          Our mission is to revolutionize education by providing comprehensive
          training in aptitude, coding, and web/mobile development. We foster a
          culture of inclusivity and personal growth.
        </p>
      </div>
    </div>
  );
};

export default Content;