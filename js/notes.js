const input = document.getElementById("input");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

let tasks = [];

if (localStorage.getItem("tasks")) {
  const taskString = localStorage.getItem("tasks");
  console.log(taskString);
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

removeTask = e => {
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
    let close = document.createElement("button");
    console.log(close);
    close.className = "StartPage_item_remove";
    close.addEventListener("click", removeTask);
    close.id = index;
    close.innerHTML = '<i class="material-icons">close</i>';
    newTask.innerHTML = '<p class="StartPage_item_text">' + task + "</p>";
    newTask.appendChild(close);
    taskList.appendChild(newTask);
  });
};

if (tasks) initList();

addButton.addEventListener("click", addTask);
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("addButton").click();
  }
});
