export default function submitSomething(newTodo, todoList) {
    const submitBtn = document.getElementById('submit-new-btn')
    submitBtn.addEventListener('click', () => {
        const titleNew = document.getElementById('title-new').value
        const dateNew = document.getElementById('date-new').value
        const descriptionNew = document.getElementById('description-new').value
        const priorityNew = document.getElementById('priority-new').value

        todoList.push(newTodo(titleNew, dateNew, descriptionNew, priorityNew))
        const element = document.createElement('div')
        element.textContent = titleNew
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        element.appendChild(checkbox)
        document.getElementById('todo-list').appendChild(element)
        document.body.removeChild(document.getElementById('popUp-window'))

        localStorage.setItem('todoList', JSON.stringify(todoList))
    })
}