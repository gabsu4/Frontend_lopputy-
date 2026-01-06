import {useState} from "react";


function AddCourse({ onAddCourse }  ){

    const [newCourseName, setNewCourseName] = useState("");
    const [message, setMessage] = useState("");

    //const getRemoteCourses = async (courseName) => {
    //    const url = "https://luentomuistiinpanoapi.netlify.app/.netlify/functions/courses";
    //    const data = {name:courseName};

    //    const response = await fetch (url, {
    //        method: "POST",
    //        body: JSON.stringify(data),
    //        headers: {
    //            "Content-Type": "application/json"
    //        },
    //    });
    //    const d = await response.json(); 
    //    console.log(d);
    //}


    const handleAddCourse = async () => {
        const courseName = newCourseName.trim();

        if(courseName.length === 0){
            setMessage("Opintojakson nimi pitää olla!");
            return;
        }

        const addedCourse = onAddCourse(courseName);
        const successMessage = `opintojakso '${addedCourse.name}' lisätty id:llä ${addedCourse.id}`;

        //await getRemoteCourses(courseName);
        setNewCourseName("");
        setMessage(successMessage);
    };
     
    const handleChange = (e) => {
        setNewCourseName(e.target.value);
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