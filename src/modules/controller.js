import Note from './note'
import Project from './project'

let projects = []
const main = document.querySelector('div.main')
const sidebar = document.querySelector('div.sidebar')


function loadPage() {
    const home = new Project('Home')
    projects = [home, new Project('test'), new Project('hello')]
    const newNote = new Note()
    newNote.setContent("newNote hello world")
    newNote.setDate(new Date(2022, 5, 20))
    home.appendNote(newNote)
    loadSidebar(home, projects.slice(1))
    loadProjectNotes(home)
}

function loadSidebar(home, customProjects) {    
    const homeElement = createProjectComponent(home)
    sidebar.prepend(homeElement)
    const newProjectBtn = document.createElement('button')
    newProjectBtn.innerText = "New Project"
    newProjectBtn.id = 'new-project'
    newProjectBtn.onclick = () => {
        const existingForm = document.querySelector('form.popup')
        if (existingForm != null) { existingForm.remove() }
        displayInputPopup("Project Name", (newProjectName) => { 
            const newProject = new Project(newProjectName)
            projects.push(newProject)
            appendProject(newProject)
            loadProjectNotes(newProject)
        })
    }
    sidebar.append(newProjectBtn)
    
    function appendProject(project) {
        const projectComponent = createProjectComponent(project, true)
        sidebar.insertBefore(projectComponent, newProjectBtn)
    }
    
    customProjects.forEach(appendProject);


}

function newDeleteElement(action, className) {
    const deleteIcon = document.createElement('button')
    deleteIcon.classList.add('fa-solid', 'fa-xmark', className)
    deleteIcon.onclick = (e) => { action(); e.stopPropagation(); }
    return deleteIcon
}

function newCheckboxIcon() {
    const check = document.createElement('i')
    check.classList.add('fa-solid', 'fa-check')
    return check
}

function displayInputPopup(labelText, onsubmitFunction) {
    const form = document.createElement('form')
    form.className = 'popup'
    form.onsubmit = (e) => { 
        e.preventDefault();
        onsubmitFunction(form.elements['popup-input'].value);
    }
    const label = document.createElement('label')
    label.for = "popup-input"
    label.innerText = labelText
    form.appendChild(label)
    
    const input = document.createElement('input')
    input.type = "text"
    input.id = "popup-input"
    input.required = true
    form.appendChild(input)
    
    const submit = document.createElement('input')
    submit.type = 'submit'
    submit.value = 'submit'
    form.appendChild(submit)
    document.body.appendChild(form)

    input.focus()
}

function createProjectComponent(project, deletable) {
    const id = project.getId()
    const name = project.getName()
    const btn = document.createElement('button')
    btn.className = 'project'
    btn.id = `project-${id}`
    btn.innerText = name
    btn.onclick = () => { loadProjectNotes(project) }
    if (deletable) {
        btn.append(newDeleteElement(() => { 
            projects.splice(projects.indexOf(project), 1);
            btn.remove()
        }, 'project-delete'))
    }
    return btn
}

function createNoteComponent(note) {
    const id = note.getId()
    const date = note.getDate()
    const div = document.createElement('div')
    div.className = 'note'
    div.id = `note-${id}`
    
    const checkboxSpan = document.createElement('span')
    const checkboxInput = document.createElement('input')
    checkboxInput.type = 'checkbox'
    checkboxInput.onclick = () => { handleChecked(checkboxInput) }
    checkboxSpan.appendChild(checkboxInput)
    const checkboxIcon = newCheckboxIcon()
    checkboxSpan.appendChild(checkboxIcon)
    div.appendChild(checkboxSpan)
    
    const p = document.createElement('p')
    p.innerText = note.getContent()
    div.appendChild(p)

    const deleteBtn = newDeleteElement(() => { removeNote(note) }, 'note-delete')
    div.appendChild(deleteBtn)

    const dateElement = document.createElement('input')
    dateElement.type = 'date'
    dateElement.value = date === null ? '' : date.toISOString().split('T')[0]
    div.appendChild(dateElement)

    if (note.isComplete()) { checkboxInput.click() }

    return div
}

function handleChecked(checkbox) {
    const outerDiv = checkbox.parentElement.parentElement
    const note = getNoteFromId(outerDiv.id.replace('note-', ''))
    const p = outerDiv.querySelector('p')
    if (checkbox.checked) {
        p.classList.add('cross')
        note.setCompleted(true)
    } else {
        p.classList.remove('cross')
        note.setCompleted(false)
    }
}

function loadProjectNotes(project) {
    removePopup()
    main.innerHTML = ""
    const projectName = document.createElement('h2')
    projectName.innerText = project.getName()
    main.appendChild(projectName)
    const notesDiv = document.createElement('div')
    notesDiv.className = 'notes-div'
    main.appendChild(notesDiv)
    for (const note of project.getNotes()) {
        notesDiv.appendChild(createNoteComponent(note))
    }
    const newNoteForm = document.createElement('form')
    newNoteForm.onsubmit = (e) => {
        e.preventDefault()
        const newNote = new Note()
        project.appendNote(newNote)
        newNote.setContent(newNoteInput.value)
        notesDiv.insertBefore(createNoteComponent(newNote), newNoteForm)
        newNoteForm.reset()
    }
    const newNoteInput = document.createElement('input')
    newNoteInput.type = 'text'
    newNoteInput.placeholder = 'New Note'
    newNoteForm.appendChild(newNoteInput)
    notesDiv.appendChild(newNoteForm)

}


function getNoteFromId(id) {
    for (const project of projects) {
        if (project.getNoteFromId(id) != null) {
            return project.getNoteFromId(id)
        }
    }
    return null
}

function removeNote(note) {
    for (const project of projects) {
        project.removeNote(note)
    }
    document.querySelectorAll(`#note-${note.getId()}`).forEach( (n) => { n.remove() })
}

function removePopup() {
    const popupList = document.querySelectorAll('.popup')
    popupList.forEach((popup) => { popup.remove() })
}


export { loadPage }