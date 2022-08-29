import Project from './project'

const projects = []
const main = document.querySelector('div.main')
const sidebar = document.querySelector('div.sidebar')


function loadPage() {
    const projects = [new Project('test'), new Project('hello')]
    loadSidebar(projects)
}

function loadSidebar(projects) {
    projects.forEach(project => {
        const component = createProjectComponent(project)
        sidebar.appendChild(component)
    });
}

function createProjectComponent(project) {
    const id = project.getId()
    const name = project.getName()
    const div = document.createElement('div')
    div.className = 'project'
    const btn = document.createElement('button')
    btn.id = `project-${id}`
    btn.innerText = name
    div.appendChild(btn)
    return div
}

export { loadPage }