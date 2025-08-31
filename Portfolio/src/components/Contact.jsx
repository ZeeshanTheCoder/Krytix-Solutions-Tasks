import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    const formData = new FormData(form);
    try {
      await fetch("https://formsubmit.co/fa8ef6550ea9a9da6d185f14ddc2b2bd", {
        method: "POST",
        body: formData,
      });
      navigate("/thankyou");
    } catch (err) {
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <section className="contact active">
      <div className="contact-container">
        <div className="contact-box">
          <h2>Let's Work Together</h2>
          <p className="desc">
            Let's combine your ideas with our expertise — and create something
            truly remarkable, together.
          </p>
          <div className="contact-detail">
            <i className="bx bxs-phone"></i>
            <div className="detail">
              <p>Phone</p>
              <p>+92 308 9017141</p>
            </div>
          </div>
          <div className="contact-detail">
            <i className="bx bxs-envelope"></i>
            <div className="detail">
              <p>Email</p>
              <p>ZeeshanTheCoder@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contact-box">
          <form ref={formRef} onSubmit={handleSubmit}>
            <h2 className="heading">Contact <span>Me!</span></h2>
            <div className="field-box">
              <input
                type="text"
                name="name"
                id="userName"
                autoComplete="off"
                placeholder="Full Name"
                required
              />
              <input
                type="email"
                name="email"
                id="userEmail"
                autoComplete="off"
                placeholder="Email Address"
                required
              />
              <input
                type="text"
                name="phone"
                id="userPhone"
                autoComplete="off"
                placeholder="Phone Number"
                required
              />
              <input
                type="text"
                name="subject"
                id="userSubject"
                autoComplete="off"
                placeholder="Email Subject"
                required
              />
              <textarea
                name="msg"
                id="userMessage"
                placeholder="Your Message"
                required
              ></textarea>
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
            </div>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
