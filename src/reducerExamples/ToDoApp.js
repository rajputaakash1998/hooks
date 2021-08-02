import React ,{useReducer,useState}from 'react'


function reducer(todos,action){
   switch(action.type){
       case 'add-todo':
           return[...todos,newTodo(action.payload.name)]
       case 'toggle-todo':
           return todos.map(todo=>{
               if(todo.id===action.payload.id){
                   return {...todo,complete:!todo.complete}
               }
               return todo
           })
        case 'delete-todo':
            return todos.filter(todo=>todo.id!==action.payload.id)
        default:
            return todos
   }
}
function newTodo(name){
    return{id:Date.now(),name:name,complete:false}
}


function Todo({todo,dispatch}) {
    return (
        <div>
            <span style={{color:todo.complete?"#AAA":"#000"}}>{todo.name}</span>
            <button onClick={()=>dispatch({type:'toggle-todo',payload:{id:todo.id}})}>Toggle</button>
            <button onClick={()=>dispatch({type:'delete-todo',payload:{id:todo.id}})}>Delete</button>
        </div>
    )
}

function ToDoApp() {

    const [todos,dispatch]=useReducer(reducer,[])
    const [name,setName]=useState('')

   function handleSubmit(e){
       e.preventDefault();
       dispatch({type:'add-todo',payload:{name:name}})
       setName('')
   }
    return (
        <div style={{textAlign:"center",padding:"50px"}}>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
        </form>
        {todos.map(todo=>{
            return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
        })}
        </div>
    )
}

export default ToDoApp;
