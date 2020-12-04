import React, { useState } from 'react';
import config from './config';
import axios from 'axios';
import '../App.css'
import {
    Link,
    useHistory,
} from 'react-router-dom'

const BASE = config.base
const KEY = config.key


function SearchPage(){

    const [weather, setWeather] = useState(null)

    const [country, setCountry] = useState('')

    const [city, SetCity] = useState('')

    const handleCountryChange = (e)=>{
        setCountry(e.target.value)
    }

    const handleCityChange =(e)=>{
        SetCity(e.target.value)
    }


    const search = (e)=>{
        e.preventDefault();
        if(country === '' || city === ''){
            alert('Provide Valid Country & City. Try Again')
            return
        }
       
        if(country && city){
            axios.get(`${BASE}?access_key=${KEY}&query=${country},${city}`)
            .then((info) =>{
                setWeather({...info.data})
                console.log(info.data.current)
            })
        }

    }


    const dateBuilder = (d) =>{
        let months = 
        ['January', 
         'February', 
         'March', 
         'April', 
         'May', 
         'June', 
         'July', 
         'August', 
         'September', 
         'October', 
         'November',
         'December'];
        
        let days = 
        ['Sunday', 
         'Monday', 
         'Tuesday', 
         'Wednesday', 
         'Thursday', 
         'Friday', 
         'Saturday'];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return  `${day} ${date} ${month} ${year}`

    }



    return(

    <div className='container'>
        <div className='login-form'>

        {

!(weather)? (
    
    <form>
    <h1 className='text-center'> To get the Weather? Type in Here...</h1>

    <div className='form-group'>
            <input 
            type='country' 
            className='form-control' 
            placeholder='Country' 
            required='required' 
            name='country' 
            value={country}
            onChange={handleCountryChange}
        />
        
    </div>

        <div className='form-group'>
            <input 
            type='city' 
            className='form-control'
            placeholder='City' 
            required='required' 
            name='city' 
            value={city}
            onChange={handleCityChange}
            />

        </div>

        <div className='form-group'>

            <button 
                className='btn btn-primary btn-block'
                onClick={search} >Search
            </button>

        </div>
    
    
</form>

) : (
<div>

<div className='displaybar'>

    <div 
        className='location text-center'>
        <h4> {city} , {country} </h4>
            
    </div>  

    <div 
        className='date'>
        {dateBuilder(new Date())}
            
    </div> 

    <div 
        className='text-center'> 
        {weather.current.observation_time}

    </div>

    
</div>

<div>
    <div className='weather-box'>

        <div className='temp'> 

            <h6 
            className='text-center'> 
            Temp: 
            {weather.current.temperature}°C 
            </h6>
        
        </div>

        <div className='weather'>

            <h6 
            className='text-center'>
            Humidity: 
            {weather.current.humidity}%
            </h6>
        
        </div>

        <div className='weather'>

            <h6 
            className='text-center'> 
            Weather Description: 
            {weather.current.weather_descriptions}
            </h6>
        
        </div>

        <p 
            className='text-center'> 
            <h9> Want to Search Another Location? </h9>
            <Link to ='/signup'>
            Click Here</Link>
        </p>

    </div>
</div>
  

</div>
)
}
            

        </div>

        
</div>
)

}

     
export default SearchPage;