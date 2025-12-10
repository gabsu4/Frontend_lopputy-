const analyzeNote = (note) => {

const r = {
    id: note.id,
    text: note.text,
    course: note.course?.name,
    timestamp: note.timestamp,
};
return r;
};
export {analyzeNote};