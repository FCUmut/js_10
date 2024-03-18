const apiURL = "https://jsonplaceholder.typicode.com/todos";

const getTodos = () => {
  fetch(apiURL + "?_limit=5")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((todo) => {
        addTodoToDOM(todo);
      });
    });
};

const addTodoToDOM = (todo) => {
  const div = document.createElement("div");
  div.classList.add("todo");
  div.appendChild(document.createTextNode(todo.title));
  div.setAttribute("data-id", todo.id);

  if (todo.completed) {
    div.classList.add("done");
  }

  document.getElementById("todo-list").appendChild(div);
};

const createTodo = (e) => {
  e.preventDefault();

  const newTodo = {
    title: e.target.firstElementChild.value,
    completed: false,
  };

  fetch(apiURL, {
    method: "POST",
    body: JSON.stringify(newTodo),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => addTodoToDOM(data));
};

const toggleCompleted = (e) => {
  if (e.target.classList.contains("todo")) {
    e.target.classList.toggle("done");

    updateTodo(e.target.dataset.id, e.target.classList.contains("done"));
  }
};

const updateTodo = (id, completed) => {
  fetch(`${apiURL}/${id}`, {
    method: "PUT",
    body: JSON.stringify({ completed }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

const deleteTodo = (e) => {
  if (e.target.classList.contains("todo")) {
    const id = e.target.dataset.id;
    fetch(`${apiURL}/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => e.target.remove()); // we don't have to pass anything because we don't have data to return
  }
};

const init = () => {
  document.addEventListener("DOMContentLoaded", getTodos);
  document.querySelector("#todo-form").addEventListener("submit", createTodo);
  document
    .querySelector("#todo-list")
    .addEventListener("click", toggleCompleted);
  document.querySelector("#todo-list").addEventListener("dblclick", deleteTodo);
};

init();
