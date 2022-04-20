import React from 'react';
import { useState } from 'react';
import {AiOutlinePlus} from 'react-icons/ai';
import './sidebar.css';


const Sidebar = (props) => {
    const colors = ["#fe9b73", "#fec972", " #00d5fe", "#b694fd", "#e4ee92"];
    const [isListOpen, setIsListOpen] = useState(false);


  return (
    <div className='sidebar'>
        <button ><AiOutlinePlus className='plus' onClick={()=>setIsListOpen(!isListOpen)} /></button>
        <ul className={`color_container ${isListOpen ? "color_container_active" : ""}`} >
            {colors.map((item, index)=> 
            <li key={'c'+index} style={{backgroundColor:item}} className='color_btn'
            onClick={()=>(setIsListOpen(!isListOpen),            
              props.addNote(item))}>

              </li>)}
        </ul>
    </div>
  )
}

export default Sidebar