import NotesAPI from "./NotesAPI.js";
import NotesView from "./NotesView.js";

export default class App {
    constructor(root) {
        this.notes = []; 
        this.activenote = null;
        this.view = new NotesView(root);
    }
}