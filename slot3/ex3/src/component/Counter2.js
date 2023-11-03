import React,{useState} from 'react';

function Counter2() {
    const [counter,setCounter] = useState(0);
    return (
        <div>
            Count : {counter} 
            <br></br>
            <button onClick={()=>setCounter(counter + 2)}>add 2</button>
        </div>
    );
}

export default Counter2;