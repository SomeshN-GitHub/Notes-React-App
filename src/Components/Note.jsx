import React from 'react'

import {MdDeleteForever} from 'react-icons/md';

import './note.css';


const Note = (props) => {
  let timeout;  
  function debounce(update){
    clearTimeout(timeout);
    timeout= setTimeout(update, 200);

    }
  
  function update(text, id){
    debounce(()=>props.updateNote(text, id));
  }


  return (
    <div className='note' style={{backgroundColor: props.note.color}}>
        <textarea onChange={(e)=> update(e.target.value , props.note.id)}
         defaultValue={props.note.text} 
         placeholder='Type Note here... ' spellCheck='false'></textarea>
        <div className="btn_container">
            <small className='date'>Added on - {props.note.time}</small>
            <button type='button' className='del'><MdDeleteForever className='btn' onClick={()=>props.deleteNote(props.note.id)} /></button>
        </div>
    </div>
  )
}

export default Note