import { useForm } from "../Hooks/useForm"
import { useState } from "react";
import { getTeamsList } from "../api/mlbapi";

const SearchTeam = () => {
  const [values, handleInputChange, reset] = useForm({ 
    teamName: '' 
  });

  const [searchedTeam, setSearchedTeam] = useState(null);

  const handleSearchTeam = async () => {
    try {
      const teamsData = await getTeamsList();
      const foundTeam = teamsData?.team_all_season?.queryResults?.row.find(team => team.name_display_full.toLowerCase() === values.teamName.toLowerCase());
      setSearchedTeam(foundTeam);
    } catch (error) {
      console.error('Error searching for team:', error);
    }
    reset();
  };

  return (
    <div className="input-group">
      <span className="input-group-text">Team Name</span>
      <input
        className="form-control"
        id="teamName"
        name="teamName"
        onChange={handleInputChange}
        type="text"
        value={values.teamName}
      />
      <button
        className="btn btn-primary"
        onClick={handleSearchTeam} 
        type="button"
      >
        Search
      </button>

      {searchedTeam && (
        <div>
          <h2>{searchedTeam.name_display_full}</h2>
          <p>Phone: {searchedTeam.phone_number}</p>
          <p>Venue: {searchedTeam.venue_name}</p>
          {/* Mostrar más detalles según sea necesario */}
        </div>
      )}
    </div>
  );
}

export default SearchTeam;
