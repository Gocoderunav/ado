var yDim = window.screen.availHeight
var xDim = window.screen.availWidth

function random(min, max) {
    return min + Math.random() * (max + 1 - min);
}

function createStars(xDim, yDim) {
    const body = document.querySelector('body');
    const canvasSize = body.offsetWidth * body.offsetHeight;
    const starsFraction = canvasSize / 150;

    for(let i = 0; i < starsFraction; i++) {
        const star = document.createElement('div');
        star.style.zIndex = -4;
        star.style.position = 'fixed';
        star.style.left = random(0, xDim) + '%';
        star.style.top = random(0, yDim) + '%';
        star.style.opacity = random(0.5, 1);
        star.style.width = '1px';
        star.style.height = '1px';
        star.style.backgroundColor = '#ffffff';
        document.body.appendChild(star);
    }
}

function meteorShower(xDim, yDim) {
    for(let i = 0; i < random(15, 25); i++) {
        const meteor = document.createElement('div');
        meteor.style.position = 'fixed';
        meteor.style.top = random(yDim/20, yDim/1.1) + 'px';
        meteor.style.left = random(10, 95) + 'vw';
        meteor.style.width = random(xDim/15, xDim/6) + 'px';
        meteor.style.transform = 'rotate(-' + random(35, 55) + 'deg)';
        meteor.classList.add("meteor");
        meteor.style.animation = 'meteor ' + random(5, 12) +'s linear infinite';
        document.body.appendChild(meteor);
    }
}

function calculateRenderingArea(xDim) {
    console.log(xDim);
    console.log(160000/xDim);
    var ratio = 160000/xDim;
    if (ratio <= 100) {
        return ratio;
    }
    else {
        return 100;
    }    
}

function setRenderingArea(xDim) {
    const area = document.getElementsByClassName('main')[0];
    area.style.width = calculateRenderingArea(xDim) + 'vw';
}

setRenderingArea(xDim);
createStars(xDim, yDim);
meteorShower(xDim, yDim);

