import React, { Component } from 'react';
class ApiCall extends Component {
    state = { weather : null }
    async test(){ 
       const url = "https://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=3fc1506745cf0d4b2df471822c78c85f"
        // const url = "https://api.randomuser.me"
        const response = await fetch(url)
        const data = await response.json()  
        this.setState({weather : data[2]})
       console.log(this.state.weather)
    }

    render() { 
        return ( <div >
            <button onClick={this.test} className="btn btn-primary">btn</button>
            <p>{this.state.weather}</p></div> );
    }
}
 
export default ApiCall;