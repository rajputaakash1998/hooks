import React, { useEffect, useReducer } from "react";
import notesReducer from "../notes";
import AddNoteForm from "./AddNoteForm";
import NoteList from "./NoteList";
import NotesContext from "../context/notes-context";
function NoteApp() {
  // const [notes, setNotes] = useState([])
  const [notes, dispatch] = useReducer(notesReducer, []);

  useEffect(() => {
    const notesData = JSON.parse(localStorage.getItem("notes"));
    if (notesData) {
      // setNotes(notesData);
      dispatch({ type: "POPULATE_NOTES", notes: notesData });
    }
  }, []);

  useEffect(() => {
    console.log("Hi");
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

 
  return (
    <NotesContext.Provider value={{ notes, dispatch }}>
      <h1>Notes</h1>
      <NoteList />
      <AddNoteForm/>
    </NotesContext.Provider>
  );
}
export default NoteApp;
