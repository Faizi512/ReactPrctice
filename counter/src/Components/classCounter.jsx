import React, { Component } from 'react';

class classCounter extends Component {
    state = { 
        value : this.props.value
     };
    render(){        
        return(
        <>
            {this.props.children}
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={this.handelIncrement} className='btn btn-primary'>Increment</button>
            <button onClick={this.handelDecrement} className='btn btn-primary m-2'>Decrement</button>
            <button onClick={this.handelReset} className='btn btn-warning m-2'>Reset</button>
            <button onClick={() => this.props.onDelete(this.props.value)} className="btn btn-danger m-2 btn-sm">Delete</button>
        </>
        );
    }

    handelIncrement = () =>{
        this.setState({value : this.state.value + 1})
    }
    handelDecrement = () =>{
        this.setState({value : this.state.value - 1})
    }
    handelReset = () =>{
        this.setState({value : 0})
        
    }
    getBadgeClasses() {
        let classes = "m-2 badge badge-";
        if(this.state.value === 0)
            classes += "warning"
        else if(this.state.value < 0)
            classes += "danger"
        else classes += "success"
        return classes;
    }

    formatCount(){
        const {count: value} = this.state;
        return value === 0 ? 'zero' : value;
    }
}
 
export default classCounter;