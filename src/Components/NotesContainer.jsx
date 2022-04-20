import React from 'react'
import Note from './Note';
import './notesContainer.css';

const NotesContainer = (props) => {

  return (
    <div className='notes_container'>
        <h1>Notes</h1>
        <div className="container">
          {props.notes.length >0 ?(props.notes.map((item, index)=>
              <Note key={item.id} note={item} updateNote={props.updateNote}  deleteNote={props.deleteNote}/>
          )):<h1>No Notes added yet.</h1>}            
        </div>
    </div>
  )
}

export default NotesContainer