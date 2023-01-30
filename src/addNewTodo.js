
const addTodo = (defaultValue) => {
    const addForm = document.createElement('div')

    const title = document.createElement('input')
    title.id = 'title-new'
    title.type = 'text';
    title.placeholder = 'Title';
    defaultValue ? title.value = defaultValue.title : title.value = ""

    const date = document.createElement('input')
    date.type = 'date';
    date.id = 'date-new'
    defaultValue ? date.value = defaultValue.dueDate : date.valueAsDate = new Date()


    const description = document.createElement('input')
    description.type = 'text';
    description.id = 'description-new'
    description.placeholder = 'description'
    defaultValue ? description.value = defaultValue.description : description.value = ""


    const priority = document.createElement('input')
    priority.type = 'range'
    priority.min = '1';
    priority.max = '3';
    priority.id = 'priority-new'
    defaultValue ? priority.value = defaultValue.priority : priority.value = '2'



    const submitBtn = document.createElement('button')
    submitBtn.textContent = 'Submit'
    defaultValue ?
        submitBtn.id = 'update-btn' :
        submitBtn.id = 'submit-new-btn'

    addForm.appendChild(title)
    addForm.appendChild(date)
    addForm.appendChild(description)
    addForm.appendChild(priority)
    addForm.appendChild(submitBtn)

    return addForm
}

export default addTodo


