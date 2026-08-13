
   const input = document.querySelector("#taskInput");
const button = document.querySelector("#addTaskButton");
const taskList = document.querySelector("#taskList");
const taskCounter = document.querySelector("#taskCounter");

// Load saved tasks
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateCounter() {
    const totalCount = tasks.length;

    const completedCount = tasks.filter(function(task) {
        return task.completed;
    }).length;

    const pendingCount = totalCount - completedCount;

    taskCounter.textContent =
        `Total: ${totalCount} | Completed: ${completedCount} | Pending: ${pendingCount}`;
}

function displayTasks() {

    taskList.innerHTML = "";

    tasks.forEach(function(task, index) {

        const li = document.createElement("li");

        const taskText = document.createElement("span");
        taskText.textContent = task.text;

        if (task.completed) {
            taskText.style.textDecoration = "line-through";
        }

        // Complete button
        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";

        completeButton.addEventListener("click", function() {

            tasks[index].completed = !tasks[index].completed;

            saveTasks();
            displayTasks();
        });

        // Delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function() {

            tasks.splice(index, 1);

            saveTasks();
            displayTasks();
        });

        li.appendChild(taskText);
        li.appendChild(completeButton);
        li.appendChild(deleteButton);

        taskList.appendChild(li);
    });

    updateCounter();
}

// Add new task
button.addEventListener("click", function() {

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

// Show saved tasks when page opens
displayTasks();
