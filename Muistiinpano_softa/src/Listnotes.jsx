import {useState} from "react";

function List({ notes, courses, onDelete }){

const [suodataId, setSuodataId] = useState("");

const näytettavätMuistiinpanot = suodataId 
    ? notes.filter(note => Number(note.courseId) === Number(suodataId))
    : notes;

    return (
    <div>
        <h2>Muistiinpanot</h2>

    <div>
        <label>Suodata kurssin mukaan: </label>
        <select value={suodataId} onChange={(e) => setSuodataId(e.target.value)}>
            <option value="">Näytä kaikki</option>
            {courses.map(k => (
                <option key={k.id} value={k.id}>{k.name}</option>
            ))}
        </select>
    </div>

    {näytettavätMuistiinpanot.length === 0 ? (
        <p>Ei muistiinpanoja!</p>
    ) : (
        <ul>
            {näytettavätMuistiinpanot.map((m) => (
                <li key={m.id}>
                    <strong>{m.courseName} (ID: {m.courseId})</strong>
                    <br />
                    <span>{m.timestamp}</span>
                    <p>{m.text}</p>
                    <button onClick={() => onDelete(m.id)}>Poista</button>
                </li>
            ))}
        </ul>
    )}
    </div>
    );
}
export default List