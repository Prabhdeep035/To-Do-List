const inp=document.getElementById("input");
const add=document.querySelector("#add");
const work=document.getElementById("work");
const del=document.getElementsByClassName("del");

const wo=[];
const arr=[];
let i=1;

function addWork(){
    wo.push(inp.value);
    i=wo.length;
    inp.value="";
    arr.push(`
          <div id="to-do"> 
            <input type="checkbox" name="done" class="done" id="check-${i}">
            <p id="p-${i}">${wo[i-1]}</p>
            <button class="del" id="${i}">del</button>
          </div>`
    )
    show();
}

function deleteWork(i){
    arr.splice(i,1);
    wo.splice(i,1);
    console.log(wo);
    show();
}

function show(){
    work.innerHTML="";
    for(i=arr.length;i>=1;i--){
        work.innerHTML+=arr[i-1];
    }

    for (let btn of del){
        btn.addEventListener("click",function(){
        deleteWork(this.id-1);
        });
    }
}

add.addEventListener("click",addWork);
inp.addEventListener("keydown",function(e){
    if(e.key==='Enter'){
        addWork();
    }
})

