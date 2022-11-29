import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Loader from './assets/components/Loader'
import WeatherCard from './assets/components/WeatherCard'

function App() {
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temperature, setTemperature] = useState()
  const [isCelsius, setIsCelsius] = useState(true)


  const success = (position) => {
    const newCoords = {
      lat: position.coords.latitude,
      lon: position.coords.longitude
    }
    setCoords(newCoords)
  }

  const newApiSearch = (cityName) => {
    const API_KEY = "fe62b0bf9d777c7b5b1214f197405773"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
    axios.get(url)
      .then(res => setWeather(res.data))
      .catch(err => alert('No place found'))
  }

  const joinTemperature = () => { setIsCelsius(!isCelsius) }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  useEffect(() => {
    if (coords) {
      const API_KEY = "fe62b0bf9d777c7b5b1214f197405773"
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}`
      axios.get(url)
        .then(res => {
          const tempKelvin = res.data.main.temp
          const tempCelsius = (tempKelvin - 273.15).toFixed(0)
          const tempFahrenheit = ((tempCelsius * 9 / 5) + 32).toFixed(0)
          const newTemperature = {
            celsius: tempCelsius,
            fahrenheit: tempFahrenheit
          }
          setTimeout(() => {
            setTemperature(newTemperature)
            setWeather(res.data)
          }, 2000)
        })
        .catch(err => console.log(err))
    }
  }, [coords])

  return (
    <div className="App">
      {
        weather ?
          <WeatherCard
            weather={weather}
            temperature={temperature}
            joinTemperature={joinTemperature}
            isCelsius={isCelsius}
            newApiSearch={newApiSearch}
          />
          : <Loader />
      }
    </div>
  )
}

export default App
