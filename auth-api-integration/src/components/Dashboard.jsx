import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { NavLink, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [userId, setUserId] = useState("");
  const [expDate, setExpDate] = useState("");
  const [iatDate, setIatDate] = useState("");
  const navigate = useNavigate();

  const username = localStorage.getItem("username");

  useEffect(() => {
    const token =
      localStorage.getItem("authToken") || sessionStorage.getItem("authToken");

    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const decoded = jwtDecode(token);
      setUserId(decoded.userId);

      const expTimestamp = decoded.exp;
      const iatTimestamp = decoded.iat;

      setExpDate(formatDate(new Date(expTimestamp * 1000)));
      setIatDate(formatDate(new Date(iatTimestamp * 1000)));

      console.log(decoded);
    } catch (err) {
      console.error("Invalid token");
      navigate("/login");
    }
  }, [navigate]);

  const formatDate = (date) => {
    const formattedDay = date
      .toLocaleString("en-GB", {
        weekday: "short",
      })
      .replace(",", ""); 

    const formattedDate = date
      .toLocaleString("en-GB", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
      .replace(",", ""); 

    const time = date.toLocaleString("en-GB", {
      hour: "2-digit", 
      minute: "2-digit", 
      second: "2-digit", 
      hour12: true, 
    });

    const timezoneOffset = date.getTimezoneOffset() / 60;
    const timezone = `GMT${timezoneOffset > 0 ? "+" : ""}${String(
      timezoneOffset
    ).padStart(2, "0")}:00`;

    const timeZoneName = date
      .toLocaleTimeString("en-US", { timeZoneName: "long" })
      .split(" ")[2];

    return `${formattedDay}, ${formattedDate}, ${time}, ${timezone} (${timeZoneName})`;
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");
    localStorage.removeItem("username");
    sessionStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <section className="auth-container">
      <div className="auth-form">
        <h2>Welcome, {username ? username : "User"}!</h2>
        <p>
          Your user ID is: <strong>{userId}</strong>
        </p>

        <p>
            Your session was created at: <strong>{iatDate}</strong>
        </p>
        <p>
          Your session will expire at: <strong>{expDate}</strong>
        </p>

        <div className="form-grid" style={{ marginTop: "2rem" }}>
          <div className="form-row">
            <div className="icon-box" onClick={handleLogout}>
              🔓 Logout
            </div>
          </div>
        </div>
      </div>

      <div className="auth-image">
        <img src={`/images/dashboardIcon.png`} alt="Dashboard" />
      </div>
    </section>
  );
};

export default Dashboard;
