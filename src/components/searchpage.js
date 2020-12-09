import React, { useState } from 'react';
import config from './config';
import axios from 'axios';
import Home from './home';

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
                console.log(info.data)
            })
        }

    }

    return(
        <div className='container'>
            <div className='login-form'> 
            {(weather)? (
                <Home weather = {weather}/>
            ) : (
                <form>
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
           )}
            </div>
        </div>
    )
}

export default SearchPage;