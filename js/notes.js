// constants
const input = document.getElementById("input");
const addButton = document.getElementById("addButton");
const completeButton = document.getElementsByClassName("StartPage_item_complete");
const taskList = document.getElementById("taskList");
const taskTitle = document.getElementById("taskTitle");


// functions
tokenizeTasks = () => {
  const taskString = localStorage.getItem("tasks");
  let tempString = "";
  let j = 0;

  for (let i = 0; i <= taskString.length; i++) {
    if (taskString[i] === "," || i === taskString.length) {
      tasks.push(tempString);
      tempString = "";
      j = 0;
      continue;
    }

    tempString = tempString + taskString[i];
    j++;
  }
}

addTask = () => {
  if (input.value !== "") {
    taskList.innerHTML = "";
    tasks.push(input.value);
    initList();
    localStorage.setItem("tasks", tasks);
    input.value = "";
  }
};

completeTask = e => {
  const i = e.target.id;
  tasks.splice(i, 1);
  localStorage.setItem("tasks", tasks);
  initList();
};

initList = () => {
  taskList.innerHTML = "";
  tasks.map((task, index) => {
    let newTask = document.createElement("li");
    newTask.className = "StartPage_item";
    let complete = document.createElement("button");
    complete.className = "StartPage_item_complete";
    complete.addEventListener("click", completeTask);
    complete.id = index;
    complete.innerHTML = '<i class="StartPage_item_complete_icon" id="' + index + '">&#10004;</i>';
    let text = document.createElement("p");
    text.className = "StartPage_item_text"
    text.innerHTML = task;
    newTask.appendChild(complete);
    newTask.appendChild(text);
    taskList.appendChild(newTask);
  });

  taskList.className = "StartPage_list";
  taskTitle.innerHTML = 'Tasks (' + tasks.length + ')';

  if(taskList.offsetHeight > 280) {
    taskList.className = "StartPage_list StartPage_list___scrollable";
  }
};


// main
let tasks = [];

if (localStorage.getItem("tasks"))
  tokenizeTasks();

if (tasks.length > 0)
  initList();
else
  taskTitle.innerHTML = 'Tasks (0)';

addButton.addEventListener("click", addTask);
input.addEventListener("keyup", e => {
  if (e.keyCode === 13 && !e.shiftKey) {
    e.preventDefault();
    document.getElementById("addButton").click();
  }
});
