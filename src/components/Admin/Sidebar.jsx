export default function Sidebar({ activeTab, setActiveTab }) {
  const menuItems = ["Projects", "Experience", "Footer"];

  return (
    <div className="w-60 h-screen bg-black border-r border-gray-800 p-4">
      <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
      {menuItems.map((item) => (
        <div
          key={item}
          onClick={() => setActiveTab(item)}
          className={`p-3 rounded cursor-pointer mb-2 
            ${
              activeTab === item
                ? "bg-gray-700 text-white"
                : "text-gray-400 hover:bg-gray-800"
            }`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
