const listContainer = (todoList) => {

    const showList = document.createElement('div')
    showList.id ='todo-list';

    for (let i = 0; i < todoList.length; i++) {
        const element = document.createElement('div')
        element.textContent = todoList[i].title
        showList.appendChild(element)
    }

    return showList
}

export default listContainer
