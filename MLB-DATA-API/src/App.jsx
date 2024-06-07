import SearchTeam from "./components/SearchTeam"
import TeamCard from "./components/TeamCard"
import './assets/css/index.css'
import { useState, useEffect } from "react"
import { getTeamsList } from "./api/mlbapi"

const App = () => {
  const [teams, setTeams] = useState([])

  useEffect(() => {
    const fetchTeams = async () => {
      const teamsData = await getTeamsList()
      setTeams(teamsData?.team_all_season?.queryResults?.row || [])
    }

    fetchTeams()
  }, [])

  return (
    <div className="container">
      <h1>MLB Teams</h1>
      <hr />

      <SearchTeam />
      <hr />

      <div className="row">
        {teams.map((team, index) => (
          <TeamCard key={index} team={team} />
        ))}
      </div>
    </div>
  )
}

export default App
