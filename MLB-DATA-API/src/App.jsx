import { useEffect, useState } from 'react';
import { getTeams } from './api/mlbapi';
import SearchTeam from './components/SearchTeam';
import TeamCard from './components/TeamCard';
import './assets/css/index.css';

const App = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
    const fetchTeams = async () => {
    const teamsData = await getTeams();
    setTeams(teamsData);
    };
    fetchTeams();
        }, []);

    return (
        <div>
        <h1>MLB Teams</h1>
        <SearchTeam setTeams={setTeams} />
        <div className="container">
        {teams.map(team => (
                <TeamCard key={team.team_id} team={team} />
            ))}
        </div>
    </div>
);
};

export default App;