import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import '../App.css'




function Home(props){

    function refreshPage(){ 
      window.location.href="/search";
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

    <div>
        <div>

        {

!(props.weather)? (
    
    
    <div> No data in</div>

) : (
<div>

<div className='displaybar'>

    <div 
        className='location text-center'>
        <h4> {props.weather.location.name} , {props.weather.location.country} </h4>
            
    </div>  

    <div 
        className='date'>
        {dateBuilder(new Date())}
            
    </div> 

    <div 
        className='text-center'> 
        {props.weather.current.observation_time}

    </div>

    
</div>

<div>
    <div className='weather-box'>

        <div className='temp'> 

            <h6 
            className='text-center'> 
            Temp: 
            {props.weather.current.temperature}°C 
            </h6>
        
        </div>

        <div className='weather'>

            <h6 
            className='text-center'>
            Humidity: 
            {props.weather.current.humidity}%
            </h6>
        
        </div>

        <div className='weather'>

            <h6 
            className='text-center'> 
            Weather Description: 
            {props.weather.current.weather_descriptions}
            </h6>
        
        </div>

        <p 
            className='text-center'> 
            <h9> Want to Search Another Location? </h9>
            <button className='btn btn-primary btn-block' onClick={refreshPage} > Click Here</button>
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

     
export default Home;


