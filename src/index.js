import './style.css';
import listContainer from "./makeListContainer";
import createTodo from './createTodo';
import createPopUpWindow from './createPopUp';
import addNewTodo from './addNewTodo';
import submitNewTodo from './submitNewTodo';
import createTodoCard from './createTodoCard'
import editTodo from './editTodo';

const todoList = [];


todoList.push(createTodo('Take garbage out', '2023-03-17', 'garbage day on thus', 3));
todoList.push(createTodo('Haircut', '2023-03-17', 'you should reserve', 1));
todoList.push(createTodo('Eat', '2023-03-17', 'you have to eat', 3));
todoList.push(createTodo('sleep', '2023-03-17', 'tonight', 3));

const header = document.createElement('div');
header.classList.add('header')

const container = document.createElement('div');
container.classList.add('container')
container.id = 'container'
container.appendChild(listContainer(todoList));

const footer = document.createElement('div');
footer.classList.add('footer');


const addNewBtn = document.createElement('button')
addNewBtn.textContent = 'Add New ToDo'
addNewBtn.addEventListener('click', () => {
    createPopUpWindow(addNewTodo());
    submitNewTodo(createTodo, todoList)
})


const page = document.createElement('div');
page.classList.add('main-page');
page.appendChild(header);
page.appendChild(container);
page.appendChild(addNewBtn)
page.appendChild(footer);
document.body.appendChild(page);

const clickEdit = document.getElementById('todo-list')
clickEdit.addEventListener('click', (e) => {
    const findEl = todoList.find(element => element.title === e.target.textContent)
    createPopUpWindow(createTodoCard(findEl))
    document.getElementById('edit-btn').addEventListener('click', ()=>{
        document.body.removeChild(document.getElementById('popUp-window'))
        createPopUpWindow(addNewTodo(findEl));
        editTodo(findEl, todoList)
    })
})

