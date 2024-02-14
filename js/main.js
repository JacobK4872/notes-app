import NotesAPI from "./NotesAPI.js"

NotesAPI.saveNote({
    // id: 489570,
    title: "NEW TITLE",
    body: "Soda"
});

console.log(NotesAPI.getAllNotes());