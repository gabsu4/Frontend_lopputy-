import {useState, useContext} from "react";
import { NotesContext } from "./context/notescontext.jsx";

function AddCourse(){
    const {addCourse} = useContext(NotesContext);

    const [newCourseName, setNewCourseName] = useState("");
    const [message, setMessage] = useState("");

    const handleAddCourse = () => {
        const courseName = newCourseName.trim();
        if(courseName.length === 0){
            setMessage("Opintojakson nimi pitää olla!");
            return;
        }
        const newCourse = { name: courseName};
        const addedCourse = addCourse(newCourse);
        const successMessage = `Opintojakso '${addedCourse.name}' lisätty id: ${addedCourse.id}`;
        
        setNewCourseName("");
        setMessage(successMessage);
    };
     
    const handleChange = (e) => {
        setNewCourseName(e.target.value);
        setMessage("");
    }

    return (
    <div className="addcourse">
        <h1>Add Courses</h1>

        <div className="text">
            <input type="text" value={newCourseName} onChange= {handleChange}/>
            <button onClick={handleAddCourse}>Lisää</button>
            {message && <p className="status-message">{message}</p>}
        </div>
    </div>
    );
}
export default AddCourse