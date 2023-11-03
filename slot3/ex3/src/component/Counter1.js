import React,{useState} from 'react';

function Counter1() {
    const [counter,setCounter] = useState(0);
    return (
        <div>
            Count : {counter} 
            <br></br>
            <button onClick={()=>setCounter(counter + 1)}>add 1</button>
        </div>
    );
}

export default Counter1;