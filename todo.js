const searchbar=document.getElementById("searchbar");
const add=document.getElementById("id");
const todo=document.getElementById("todo");
const started=document.getElementById("started");




add.addEventListener("click",function(e){
    
     todo.innerText=e.target+1;
     started.innerText=e.target+1;
     
})