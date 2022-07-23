var outerDivTag = document.getElementById('outerDiv');
var theBallTag = document.getElementById('theBall');

document.addEventListener('keydown', (event)=>{
    var pressedKey = event.key;

    if(pressedKey === 'd'){
        count = 50;
        theBallTag.style.transform = "translateX("+count+"px)";
    }
    else if(pressedKey === 'a'){
        console.log(pressedKey)
    }
    else if(pressedKey === 'w'){
        console.log(pressedKey)
    }
    else if(pressedKey === 's'){
        console.log(pressedKey)
    }
});