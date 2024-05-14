import { useEffect, useState } from "react"
import { getCurrentWeather } from "../api/weatherapi"

const WheatherCard = () =>{
    const [weather, setWeather] = useState(null)
  
  useEffect(() => {
    const getweather = async () =>{
      const weather = await getCurrentWeather()

      setWeather(weather)
    }

    getweather()
  },[] )
    
    
    return (
    <div className="card" style={{width: "18rem"}}>
    <img src={`http:${weather?.current.condition.icon}`} className="card-img-top" alt="..."/>
    <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
  </div>
</div>
    )
}


export default WheatherCard