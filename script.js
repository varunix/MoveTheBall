var outerDivTag = document.getElementById('outerDiv');
var theBallTag = document.getElementById('theBall');
var x = 0;
var y = 0;

document.addEventListener('keydown', (event)=>{
    var pressedKey = event.key;

    if(pressedKey === 'd'){
        if(x < 800){
            x += 10;
            theBallTag.style.transform = `translate(${x}px, ${y}px)`;
        }
    }
    else if(pressedKey === 'a'){
        if(x > 0){
            x -= 10;
            theBallTag.style.transform = `translate(${x}px, ${y}px)`;
        }
    }
    else if(pressedKey === 'w'){
        if(y > 0){
            y -= 10;
            theBallTag.style.transform = `translate(${x}px, ${y}px)`;
        }
    }
    else if(pressedKey === 's'){
        if(y < 400){
            y += 10;
            theBallTag.style.transform = `translate(${x}px, ${y}px)`;
        }
    }
});