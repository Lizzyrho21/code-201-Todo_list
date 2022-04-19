console.log("I'm up and running");

class Todo {
  constructor(description) {
    this.description = description;
    this.isCompleted = false;
  }
  delete = () => {
    console.log(this.description, "has been deleted");
  };
}

let listItems=[];

const addTodo =()=>{

    for (let index = -1; index < listItems.length; index++) {
        let myNewTodo = new Todo(prompt("enter your task item"));
console.log(myNewTodo.description);
const todoList = document.getElementById("todoList");
// create li tags
let todoItem = (document.createElement("li").innerText = myNewTodo.description);

todoList.append(todoItem);
listItems.push(todoItem);
if(listItems.length===5){
    break
}
console.log(myNewTodo);
}
        
    }

addTodo()
console.log(listItems)
// for(let i=0;i<6;i++){
//     let todoItem = document.createElement("li")
//     todoItem.setAttribute("id",`todoItem: ${[i]}`);
//     console.log(todoItem)
// }

