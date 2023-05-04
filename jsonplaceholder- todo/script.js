const url = "https://jsonplaceholder.typicode.com/todos";

const getTodo = () => {
  fetch(url + "?_limit=10")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((todo) => addToDoToDom(todo));
    });
};

const createActivity = (e) => {
  e.preventDefault();
  const newTodo = {
    title: e.target.firstElementChild.value,
    completed: false,
  };
  fetch(url, {
    method: "POST",
    body: JSON.stringify(newTodo),
    header: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => addToDoToDom(newTodo));
};

const addToDoToDom = (todo) => {
  const div = document.createElement("div");
  div.classList.add("todo");
  div.appendChild(document.createTextNode(todo.title));
  div.setAttribute("data-id", todo.id);
  if (todo.completed) {
    div.classList.add("done");
  }
  document.getElementById("todo-list").appendChild(div);
};

const toggleCompeleted = (e) => {
  if (e.target.classList.contains("todo")) {
    e.target.classList.toggle("done");
    updateTodo(e.target.dataset.id, e.target.classList.contains("done"));
  }
};

//to update it in the server that the task is completed by changing it to true or false.
const updateTodo = (id, completed) => {
  fetch(url + `/${id}`, {
    method: "PUT",
    body: JSON.stringify({ completed }),
    headers: {
      "Content-type": "application/json",
    },
  });
};

const deleteToDo = (e) => {
  if (e.target.classList.contains("todo")) {
    const id = e.target.dataset.id;
    fetch(url + `${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => e.target.remove());
  }
};

const init = () => {
  document.addEventListener("DOMContentLoaded", getTodo);
  document
    .querySelector("#todo-form")
    .addEventListener("submit", createActivity);
  document
    .querySelector("#todo-list")
    .addEventListener("click", toggleCompeleted);
  document.querySelector("#todo-list").addEventListener("dblclick", deleteToDo);
};

init();
