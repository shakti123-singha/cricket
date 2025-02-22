'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBars } from "react-icons/fa6";
import { MdOutlineScoreboard, MdSchedule, MdLeaderboard, MdUpcoming, MdOutlineSignalWifiStatusbar4Bar } from "react-icons/md";
import { TbLivePhoto } from "react-icons/tb";
import { IoNewspaperOutline } from "react-icons/io5";
import { Dashboard } from '../dasboard/page';
import './Layout.css'; // Import your CSS file

export default function Layout() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="layout-container flex h-screen">
      {/* Sidebar */}
      <aside
        className={`sidebar ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}
      >
        <button className="toggle-button" onClick={() => setSidebarOpen(!isSidebarOpen)}>
          <FaBars />
        </button>
        <ul className="sidebar-menu">
          {[
            { href: '/livescore', icon: <MdOutlineScoreboard />, label: 'Live Score' },
            { href: '/commentary', icon: <TbLivePhoto />, label: 'Commentary' },
            { href: '/latest-news', icon: <IoNewspaperOutline />, label: 'Latest News' },
            { href: '/records', icon: <MdSchedule />, label: 'Records' },
            { href: '/ranking', icon: <MdLeaderboard />, label: 'Ranking' },
            { href: '/upcoming', icon: <MdUpcoming />, label: 'Upcoming Matches' },
            { href: '/status', icon: <MdOutlineSignalWifiStatusbar4Bar />, label: 'Status' },
          ].map(({ href, icon, label }) => (
            <li key={href} className="sidebar-item">
              <Link href={href} className="sidebar-link">
                {icon}
                {isSidebarOpen && <span className="sidebar-label">{label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main
        className={`main-content flex-grow transition-all duration-300 ${
          isSidebarOpen ? 'ml-64' : 'ml-20'
        }`}
      >
        <Dashboard />
      </main>
    </div>
  );
}
