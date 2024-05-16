import WheatherCard from "./components/WeatherCard"
import './assets/css/index.css'

const App = () => {
  

return (
  <div className="container">
  <h1>Wheather App</h1>
  <hr />
  <div className="row">
    <div className="col">
          <WheatherCard />
      </div>
  </div>
  </div>
)
}

export default App
