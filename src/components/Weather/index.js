import React  from 'react';
import './style.css'

const Weather =(props) =>{

    return(
      <div className='weather-div'>
        
        {
          props.city && <p className='weather-para'>City :<span  className='weather-span'>{props.city}</span> </p>  
        }
        {
          props.timezone && <p className='weather-para'>Timezone :<span  className='weather-span'>{props.timezone}</span> </p>  
        }
        {
          props.weathercondition && <p className='weather-para'>Weather condition : <span  className='weather-span'>{props.weathercondition}</span></p>  
        }
        {
          props.temperature && <p className='weather-para'>Temperature : <span  className='weather-span'>{props.temperature}</span></p>  
        }
        {
          props.windspeed && <p className='weather-para'>Wind speed : <span  className='weather-span'>{props.windspeed}</span></p>  
        }
        {
          props.error && <p className='weather-para'><span className="err-span"> Error : <span  className='weather-span'>{props.error}</span></span></p>
        }
        
      </div>
  )


  }

export default Weather;