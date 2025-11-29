import { useState } from "react";
import './Create.css'

function Creating(){
    const [value, setValue] = useState('');
    const click = () => {
        alert(value);
    }
    const change = event =>{
        setValue(event.target.value);
    }

    return (
    <div className="create">
        <div>
        <h1>Create a note</h1>
        <p>Add new notes for course <br />Course:</p>
        </div>
        <div className="text">
            <input onChange = {change} values = {value}/>
        </div>
        <div>
            <button onClick = {click}>Save</button>
            <button>Back</button>
        </div>
    </div>
    );
}
export default Creating