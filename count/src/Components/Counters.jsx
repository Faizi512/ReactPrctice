import React, { Component } from 'react';
import ClassCompCounter from './ClassCompCounter';
class Counters extends Component {
 state = { 
        counters: [
            {id : 1, value : 0},
            {id : 2, value : 3},
            {id : 3, value : -3},
            {id : 4, value : 3}
        ]
     }
    handelIncrement = (counter) =>{
        const counters = [...this.state.counters]
        const index = counters.indexOf(counter)
        counters[index].value++
        this.setState({counters})
    }
    handelDecrement = (counter) =>{
        const counters = [...this.state.counters]
        const index = counters.indexOf(counter)
        counters[index].value--
        this.setState({counters})
    }
    handelReset = (counter) =>{
        const counters = [...this.state.counters]
        const index = counters.indexOf(counter)
        counters[index].value = 0
        this.setState({counters})  
    }
    handleDelete = (counter) =>{
        const counters = this.state.counters.filter(c => c.id !== counter.id)
        this.setState({counters})
    }
    handleAdd = (counters) => {
        let size = counters.length;
        const counter = this.state.counters.push({id : size+1, value : 0})
        this.setState({counter})
    }
    render() { 
        return ( 
        <div>
            {this.state.counters.map(counter =>
                <div>
                <ClassCompCounter key={counter.id} 
                    onIncrement={this.handelIncrement}
                    onDecrement={this.handelDecrement}
                    onReset={this.handelReset}
                    onDelete={this.handleDelete}
                    counter={counter}>
                </ClassCompCounter>
                </div>
            )}
            <button onClick={()=>this.handleAdd(this.state.counters)} 
                        className="btn-secondary btn-sm m-2">
                        Add new counter</button>
        </div> );
    }
}

export default Counters;