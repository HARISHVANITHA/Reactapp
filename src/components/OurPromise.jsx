import React from "react";
import FeatureCard from "./FeatureCard";

export default function OurPromise() {
  return (
    <div className="our-promise">
      <h2 className="title">Our Promise</h2>
      <p className="subtitle">
        As part of our high-quality service, we'd like to offer something extra too.
      </p>

      <div className="features">
        <FeatureCard
          icon="💻"
          title="Top Code Quality"
          description="Our commitment goes beyond mere code – it encompasses providing solutions. 
          You receive W3C fully compliant markup, without any compromise on quality."
          color="teal"
        />
        <FeatureCard
          icon="📱"
          title="Responsive"
          description="We understand the value of a positive attitude, timely responsiveness, and adaptability. 
          We're dedicated to listening and leveraging our utmost capabilities to serve you."
          color="yellow"
        />
      </div>
    </div>
  );
}
