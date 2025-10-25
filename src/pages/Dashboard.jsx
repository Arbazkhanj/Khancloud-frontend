import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [stats, setStats] = useState({ users: 0, files: 0 });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("lastLogin");
    window.location.href = "/login";
  };

  useEffect(() => {
    const getStats = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/dashboard/stats`, {
          headers: {
            "Content-Type": "application/json",
            // If you later protect this route on backend, header is ready:
            Authorization: token ? `Bearer ${token}` : undefined
          }
        });
        const data = await res.json();
        if (res.ok) {
          setStats({ users: data.users ?? 0, files: data.files ?? 0 });
        }
      } catch {
        // ignore, show defaults
      } finally {
        setLoading(false);
      }
    };
    getStats();
  }, []);

  const lastLoginIso = localStorage.getItem("lastLogin");
  const lastLogin = lastLoginIso
    ? new Date(lastLoginIso).toLocaleString()
    : "—";

  return (
    <div className="min-h-screen px-6 py-10">
      <header className="flex items-center justify-between mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Welcome to <span className="text-blue-400">Khan Cloud</span> Dashboard
        </h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-500"
        >
          Logout
        </button>
      </header>

      <p className="mb-8 text-white/80">
        You are successfully logged in <span className="ml-1">✅</span>
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-card/60 border border-white/5 p-6">
          <p className="text-sm text-white/70">Total Users</p>
          <p className="text-4xl font-bold mt-2">
            {loading ? "…" : stats.users}
          </p>
        </div>

        <div className="rounded-2xl bg-card/60 border border-white/5 p-6">
          <p className="text-sm text-white/70">Total Files</p>
          <p className="text-4xl font-bold mt-2">
            {loading ? "…" : stats.files}
          </p>
        </div>

        <div className="rounded-2xl bg-card/60 border border-white/5 p-6">
          <p className="text-sm text-white/70">Last Login</p>
          <p className="text-xl font-semibold mt-2">{lastLogin}</p>
        </div>
      </div>
    </div>
  );
}
