import React, { Component } from 'react';
class ClassCompCounter extends Component {
    state = {  }
    
    render() { 
        return ( 
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount(this.props.counter.value)}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-sm btn-primary m-2" >Increment</button>
                <button onClick={() => this.props.onDecrement()} className="btn btn-sm btn-primary m-2">Decrement</button>
                <button onClick={() => this.props.onReset()}className="btn btn-sm btn-warning m-2">Reset</button>
                <button onClick={() => this.props.onDelete(this.props.value)}className="btn btn-sm btn-danger m-2">Delete</button>
            </div>
         );
    }
    
    getBadgeClasses() {
        let classes = "m-2 badge badge-"
        if(this.props.counter.value === 0)
            classes += "warning"
        else if(this.props.counter.value < 0)
            classes += "danger"
        else classes += "success"
        return classes;
    }
    
    formatCount(value){
        return value === 0 ? 'zero' : value;
    }
}
 
export default ClassCompCounter;