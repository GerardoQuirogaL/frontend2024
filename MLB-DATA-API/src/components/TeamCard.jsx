import teamImages from '../api/teamImages';

const TeamCard = ({ team }) => {
  const imageUrl = teamImages[team.team_id] || "https://via.placeholder.com/150";

  return (
    <div className="col-3 m-2">
      <div className="card">
        <div className="card-body">
      
        <img src={imageUrl} alt={team.name} />

          <h5 className="card-title">{team.name_display_full}</h5>
          <p className="card-text">
            <strong>Firts Year Of Play:</strong> {team.first_year_of_play}
          </p>
          <p className="card-text">
            <strong>Abbreviation:</strong> {team.name_display_brief}
          </p>
          <p className="card-text">
            <strong>League:</strong> {team.league_full}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
