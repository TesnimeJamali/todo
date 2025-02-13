function add(){
    const name = document.getElementById("name").value;
    const content= document.getElementById("content").value;
    const elt= document.getElementById("todos");
    var newElement = document.createElement("p");
    newElement.textContent=name+" : "+content+" ";
    document.getElementById("name").value="";
    document.getElementById("content").value="";
   
    var deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-trash-can", "delete-icon"); // Add Font Awesome trash icon classes
    newElement.appendChild(deleteIcon);
    elt.appendChild(newElement);
    deleteIcon.addEventListener('click',function(){
        newElement.remove();
    });
}