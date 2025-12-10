import { createContext, useState, useEffect } from "react";


const courseAPI = "https://luentomuistiinpanoapi.netlify.app/.netlify/functions/courses";
const notesAPI = "https://luentomuistiinpanoapi.netlify.app/.netlify/functions/notes";
const LocalCourses = 'localCourses';
const LocalNotes = 'localNotes';


export const NotesContext = createContext({
    notes: [],
    courses: [],
    addNote: (newNote) => {},
    addCourse: (newCourse) => {},
    isLoading: false,
});
export const muistiinpano = ({ children }) => {
    const [notes, setNotes] = useState([]);
    const [courses, setCourses] = useState([]); 
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchCourses = async () => {
            setIsLoading(true);
            try{
            const apiCourses = await fetch(courseAPI);
            const courses = await apiCourses.json();

            const apiNotes = await fetch(notesAPI);
            const notes = await apiNotes.json();

            const localCourses = JSON.parse(localStorage.getItem(LocalCourses) || '[]');
            const localNotes = JSON.parse(localStorage.getItem(LocalNotes) || '[]');
            
            setCourses([...courses, ...localCourses]);
            setNotes([...notes, ...localNotes]);
        }
        finally{
            setIsLoading(false);
        }
    };
        fetchCourses();
    }, []);
    const getId = (items) => {
        const maxId = items.length > 0 ? Math.max(...items.map(item => item.id)) : -1;
        return maxId + 1;
    }

    const addCourse = (course) => {
        const newCourseId = { ...course, id: getId(courses) };
        const updateCourses = [...courses, newCourseId];
        
        setCourses(updateCourses);
        
        const localOnly = updateCourses.filter(c => c.id >= newCourseId);
        localStorage.setItem(LocalCourses, JSON.stringify(localOnly));
        
        return newCourseId;
    };

    const addNote = (uusiNote) => {
        const newNoteId = { ...uusiNote, id: newNoteId }; 
        const updatedNotes = [...notes, newNoteId];

        setNotes(updatedNotes);
        localStorage.setItem(LocalNotes, JSON.stringify(updatedNotes));
    };

    const contextValue = { 
        notes, 
        courses,
        addNote,
        isLoading,
        addCourse,
    };
    return (
        <NotesContext.Provider value={contextValue}>
            {children}
        </NotesContext.Provider>
    );
};
export default muistiinpano