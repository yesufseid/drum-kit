var x=document.querySelectorAll(".drum").length
for(i=0;i<x;i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       var buttoninnerhtml=this.innerHTML;
       switch (buttoninnerhtml) {
         case "s":
         var crash=new Audio('sounds/crash.mp3');
         crash.play()
          break;
        case"a":
        var seya=new Audio('sounds/kick-bass.mp3');
           seya.play()
           break;
           case"x":
        var seya=new Audio('sounds/snare.mp3');
           seya.play()
           break;
           case"d":
        var seya=new Audio('sounds/tom-1.mp3');
           seya.play()
           break;
           case"j":
        var seya=new Audio('sounds/tom-2.mp3');
           seya.play()
           break;
           case"k":
        var seya=new Audio('sounds/tom-3.mp3');
           seya.play()
           break;
           case"l":
        var seya=new Audio('sounds/tom-4.mp3');
           seya.play()
           break;
         default: console.log(buttoninnerhtml)}
        
         addanimation(buttoninnerhtml)        
           
      })}

      function addanimation(buttoninnerhtml) {
         var currenekey=document.querySelector("."+buttoninnerhtml)
         currenekey.classList.add("pressed")
         setTimeout(function() {
            currenekey.classList.remove("pressed") },3)
      }
   

      document.addEventListener("keypress",function(event){
         addanimation(event.key)

        switch (event.key) {
         case "s":
         var crash=new Audio('sounds/crash.mp3');
         crash.play()
          break;
        case"a":
        var seya=new Audio('sounds/kick-bass.mp3');
           seya.play()
           break;
           case"x":
        var seya=new Audio('sounds/snare.mp3');
           seya.play()
           break;
           case"d":
        var seya=new Audio('sounds/tom-1.mp3');
           seya.play()
           break;
           case"j":
        var seya=new Audio('sounds/tom-2.mp3');
           seya.play()
           break;
           case"k":
        var seya=new Audio('sounds/tom-3.mp3');
           seya.play()
           break;
           case"l":
        var seya=new Audio('sounds/tom-4.mp3');
           seya.play()
           break;
         default: console.log(buttoninnerhtml)}
        
                   
           
      })

