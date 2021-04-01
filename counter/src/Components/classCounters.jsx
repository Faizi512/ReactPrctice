import React, { Component } from 'react';
import ClassCounter from './classCounter'
class classCounters extends Component {
    state = { 
        counters: [
            { id : 1, value : 0 },
            { id : 2, value : 3 },
            { id : 3, value : 2 },
            { id : 4, value : -2 }
        ]
     };

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId)
        this.setState({counters})
    }
    handleAdd = (counters) => {
        let size = counters.length;
        const counter = this.state.counters.push({id : size+1, value : 0})
        this.setState({counter})
    }
    render() { 
        console.log(this.state)
        return ( 
           <div> 
               {this.state.counters.map(counter =>
                <div>
                    <ClassCounter key={counter.id} onDelete={this.handleDelete} 
                    value = {counter.value}>
                   <h4>Counter # {counter.id}</h4>
                    </ClassCounter>
                </div>)}
                <button onClick={()=>this.handleAdd(this.state.counters)} 
                        className="btn-secondary btn-sm m-2">
                        Add new counter</button>
            </div>
        );
    }
}
 
export default classCounters;