import React, { useState } from 'react';
import { FaHome, FaBook, FaHeadset, FaBell, FaUsers, FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Function to navigate to a specific route
  const handleNavClick = (path) => {
    navigate(path);
    if (!isOpen) return; // Close sidebar only if it's open (mobile view)
    toggleSidebar();      // Close the sidebar after selecting a menu item
  };

  return (
    <>
      {/* Sidebar for larger screens and mobile view with hamburger */}
      <div
        className={`lg:w-1/5 bg-green-700 h-screen p-4 text-white fixed lg:static top-0 left-0 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 lg:translate-x-0 z-50`}
      >
        {/* Hamburger button inside the sidebar for mobile view */}
        <div className="lg:hidden flex justify-between items-center mb-4">
          <button onClick={toggleSidebar}>
            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
          <h1 className="text-2xl font-bold">Farmer Dashboard</h1>
        </div>

        {/* Sidebar content */}
        <nav className="space-y-4">
          <NavItem Icon={FaHome} label="Home" onClick={() => handleNavClick('/')} />
          <NavItem Icon={FaBook} label="Learn" onClick={() => handleNavClick('/learning-resources')} />
          <NavItem Icon={FaHeadset} label="Consult" onClick={() => handleNavClick('/expert-consultations')} />
          <NavItem Icon={FaBell} label="Updates" onClick={() => handleNavClick('/notifications')} />
          <NavItem Icon={FaUsers} label="Community" onClick={() => handleNavClick('/community')} />
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

const NavItem = ({ Icon, label, onClick }) => (
  <div className="flex items-center space-x-2 cursor-pointer" onClick={onClick}>
    <Icon className="text-xl" />
    <span>{label}</span>
  </div>
);

export default Sidebar;
