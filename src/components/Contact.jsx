import React, { useEffect, useState } from "react";
import "./css/Contact.css";

function Contact() {
  const [count, setCount] = useState(100);
  const [countNumber, setCountNumber] = useState(0);

  useEffect(() => {
    setCountNumber(countNumber + 1);
  }, [count]);

  return (
    <div className="element">
      <div className="element__child">
        <div className="title">Learners Today, Leaders Tomorrow</div>
        <div className="subtitle">
          With our continuous research and development, we provide you with an
          excellent Aptitude training. {count}
          <br />
          Count Number: {countNumber}
        </div>
      </div>
      <button
        className="button__style"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Register Now
      </button>
    </div>
  );
}

export default Contact;