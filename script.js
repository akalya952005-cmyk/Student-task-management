const input = document.querySelector("input");
const button = document.querySelector("button");
const taskList = document.querySelector("ul");

button.addEventListener("click", function () {

    const task = input.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    li.textContent = task;

    li.addEventListener("click", function () {
        li.style.textDecoration = "line-through";
    });

    li.addEventListener("dblclick", function () {
        li.remove();
    });

    taskList.appendChild(li);

    input.value = "";
});
