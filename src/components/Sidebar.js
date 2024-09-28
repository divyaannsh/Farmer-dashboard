import React from 'react';
import { FaHome, FaBook, FaHeadset, FaBell, FaUsers } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-1/5 bg-green-700 h-screen p-4 text-white">
      <h1 className="text-3xl font-bold mb-6">Farmer Dashboard</h1>
      <nav className="space-y-4">
        <NavItem Icon={FaHome} label="Home" />
        <NavItem Icon={FaBook} label="Learn" />
        <NavItem Icon={FaHeadset} label="Consult" />
        <NavItem Icon={FaBell} label="Updates" />
        <NavItem Icon={FaUsers} label="Community" />
      </nav>
    </div>
  );
};

const NavItem = ({ Icon, label }) => (
  <div className="flex items-center space-x-2">
    <Icon className="text-xl" />
    <span>{label}</span>
  </div>
);

export default Sidebar;
