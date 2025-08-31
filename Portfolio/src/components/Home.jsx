import React from "react";

const Home = () => (
  <section className="home active">
    <div className="home-detail">
      <h1>ZeeshanTheCoder</h1>
      <h2>
        I'm a <span style={{ "--i": 4 }} data-text="Front End Developer">Front End Developer</span>
        <span style={{ "--i": 3 }} data-text="Back End Developer">Back End Developer</span>
        <span style={{ "--i": 2 }} data-text="Full Stack Developer">Full Stack Developer</span>
        <span style={{ "--i": 1 }} data-text="Mobile App Developer">Mobile App Developer</span>
      </h2>
      <p>
        With a keen eye for design and a love for clean code, I build websites
        and apps that not only look great but perform seamlessly.
      </p>
      <div className="btn-sci">
        <a href="/resume/ZeeshanResume.pdf" download className="btn">Download CV</a>
        <div className="sci">
          <a href="https://www.github.com/zeeshanthecoder/" target="_blank" rel="noopener noreferrer"><i className="bx bxl-github"></i></a>
          <a href="https://www.linkedin.com/in/zeeshanthecoder/" target="_blank" rel="noopener noreferrer"><i className="bx bxl-linkedin"></i></a>
        </div>
      </div>
    </div>
    <div className="home-img">
      <div className="img-box">
        <div className="img-item">
          <img src="/images/img.png" alt="ZeeshanTheCoder" />
        </div>
      </div>
    </div>
  </section>
);

export default Home;
