export const getTeamsList = async () => {
  const url = 'http://lookup-service-prod.mlb.com/json/named.team_all_season.bam?sport_code=\'mlb\'&all_star_sw=\'N\'&sort_order=name_asc&season=\'2017\'';
  const response = await fetch(url);
  const teamsList = await response.json();
  
  return teamsList;
}
