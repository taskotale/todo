export default function editTodo(isEdit, todoList) {
    const editBtn = document.getElementById('update-btn')
    editBtn.addEventListener('click', () => {
        const titleNew = document.getElementById('title-new').value
        const dateNew = document.getElementById('date-new').value
        const descriptionNew = document.getElementById('description-new').value
        const priorityNew = document.getElementById('priority-new').value

        isEdit.title = titleNew;
        isEdit.dueDate = dateNew;
        isEdit.description = descriptionNew;
        isEdit.priority = priorityNew;
        console.log(todoList);
        document.body.removeChild(document.getElementById('popUp-window'))

    })
}