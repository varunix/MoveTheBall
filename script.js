var outerDivTag = document.getElementById('outerDiv');
var theBallTag = document.getElementById('theBall');
var x = 0;
var y = 0;

document.addEventListener('keydown', (event)=>{
    var pressedKey = event.key;

    if(pressedKey === 'd'){
        x += 10;
        theBallTag.style.transform = `translate(${x}px, ${y}px)`;
    }
    else if(pressedKey === 'a'){
        x -= 10;
        theBallTag.style.transform = `translate(${x}px, ${y}px)`;
    }
    else if(pressedKey === 'w'){
        y -= 10;
        theBallTag.style.transform = `translate(${x}px, ${y}px)`;
    }
    else if(pressedKey === 's'){
        y += 10;
        theBallTag.style.transform = `translate(${x}px, ${y}px)`;
    }
});