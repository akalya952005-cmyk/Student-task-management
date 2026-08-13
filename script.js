
    const input = document.querySelector("input");
const button = document.querySelector("button");
const taskList = document.querySelector("ul");

button.addEventListener("click", function () {

    const task = input.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    // Create task container
    const li = document.createElement("li");

    // Create task text
    const taskText = document.createElement("span");
    taskText.textContent = task;

    // Create Complete button
    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";

    completeButton.addEventListener("click", function () {
        taskText.style.textDecoration = "line-through";
    });

    // Create Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function () {
        li.remove();
    });

    // Add everything to the task
    li.appendChild(taskText);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    // Add task to the list
    taskList.appendChild(li);

    // Clear input
    input.value = "";
});
