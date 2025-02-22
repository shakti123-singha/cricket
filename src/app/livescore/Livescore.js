// pages/livescore.js
import { mockLiveScores } from '../components/Mockdata';  // Make sure the data is imported correctly
import Card from '../card/page';
import { MdOutlineScoreboard } from 'react-icons/md';  // Import the icon for the scoreboard

const LiveScore = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Live Scores</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockLiveScores.map((score) => (
          <Card
            key={score.id}
            title={`${score.team1} vs ${score.team2}`}
            value={score.score}
            icon={<MdOutlineScoreboard />}  // Render the scoreboard icon
          />
        ))}
      </div>
    </div>
  );
};

export default LiveScore;
