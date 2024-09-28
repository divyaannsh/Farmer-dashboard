import React, { useState } from 'react';
import { FaHome, FaBook, FaHeadset, FaBell, FaUsers, FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Toggle button for mobile view */}
      <div className="lg:hidden p-4 bg-green-700 text-white flex justify-between items-center">
        <h1 className="text-2xl font-bold">Farmer Dashboard</h1>
        <button onClick={toggleSidebar}>
          {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>

      {/* Sidebar for larger screens and hidden on mobile */}
      <div
        className={`lg:w-1/5 bg-green-700 h-screen p-4 text-white fixed lg:static top-0 left-0 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 lg:translate-x-0 z-50`}
      >
        <h1 className="text-2xl font-bold mb-6">Farmer Dashboard</h1>
        <nav className="space-y-4">
          <NavItem Icon={FaHome} label="Home" />
          <NavItem Icon={FaBook} label="Learn" />
          <NavItem Icon={FaHeadset} label="Consult" />
          <NavItem Icon={FaBell} label="Updates" />
          <NavItem Icon={FaUsers} label="Community" />
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

const NavItem = ({ Icon, label }) => (
  <div className="flex items-center space-x-2">
    <Icon className="text-xl" />
    <span>{label}</span>
  </div>
);

export default Sidebar;
