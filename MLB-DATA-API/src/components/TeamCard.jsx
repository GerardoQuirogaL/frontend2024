const TeamCard = ({ team }) => {
  return (
    <div className="col-3 m-2">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{team.name_display_full}</h5>
          <p className="card-text">
            <strong>Abbreviation:</strong> {team.abbrev}
          </p>
          <p className="card-text">
            <strong>Division:</strong> {team.division}
          </p>
          <p className="card-text">
            <strong>League:</strong> {team.league}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
