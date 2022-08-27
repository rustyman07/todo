
//setting selectors
const addBtn = document.querySelector('.todo-add-btn');
const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');
const inputError = document.querySelector('.input-error');

//adding a click event to the add button
addBtn.onclick = (event) =>{
event.preventDefault();
    
//if empty it will display an error
  if(todoInput.value ===""){
    inputError.classList.add('show');
    inputError.innerText = "Please add to do list";
  }
  else{
    // creating a parent div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    todoList.appendChild(todoDiv);

    //creating a child div and append to todo div
    const  list = document.createElement('div');
    list.classList.add('list');
    list.innerText = todoInput.value;
    todoDiv.appendChild(list);

    //creating a checkbox  and append to todo div
    const checkbtn = document.createElement('input');
    checkbtn.classList.add('check-box');
    checkbtn.type = 'checkbox';
    todoDiv.append(checkbtn);

   //creating a delete button  and append to todo div
    const deleteTodo = document.createElement('button');
    deleteTodo.classList.add('delete-todo');
    deleteTodo.innerHTML = '<i class="fa-solid fa-trash"></i>';
    todoDiv.appendChild(deleteTodo);

    //setting back input fiends and error to empty
    todoInput.value = "";
    inputError.innerText = "";
 
  }
 
}


//Adding click event to a parent div
todoList.onclick = (e) =>{
  let item = e.target;
  //
   // if target contains 'delete-noob' ,it will remove,
  if(item.classList[0] ==='delete-todo'){
    const todo = item.parentElement;
    todo.remove();
  }
     // adding a toogle to a checkbox,
  if(item.classList[0] ==='check-box' ){
    let checkbox = document.querySelector('.check-box');
    if(checkbox.checked){
      checkbox.value = "comppleted";
 
    }else{
      checkbox.value = "uncompleted";
    }
    const todo = item.parentElement;
    todo.classList.toggle('completed');

  }
  
}