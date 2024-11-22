import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./sideBar.css";
import { Link } from 'react-router-dom';

const SideBar = ({ isOpen, toggleSidebar }) => {
    const menuItems = [
        { icon: "house", label: "Dashboard", path: "/dashboard/student" },
        { icon: "book", label: "Courses", path: "/courses" },
        { icon: "calendar", label: "Schedule", path: "/schedule" },
        { icon: "pencil-square", label: "Assignments", path: "/assignments" },
        { icon: "graph-up", label: "Grades", path: "/grades" },
        { icon: "chat-dots", label: "Messages", path: "/messages" },
        { icon: "gear", label: "Settings", path: "/settings" }
    ];

    return (
        <nav className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            {isOpen && (
                <div className="sidebar-header">
                    <img 
                        src="/path-to-your-logo.svg" 
                        alt="UniLMS" 
                        className="brand-logo" 
                    />
                </div>
            )}
            <button className="toggle-btn" onClick={toggleSidebar}>
                {isOpen ? '<' : '>'}
            </button>
            {isOpen && (
                <ul className="sidebar-nav">
                    {menuItems.map((item, index) => (
                        <li key={index} className="nav-item">
                            <Link to={item.path} className="nav-link">
                                <i className={`bi bi-${item.icon}`}></i>
                                <span>{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default SideBar;
