const title =  document.querySelector("#title");
const addTask = document.querySelector("#addTask"); // button to add task
const list =  document.querySelector("#toDoList"); // UL to display tasks
const task =  document.querySelector("#task"); // input field to add task
let taskCounter = 0; // just to add task id as task-4687979845588777, task-2548755694786786...

window.addEventListener("load", ()=>{
    if(localStorage.length>0){
        for(let i=0; i<localStorage.length; i++){
            const key = localStorage.key(i);
            if(key.startsWith("task-")){
                const taskContent = localStorage.getItem(key);
                const listItem = document.createElement("li"); // creating a new list element for task retrieved from storage
                listItem.setAttribute("id", key); // providing ID to it
                listItem.textContent = taskContent; // assigning it the value of the taskContent
                list.appendChild(listItem); // appending it to the UL
            }
            if(key==="title"){
                title.value = localStorage.getItem(key);
                console.log();
            }
        }
    }
});

title.addEventListener("keypress", event =>{
    if(event.key === "Enter"){
        event.preventDefault();
        localStorage.setItem("title", title.value);
        title.blur()
    }
});

addTask.addEventListener("click", ()=>{
    const taskContent = task.value;    // getting the task from task input field
    const listItem = document.createElement("li"); // creating a new list element for the added task
    // let randomNumber = Math.floor((Math.random() * 100) + 1);
    let randomNumber = Date.now()+`${taskCounter++}`;
    
    listItem.textContent = taskContent; // assigning it the value of the taskContent
    listItem.setAttribute("id", `task-${randomNumber}`); // providing ID to it
    list.appendChild(listItem); // appending it to the UL

    localStorage.setItem(listItem.getAttribute("id"), listItem.textContent);
});

task.addEventListener("keypress", event =>{
    if(event.key === "Enter"){
        event.preventDefault();
        addTask.click();
        task.value = "";
    }
});
