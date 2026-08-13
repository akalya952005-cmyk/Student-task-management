
    const input = document.querySelector("input");
const button = document.querySelector("button");
const taskList = document.querySelector("ul");

// Load saved tasks
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach(function (task, index) {

        const li = document.createElement("li");

        const taskText = document.createElement("span");
        taskText.textContent = task.text;

        if (task.completed) {
            taskText.style.textDecoration = "line-through";
        }

        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";

        completeButton.addEventListener("click", function () {
            tasks[index].completed = !tasks[index].completed;
            saveTasks();
            displayTasks();
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function () {
            tasks.splice(index, 1);
            saveTasks();
            displayTasks();
        });

        li.appendChild(taskText);
        li.appendChild(completeButton);
        li.appendChild(deleteButton);

        taskList.appendChild(li);
    });
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

button.addEventListener("click", function () {

    const task = input.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    tasks.push({
        text: task,
        completed: false
    });

    saveTasks();
    displayTasks();

    input.value = "";
});

// Display saved tasks when page opens
displayTasks();
