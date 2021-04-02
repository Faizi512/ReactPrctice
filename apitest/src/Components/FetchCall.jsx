import React, { Component } from 'react';

class FetchCall extends Component {
    state = { 
        weather: 0,
        cTemp: 0,
        cityName: null
     }
    setCity=(event)=>{
        this.setState({cityName: event.target.value})
    }
    getWeather=()=>{
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+this.state.cityName+"&appid=3fc1506745cf0d4b2df471822c78c85f").then(
            (Response) => {
                Response.json().then( data =>{
                    const weather = data.main.temp
                    const cTemp = (data.main.temp - 273).toFixed(2)
                    this.setState({weather, cTemp})}
                )
                
            }
        )
    }
    getCTemp=(kTemp)=>{
        return kTemp-273
    }
    render() { 
        return ( 
        <div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="City name" onChange={this.setCity}/>

                <button className="btn btn-outline-secondary" type="button" onClick={this.getWeather}>Get Weather</button>
            </div>
            <span>The weather for city {this.state.cityName} is {this.state.weather} K or {this.state.cTemp} C</span>
        </div> 
        );
    }
}
 
export default FetchCall;