import React, { useState } from 'react';
import { FaHome, FaBook, FaHeadset, FaBell, FaUsers, FaBars, FaTimes, FaMapMarkedAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePath, setActivePath] = useState('/');
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (path) => {
    setActivePath(path);
    navigate(path);
    if (isOpen) toggleSidebar();
  };

  return (
    <>
      {/* Sidebar Toggle for Mobile */}
      <div className="fixed top-0 left-0 p-4 z-50 lg:hidden backdrop-blur-lg bg-green-300 bg-opacity-30">
        <button onClick={toggleSidebar}>
          {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`lg:w-1/5 bg-green-200 text-gray-800 h-screen p-4 fixed lg:static top-0 left-0 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 lg:translate-x-0 z-50`}
      >
        <h1 className="text-3xl font-bold mb-8">Farmer Dashboard</h1>
        <nav className="space-y-4">
          <NavItem Icon={FaHome} label="Home" onClick={() => handleNavClick('/')} isActive={activePath === '/'} />
          <NavItem Icon={FaBook} label="Learn" onClick={() => handleNavClick('/learning-resources')} isActive={activePath === '/learning-resources'} />
          <NavItem Icon={FaHeadset} label="Consult" onClick={() => handleNavClick('/expert-consultations')} isActive={activePath === '/expert-consultations'} />
          <NavItem Icon={FaBell} label="Updates" onClick={() => handleNavClick('/real-time-updates')} isActive={activePath === '/real-time-updates'} />
          <NavItem Icon={FaUsers} label="Community Forum" onClick={() => handleNavClick('/community-forum')} isActive={activePath === '/community-forum'} />
          <NavItem Icon={FaMapMarkedAlt} label="Mobile Access" onClick={() => handleNavClick('/mobile-access')} isActive={activePath === '/mobile-access'} />
        </nav>
      </div>
    </>
  );
};

const NavItem = ({ Icon, label, onClick, isActive }) => (
  <div
    className={`flex items-center space-x-2 cursor-pointer p-3 rounded-md transition-colors ${
      isActive ? 'bg-green-400' : 'hover:bg-green-300'
    }`}
    onClick={onClick}
  >
    <Icon className="text-lg" />
    <span className="text-lg font-semibold">{label}</span>
  </div>
);

export default Sidebar;
