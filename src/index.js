import Project from "./modules/project";
import Note from "./modules/note";

let newNote = new Note()
newNote.setContent("test")
let main = document.body.querySelector("main")
main.innerText = newNote.getContent()