class Note {
    static #count = 0
    #id
    #content
    #date
    #isComplete
    constructor() {
        this.#content = ""
        this.#date = null
        this.#id = Note.#count
        Note.#count++
    }
    getContent() { return this.#content }
    getDate() { return this.#date }
    getId() { return this.#id }
    isComplete() { return this.#isComplete }
    setContent(content) { this.#content = content }
    setDate(date) { this.#date = date }
    setCompleted(isComplete) { this.#isComplete = isComplete }

    toString() {
        return `[${this.constructor.name}] {content: ${this.#content}, date: ${this.date}}`
    }

}


export default Note