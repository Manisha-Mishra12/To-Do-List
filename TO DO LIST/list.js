const a = document.querySelector("#input-box");
const b = document.querySelector("#list-container"); // class,id,tag,style

function Addtask(){
    if(a.value === ''){
    alert("you must be write something here");
    }
else{
    let c = document.createElement("li");
    c.innerHTML = a.value;
    b.appendChild(c);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    c.appendChild(span);
}
a.value = "";
saveData();

}
b.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
   else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

},false);

function saveData(){
    // localStorage.setItem("data",JSON.stringify(data));
    localStorage.setItem("data",b.innerHTML);
}
function showList(){
    b.innerHTML = localStorage.getItem("data");
}
showList();
