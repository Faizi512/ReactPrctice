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
        this.setState({ counters: this.state.counters[counter.id-1].value=counter.value+1 });
    }
    handelDecrement = () =>{
        this.setState({value : this.state.counters.value - 1})
    }
    handelReset = () =>{
        this.setState({value : 0})   
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