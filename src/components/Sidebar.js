import React, { useState } from 'react';
import { FaHome, FaBook, FaHeadset, FaBell, FaUsers, FaBars, FaTimes, FaCalendar } from 'react-icons/fa';
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
    if (isOpen) toggleSidebar(); // Close sidebar if open on mobile
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="fixed top-0 left-0 p-4 z-50 lg:hidden backdrop-blur-lg bg-green-700 bg-opacity-30">
        <button onClick={toggleSidebar}>
          {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`lg:w-1/5 bg-green-800 text-brown-200 h-screen p-4 fixed lg:static top-0 left-0 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 lg:translate-x-0 z-50`}
      >
        <h1 className="text-3xl font-bold mb-8">Farmer Dashboard</h1>
        <nav className="space-y-4">
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
          <NavItem 
            Icon={FaCalendar} 
            label="Calendar" 
            onClick={() => handleNavClick('/calendar-events')} 
            isActive={activePath === '/calendar-events'} 
          />
        </nav>
      </div>

      {/* Overlay for Mobile */}
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
    className={`flex items-center space-x-2 cursor-pointer p-3 rounded-md transition-colors ${
      isActive ? 'bg-green-600' : 'hover:bg-green-700'
    }`}
    onClick={onClick}
  >
    <Icon className="text-lg" />
    <span className="text-lg font-semibold">{label}</span>
  </div>
);

export default Sidebar;
