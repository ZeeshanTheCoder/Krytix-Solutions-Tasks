import React, { useState } from "react";

const projects = [
  {
    numb: "01",
    title: "Plant Palace",
    desc: "Plant Palace is a visually appealing web app that showcases a variety of indoor, outdoor, and succulent plants, offering plant care tips and information about related workshops to help users create their own green spaces.",
    tech: "HTML5, CSS3, JavaScript, React.js",
    live: "https://plant-palace-techwiz.netlify.app/",
    github: "https://github.com/ZeeshanTheCoder/plant-palace",
    img: "/images/Project/Plant-Palace.png"
  },
  {
    numb: "02",
    title: "Covid 19 Tracker App",
    desc: "COVID-19 Tracker is a mobile app that provides real-time COVID-19 statistics for all countries on the home screen, with a built-in search feature to quickly access detailed data by country.",
    tech: "Dart, Flutter, Firebase",
    live: "",
    github: "https://github.com/ZeeshanTheCoder/Covid-19-Tracker-App",
    img: "/images/Project/Covid-19-Tracker-App.png"
  },
  {
    numb: "03",
    title: "Audi Car Club",
    desc: "Audi Car Club is a sleek, elegant web app that spotlights the latest Audi car models, complete with high‑quality images and key specifications, providing enthusiasts with a refined and engaging browsing experience.",
    tech: "HTML5, CSS3, Bootstrap, JavaScript",
    live: "https://zeeshanthecoder.github.io/AudiCarClub/",
    github: "https://github.com/ZeeshanTheCoder/AudiCarClub",
    img: "/images/Project/Audi-Car-Club.png"
  },
  {
    numb: "04",
    title: "Weatherly",
    desc: "Weatherly is a user-friendly web app that fetches and displays real-time weather information for your current location or any city you search for, offering temperature, humidity, wind data, and simple visuals to help you plan your day efficiently.",
    tech: "HTML5, CSS3, JavaScript",
    live: "https://zeeshanthecoder.github.io/Weatherly/",
    github: "https://github.com/ZeeshanTheCoder/Weatherly/",
    img: "/images/Project/Weatherly.png"
  },
  {
    numb: "05",
    title: "FotoLab",
    desc: "FotoLab is a sleek web application that lets users upload photos and apply a range of custom filters and effects—like vintage tones and overlays—with an intuitive, real‑time preview for effortless photo enhancement.",
    tech: "HTML5, CSS3, Bootstrap, JavaScript",
    live: "https://zeeshanthecoder.github.io/FotoLab/",
    github: "https://github.com/ZeeshanTheCoder/FotoLab/",
    img: "/images/Project/FotoLab.png"
  }
];

const Projects = () => {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev < projects.length - 1 ? prev + 1 : prev));
  const prev = () => setActive((prev) => (prev > 0 ? prev - 1 : prev));

  return (
    <section className="projects active">
      <h2 className="heading">Latest <span>Project</span></h2>
      <div className="projects-container">
        <div className="projects-box">
          {projects.map((p, idx) => (
            <div className={`projects-detail${active === idx ? " active" : ""}`} key={p.numb}>
              <p className="numb">{p.numb}</p>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="tech"><p>{p.tech}</p></div>
              <div className="live-github">
                <a target="_blank" rel="noopener noreferrer" href={p.live}><i className="bx bx-arrow-back"></i><span>Live Project</span></a>
                <a target="_blank" rel="noopener noreferrer" href={p.github}><i className="bx bxl-github"></i><span>Github Repository</span></a>
              </div>
            </div>
          ))}
        </div>
        <div className="projects-box">
          <div className="projects-carousel">
            <div className="img-slide" style={{ transform: `translateX(calc(${-active * 100}% - ${active * 2}rem))` }}>
              {projects.map((p) => (
                <div className="img-item" key={p.numb}>
                  <img src={p.img} alt={p.title} />
                </div>
              ))}
            </div>
          </div>
          <div className="navigation">
            <button className={`arrow-left${active === 0 ? " disabled" : ""}`} onClick={prev} disabled={active === 0}>
              <i className="bx bx-chevron-left"></i>
            </button>
            <button className={`arrow-right${active === projects.length - 1 ? " disabled" : ""}`} onClick={next} disabled={active === projects.length - 1}>
              <i className="bx bx-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
