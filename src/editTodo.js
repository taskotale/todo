import createTodoCard from './createTodoCard'


export default function editTodo(todoList, createPopUpWindow, updateTodo) {

    const clickEdit = document.getElementById('todo-list')
    clickEdit.addEventListener('click', (e) => {

        if (e.target.type === 'checkbox') {
            const findEl = todoList.find(element => element.title === e.target.closest('div').textContent)
            e.target.checked ?
                findEl.isDone = true :
                findEl.isDone = false
            findEl.isDone ?
                e.target.closest('div').classList.add('mark-done') :
                e.target.closest('div').classList.remove('mark-done')
        }
        else {
            const findEl = todoList.find(element => element.title === e.target.textContent)
            createPopUpWindow(createTodoCard(findEl))
            document.getElementById('edit-btn').addEventListener('click', () => {
                document.body.removeChild(document.getElementById('popUp-window'))
                createPopUpWindow(updateTodo(findEl));


                const editBtn = document.getElementById('update-btn')
                editBtn.addEventListener('click', () => {
                    const titleNew = document.getElementById('title-new').value
                    const dateNew = document.getElementById('date-new').value
                    const descriptionNew = document.getElementById('description-new').value
                    const priorityNew = document.getElementById('priority-new').value
                    findEl.title = titleNew;
                    findEl.dueDate = dateNew;
                    findEl.description = descriptionNew;
                    findEl.priority = priorityNew;
                    e.target.textContent = titleNew;

                    const checkbox = document.createElement('input')
                    checkbox.type = 'checkbox'
                    e.target.appendChild(checkbox)

                    document.body.removeChild(document.getElementById('popUp-window'))
                })
            })
        }
    })

}