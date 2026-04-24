import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <nav className="sidebar-container">
      <ul>
        <li>
          <span className="sidebar-icon material-symbols-outlined">
            lightbulb_2
          </span>
          <span className="sidebar-title">Notes</span>
        </li>
        <li>
          <span className="sidebar-icon material-symbols-outlined">
            notifications
          </span>
          <span className="sidebar-title">Reminders</span>
        </li>
        <li>
          <span className="sidebar-icon material-symbols-outlined">edit</span>
          <span className="sidebar-title">Edit labels</span>
        </li>
        <li>
          <span className="sidebar-icon material-symbols-outlined">
            archive
          </span>
          <span className="sidebar-title">Archive</span>
        </li>
        <li>
          <span className="sidebar-icon material-symbols-outlined">delete</span>
          <span className="sidebar-title">Trash</span>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
