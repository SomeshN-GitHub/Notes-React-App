import NotesContainer from "./Components/NotesContainer";
import Sidebar from "./Components/Sidebar";
import "./app.css";
import { useState, useEffect } from "react";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  // ##################################################
  // adding note
  function addNote(color) {
    let tempDate = new Date();
    let newNote = {
      id: Date.now() + "" + Math.floor(Math.random() * 10),
      text: "",
      time: tempDate.toLocaleDateString() + " " + tempDate.toLocaleTimeString(),
      color
    };
    setNotes((currentArr) => [newNote, ...currentArr]);
  }
  useEffect(() => {
    window.localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // ###############Deletting Note###################################

  function deleteNote(id) {
    let tempNotes = [...notes];
    tempNotes = tempNotes.filter((item) => item.id !== id);
    setNotes(tempNotes);
  }

  // ###############Update Note###################################

  function updateNote(text, id) {
    let tempNotes = [...notes];
    let index = tempNotes.findIndex((item) => (item.id === id));
    if (index < 0) return;
    tempNotes[index].text = text;
    setNotes(tempNotes);
  }

  return (
    <div className="App">
      <Sidebar addNote={addNote} />
      <NotesContainer
        notes={notes}
        updateNote={updateNote}
        deleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
