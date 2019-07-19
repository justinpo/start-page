const input = document.getElementById("input");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

let tasks = [];

addTask = () => {
    if(input.value !== '') {
        taskList.innerHTML = '';

        tasks.push(input.value);
    
        tasks.map((task, index) => {
            let newTask = document.createElement("li");
            newTask.className = "StartPage_item";
            newTask.addEventListener("click", removeTask);
            newTask.id = index;
            // const close = '<button type="button" id="removeButton" class="StartPage_item_remove"><i class="material-icons">close</i></button>'
            newTask.innerHTML = 
                '<p class="StartPage_item_text">' + task + '</p>';
            taskList.appendChild(newTask);
        })
    
        input.value = '';
    }
};

removeTask = (e) => {
    const i = e.target.id;
    tasks.splice(i, 1);
    taskList.removeChild(taskList.childNodes[i]);
}

addTask();
addButton.addEventListener("click", addTask);
