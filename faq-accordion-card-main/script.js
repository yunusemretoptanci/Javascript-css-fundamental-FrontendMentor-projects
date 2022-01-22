document.querySelectorAll(".fav-icon").forEach((item)=>{
  item.addEventListener("click",(event)=>{
var x=document.querySelectorAll(".fav-icon");
console.log(x);

if(item.nextElementSibling.classList.contains("open")){
  item.nextElementSibling.classList="undet-text";
  item.style.transform='rotate(360deg)';
}else{

  for (var i = 0; i < x.length; i++) {
    x[i].nextElementSibling.classList="undet-text";
    x[i].style.transform='rotate(0deg)';
  }
    item.nextElementSibling.classList="open";
    item.style.transform='rotate(180deg)';
}
  })
})


























// document.querySelector(".icon-one").onclick=function(){
//
//   var selector=document.querySelector(".one").style.display==="none";
//   if(selector){
//     document.querySelector(".two").style.display='none';
//     document.querySelector(".one").style.display='block';
//     document.querySelector(".first-list").style.fontWeight='bold';
//     document.querySelector(".icon-one").style.transform='rotate(180deg)';
//
//   }else{
//     document.querySelector(".first-list").style.fontWeight='normal';
//     document.querySelector(".one").style.display='none';
//     document.querySelector(".icon-one").style.transform='rotate(360deg)';
//
//   }
// }
//
// document.querySelector(".icon-two").onclick=function(){
//   var selector=document.querySelector(".two").style.display==="none";
//   if(selector){
//     document.querySelector(".two").style.display='block';
//     document.querySelector(".second-list").style.fontWeight='bold';
//   }else{
//     document.querySelector(".two").style.display='none';
//     document.querySelector(".second-list").style.fontWeight='normal';
//   }
// }
//
// document.querySelector(".icon-three").onclick=function(){
//   var selector=document.querySelector(".three").style.display==="none";
//   if(selector){
//     document.querySelector(".three").style.display='block';
//     document.querySelector(".third-list").style.fontWeight='bold';
//   }else{
//     document.querySelector(".three").style.display='none';
//     document.querySelector(".third-list").style.fontWeight='normal';
//   }
// }
//
// document.querySelector(".icon-four").onclick=function(){
//   var selector=document.querySelector(".four").style.display==="none";
//   if(selector){
//     document.querySelector(".four").style.display='block';
//     document.querySelector(".fourth-list").style.fontWeight='bold';
//   }else{
//     document.querySelector(".fourth-list").style.fontWeight='normal';
//     document.querySelector(".four").style.display='none';
//   }
// }
//
// document.querySelector(".icon-five").onclick=function(){
//   var selector=document.querySelector(".five").style.display==="none";
//   if(selector){
//     document.querySelector(".fifth-list").style.fontWeight='bold';
//     document.querySelector(".five").style.display='block';
//   }else{
//     document.querySelector(".fifth-list").style.fontWeight='normal';
//     document.querySelector(".five").style.display='none';
//   }
// }
