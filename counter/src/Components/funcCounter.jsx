import React, { useState } from 'react';
// const FuncCounter = ()=>{
//     const [counters, setCounters] = useState([])
//     console.log(counters)
//     return(
//         <div>hello</div>
//     )
// }

function FuncCounter() {
    const [count, setCounter] = useState(0)
    function handelIncrement(){
        setCounter(count +1)
        console.log(count);
    }
    function handelDecrement(){
        setCounter(count -1)
        console.log(count);
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
    <button onClick={handelIncrement} className='btn btn-primary'>Increment</button>
    <button onClick={handelDecrement} className='btn btn-primary m-2'>Decrement</button>
   </>
  );
}

export default FuncCounter;