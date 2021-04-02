import React, { useState } from 'react';
function FunCounter() {
    const [count, setCounter] = useState(0)
    function handelIncrement(){
        setCounter(count +1)
    }
    function handelDecrement(){
        setCounter(count -1)
    }
    function handelReset(){
        setCounter(0)
    }
    function getBadgeClasses(){
        let classes = "m-2 badge badge-";
        if(count === 0)
            classes += "warning"
        else if(count < 0)
            classes += "danger"
        else classes += "success"
        return classes;
    }
    function formatCount(){
        return count === 0 ? 'zero' : count;
    }
    console.log(count)
  return (
   <>
    <h1>Functional component</h1>
    <span className={getBadgeClasses()}>{formatCount()}</span>
    <button onClick={handelIncrement} className='btn btn-sm btn-primary'>Increment</button>
    <button onClick={handelDecrement} className='btn btn-sm btn-primary m-2'>Decrement</button>
    <button onClick={handelReset} className='btn btn-sm btn-warning m-2'>Reset</button>
    <button onClick={() => this.props.onDelete(this.props.counter)}className="btn btn-sm btn-danger m-2">Delete</button>
   </>
  );
}

export default FunCounter;