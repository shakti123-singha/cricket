import React from "react";
import { MdOutlineScoreboard, MdUpcoming, MdLeaderboard, MdOutlineSignalWifiStatusbar4Bar } from "react-icons/md";

// Card Component
const Card = ({ title, value, icon }) => (
  <div className="bg-white p-4 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center">
    <div className="text-3xl text-blue-500 mb-3">{icon}</div>
    <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
    <p className="text-gray-600">{value}</p>
  </div>
);

export const Dashboard = () => (
  <div className="w-full bg-gray-100 p-4 sm:p-6">
    {/* Dashboard Header */}
    <div className="mb-8 text-center">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Dashboard</h1>
      <p className="text-gray-600 text-sm sm:text-base">Overview of the latest stats and updates</p>
    </div>

    {/* Dashboard Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
      <Card title="Live Score" value="8" icon={<MdOutlineScoreboard />} />
      <Card title="Upcoming Matches" value="5" icon={<MdUpcoming />} />
      <Card title="Ranking" value="Top 10" icon={<MdLeaderboard />} />
      <Card title="Status" value="Active" icon={<MdOutlineSignalWifiStatusbar4Bar />} />
    </div>

    {/* Content Sections */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
      {/* Recent Activities Section */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Recent Activities</h2>
        <p className="text-gray-600 text-sm sm:text-base">Recent activity details or charts go here.</p>
      </div>

      {/* Performance Section */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Performance</h2>
        <p className="text-gray-600 text-sm sm:text-base">Performance metrics or graphs go here.</p>
      </div>
    </div>

    {/* Betting Statistics Section */}
    <div className="mt-8">
      <BettingStatistics />
    </div>
  </div>
);

// Betting Statistics Component
const BettingStatistics = () => (
  <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg gap-6">
    <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">IPL 2025 Betting Statistics</h2>
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b-2 p-2 sm:p-3 text-gray-700 text-sm sm:text-base">Team</th>
            <th className="border-b-2 p-2 sm:p-3 text-gray-700 text-sm sm:text-base">Matches Played</th>
            <th className="border-b-2 p-2 sm:p-3 text-gray-700 text-sm sm:text-base">Wins</th>
            <th className="border-b-2 p-2 sm:p-3 text-gray-700 text-sm sm:text-base">Win Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-b p-2 sm:p-3 text-gray-600 text-sm sm:text-base">Mumbai Indians</td>
            <td className="border-b p-2 sm:p-3 text-gray-600 text-sm sm:text-base">14</td>
            <td className="border-b p-2 sm:p-3 text-gray-600 text-sm sm:text-base">10</td>
            <td className="border-b p-2 sm:p-3 text-gray-600 text-sm sm:text-base">71.4%</td>
          </tr>
          <tr>
            <td className="border-b p-2 sm:p-3 text-gray-600 text-sm sm:text-base">Chennai Super Kings</td>
            <td className="border-b p-2 sm:p-3 text-gray-600 text-sm sm:text-base">14</td>
            <td className="border-b p-2 sm:p-3 text-gray-600 text-sm sm:text-base">9</td>
            <td className="border-b p-2 sm:p-3 text-gray-600 text-sm sm:text-base">64.3%</td>
          </tr>
          <tr>
            <td className="border-b p-2 sm:p-3 text-gray-600 text-sm sm:text-base">Royal Challengers Bangalore</td>
            <td className="border-b p-2 sm:p-3 text-gray-600 text-sm sm:text-base">14</td>
            <td className="border-b p-2 sm:p-3 text-gray-600 text-sm sm:text-base">8</td>
            <td className="border-b p-2 sm:p-3 text-gray-600 text-sm sm:text-base">57.1%</td>
          </tr>
          <tr>
            <td className="border-b p-2 sm:p-3 text-gray-600 text-sm sm:text-base">Kolkata Knight Riders</td>
            <td className="border-b p-2 sm:p-3 text-gray-600 text-sm sm:text-base">14</td>
            <td className="border-b p-2 sm:p-3 text-gray-600 text-sm sm:text-base">7</td>
            <td className="border-b p-2 sm:p-3 text-gray-600 text-sm sm:text-base">50.0%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default Dashboard;
