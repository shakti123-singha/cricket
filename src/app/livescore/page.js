import {  mockdata } from './Mockdata';  // Correct import
import Card from './page';
import { MdOutlineScoreboard } from 'react-icons/md';

const LiveScore = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Live Scores</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockdata.map((score) => (
          <Card
            key={score.id}
            title={`${score.team1} vs ${score.team2}`}
            value={score.score}
            icon={<MdOutlineScoreboard />}
          />
        ))}
      </div>
    </div>
  );
};

export default LiveScore;