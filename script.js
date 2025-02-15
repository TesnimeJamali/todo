function add() {
    const name = document.getElementById("name").value;
    const content = document.getElementById("content").value;
    const elt = document.getElementById("todos");

    const newElement = document.createElement("p");
    newElement.textContent = `${name} : ${content} `;

    document.getElementById("name").value = "";
    document.getElementById("content").value = "";

    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-trash-can"); 

    newElement.appendChild(deleteIcon);
    elt.appendChild(newElement);

    deleteIcon.addEventListener("click", function () {
        newElement.remove(); 
    });
}
document.getElementById("submit").addEventListener("click", add);

