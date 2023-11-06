const title =  document.querySelector("#title");
const addTask = document.querySelector("#addTask");
const list =  document.querySelector("#addItems");

title.addEventListener("click", ()=>{
    title.value = "Your title here";
});

addTask.addEventListener("click", ()=>{

    const listItem = document.createElement("li");
    const inputField = document.createElement("input");
    list.appendChild(listItem);
    listItem.appendChild(inputField);

    inputField.addEventListener("input", (e) => {
        e.preventDefault;
        inputField.focus();
    });

});
