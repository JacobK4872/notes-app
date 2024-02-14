import NotesAPI from "./NotesAPI.js";
import NotesView from "./NotesView.js"

// NotesAPI.saveNote({
//     title: "Note 3",
//     body: "note 3 body"
// });

const app = document.getElementById("app");
const view = new NotesView(app, {
    onNoteAdd() {
        console.log("Lets add a new note!");
    },
    onNoteSelect(id) {
        console.log("Note Selected:" + id);
    },
    onNoteDelete(id) {
        console.log("Note deleted:" + id);
    },
    onNoteEdit(newTitle, newBody) {
        console.log(newTitle);
        console.log(newBody);

    }
    
});


view.updateNoteList(NotesAPI.getAllNotes());