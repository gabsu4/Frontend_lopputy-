import { useState } from 'react'
import AddCourse from './AddCourse.jsx'
import Listnotes from './Listnotes.jsx'
import Create from './Create.jsx'
import muistiinpano from './context/notescontext.jsx'

import './Home.css'

function Home(){
    const [page, setPage] = useState('Home');
    const AddCourses = () => {setPage('AddCourse');};
    const ListNote = () => {setPage('ListNotes');};
    const CreateNote = () => {setPage('Create');};
    return (
        <muistiinpano>
            <div className= "home">
                <div className= "navigation">
                    <h1>NotesApp</h1>
                    <button onClick={AddCourses}>Add Course</button>
                    <button onClick={CreateNote}>Create Note</button>
                    <button onClick={ListNote}>List Notes</button>
                </div>
                <div className="content">
                    {page === 'AddCourse' && <AddCourse />}
                    {page === 'Create' && <Create />}
                    {page === 'ListNotes' && <Listnotes />}
                </div>
            </div>
        </muistiinpano>
    );
}
export default Home