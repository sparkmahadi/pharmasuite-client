// components/Sidebar.tsx
import { useState } from 'react';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Toggle Button in Navbar */}
      <button
        className="fixed top-4 right-4 z-50 bg-blue-500 text-white p-2 rounded"
        onClick={toggleSidebar}
      >
        Menu
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">
          <h2 className="text-lg font-bold">Sidebar</h2>
          <ul>
            <li className="py-2">Item 1</li>
            <li className="py-2">Item 2</li>
            <li className="py-2">Item 3</li>
          </ul>
        </div>
      </div>

      {/* Overlay (optional, to close the sidebar when clicking outside) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
