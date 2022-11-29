import React, { useState } from 'react'

const WeatherCard = ({ weather, temperature, joinTemperature, isCelsius, newApiSearch }) => {

    const [place, setPlace] = useState("")

    const handleChange = (e) => {
        setPlace(e.target.value)
    }

    return (
        <article className='app__weather'>
            <header className='header__search'>
                <input
                    type="text"
                    value={place}
                    onChange={handleChange} />
                <section className='button__search'>
                    <button onClick={() => newApiSearch(place)}>Search</button>
                </section>
            </header>
            <section className='weather__information'>
                <h1 className='weather__title'>Weather</h1>
                <h3 className='weather__place'>{weather.name}, {weather.sys.country}</h3>
            </section>
            <section className='weather__main'>
                <div className='imagen_weather img--animation'>
                    <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="" />
                </div>
                <h4 className='weather__description'>{weather.weather[0].description}</h4>
                <section className='weather__temperature'>
                    <p className='weather__name'>{isCelsius ? `${temperature.celsius} °C` : `${temperature.fahrenheit} °F`}</p>
                </section>
            </section>
            <section>
                <i class='bx bxs-cloud' ></i>
            </section>
            <section className='button__temperature'>
                <button onClick={joinTemperature} >Degrees °F/°C</button>
            </section>
            <section className='weather__features features--weather'>
                <ul>
                    <li className='weather__features wind--speed'>
                        <i class='bx bxl-tailwind-css'></i>
                        <b>Wind speed: </b>{weather.wind.speed} m/s</li>
                    <li className='weather__features'>
                        <i class='bx bx-cloud' ></i>
                        <b>Clouds:</b> {weather.clouds.all} %</li>
                    <li className='weather__features'>
                        <i class='bx bx-sort-down'></i>
                        <b>Pressure:</b> {weather.main.pressure} hPa</li>
                </ul>
            </section>
            <section>
                <i class='bx bxs-sun'></i>
            </section>
        </article>
    )
}

export default WeatherCard