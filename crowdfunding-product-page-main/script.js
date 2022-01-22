//bookmark-button animation
document.querySelector(".bookmark-button").addEventListener('click',function(){
  if(document.querySelector(".bookmark-p").classList.contains("active")){
    document.querySelector(".bookmark-p").classList.remove("active")
    document.querySelector(".bookmark-p").innerText="Bookmark";
  }else{
    document.querySelector(".bookmark-p").classList.add("active")
    document.querySelector(".bookmark-p").innerText="Bookmarked";
  }
});

var backButton=document.querySelector(".back-button");
var purchase=document.querySelector(".buy-div");
backButton.addEventListener('click',function(){
  if(!purchase.classList.contains("active")){
    purchase.classList.add("active");
    for (var i = 0; i < 4; i++) {
      document.querySelectorAll(".purc")[i].classList.remove("active"+i);
    }
  }

});


document.querySelectorAll(".stand button").forEach((item3)=>{
  item3.addEventListener("click", function(){
    if(!purchase.classList.contains("active")){
      purchase.classList.add("active");
      for (var i = 0; i < 4; i++) {
        document.querySelectorAll(".purc")[i].classList.remove("active"+i);

      }
      location.href="#buyHead";
      myvar=setTimeout(navFunction,500);
      function navFunction(){
        location.href="#blackBoss";
        document.querySelector(".buy-div").style.scrollBehavior="smooth";
        document.querySelector(".purc.black-reward").classList.add("active2");
      }
    }
  })
}
)

document.querySelectorAll(".radio-circle").forEach((item) => {
  item.addEventListener("click", function(){
    if(item.classList.contains("bambooc")){
      document.querySelectorAll(".purc").forEach((item)=>{item.classList.add("active1");
item.classList.remove("active2")
item.classList.remove("active0");
item.classList.remove("active3");
document.querySelector(".bamboo-reward").classList.add("active1");
    })
    }else if (item.classList.contains("blackc")) {
      document.querySelectorAll(".purc").forEach((item)=>{

        item.classList.add("active2");
      item.classList.remove("active1");
      item.classList.remove("active0");
      item.classList.remove("active3");
      document.querySelector(".black-reward").classList.add("active2");
    })
  }else if (item.classList.contains("pledgc")) {
    document.querySelectorAll(".purc").forEach((item)=>{
      item.classList.remove("active2");
    item.classList.remove("active1");
    item.classList.add("active0");
    document.querySelector(".no-reward").classList.add("active0");
    item.classList.remove("active3");

  })
}else if (item.classList.contains("mahoc")) {
  document.querySelectorAll(".purc").forEach((item)=>{
    item.classList.remove("active2");
  item.classList.remove("active1");
  item.classList.remove("active0");
  item.classList.add("active3");
  document.querySelector(".mahogany-reward").classList.add("active3");
})
}

  })
});


document.querySelector(".cross").addEventListener("click", function(){
  purchase.classList.remove("active");
})


document.querySelector("input").addEventListener("focus" ,function(){
  document.querySelector(".number-div").classList.add("active");

})
document.querySelector("input").addEventListener("blur" ,function(){
  document.querySelector(".number-div").classList.remove("active");

})
var xy=89914;
var backedAmonut=document.querySelector(".backed");
var button=document.querySelectorAll(".contiune");
function input(){ document.querySelectorAll("input").forEach((item2) => {
  if(item2.value>0){
    console.log(item2.value);
    var donateTot=document.querySelector(".backed span");

    var newDonate=xy+ +item2.value;
    console.log(+newDonate);
    xy=newDonate;
    donateTot.innerHTML=newDonate.toLocaleString();
    var bar=document.querySelector(".progress_fill");
    var x=100000-newDonate;
    var y=100000-x
    document.querySelector(".buy-div").classList.remove("active");
    location.href=("#yogurt");
    var direcSect=document.querySelector(".direction-inside");
    direcSect.style.opacity="0";
    var setTime=setTimeout(setFunction,500);
    function setFunction(){
      direcSect.style.opacity="1";
      var blmTime=setTimeout(agaFunct,300);
      function agaFunct(){
        bar.style.width=y/1000+"%";
      }
    }


  };
  item2.value="";
});


};

  button.forEach((item) => {
      item.addEventListener("click",function(){
        input();

      })
    });
