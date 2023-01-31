export default function createTodo(what, when, desc, level){
    return {
        title : what,
        dueDate: when,
        description: desc,
        priority: level,
        isDone: false
    }
}