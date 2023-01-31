const listContainer = (todoList) => {

    const showList = document.createElement('div')
    showList.id ='todo-list';

    for (let i = 0; i < todoList.length; i++) {
        const element = document.createElement('div')
        element.textContent = todoList[i].title
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        element.appendChild(checkbox)
        showList.appendChild(element)
    }

    return showList
}

export default listContainer
