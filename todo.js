
let addMessage = document.querySelector('.message');
let addButton =document.querySelector('.add');
let todo =document.querySelector('.todo')
let todoList = [];
  addButton.addEventListener('click' ,function(){
    let newTodo = {
      todo:addMessage.value,
      checked: false,
    };
    todoList.push(newTodo);
    displayMessages();
  });
  function displayMessages(){
    let displaytoDo ='';
    todoList.forEach(function(element,i) {
      displaytoDo +=`
      <li>
        <input type ='checkbox' id ='item_${i}'>
        <label for='item_${i}'>${element.todo}</label>
      </li>
      `;
      todo.innerHTML =displaytoDo;
    });
  }