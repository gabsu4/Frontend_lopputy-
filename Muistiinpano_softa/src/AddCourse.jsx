import {useState} from "react";


function AddCourse({ onAddCourse }  ){

    const [newCourseName, setNewCourseName] = useState("");
    const [message, setMessage] = useState("");

    const handleAddCourse = () => {
        const courseName = newCourseName.trim();

        if(courseName.length === 0){
            setMessage("Opintojakson nimi pitää olla!");
            return;
        }
        const addedCourse = onAddCourse(courseName);
        const successMessage = `opintojakso '${addedCourse.name}' lisätty id:llä ${addedCourse.id}`;

        setNewCourseName("");
        setMessage(successMessage);
    };
     
    const handleChange = (e) => {
        setNewCourseName(e.target.value);
        setMessage("");
    }

    return (
    <div>
        <h1>Add Courses</h1>

        <div>
            <input type="text" value={newCourseName} onChange= {handleChange}/>
            <button onClick={handleAddCourse}>Lisää</button>
            {message && <p>{message}</p>}
        </div>
    </div>  
    );
}
export default AddCourse