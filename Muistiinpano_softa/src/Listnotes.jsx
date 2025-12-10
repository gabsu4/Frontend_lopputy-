import {useState, useContext} from "react";
import { NotesContext } from "./context/notescontext.jsx";

function List(){
    const { notes, courses } = useContext(NotesContext);

    return (
    <div className="list">
        <div>
        <h1>List of notes</h1>
        Course:<button></button>
        </div>
    </div>
    );
}
export default List