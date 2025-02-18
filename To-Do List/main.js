
let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if (textInput.value === "") {
    console.log("failure");
    msg.innerHTML = "Task cannot be blank";
  } else {
    console.log("success");
    msg.innerHTML = "";
    acceptData();
    add.setAttribute("data-bs-dismiss", "modal");
    add.click();

    (() => {                                                 //IIFE
      add.setAttribute("data-bs-dismiss", "");
    })();
  }
};

let data = {};

let acceptData = () => {
 data["text"] = textInput.value;
 data["date"] = dateInput.value;
 data["description"] = textarea.value;


  createTasks();
};

let createTasks = () => {
  tasks.innerHTML += `
  <div>
              <span>${data.text} </span>
              <span class="smaller text-secondary">${data.date}</span>
              <p>${data.description} </p>

              <span class="options">
                <i  onClick = "editTask(this)"  data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit text-center"></i>
                <i  onClick = "deleteTask(this)" class="fas fa-trash-alt text-center"></i>

              </span>
            </div>
  `;


  resetForm();
};


let resetForm = () => {
  textInput.value = "";
  dateInput.value = "";
  textarea.value = "";
};


let deleteTask = (e) => {
  e.parentElement.parentElement.remove();

  
};

let editTask = (e) => {
  let selectedTask = e.parentElement.parentElement;

  textInput.value = selectedTask.children[0].innerHTML;
  dateInput.value = selectedTask.children[1].innerHTML;
  textarea.value = selectedTask.children[2].innerHTML;

  selectedTask.remove();
};

