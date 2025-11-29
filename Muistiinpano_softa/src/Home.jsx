import { useState } from 'react'
import Addnotes from './Addnotes.jsx'
import Listnotes from './Listnotes.jsx'
import Create from './Create.jsx'

function Home(){
    const [page, setPage] = useState('Home');
    const AddNote = () => {setPage('AddNotes');};
    const ListNote = () => {setPage('ListNotes');};
    const CreateNote = () => {setPage('Create');};
    return (
    <>
    <h1>NotesApp</h1>
    <button onClick={AddNote}>Add Notes</button>
    <button onClick={ListNote}>List Notes</button>
    <button onClick={CreateNote}>Create Note</button>
    {page === 'AddNotes' && <Addnotes />}
    {page === 'ListNotes' && <Listnotes />}
    {page === 'Create' && <Create />}
    </>
    );
}
export default Home