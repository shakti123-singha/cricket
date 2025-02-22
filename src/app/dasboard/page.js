import { MdOutlineScoreboard, MdSchedule, MdLeaderboard, MdUpcoming, MdOutlineSignalWifiStatusbar4Bar } from "react-icons/md";
import React from "react";



// Card Component
const Card = ({ title, value, icon }) => (
  <div className="bg-white p-4 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center">
    <div className="text-3xl text-blue-500 mb-3">{icon}</div>
    <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
    <p className="text-gray-600">{value}</p>
  </div>
);

// Dashboard Component
export const Dashboard = () => (
  <div className="w-full bg-gray-100 p-6"> {/* Ensures full-width gray background */}
    {/* Dashboard Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <Card title="Live Score" value="8" icon={<MdOutlineScoreboard />} />
      <Card title="Upcoming Matches" value="5" icon={<MdUpcoming />} />
      <Card title="Ranking" value="Top 10" icon={<MdLeaderboard />} />
      <Card title="Status" value="Active" icon={<MdOutlineSignalWifiStatusbar4Bar />} />
    </div>

    {/* Content Sections */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activities</h2>
        <p className="text-gray-600">Recent activity details or charts go here.</p>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Performance</h2>
        <p className="text-gray-600">Performance metrics or graphs go here.</p>
      </div>
    </div>
    {/* --------------------------------------------------- */}
  
   

      <div className="bg-white p-6 rounded-2xl shadow-lg gap-6 mt-5">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">IPL 2025 Betting Statistics</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b-2 p-3 text-gray-700">Team</th>
              <th className="border-b-2 p-3 text-gray-700">Matches Played</th>
              <th className="border-b-2 p-3 text-gray-700">Wins</th>
              <th className="border-b-2 p-3 text-gray-700">Win Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b p-3 text-gray-600">Mumbai Indians</td>
              <td className="border-b p-3 text-gray-600">14</td>
              <td className="border-b p-3 text-gray-600">10</td>
              <td className="border-b p-3 text-gray-600">71.4%</td>
            </tr>
            <tr>
              <td className="border-b p-3 text-gray-600">Chennai Super Kings</td>
              <td className="border-b p-3 text-gray-600">14</td>
              <td className="border-b p-3 text-gray-600">9</td>
              <td className="border-b p-3 text-gray-600">64.3%</td>
            </tr>
            <tr>
              <td className="border-b p-3 text-gray-600">Royal Challengers Bangalore</td>
              <td className="border-b p-3 text-gray-600">14</td>
              <td className="border-b p-3 text-gray-600">8</td>
              <td className="border-b p-3 text-gray-600">57.1%</td>
            </tr>
            <tr>
              <td className="border-b p-3 text-gray-600">Kolkata Knight Riders</td>
              <td className="border-b p-3 text-gray-600">14</td>
              <td className="border-b p-3 text-gray-600">7</td>
              <td className="border-b p-3 text-gray-600">50.0%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  
);
