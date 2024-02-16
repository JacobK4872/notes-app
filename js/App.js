import NotesAPI from "./NotesAPI.js";
import NotesView from "./NotesView.js";

export default class App {
    constructor(root) {
        this.notes = []; 
        this.activeNote = null;
        this.view = new NotesView(root, this._handlers());

        this._refreshNote();
    }

    _refreshNote() {
        const notes = NotesAPI.getAllNotes();

        this._setNotes(notes);

        if (notes.length > 0) {
            this._setActNote(notes[0]);
        }
    }

    _setNotes(notes) {
        this.notes = notes;
        this.view.updateNoteList(notes);
        this.view.updateNotePreviewVisibility(notes.length > 0);

    }

    _setActNote(note) {
        this.activeNote = note;
        this.view.updateActiveNote(note);
    }

    _handlers() {
        return {
            onNoteSelect: noteId => {
                const selectedNote = this.notes.find(note => note.id == noteId);
                this._setActNote(selectedNote);
            },
            onNoteAdd: () => {
                const newNote = {
                    title: "New Note",
                    body: "Take note..."
                }

                NotesAPI.saveNote(newNote);
                this._refreshNote();
            },
            onNoteEdit: (title, body) => {
                NotesAPI.saveNote({
                    id: this.activeNote.id,
                    title: title,
                    body: body
                });

                this._refreshNote();
            },
            onNoteDelete: noteId => {
                NotesAPI.deleteNote(noteId);
                this._refreshNote();
            }
        };
    }
}