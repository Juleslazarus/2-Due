const addItemBtn = document.querySelector(".addItemBtn");

const addItemInput = document.querySelector(".addItemInput");

const todoListContainer = document.querySelector(".todoListContainer");

const importantBtn = document.querySelector(".importantBtn");

const importantLabel = document.querySelector(".importantLabel");

const notImportantLabel = document.querySelector(".notImportantLabel");

const notImportantBtn = document.querySelector(".notImportantBtn");

importantBtn.addEventListener("click", () => {
  if (importantBtn.checked) {
    importantLabel.style.textDecoration = "underline";
    notImportantLabel.style.color = "black";
    importantLabel.style.fontWeight = "600";
  }
});
notImportantBtn.addEventListener("click", () => {
  if (notImportantBtn.checked) {
    notImportantLabel.style.color = "#666666";
    importantLabel.style.textDecoration = "none";
    importantLabel.style.fontWeight = "400";
  }
});

addItemBtn.addEventListener("click", () => {
  let todo = addItemInput.value;

  let todoItem = document.createElement("p");

  todoItem.textContent = todo;

  todoItem.classList.add("todoItem");

  if (todoItem.textContent === "" || todoItem.textContent === "  ") {
    alert("You Need To Add Text Into The Text Field");
  } else {
    const removeItem = document.createElement("button");

    removeItem.textContent = "X";

    removeItem.classList.add("removeItem");

    const checkItem = document.createElement("button");

    checkItem.textContent = "✔";

    checkItem.classList.add("checkItem");

    const uncheckItem = document.createElement("button");

    uncheckItem.textContent = "+";

    uncheckItem.classList.add("uncheckItem");

    todoListContainer.appendChild(todoItem);

    todoItem.appendChild(removeItem);

    todoItem.appendChild(uncheckItem);

    todoItem.appendChild(checkItem);

    if (importantBtn.checked) {
      todoItem.classList.add("important");
      todoItem.style.fontWeight = "600";
    } else if (notImportantBtn.checked) {
      todoItem.classList.add("notImportant");
    }

    removeItem.addEventListener("click", () => {
      todoItem.remove();
    });
    checkItem.addEventListener("click", () => {
      todoItem.style.textDecoration = "line-through";
      todoItem.style.background = "rgb(255, 158, 158)";
    });
    uncheckItem.addEventListener("click", () => {
      todoItem.style.textDecoration = "none";
      todoItem.style.background = "white";
    });

    addItemInput.value = "";
  }
});
