import React from "react";

const Services = () => {
  return (
    <>
      <section className="services active">
        <h2 className="heading">
          My <span>Services</span>
        </h2>
        <div className="services-container">
          <div className="services-box">
            <div className="icon">
              <i className="bx bx-paint" />
              <a href="#">
                <i className="bx bx-arrow-back" />
              </a>
            </div>
            <h3>Web Designing</h3>
            <p>Designs that don’t just look good — they perform.</p>
            <p>Make a bold first impression with a stunning website design.</p>
          </div>
          <div className="services-box">
            <div className="icon">
              <i className="bx bx-code-alt" />
              <a href="#">
                <i className="bx bx-arrow-back" />
              </a>
            </div>
            <h3>Web Development</h3>
            <p>Transforming ideas into powerful digital experiences.</p>
            <p>From startups to enterprises — we build websites that work.</p>
          </div>
          <div className="services-box">
            <div className="icon">
              <i className="bx bx-mobile-alt" />
              <a href="#">
                <i className="bx bx-arrow-back" />
              </a>
            </div>
            <h3>Mobile App Development</h3>
            <p>From concept to code — we craft apps that connect.</p>
            <p>Let’s build your next app — smarter, faster, better.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
