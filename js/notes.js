const input = document.getElementById("input");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

let tasks = [];

if(localStorage.getItem('tasks')) {
    const taskString = localStorage.getItem('tasks');
    console.log(taskString);
    let tempString = '';
    let j = 0;

    for(let i = 0; i <= taskString.length; i++) {
        if(taskString[i] === ',' || i === taskString.length) {
            tasks.push(tempString);
            tempString = '';
            j = 0;
            continue;
        }

        tempString = tempString + taskString[i];
        j++;
    }
}

addTask = () => {
    if(input.value !== '') {
        taskList.innerHTML = '';
        tasks.push(input.value);
        initList();
        localStorage.setItem('tasks', tasks);
        input.value = '';
    }
};

removeTask = (e) => {
    const i = e.target.id;
    tasks.splice(i, 1);
    localStorage.setItem('tasks', tasks);
    taskList.removeChild(taskList.childNodes[i]);
}

initList = () => {
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
}

if(tasks)
    initList();
addButton.addEventListener("click", addTask);
