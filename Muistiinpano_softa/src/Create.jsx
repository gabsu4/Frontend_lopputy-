import { useState, } from "react";
import './Create.css'
import { analyzeNote } from "./utils/analysointi";

function Creating(){
    const [tekstiä, setTekstiä] = useState("");

    const handleClick = async () => {
        return analyzeNote(tekstiä);
    }
    const handleChange = (e) => {
        setTekstiä(e.target.value);
    }

    return (
    <div className="create">
        <div>
        <h1>Create a note</h1>
        <p>Add new notes for course <br />Course:</p>
        </div>
        <div className="teksti">
            <textarea onChange={(e) => handleChange(e)} value={tekstiä} name="textinput"></textarea>
        </div>
        
        <div>
            <button onClick = {handleClick}>Save</button>
        </div>
    </div>
    );
}
export default Creating