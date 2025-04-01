import React from "react";
import "./css/Trustby.css"; // Assuming you have a CSS file for styling

const Trustby = () => {
  const trustedData = [
    { number: "70", label: "COLLEGES", color: "#00b8b8", icon: "🏛" },
    { number: "27", label: "PROFESSIONAL TRAINERS", color: "#00aaff", icon: "👨‍🏫" },
    { number: "1000+", label: "STUDY MATERIALS", subLabel: "AGH LMS", color: "#f5a623", icon: "📚" },
    { number: "50000+", label: "STUDENTS", subLabel: "B2B: Placement Training", color: "#ff3b3b", icon: "🎓" },

  ];

  return (
    <div className="trusted-container">
      <h2 className="trusted-title">Trusted By</h2>
      <div className="trusted-cards">
        {trustedData.map((item, index) => (
          <div key={index} className="card" style={{ borderColor: item.color }}>
            <div className="card-icon" style={{ backgroundColor: item.color }}>
              {item.icon}
            </div>
            <div className="card-content">
              <h3>{item.number}</h3>
              <p>{item.label}</p>
              {item.subLabel && <span>{item.subLabel}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trustby;