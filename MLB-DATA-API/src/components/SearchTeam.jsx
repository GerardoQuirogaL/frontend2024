import { useState } from 'react';
import { getTeams } from '../api/mlbapi';

const SearchTeam = ({ setTeams }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = async () => {
        const allTeams = await getTeams();
        const filteredTeams = allTeams.filter(team =>
            team.name_display_full.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setTeams(filteredTeams);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for a team..."
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchTeam;