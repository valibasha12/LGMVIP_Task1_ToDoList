const input = document.getElementById("input-box")
const listItems = document.getElementById("list-container")

function addTask(){
    if(input.value === ''){
        alert("You must add atleast one task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listItems.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    input.value=""
}

listItems.addEventListener('click',function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
},false)