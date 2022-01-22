var buttons=document.querySelectorAll(".all-numb .no ");
var myNumber=document.querySelector("input");
var equals=document.querySelector(".item2");
var operations=document.querySelectorAll(".operation");
var dell=document.querySelector(".dell-div");
var reset=document.querySelector(".item1");
var changeTheme=document.querySelector(".theme-button");
var textTheme=document.querySelectorAll(".no,.operation p");
var someText=document.querySelectorAll("h3 , .other-p, span,input");
var mainBg=document.querySelectorAll("body, .calculator");
var buttonAreaBg=document.querySelectorAll(".numbers, .theme-button ");
var numberAreaBg=document.querySelectorAll(".numb-text,input");
var dellResetButtons=document.querySelectorAll(".item1, .dell-div");
var equalsButton=document.querySelector(".item2");
var themeBall=document.querySelector(".theme-ball");
var numm=document.querySelectorAll(".no,.operation");
var firstProcces=0;
var secondProcces=0;
var operationSymbol="";
buttons.forEach((item)=>{
  item.addEventListener("click",function(){

     myNumber.value+=item.querySelector("p").textContent;

  })
}
)

operations.forEach((item2)=>
item2.addEventListener("click",function(){
  firstProcces=myNumber.value;
  myNumber.value="";
  operationSymbol=item2.querySelector("p").textContent;
  console.log(firstProcces);
  console.log(operationSymbol);
})
)

equals.addEventListener("click", function(){
  secondProcces=myNumber.value;
  if(operationSymbol==="+"){
    myNumber.value=(+firstProcces + +secondProcces);
    

  }
  if(operationSymbol==="-"){
    myNumber.value=(+firstProcces - +secondProcces);
    

  }
  if(operationSymbol==="x"){
    myNumber.value=(+firstProcces * +secondProcces);
  }
  if(operationSymbol==="/"){
    myNumber.value=(+firstProcces / +secondProcces);
  }
firstProcces=myNumber.value;
secondProcces=0;
operationSymbol="";
})

dell.addEventListener("click",function(){
  myNumber.value= myNumber.value.substring(0, myNumber.value.length-1);
})

reset.addEventListener("click", function(){
  myNumber.value="";
  firstProcces=0;
  secondProcces=0;
})
var a=0;
changeTheme.addEventListener("click",function(){

  if(a==0){
    a=1;
    themeBall.style.left="9.5px";
    changeAll("hsl(60, 10%, 19%)","hsl(60, 10%, 19%)","hsl(0, 0%, 90%)","hsl(0, 5%, 81%)","hsl(0, 0%, 93%)","hsl(185, 42%, 37%)","hsl(25, 98%, 40%)","hsl(45, 7%, 89%)");
  }else if (a==1) {
    a=2;
    themeBall.style.left="18.5px";
    changeAll("hsl(52, 100%, 62%)","hsl(52, 100%, 62%)","hsl(268, 75%, 9%)","hsl(268, 71%, 12%)","hsl(268, 71%, 12%)","hsl(281, 89%, 26%)","hsl(176, 100%, 44%)","hsl(268, 47%, 21%)");
  }else if (a==2) {
    a=0;
    themeBall.style.left="1.2px";
    changeAll("hsl(0, 0%, 100%)","hsl(221, 14%, 31%)","hsl(222, 26%, 31%)","hsl(223, 31%, 20%","hsl(224, 36%, 15%)","hsl(225, 21%, 49%)","hsl(6, 63%, 50%)","hsl(30, 25%, 89%)");

  }

  //h3=calc , .other-p=THEME, .span-div span=1 2 3, .theme-button=themebuttondiv,
});

function changeAll(some,text,main,buttonArea,numberArea,dellReset,equal,num){
  textTheme.forEach((item)=>{
    item.style.color=text;
  });
  someText.forEach((item)=>{
    item.style.color=some;
  });
  mainBg.forEach((item) => {
    item.style.backgroundColor=main;
  });

  buttonAreaBg.forEach((item)=>{
    item.style.backgroundColor=buttonArea;
  })

  numberAreaBg.forEach((item)=>{
    item.style.backgroundColor=numberArea;
  })
  equalsButton.style.backgroundColor=equal;
  dellResetButtons.forEach((item)=>{
    item.style.backgroundColor=dellReset;
  });
  numm.forEach((item)=>{
    item.style.backgroundColor=num;
  });
}
