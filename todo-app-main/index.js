
let LIST=[];
let id=0;
let data=localStorage.getItem("TODO");
const theme=document.querySelector(".theme");
const todoAera=document.querySelector(".notes");
var darkTheme=true;
var leftItem=0;
const CHECK="checked-circ";
const UNCHECK="text-circle";
const LINE_THROUGH="line-through";
const allTextButton=document.querySelector(".foot.all-text");
const activeTextButton=document.querySelector(".active-todo");
const complateTextButton=document.querySelector(".complated-todo");



if(data){
    LIST=JSON.parse(data);
    id=LIST.length;
    loadlist(LIST);
}else{
    LIST=[];
    id=0;
}

function loadlist(array){
    array.forEach(function(item){
        addToDo(item.name, item.id, item.done, item.trash);
        
    });
}

if(LIST!=null){
    console.log(LIST);
     leftItem=0;
    LIST.forEach(function(item){
        if(item.trash===false&&item.done===false){
            leftItem++;
            console.log("baba");
        }
    });
    document.querySelector(".left-item").innerHTML=leftItem;
    console.log(leftItem);
}




function addToDo(toDo,id,done, trash){
if(trash){return;}
    
    const DONE= done ? CHECK : UNCHECK;
    const LINE= done ? LINE_THROUGH:"";
    var themeChoser="";
    var circleTheme="";
    var pTheme="";
    if(darkTheme===true){
        themeChoser="todo-list";
        
    }else{
        themeChoser="todo-list light-todo";
        circleTheme="light-circle";
        pTheme="light-todo-p";
        console.log(themeChoser);
    }
    const text=`<div class="${themeChoser}">
    <div class="${DONE} ${circleTheme}" job="complete" id="${id}"></div>
     <p class="${LINE} ${pTheme}"> ${toDo} </p>
      <img job="delete" id="${id}" src="./images/icon-cross.svg" alt="icon-cross" >
      </div>`;
    todoAera.insertAdjacentHTML("afterbegin",text);
    
}

const input= document.querySelector(".input-text");

document.addEventListener("keyup",function(event){
if (event.keyCode==13){
    const todo=input.value;
    if(todo){
        addToDo(todo,id,false,false )
        LIST.push({
            name:todo,
            id:id,
            done:false,
            trash:false
        });
        localStorage.setItem("TODO", JSON.stringify(LIST));
        id++;
        input.value="";
        leftItem=0;

        //just for items left
        LIST.forEach(function(item){
            if(item.trash===false&&item.done===false){
                leftItem++;
                document.querySelector(".left-item").innerHTML=leftItem;
            }
        });

        }else{
            alert("Write Something Please");
    }
    }
});

function complateToDo(element){

    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector("p").classList.toggle(LINE_THROUGH);
    LIST[element.id].done= LIST[element.id].done ? false:true;
}

function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash=true;
}

   
todoAera.addEventListener("click", function(event){
    const element=event.target;
    const elementJob= element.attributes.job.value;
    if(elementJob!=null){
        if (elementJob=="complete"){
            complateToDo(element);
        }else if(elementJob=="delete"){
            removeToDo(element)
            leftItem--;
                document.querySelector(".left-item").innerHTML=leftItem;
        }
    }
    localStorage.setItem("TODO", JSON.stringify(LIST));
})

function clear(){
    localStorage.clear();
    location.reload();
}

document.querySelector(".active-todo").addEventListener("click",function(){
   const active = LIST.filter(item => item.done===false&&item.trash===false);
  document.querySelectorAll(".todo-list").forEach(function(item){
      item.remove();
  });
   active.forEach(function(item){
    addToDo(item.name,item.id,item.done,item.trash);
   })
   allTextButton.style.color=("hsl(233, 14%, 35%)");
   complateTextButton.style.color=("hsl(233, 14%, 35%)");
   activeTextButton.style.color=("hsl(220, 98%, 61%)");
});

document.querySelector(".foot.all-text").addEventListener("click",function(){
    activeTextButton.style.color="hsl(233, 14%, 35%)";
    complateTextButton.style.color="hsl(233, 14%, 35%)";
    document.querySelectorAll(".todo-list").forEach(function(item){
        item.remove();
    });
    LIST.forEach(function(item){
        addToDo(item.name,item.id,item.done,item.trash);
       });

    
});

document.querySelector(".complated-todo").addEventListener("click",function(){
    const complate = LIST.filter(item => item.done===true&&item.trash===false);
   document.querySelectorAll(".todo-list").forEach(function(item){
       item.remove();
   });
    complate.forEach(function(item){
     addToDo(item.name,item.id,item.done,item.trash);
    });
    allTextButton.style.color=("hsl(233, 14%, 35%)");
    activeTextButton.style.color=("hsl(233, 14%, 35%)");
    complateTextButton.style.color=("hsl(220, 98%, 61%)");
 });

 document.querySelector(".last-p").addEventListener("click",function(){
    LIST.forEach(function(item){
        if(item.done===true){
            console.log(item.name);
            item.trash=true;
        }
    });
    console.log("yogurt");
    localStorage.setItem("TODO", JSON.stringify(LIST));
    document.querySelectorAll(".todo-list").forEach(function(item){
        item.remove();
    });
    leftItem=0;
    LIST.forEach(function(item){
        addToDo(item.name,item.id,item.done,item.trash);
        if(item.trash===false){leftItem++;}
        
        document.querySelector(".left-item").innerHTML=leftItem;
       });

 });
 
 theme.addEventListener("click",function(){
     if(darkTheme){
         darkTheme=false;
     }else{
         darkTheme=true;
     }

     if(darkTheme){
        document.querySelector(".theme").src="./images/icon-sun.svg"
     }else{
        document.querySelector(".theme").src="./images/icon-moon.svg"
     }
     console.log(darkTheme);
     
    document.querySelector(".main-sect").classList.toggle("light-main");
    document.querySelector(".text-area").classList.toggle("light-area");
    document.querySelectorAll(".text-circle").forEach(function(item){
        item.classList.toggle("light-circle");
    });
    document.querySelector(".notes").classList.toggle("light-notes");
    document.querySelectorAll(".todo-list").forEach(function(item){
        item.classList.toggle("light-todo");
    });
    

    document.querySelectorAll(".todo-list p").forEach(function(item){
        item.classList.toggle("light-todo-p");
    });
    document.querySelectorAll(".foot").forEach(function(item){
        item.classList.toggle("light-foot");
    });
    
    
 });
