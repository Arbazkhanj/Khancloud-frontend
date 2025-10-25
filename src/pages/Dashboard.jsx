import React from "react";

export default function Dashboard() {
  const handleLogout = () => {
    // 🔹 Local storage se token delete karna
    localStorage.removeItem("token");

    // 🔹 Redirect karna login page par
    window.location.href = "/login";
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0c1427",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>
        Welcome to Khan Cloud Dashboard
      </h1>
      <p style={{ marginTop: "10px", fontSize: "18px" }}>
        You are successfully logged in ✅
      </p>

      <button
        onClick={handleLogout}
        style={{
          marginTop: "20px",
          padding: "10px 25px",
          backgroundColor: "#e74c3c",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "600",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        Logout
      </button>
    </div>
  );
}
