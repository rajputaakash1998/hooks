import React ,{useState,useReducer}from 'react'

const initialState=[{id:Date.now(),name:"Aaksh",email:"aaskashrajput201@gmail.com"}]

function reducer(state,action){
switch(action.type){
    case 'add':
        return [...state,action.payload]
    case 'delete':
      return state.filter((contact)=>{
          return contact.id!==action.payload.id;
      });
    default:
        throw new Error();
}
}

function ContactApp() {
    const [state,dispatch]=useReducer(reducer,initialState);
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    

    const addContact=(e)=>{
       e.preventDefault();
       const contact={
           id:Date.now(),
           name:name,
           email:email
       }
       setName("");
       setEmail("");
       dispatch({type:'add',payload:contact})

    };

    return (
        <div style={{ marginTop:"50px",textAlign:"center",padding:"20px" ,width: "500px",height:"auto",margin: "auto",border: "3px solid black"}}>
            <form onSubmit={addContact}>
                <h1>Contacts</h1>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <div><button>Add Contact</button></div>
                
            </form>

            <div>
                <ul>
                    {state.map(contact=>{
                        console.log(contact.name,contact.email)
                        return (
                            <li key={contact.id}>
                            {<h2>{contact.name}</h2> }
                            <h2>{contact.email}</h2>
                            <div>
                                <button onClick={()=>dispatch({type:'delete',payload:{id:contact.id}})}>Delete</button>
                            </div>
                        </li>
                        )
                        
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ContactApp
