const inp=document.getElementById("input");
const add=document.querySelector("#add");
const work=document.getElementById("work");
const del=document.getElementsByClassName("del");
const done=document.getElementsByClassName("done");

const wo=[];
const che=[];
let i=1;
const saved = localStorage.getItem("wo");
const cheSaved=localStorage.getItem("che");
if (saved) {
    wo.push(...JSON.parse(saved));
    che.push(...JSON.parse(cheSaved));
    show();
}

function addWork(){
    wo.push(inp.value);
    che.push("false");
    inp.value="";
    show();
}

function deleteWork(i){
    wo.splice(i,1);
    che.splice(i,1);
    console.log(i);
    show();
}

function workDone(i){
    const temp=document.getElementById(`p-${i}`);
    temp.style.textDecoration="line-through";
    temp.style.opacity="0.5";
    che[i]=true;
    
}

function workUndo(i){
    const temp=document.getElementById(`p-${i}`);
    temp.style.textDecoration="none";
    temp.style.opacity="1";
    che[i]=false;

}

function show(){
    work.innerHTML="";
    for(i=wo.length;i>=1;i--){
        work.innerHTML+=`
          <div id="to-do"> 
            <input type="checkbox" name="done" class="done" id="${i}">
            <div class="para-container">
               <p class="para" id="p-${i}">${wo[i-1]}</p>
            </div>
            <button class="del" id="${i}">X</button>
          </div>`;
        const temp=document.getElementById(`p-${i}`);
        if (che[i]==true){
            temp.style.textDecoration="line-through";
            temp.style.opacity="0.5";
        }
        
    }

    for (let btn of del){
        btn.addEventListener("click",function(){
            deleteWork(this.id-1);
        });
    }

    for (let check of done){
        check.addEventListener("click",function(){
            if(check.checked){
                workDone(this.id);
            }
            else{
                workUndo(this.id);
            }
        })
    }
    localStorage.setItem('wo', JSON.stringify(wo));
    localStorage.setItem('che', JSON.stringify(che));
}

add.addEventListener("click",addWork);
inp.addEventListener("keydown",function(e){
    if(e.key==='Enter' && inp.value.trim()!=""){
        addWork();
    }
})