import React,{useState} from 'react';

const Caculator = () => {

    const [op1,setOp1] = useState(0);
    const [op2,setOp2] = useState(0);
    const [result,setResult] = useState();

    return (
        <div>
            <input type='number' onChange={(e)=>setOp1(parseInt(e.target.value))}></input>
            <br />
            <input type='number'onChange={(e)=>setOp2(parseInt(e.target.value))}></input>
            <br/>
            Result:{result}
            <button type='button' onClick={()=>setResult(op1+op2)}>+</button>
            <button type='button'  onClick={()=>setResult(op1-op2)}>-</button>
            <button type='button'  onClick={()=>setResult(op1*op2)}>*</button>
            <button type='button'  onClick={()=>setResult(op1/op2)}>/</button>
        </div>
    );
};

export default Caculator;