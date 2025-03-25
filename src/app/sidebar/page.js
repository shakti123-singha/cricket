'use client';

import { useState } from 'react';
import { FaBars } from "react-icons/fa6";
import {
  MdOutlineScoreboard,
  MdSchedule,
  MdLeaderboard,
  MdUpcoming,
  MdOutlineSignalWifiStatusbar4Bar,
} from "react-icons/md";
import { TbLivePhoto } from "react-icons/tb";
import { IoNewspaperOutline } from "react-icons/io5";
import Dashboard from '../dasboard/page'; // Corrected import statement
import './Layout.css'; // Import your CSS file

export default function Layout() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="layout-container flex h-screen bg-gradient-to-r from-orange-300 to-yellow-300">
      {/* Sidebar */}
      <aside
        className={`sidebar ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'} bg-orange-600`}
      >
        <button className="toggle-button text-yellow-100" onClick={() => setSidebarOpen(!isSidebarOpen)}>
          <FaBars />
        </button>
        <ul className="sidebar-menu">
          {[
            { id: "live-score", icon: <MdOutlineScoreboard />, label: "Live Score" },
            { id: "commentary", icon: <TbLivePhoto />, label: "Commentary" },
            { id: "latest-news", icon: <IoNewspaperOutline />, label: "Latest News" },
            { id: "records", icon: <MdSchedule />, label: "Records" },
            { id: "ranking", icon: <MdLeaderboard />, label: "Ranking" },
            { id: "upcoming-matches", icon: <MdUpcoming />, label: "Upcoming Matches" },
            { id: "status", icon: <MdOutlineSignalWifiStatusbar4Bar />, label: "Status" },
          ].map(({ id, icon, label }) => (
            <li key={id} className="sidebar-item">
              <div className="sidebar-link flex items-center text-yellow-100">
                {icon}
                {isSidebarOpen && <span className="sidebar-label ml-2">{label}</span>}
              </div>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main
        className={`main-content flex-grow transition-all duration-300 ${
          isSidebarOpen ? 'ml-64' : 'ml-20'
        } bg-yellow-100 p-4`}
      >
        <Dashboard />
      </main>
    </div>
  );
}
