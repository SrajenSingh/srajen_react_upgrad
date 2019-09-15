import React from "react";
import Title from "./component/Title.js";
import Form from "./component/Form.js";
import Weather from "./component/Weather.js";    
const API_KEY = "04f7b56fac4ae23c247d97705dfdfa59";

class App extends React.Component
{
  state={
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    temp_max: undefined,
    temp_min: undefined,
    pressure: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  }
  getWeather = async (e) =>{
    e.preventDefault();
    const city=e.target.elements.city.value;
    
    const api_call=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data=await api_call.json();
    if(city)
    {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        temp_max: data.main.temp_max,
        temp_min: data.main.temp_min,
        pressure: data.main.pressure,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        description: data.weather[0].description,
        error: ""
      });
  
    }
    else
    {
       this.setState(
         {
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          temp_max: undefined,
          temp_min: undefined,
          description: undefined,
          pressure: undefined,
          sunrise: undefined,
          sunset: undefined,
          error: "Please enter the values."
      
         }
       );
    }
      }
  render()
  {
    return(
      <div>
      <Title/>
      <Form getWeather={this.getWeather}/>
       <div id="hello">
       <Weather
        temperature={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        temp_max={this.state.temp_max}
        temp_min={this.state.temp_min}
        description={this.state.description}
        pressure={this.state.pressure}
        sunrise={this.state.sunrise}
        sunset={this.state.sunset}
        error={this.state.error}
      />
      
        </div>
      
      
      </div>
    );
  }
};
export default App;