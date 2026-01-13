import React, { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState("experience");

  // Tab data
  const tabs = [
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "about", label: "About Me" },
  ];

  // Experience data
  const experiences = [
    {
      year: "2025 - Present",
      title: "Full Stack Developer",
      company: "Netpulse Digital",
    },
    {
      year: "2025 - Present",
      title: "Frontend Developer",
      company: "Novara Tech Solutions",
    },
    {
      year: "2025 - Present",
      title: "Frontend Developer",
      company: "Krytix Solutions",
    },
    {
      year: "2025 - Present",
      title: "Mobile App Developer",
      company: "Developers Hub Corporation",
    },
  ];

  // Education data
  const educations = [
    {
      year: "2025 - Present",
      title: "Bachelor in Software Engineering",
      company: "Muhammad Ali Jinnah University",
    },
    {
      year: "2022 - Present",
      title: "Advanced Diploma in Software Engineering",
      company: "Aptech Metro Star Gate Center",
    },
    {
      year: "2022 - 2024",
      title: "Intermediate in Computer Science",
      company: "Govt. National College",
    },
    {
      year: "2020 - 2022",
      title: "Matriculation in Computer Science",
      company: "Green House Grammar School",
    },
  ];

  // Skills data
  const skills = [
    { icon: "bx bxl-html5", name: "HTML5" },
    { icon: "bx bxl-css3", name: "CSS3" },
    { icon: "bx bxl-bootstrap", name: "Bootstrap" },
    { icon: "bx bxl-javascript", name: "JavaScript" },
    { icon: "bx bxl-mongodb", name: "MongoDB" },
    { icon: "bxl bx-express-js", name: "Express.js" },
    { icon: "bx bxl-react", name: "React.js" },
    { icon: "bx bxl-nodejs", name: "Node.js" },
    { icon: "bx bxl-tailwind-css", name: "Tailwind" },
    { icon: "bx bxl-php", name: "PHP" },
    { icon: "bxl bx-my-sql", name: "MySQL" },
    { icon: "bxl bx-laravel", name: "Laravel" },
    { icon: "bx bxl-flutter", name: "Flutter" },
    { icon: "bx bxl-firebase", name: "Firebase" },
  ];

  // About data
  const aboutInfo = [
    { label: "Name", value: "Muhammad Zeeshan" },
    { label: "Gender", value: "Male" },
    { label: "Age", value: "19 Years Old" },
    { label: "Status", value: "Unmarried😁" },
    { label: "City", value: "Karachi" },
    { label: "Nationality", value: "Pakistani" },
    { label: "Experience", value: "6 Months" },
    { label: "Full Time", value: "Available" },
    { label: "Freelance", value: "Available" },
    {
      label: "Phone",
      value: "+92 308 9017141",
      link: "tel:+92 308 9017141",
    },
    {
      label: "Email",
      value: "ZeeshanTheCoder@gmail.com",
      link: "mailto:ZeeshanTheCoder@gmail.com",
    },
    { label: "Languages", value: "English, Urdu" },
  ];

  // Handle tab click
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section className="resume active">
      <div className="resume-container">
        <div className="resume-box">
          <h2>Why Hire Me?</h2>
          <p className="desc">
            Crafting clean code and captivating experiences that drive results.
            <br />
            Bringing passion and precision to every project, big or small.
          </p>

          <div className="tab-buttons">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`resume-btn ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="resume-box">
          {/* Experience Tab */}
          <div
            className={`resume-detail experience ${
              activeTab === "experience" ? "active" : ""
            }`}
          >
            <h2 className="heading">
              My <span>Experience</span>
            </h2>
            <div className="resume-list">
              {experiences.map((exp, index) => (
                <div key={index} className="resume-item">
                  <p className="year">{exp.year}</p>
                  <h3>{exp.title}</h3>
                  <p className="company">{exp.company}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Tab */}
          <div
            className={`resume-detail education ${
              activeTab === "education" ? "active" : ""
            }`}
          >
            <h2 className="heading">
              My <span>Education</span>
            </h2>
            <div className="resume-list">
              {educations.map((edu, index) => (
                <div key={index} className="resume-item">
                  <p className="year">{edu.year}</p>
                  <h3>{edu.title}</h3>
                  <p className="company">{edu.company}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Tab */}
          <div
            className={`resume-detail skills ${
              activeTab === "skills" ? "active" : ""
            }`}
          >
            <h2 className="heading">
              My <span>Skills</span>
            </h2>
            <div className="resume-list">
              {skills.map((skill, index) => (
                <div key={index} className="resume-item">
                  <i className={skill.icon}></i>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* About Tab */}
          <div
            className={`resume-detail about ${
              activeTab === "about" ? "active" : ""
            }`}
          >
            <h2 className="heading">
              About <span>Me</span>
            </h2>
            <div className="resume-list">
              {aboutInfo.map((info, index) => (
                <div key={index} className="resume-item">
                  <p>
                    {info.label}:{" "}
                    {info.link ? (
                      <a href={info.link}>
                        <span>{info.value}</span>
                      </a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
