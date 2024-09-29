import React, { useState } from 'react';
import { FaHome, FaBook, FaHeadset, FaBell, FaUsers, FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePath, setActivePath] = useState('/');
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Function to navigate to a specific route
  const handleNavClick = (path) => {
    setActivePath(path); // Set the active path
    navigate(path);
    if (!isOpen) return; // Close sidebar only if it's open
    toggleSidebar(); // Close the sidebar after selecting a menu item
  };

  return (
    <>
      {/* Toggle button always visible in mobile view */}
      <div className="fixed top-0 left-0 p-4 z-50 lg:hidden backdrop-blur-lg bg-green-700 bg-opacity-30">
        <button onClick={toggleSidebar}>
          {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
      </div>

      {/* Sidebar for larger screens and hidden on mobile */}
      <div
        className={`lg:w-1/5 bg-green-700 h-screen p-4 text-white fixed lg:static top-0 left-0 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 lg:translate-x-0 z-50`}
      >
        <h1 className="text-2xl font-bold mb-6">Farmer Dashboard</h1>
        <nav className="space-y-2">
          <NavItem 
            Icon={FaHome} 
            label="Home" 
            onClick={() => handleNavClick('/')} 
            isActive={activePath === '/'} 
          />
          <NavItem 
            Icon={FaBook} 
            label="Learn" 
            onClick={() => handleNavClick('/learning-resources')} 
            isActive={activePath === '/learning-resources'} 
          />
          <NavItem 
            Icon={FaHeadset} 
            label="Consult" 
            onClick={() => handleNavClick('/expert-consultations')} 
            isActive={activePath === '/expert-consultations'} 
          />
          <NavItem 
            Icon={FaBell} 
            label="Updates" 
            onClick={() => handleNavClick('/notifications')} 
            isActive={activePath === '/notifications'} 
          />
          <NavItem 
            Icon={FaUsers} 
            label="Community" 
            onClick={() => handleNavClick('/community')} 
            isActive={activePath === '/community'} 
          />
        </nav>
      </div>

      {/* Overlay when sidebar is open on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

const NavItem = ({ Icon, label, onClick, isActive }) => (
  <div 
    className={`flex items-center space-x-2 cursor-pointer p-2 rounded-md transition-colors ${
      isActive ? 'bg-green-500' : 'hover:bg-green-600'
    }`}
    onClick={onClick}
  >
    <Icon className="text-lg" /> {/* Smaller icons */}
    <span className="text-sm">{label}</span> {/* Smaller text */}
  </div>
);

export default Sidebar;
