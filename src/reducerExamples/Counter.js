import React ,{useReducer}from 'react'

function reducer(state,action){
    switch(action.type){
        case 'increment':
            return {count:state.count+1}
        case 'decrement':
            return {count:state.count-1}
        case 'reset':
            return {count:action.payload.count}
        default:
            return state
    }
    

}

function Counter() {

    const [state,dispatch]=useReducer(reducer,{count:0})
    // const [count,setCount]=useState(0)

    function increment(){
    //   setCount(prevCount=>prevCount+1)
    dispatch({type:'increment'})
    }

    function decrement(){
        // setCount(prevCount=>prevCount-1)
    dispatch({type:'decrement'})
    }
    return (
        <div style={{textAlign:"center",marginTop:"20px"}}>
        <button onClick={increment}>+</button>
        <span>{state.count}</span>
        <button onClick={decrement}>-</button>
        <button onClick={()=>dispatch({type:'reset',payload:{count:0}})}>Reset</button>
        </div>
    )
}

export default Counter
