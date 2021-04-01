import React from 'react'
import {Button} from 'reactstrap'

class Button_ extends React.Component{
    render(){
        return(
            <Button className="Primary" onClick={() => alert("Test")}>Primary</Button>
        );
    }
}
export default Button_;