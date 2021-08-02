import React, { useState, useContext } from "react";
import NotesContext from "../context/notes-context";

function AddNoteForm() {
  const { dispatch } = useContext(NotesContext);
  
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNote = (e) => {
    e.preventDefault();
    // setNotes([...notes,{title,body}])
    dispatch({
      type: "ADD_NOTE",
      title,
      body,
    });
    setTitle("");
    setBody("");
  };

  return (
    <div>
      <p>Add Note</p>
      <form onSubmit={addNote}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        <button>Add Note</button>
      </form>
    </div>
  );
}

export default AddNoteForm;
