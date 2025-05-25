const inp=document.getElementById("input");
const add=document.querySelector("#add");
const work=document.getElementById("work")
const wo=[];
const arr=[];
let i=1;

function addWork(){
    wo.push(inp.value);
    inp.value="";
    arr.push(`
          <div id="to-do"> 
            <input type="checkbox" name="done" id="${i}">
            <p id="${i}">${wo[i-1]}</p>
            <button id="${i}">del</button>
          </div>`
    )
    show();
}

function show(){
    work.innerHTML="";
    for(i=arr.length;i>=1;i--){
        work.innerHTML+=arr[i-1];
    }
}

add.addEventListener("click",addWork);