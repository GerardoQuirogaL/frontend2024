export const getTeams = async () => {
  const url = import.meta.env.VITE_MLBAPI_BASE_URL;
  try {
      const response = await fetch(`${url}/json/named.team_all_season.bam?sport_code='mlb'&all_star_sw='N'&sort_order=name_asc&season='2017'`);
      if (!response.ok) {
          throw new Error('Error fetching teams');
      }
      const teamsData = await response.json();
      return teamsData.team_all_season.queryResults.row;
  } catch (error) {
      console.error('Error fetching teams:', error);
      return null;
  }
};
