"use client";

import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [matchData, setMatchData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.cricapi.com/v1/currentMatches?apikey=639a1488-2bf6-4838-affa-3144ff6ccef7&offset=0"
        );
        if (!response.ok) throw new Error("Failed to fetch match data.");
        const data = await response.json();
        setMatchData(data.data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className="text-center p-4 text-white">Loading...</div>;
  if (error) return <div className="text-center text-red-500 p-4">Error: {error}</div>;

  const liveMatches = matchData.filter(match => match.status === "LIVE");

  return (
    <div className="p-4 min-h-screen bg-gradient-to-r from-blue-900 to-gray-900 text-white">
      <h1 className="text-3xl font-bold text-yellow-400 text-center mb-6">
        Cricket Dashboard
      </h1>

      {/* Live Matches Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-yellow-400 text-center mb-4">Live Matches</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveMatches.length > 0 ? (
            liveMatches.map((match, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl border border-green-400 transition-all transform hover:scale-105"
              >
                <h2 className="text-lg font-semibold text-green-400 text-center mb-4">
                  {match.name}
                </h2>
                <p className="mb-2">
                  <span className="font-bold text-yellow-400">Match Type:</span>{" "}
                  {match.matchType?.toUpperCase()}
                </p>
                <p className="mb-2">
                  <span className="font-bold text-yellow-400">Venue:</span> {match.venue}
                </p>
                <p className="mb-2">
                  <span className="font-bold text-yellow-400">Status:</span>{" "}
                  <span className="text-green-400">{match.status}</span>
                </p>
                {match.score && match.score.length > 0 && (
                  <div className="mt-4 bg-gray-700 p-2 rounded-lg">
                    <p className="text-yellow-300 font-bold mb-2">Score:</p>
                    {match.score.map((inning, idx) => (
                      <p key={idx} className="text-sm text-white">
                        {inning.inning}: {inning.r}/{inning.w} ({inning.o} overs)
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-white">No live matches available</div>
          )}
        </div>
      </div>

      {/* Teams Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-yellow-400 text-center mb-4">Teams</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matchData.map((match, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl border border-orange-400 transition-all transform hover:scale-105"
            >
              <h2 className="text-lg font-semibold text-yellow-300 text-center mb-4">
                {match.name}
              </h2>
              <div className="flex justify-center gap-4 flex-wrap">
                {match.teams?.map((team, idx) => (
                  <div
                    key={idx}
                    className="bg-orange-500 px-4 py-2 rounded-lg text-center font-semibold text-white"
                  >
                    {team}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Match Scores */}
      <div>
        <h2 className="text-2xl font-bold text-yellow-400 text-center mb-4">Match Scores</h2>
        <div className="overflow-x-auto shadow-md rounded-lg bg-gray-800 p-4">
          <table className="table-auto w-full text-left border-collapse text-white">
            <thead>
              <tr className="bg-orange-600">
                <th className="p-2 border">Match Name</th>
                <th className="p-2 border">Inning</th>
                <th className="p-2 border">Runs</th>
                <th className="p-2 border">Wickets</th>
                <th className="p-2 border">Overs</th>
              </tr>
            </thead>
            <tbody>
              {matchData.length > 0 ? (
                matchData.map((match, index) => (
                  match.score && match.score.length > 0 ? (
                    match.score.map((inning, idx) => (
                      <tr key={`${index}-${idx}`} className="border-t border-gray-600">
                        <td className="p-2 border">{match.name}</td>
                        <td className="p-2 border">{inning.inning}</td>
                        <td className="p-2 border">{inning.r}</td>
                        <td className="p-2 border">{inning.w}</td>
                        <td className="p-2 border">{inning.o}</td>
                      </tr>
                    ))
                  ) : (
                    <tr key={index} className="border-t border-gray-600">
                      <td className="p-2 border">{match.name}</td>
                      <td colSpan="4" className="p-2 border text-center">No score available</td>
                    </tr>
                  )
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="p-2 border text-center">No matches available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
