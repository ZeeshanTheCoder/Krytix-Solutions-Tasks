import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import GitHubFinder from "./components/GitHubFinder";
import ThankYou from "./components/ThankYou";
import About from "./components/About";
import Services from "./components/Services";


function AppContent() {
  const location = useLocation();
  const [headerActive, setHeaderActive] = React.useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const headerRef = useRef();

  useEffect(() => {
    setHeaderActive(false);
    const timer = setTimeout(() => {
      setHeaderActive(true);
    }, 1100);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className={headerActive ? "active" : ""} ref={headerRef}>
        <NavLink to="/" className="logo">Zeeshan.</NavLink>
        <i
          className={`bx bx-menu${sidebarOpen ? " bx-x" : ""}`}
          id="menu-icon"
          onClick={() => setSidebarOpen((open) => !open)}
          style={{ fontSize: 32, cursor: "pointer", display: "none" }}
        ></i>
        <nav className={sidebarOpen ? "active" : ""}>
          <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""}>Services</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
          {/* <NavLink to="/github-finder" className={({ isActive }) => isActive ? "active" : ""}>GitHub Finder</NavLink> */}
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/github-finder" element={<GitHubFinder />} /> */}
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;