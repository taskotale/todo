const createTodoCard = (item) => {

        const title = document.createElement('div')
        title.textContent = item.title
        const dueDate = document.createElement('div')
        dueDate.textContent = item.dueDate
        const description = document.createElement('div')
        description.textContent = item.description
        const priority = document.createElement('div')
        priority.textContent = item.priority

        const editBtn = document.createElement('button')
        editBtn.textContent = 'EDIT'
        editBtn.id='edit-btn'
        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'DELETE'
        deleteBtn.id='delete-btn'

        const todoCard = document.createElement('div')

        todoCard.appendChild(title)
        todoCard.appendChild(dueDate)
        todoCard.appendChild(description)
        todoCard.appendChild(priority)
        todoCard.appendChild(editBtn)
        todoCard.appendChild(deleteBtn)

        return todoCard
}

export default createTodoCard