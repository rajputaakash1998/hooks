import React from "react";
import CompA from "./ContextExamples/CompA";
import ContactApp from "./reducerExamples/ContactApp";
import Counter from "./reducerExamples/Counter";
// import NoteApp from "./components/NoteApp";
import ToDoApp from "./reducerExamples/ToDoApp";
import CombinedReducers from "./redux/CombinedReducers";
import CounterRedux from "./redux/CounterRedux";
import RefExample from "./useRef/RefExample";
import {Provider} from "react-redux";
function App(){
  return (
    // <NoteApp/>
    // <Counter/>
    // <ToDoApp/>
   // <CompA/>
   //   <RefExample/>
   <ContactApp/>
  
  //  <CounterRedux/>

  
  // <CombinedReducers/>
  )

}
export default App;
