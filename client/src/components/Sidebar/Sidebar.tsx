// src/components/Sidebar.tsx
import React from 'react';
import { FaChartBar, FaEnvelope, FaCog, FaThLarge, FaSignOutAlt } from 'react-icons/fa'; // Example icons
import { AiOutlineUser } from 'react-icons/ai'; // Icon for user placeholder
import './Sidebar.css'; // Ensure this import is at the top of Sidebar.tsx


const Sidebar: React.FC = () => {
  const handleClick = () => {
    alert('This feature is coming soon.');
  };

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        {/* Main logo or icon */}
        <div className="logo">
          <FaThLarge className="sidebar-icon main-icon" onClick={handleClick} />
        </div>
        {/* Sidebar options */}
        <div className="sidebar-options">
          <FaChartBar className="sidebar-icon" onClick={handleClick} />
          <FaEnvelope className="sidebar-icon" onClick={handleClick} />
          <FaCog className="sidebar-icon" onClick={handleClick} />
        </div>
      </div>
      <div className="sidebar-bottom">
        {/* User avatar */}
        <div className="user-avatar">
          <AiOutlineUser className="avatar-icon" /> {/* Placeholder if no user image */}
        </div>
        {/* Logout button */}
        <FaSignOutAlt className="sidebar-icon logout-icon" onClick={() => alert('Logging out...')} />
      </div>
    </div>
  );
};

export default Sidebar;
