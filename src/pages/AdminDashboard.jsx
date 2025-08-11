import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { removeToken, verifyToken } from "../constants/token";
import Sidebar from "../components/Admin/Sidebar";
import Projects from "../components/Admin/Projects";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("Home");
  const navigate = useNavigate();

  useEffect(() => {
    const tokenData = verifyToken();

    if (!tokenData) {
      navigate("/");
    }
  }, [navigate]);

  const renderContent = () => {
    switch (activeTab) {
      case "Projects":
        return <Projects />;
      case "Experience":
        return <Projects />;
      case "Footer":
        return <Projects />;
      default:
        return <Projects />;
    }
  };

  const handleLogout = () => {
    removeToken();
    navigate("/");
  };

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="flex justify-end items-center bg-gray-900 p-4 border-b border-gray-800">
          <button
            onClick={handleLogout}
            className="bg-red-300 hover:bg-red-600 px-4 py-2 rounded text-white"
          >
            Logout
          </button>
        </div>

        {/* Page content */}
        <main className="p-6 flex-1">{renderContent()}</main>
      </div>
    </div>
  );
}
