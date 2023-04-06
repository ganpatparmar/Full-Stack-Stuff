// alert("hey i am here!")

list = document.querySelectorAll("button")
var audio = new Audio('sounds/tom-1.mp3');

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("click",function (){
        this.style.color = "white"
        var buttonClick = this.innerText
        playSound(buttonClick)
        

    })
    
}

document.addEventListener("keydown", function(event){
    playSound(event.key)
})


function playSound(buttonClick){

    switch (buttonClick) {
        case 'w':
            crash = new Audio("sounds/crash.mp3")
            crash.play()                
            break;

        case 'a':
            kickBass = new Audio("sounds/kick-bass.mp3")
            kickBass.play()                
            break;

        case 's':
            sanre = new Audio("sounds/snare.mp3")
            sanre.play()                
            break;

        case 'd':
            tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play()                
            break;

        case 'j':
            tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play()                
            break;
        case 'k':
            tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play()                
            break;
        case 'l':
            tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play()                
            break;
        
    
        default:
            break;
    }
    
}