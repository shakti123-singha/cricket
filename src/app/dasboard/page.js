import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [cricketData, setCricketData] = useState({ currentMatches: [], seriesData: {} });

  useEffect(() => {
    const fetchCricketData = async () => {
      try {
        const API_KEY = "639a1488-2bf6-4838-affa-3144ff6ccef7";

        // Fetch Current Matches
        const matchesResponse = await axios.get(
          `https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}&offset=0`
        );
        const allMatches = matchesResponse.data.data;
        const currentMatches = allMatches.map((match) => ({
          id: match.id,
          name: match.name,
          matchType: match.matchType || "Unknown",
          status: match.status,
          venue: match.venue,
          date: match.date,
          teams: match.teams,
          score: match.score,
        }));

        // Fetch Series Info
        const seriesResponse = await axios.get(
          `https://api.cricapi.com/v1/series_info?apikey=${API_KEY}&id=d5a498c8-7596-4b93-8ab0-e0efc3345312`
        );
        const seriesData = seriesResponse.data.data;

        setCricketData({ currentMatches, seriesData });
      } catch (error) {
        console.error("Error fetching cricket data:", error);
      }
    };

    fetchCricketData();
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4 md:p-6">
      <h1 className="text-center text-2xl md:text-3xl font-bold text-yellow-500">🏏 IPL Cricket Dashboard</h1>

      {/* Series Info Section */}
      {cricketData.seriesData.info && (
        <div className="bg-blue-800 p-4 md:p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-lg md:text-xl font-semibold">📅 Series Information</h2>
          <p>🏆 <strong>{cricketData.seriesData.info.name}</strong></p>
          <p>📅 {cricketData.seriesData.info.startdate} - {cricketData.seriesData.info.enddate}</p>
          <p>🏏 Matches: {cricketData.seriesData.info.matches}</p>
          <p>🔢 Teams: {cricketData.seriesData.info.squads}</p>
        </div>
      )}

      {/* Current Matches */}
      <h2 className="text-xl md:text-2xl font-semibold mt-8 text-orange-500">📌 Live Matches</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {cricketData.currentMatches.map((match) => (
          <div key={match.id} className="bg-black p-4 md:p-6 rounded-lg shadow-md border border-yellow-500">
            <h3 className="text-md md:text-lg font-bold text-white">{match.name} ({match.matchType.toUpperCase()})</h3>
            <p className="text-green-400">Status: {match.status}</p>
            <p className="text-gray-400">Venue: {match.venue}</p>
            <p className="text-gray-400">Date: {match.date}</p>
            <p className="text-blue-400">Teams: {match.teams.join(" vs ")}</p>
            {/* Score Table */}
            <div className="overflow-x-auto">
              <table className="w-full mt-3 border-collapse border border-gray-600 text-sm md:text-base">
                <thead>
                  <tr className="bg-gray-700 text-white hidden md:table-row">
                    <th className="border border-gray-600 p-2">Inning</th>
                    <th className="border border-gray-600 p-2">Runs</th>
                    <th className="border border-gray-600 p-2">Wickets</th>
                    <th className="border border-gray-600 p-2">Overs</th>
                  </tr>
                </thead>
                <tbody>
                  {match.score.map((inning, index) => (
                    <tr key={index} className="bg-gray-800 text-center border-b border-gray-600 block md:table-row">
                      <td className="border border-gray-600 p-2 text-yellow-400 block md:table-cell">{inning.inning}</td>
                      <td className="border border-gray-600 p-2 text-green-400 block md:table-cell">{inning.r}</td>
                      <td className="border border-gray-600 p-2 text-red-500 block md:table-cell">{inning.w}</td>
                      <td className="border border-gray-600 p-2 text-gray-400 block md:table-cell">{inning.o}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

      {/* Teams Section */}
      <h2 className="text-xl md:text-2xl font-semibold mt-8 text-orange-500">🏏 Teams</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
        {cricketData.seriesData.matchList && cricketData.seriesData.matchList.map((match) => (
          <div key={match.id} className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-md border border-blue-500 text-center">
            <h3 className="text-md md:text-xl font-bold text-yellow-400">{match.teams[0]} vs {match.teams[1]}</h3>
            <p className="text-gray-400">{match.venue}</p>
            <p className="text-gray-400">{match.date}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
}
