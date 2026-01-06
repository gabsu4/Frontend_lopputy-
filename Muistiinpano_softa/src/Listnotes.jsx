import {useState} from "react";

function List({ notes, courses, onDelete }){

const [suodataId, setSuodataId] = useState("");

    let näytettävät;
    if (suodataId === "") {
        näytettävät = notes;
    } else {
        näytettävät = notes.filter(note => note.courseId == suodataId);
    }

    return (
    <div>
        <h2>Muistiinpanot</h2>
    <div>
        <label>Suodata kurssin mukaan: </label>
        <select value={suodataId} onChange={(e) => setSuodataId(e.target.value)}>
            <option value="">Näytä kaikki</option>
            {courses.map(kurssi => (
                <option key={kurssi.id} value={kurssi.id}>{kurssi.name}</option>
            ))}
        </select>
    </div>

    {näytettävät.length === 0 ? (
        <p>Ei muistiinpanoja!</p>
    ) : (
        <ul>
            {näytettävät.map((m) => (
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