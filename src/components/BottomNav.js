// src/components/BottomNav.js
import React from 'react';
import { FaHome, FaBook, FaHeadset, FaBell, FaUsers } from 'react-icons/fa';

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 w-full bg-earth-green p-2 md:hidden">
      <ul className="flex justify-around">
        <NavItem Icon={FaHome} />
        <NavItem Icon={FaBook} />
        <NavItem Icon={FaHeadset} />
        <NavItem Icon={FaBell} />
        <NavItem Icon={FaUsers} />
      </ul>
    </nav>
  );
};

// Reusable NavItem for bottom navigation
const NavItem = ({ Icon }) => (
  <li>
    <Icon className="text-2xl text-white" />
  </li>
);

export default BottomNav;
