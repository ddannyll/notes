import Note from "./note"

class Project {
    static #count = 0
    #id
    #name
    #notes
    #date
    
    constructor(name) {
        this.#name = name
        this.#date = null
        this.#notes = []
        this.#id = Project.#count
        Project.#count++
    }

    getName() { return this.#name }
    getDate() { return this.#date }
    getNotes() { return this.#notes }
    getId() { return this.#id }
    setName(name) { this.#name = name }
    setDate(date) { this.#date = date }
    appendNote(note) {
        this.#notes.push(note)
    }
    removeNote(note) {
        if (this.#notes.indexOf(note) == -1) { return }
        this.#notes.splice(this.#notes.indexOf(note), 1)
    }
}

export default Project