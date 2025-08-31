import React from "react";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();
  return (
    <section className="thank-you-section">
      <h1>Thank You!</h1>
      <p>Your submission has been received. We'll get back to you soon.</p>
      <button className="btn" onClick={() => navigate("/")}>Go Back Home</button>
    </section>
  );
};

export default ThankYou;
