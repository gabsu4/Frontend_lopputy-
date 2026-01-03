import { useState, } from "react";
import './Create.css'

function Creating({ courses, onSaveNote }){
    const [tekstiä, setTekstiä] = useState("");
    const [valittuKurssiId, setValittuKurssiId] = useState("");
    const [lukittu, setLukittu] = useState(false); 
    const [sessionMuistiinpanot, setSessionMuistiinpanot] = useState([]);

    const kurssi = courses.find(c => c.id === parseInt(valittuKurssiId));
    const kurssinNimi = kurssi ? kurssi.name : "ei valittu";

    const handleSave = () => {
        if (tekstiä.trim().length === 0 || valittuKurssiId === "") {
            alert("Kirjoita jotain ja/tai valitse kurssi!");
            return;
        }

    const uusiMuistiinpano = {
            text: tekstiä,
            courseId: valittuKurssiId,
            courseName: kurssi.name,
            timestamp: new Date().toLocaleString(),
        };

    onSaveNote(uusiMuistiinpano);
    setSessionMuistiinpanot([...sessionMuistiinpanot, uusiMuistiinpano]);

    setLukittu(true);
    setTekstiä('');
    };

    return (
        <div>
            <h1>Create a note</h1>
            
            <div>
                <label>Valitse opintojakso: </label>
                <select 
                    value={valittuKurssiId} 
                    onChange={(e) => setValittuKurssiId(e.target.value)}
                    disabled={lukittu}
                >
                    <option value="">-- Valitse kurssi --</option>
                    {courses.map(({ id, name }) => (
                        <option key={id} value={id}>
                            {name} (ID: {id})
                        </option>
                    ))}
                </select>
            </div>

            <p>
                Tee muistiinpanoja kurssille: 
                <strong> {kurssinNimi}</strong>
            </p>
            
            <div>
                <textarea 
                    onChange={(e) => setTekstiä(e.target.value)} 
                    value={tekstiä} 
                    placeholder="Kirjoita muistiinpano tähän..."
                />
            </div>
            
            <div>
                <button onClick={handleSave}>Save</button>
            </div>

            {sessionMuistiinpanot.length > 0 && (
                <div>
                    <h3>Session aikana luodut:</h3>
                    <ul>
                        {sessionMuistiinpanot.map((m, index) => (
                            <li key={index}>
                                {m.text}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
export default Creating