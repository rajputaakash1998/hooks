import React ,{useState,useRef}from 'react'

function RefExample() {
    const [num,setNum]=useState(0);

    const inputOne=useRef();
    const inputTwo=useRef();

    const getNumBox=()=>{
        console.log("Hello");
        console.log(inputOne.current);
        inputOne.current.style.color="red";
        inputOne.current.focus();
        
        
    }

    const getTextBox=()=>{
        console.log("World");
        console.log(inputTwo.current)
        inputTwo.current.style.color="blue";
        inputTwo.current.style.height="50px";
        inputTwo.current.focus();
    }
    return (
        <>
          <h2>Enter Your Details</h2>
          <input type="number" value={num} ref={inputOne} onChange={(e)=>setNum(e.currentTarget.value)}/>
          <input type="text" value={num} ref={inputTwo} onChange={(e)=>setNum(e.currentTarget.value)}/>
          <h3>Value is : {num}</h3>
          <button onClick={()=>getNumBox()}>Rupees</button>
          <button onClick={()=>getTextBox()}>Dollars</button>
        </>
    )
}

export default RefExample;
