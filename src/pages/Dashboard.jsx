import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [stats, setStats] = useState({
    users: 1,
    files: 12,
    revenue: 5400,
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  useEffect(() => {
    // Example animation effect / backend call
    const interval = setInterval(() => {
      setStats((prev) => ({
        users: prev.users + 1,
        files: prev.files + 2,
        revenue: prev.revenue + 50,
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0b1320",
        color: "#fff",
        fontFamily: "Poppins, sans-serif",
        padding: "40px 20px",
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <h1 style={{ fontSize: "26px", fontWeight: "700" }}>
          🌩️ Khan Cloud Admin Dashboard
        </h1>
        <button
          onClick={handleLogout}
          style={{
            padding: "10px 20px",
            backgroundColor: "#e74c3c",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "15px",
            fontWeight: "600",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#c0392b")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#e74c3c")}
        >
          Logout
        </button>
      </header>

      {/* Welcome Section */}
      <p style={{ fontSize: "18px", marginBottom: "25px" }}>
        Welcome back, <strong>Admin</strong> 👋  
        <br /> Here’s a quick overview of your system activity.
      </p>

      {/* Stats Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {/* Users Card */}
        <div style={cardStyle}>
          <h3 style={titleStyle}>Total Users</h3>
          <p style={numberStyle}>{stats.users}</p>
        </div>

        {/* Files Card */}
        <div style={cardStyle}>
          <h3 style={titleStyle}>Files Uploaded</h3>
          <p style={numberStyle}>{stats.files}</p>
        </div>

        {/* Revenue Card */}
        <div style={cardStyle}>
          <h3 style={titleStyle}>Revenue (₹)</h3>
          <p style={numberStyle}>{stats.revenue}</p>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ marginTop: "60px", textAlign: "center", opacity: 0.6 }}>
        © {new Date().getFullYear()} Khan Cloud. All Rights Reserved.
      </footer>
    </div>
  );
}

// 🔹 Card Styles
const cardStyle = {
  backgroundColor: "#1e2a47",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
  transition: "transform 0.3s, background 0.3s",
  textAlign: "center",
};

const titleStyle = {
  fontSize: "18px",
  marginBottom: "10px",
  color: "#9dc1ff",
};

const numberStyle = {
  fontSize: "32px",
  fontWeight: "700",
  color: "#fff",
};
