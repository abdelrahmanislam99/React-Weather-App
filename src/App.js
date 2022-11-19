import React, {Component} from 'react';
import Form from './components/Form'
import Weather from './components/Weather'
import PillExample from './components/Header/index'

const API_key ='fb7f8accb7ae175bd4a193eeae519ce6'

class App extends Component {

  state  ={

    city :"",
    timezone :"",
    weathercondition :"",
    temperature :"",
    windspeed :"",
    error :""

  }

  getInfo=async(e)=>{
    e.preventDefault()

    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    //console.log(city,country); // test
    const api = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}%2C&appid=${API_key}`);
    const data = await api.json ();
    // console.log(data)  //  test

    if( city && country ){
      this.setState({
        city : data.name,
        timezone :data.timezone,
        weathercondition :data.weather[0].description,
        temperature :data.main.temp,
        windspeed :data.wind.speed,
        error :""
      })
    } else {
      this.setState({
        city :"",
        timezone :"",
        weathercondition :"",
        temperature :"",
        windspeed :"",
        error :"Please enter valid data"
      })
    }

    

  }

  render(){
  return (
    <div className='parent-section'>
      <div className='parent-section-two'>
      <PillExample/>
      <Form getInfo={this.getInfo}/>
      <Weather
      
      city = {this.state.city}
      timezone={this.state.timezone}
      weathercondition={this.state.weathercondition}
      temperature ={this.state.temperature}
      windspeed={this.state.windspeed}
      error ={this.state.error}

      />

      
      </div>


    </div>
  );
}
}

export default App;