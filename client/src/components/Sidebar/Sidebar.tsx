import React from 'react';
import { FaChartBar, FaEnvelope, FaCog, FaThLarge, FaSignOutAlt } from 'react-icons/fa'; // Example icons
import { AiOutlineUser } from 'react-icons/ai'; // Icon for user placeholder
import auth from '../../utils/auth'; // Import your auth utility
import './Sidebar.css'; // Ensure this import is at the top of Sidebar.tsx

const Sidebar: React.FC = () => {
  const handleClick = () => {
    alert('This feature is coming soon.');
  };

  const handleLogout = () => {
    auth.logout(); // Use the logout method from your auth utility
  };

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        {/* Main logo or icon */}
        
          <FaThLarge className="sidebar-icon main-icon" onClick={handleClick} />
        
        {/* Sidebar options */}
        
          <FaChartBar className="sidebar-icon" onClick={handleClick} />
          <FaEnvelope className="sidebar-icon" onClick={handleClick} />
          <FaCog className="sidebar-icon" onClick={handleClick} />
        
      </div>
      <div className="sidebar-bottom">
        {/* User avatar */}
        <div className="user-avatar">
          <AiOutlineUser className="avatar-icon" /> {/* Placeholder if no user image */}
        </div>
        {/* Logout button */}
        <FaSignOutAlt
          className="sidebar-icon logout-icon"
          onClick={handleLogout}  // Handle logout here
        />
      </div>
    </div>
  );
};

export default Sidebar;
