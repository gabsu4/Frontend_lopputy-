import { useState } from 'react';
import Home from './Home.jsx'

function App() {
    const [courses, setCourses] = useState([]);
    const [notes, setNotes] = useState([]);

    const onAddCourse = (name) => {
        const newCourse = { id: courses.length + 1, name };
        setCourses([...courses, newCourse]);
        return newCourse;
    };

    const onSave = (note) => {
        setNotes([...notes, { ...note, id: Date.now() }]);
    };

    const onDelete = (id) => {
        setNotes(notes.filter(note => note.id !== id));
    };

    return (
        <Home 
            courses={courses} 
            notes={notes} 
            onAddCourse={onAddCourse} 
            onSaveNote={onSave}
            onDeleteNote={onDelete}
        />
    );
}   
export default App
