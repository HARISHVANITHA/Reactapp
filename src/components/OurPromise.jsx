import React from "react";
import "./css/OurPromise.css"; // Assuming you have a CSS file for styling

 function OurPromise() {
  return (
    <div className="our-promise">
      <h2 className="title">Our Promise</h2>
      <p className="subtitle">
        As part of our high-quality service, we'd like to offer something extra too.
      </p>

      <div className="features">
        <div className="feature-card">
          <div className="icon teal">💻</div>
          <h3 className="feature-title">Top Code Quality</h3>
          <p className="feature-description">
            Our commitment goes beyond mere code – it encompasses providing solutions. 
            You receive W3C fully compliant markup, without any compromise on quality.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon yellow">📱</div>
          <h3 className="feature-title">Responsive</h3>
          <p className="feature-description">
            We understand the value of a positive attitude, timely responsiveness, and adaptability. 
            We're dedicated to listening and leveraging our utmost capabilities to serve you.
          </p>
        </div>
      </div>
    </div>
  );
}
export default OurPromise;