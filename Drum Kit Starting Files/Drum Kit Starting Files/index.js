
let drums = document.querySelectorAll(".drum");

for(x = 0; x < drums.length; x++){
    document.querySelectorAll(".drum")[x].addEventListener("click", function(){
        
        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        btnAnimation(buttonInnerHTML)
    
    });
}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    btnAnimation(event.key)
});


function makeSound(key){
    switch (key){
        case "w":
           let crash = new Audio("sounds/crash.mp3");
           crash.play();
        break;

        case "a":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;
           
        case "s":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;

        case "d":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;

        case "j":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case "k":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;

        case "l":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;

        case "g":
            let tom5 = new Audio("sounds/goat.mp3");
            tom5.play();
        break;
        default: console.log(event.key);
    }
}

function btnAnimation(currentKey){

 let active = document.querySelector("."+ currentKey);
 active.classList.add("pressed");
 setTimeout(function() {
    active.classList.remove("pressed");
 }), 100;

}