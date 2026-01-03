import { useState } from 'react'
import AddCourse from './AddCourse.jsx'
import Listnotes from './Listnotes.jsx'
import Create from './Create.jsx'
import './Home.css'

function Home({ courses, notes, onAddCourse, onSaveNote, onDeleteNote }){
    const [page, setPage] = useState('Home');

    const AddCourses = () => {setPage('AddCourse');};
    const ListNote = () => {setPage('ListNotes');};
    const CreateNote = () => {setPage('Create');};

    return (
        <div>
            <div className= "home">
                <div className= "navigation">
                    <h1>NotesApp</h1>
                    <button onClick={AddCourses}>Add Course</button>
                    <button onClick={() => courses.length > 0 ? CreateNote() : alert("Lisää ensin kurssi!")}>
                        Create Note
                    </button>
                    <button onClick={ListNote}>List Notes</button>
                </div>
                <div className="content">
                    {page === 'AddCourse' && (
                        <AddCourse onAddCourse={onAddCourse} />
                    )}
                    {page === 'Create' && (
                        <Create courses={courses} onSaveNote={onSaveNote} />
                    )}
                    {page === 'ListNotes' && (
                        <Listnotes notes={notes} courses={courses} onDelete={onDeleteNote} />
                    )}
                </div>
            </div>
        </div>
    );
}
export default Home