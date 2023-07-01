document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form");
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    newTodo(e.target.new-task-description.value)
  })
});

function newTodo(todo) {
  let p = document.createElement("p");
  let btn = document.createElement("button")
  p.textContent = `${todo}`;
  btn.addEventListener("click",handleDelete)
  p.appendChild(btn);
  console.log(p);
  document.querySelector("#tasks").appendChild(p)
;
}
function handleDelete(e) {
  e.target.parentNode.remove();
}

