import './style.css';
import listContainer from "./makeListContainer";
import createTodo from './createTodo';
import createPopUpWindow from './createPopUp';
import addNewTodo from './addNewTodo';
import submitNewTodo from './submitNewTodo';
import editTodo from './editTodo';

const todoList = JSON.parse(localStorage.todoList);

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

editTodo(todoList, createPopUpWindow, addNewTodo)

var _lsTotal=0,_xLen,_x;for(_x in localStorage){ if(!localStorage.hasOwnProperty(_x)){continue;} _xLen= ((localStorage[_x].length + _x.length)* 2);_lsTotal+=_xLen; console.log(_x.substr(0,50)+" = "+ (_xLen/1024).toFixed(2)+" KB")};console.log("Total = " + (_lsTotal / 1024).toFixed(2) + " KB");
console.log(_lsTotal)



