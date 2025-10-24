export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white flex justify-between items-center px-8 py-4 shadow-md">
      <h1 className="text-2xl font-bold">Khan Cloud ☁️</h1>
      <button className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg hover:bg-gray-200">
        Logout
      </button>
    </nav>
  );
}