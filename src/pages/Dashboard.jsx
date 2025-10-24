export default function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to Khan Cloud Dashboard</h1>
      <p className="text-lg">You are successfully logged in ✅</p>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/";
        }}
        className="mt-6 bg-red-600 hover:bg-red-700 rounded px-4 py-2 font-semibold"
      >
        Logout
      </button>
    </div>
  );
}