function placeClumpText(a, b, c) {
    const textElement = document.createElement('div');
    textElement.className = a;
    textElement.id = b;
    textElement.textContent = c;
    textElement.style.zIndex = "10";
    const container = document.querySelector('.game-container');

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    const randomX = Math.random() * (containerWidth - 100);
    const randomY = Math.random() * (containerHeight - 100); 

    textElement.style.left = `${randomX}px`;
    textElement.style.top = `${randomY}px`;

    document.body.appendChild(textElement);
}

function placeImage(a, b, c, d) {
    const imageElement = document.createElement('img');
    imageElement.className = a;
    imageElement.id = b;
    imageElement.src = c;
    imageElement.width = d;
    imageElement.style.zIndex = "12";
    const container = document.querySelector('.game-container');

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    const randomX = Math.random() * (containerWidth - d);
    const randomY = Math.random() * (containerHeight - d); 

    imageElement.style.left = `${randomX}px`;
    imageElement.style.top = `${randomY}px`;

    document.body.appendChild(imageElement);
}

function placeFillerText() {
    const textElement = document.createElement('div');
    textElement.className = 'filler-text';
    textElement.id = 'filler-click';
    textElement.textContent = 'Ce?';
    const container = document.querySelector('.game-container');

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    const randomX = Math.random() * (containerWidth - 60);
    const randomY = Math.random() * (containerHeight - 30);

    textElement.style.left = `${randomX}px`;
    textElement.style.top = `${randomY}px`;

    document.body.appendChild(textElement);
}

function startPlacingText() {
    let count = 0;
    const interval = setInterval(() => {
        placeFillerText();
        count++;

        if (count >= 1000) {
            clearInterval(interval);
        }
    }, 50);
}

function startPlacingImages() {
    let count = 0;
    const interval = setInterval(() => {
        let img = document.querySelector("#image-id-" + count);
        img.style.display = "flex";
        count++;

        if (count >= 100) {
            clearInterval(interval);
        }
    }, 4000);
}

document.addEventListener( "DOMContentLoaded", placeClumpText("clump1-text", "clump1-click", "Sweetie,"));
document.addEventListener( "DOMContentLoaded", placeClumpText("clump2-text", "clump2-click", "is it hot"));
document.addEventListener( "DOMContentLoaded", placeClumpText("clump3-text", "clump3-click", "outside?"));
document.addEventListener( "DOMContentLoaded", placeClumpText("clump4-text", "clump4-click", "Si,"));
document.addEventListener( "DOMContentLoaded", placeClumpText("clump5-text", "clump5-click", "ducj"));
document.addEventListener( "DOMContentLoaded", placeClumpText("clump6-text", "clump6-click", "a sudin"));
document.addEventListener( "DOMContentLoaded", placeClumpText("clump7-text", "clump7-click", "une vore"));

for (let index = 0; index < 100; index++) {
    document.addEventListener( "DOMContentLoaded", placeImage('image-class', 'image-id-' + index, 'images/sun.png', '200'));
}

window.onload = function() {
    startPlacingText();
    startPlacingImages();
    clump4Text.style.visibility = "hidden";
    clump5Text.style.visibility = "hidden";
    clump6Text.style.visibility = "hidden";
    clump7Text.style.visibility = "hidden";
}

let clump1Text = document.querySelector("#clump1-click");
let clump1Translate = document.querySelector("#clump1-translate");
let clump2Text = document.querySelector("#clump2-click");
let clump2Translate = document.querySelector("#clump2-translate");
let clump3Text = document.querySelector("#clump3-click");
let clump3Translate = document.querySelector("#clump3-translate");
let clump4Text = document.querySelector("#clump4-click");
let clump4Translate = document.querySelector("#clump4-translate");
let clump5Text = document.querySelector("#clump5-click");
let clump5Translate = document.querySelector("#clump5-translate");
let clump6Text = document.querySelector("#clump6-click");
let clump6Translate = document.querySelector("#clump6-translate");
let clump7Text = document.querySelector("#clump7-click");
let clump7Translate = document.querySelector("#clump7-translate");

let warningText = document.querySelector("#warning-text");
let nextText = document.querySelector("#next-text");
let endText = document.querySelector("#end-text");

let line1 = document.querySelector("#line1");
let line2 = document.querySelector("#line2");
let line3 = document.querySelector("#line3");
let line4 = document.querySelector("#line4");

for (let index = 0; index < 100; index++) {
    let imageClick = document.querySelector("#image-id-" + index);
    imageClick.addEventListener("click", function(){
        imageClick.style.display = "none";
    })
}

clump1Text.addEventListener("click", function(){
    clump1Translate.style.visibility = "visible";
})

clump2Text.addEventListener("click", function(){
    if (clump1Translate.style.visibility == "visible") {
        clump2Translate.style.visibility = "visible";
    } else {
        warningText.style.visibility = "visible";
        setTimeout(function(){
            warningText.style.visibility = "hidden";
        }, 3000);
    }
})

clump3Text.addEventListener("click", function(){
    if (clump2Translate.style.visibility == "visible") {
        clump3Translate.style.visibility = "visible";
        nextText.style.visibility = "visible";
        
        setTimeout(function(){
            nextText.style.visibility = "hidden";

            line1.style.display = "none";
            line2.style.display = "none";
            line3.style.display = "flex";
            line4.style.display = "flex";

            clump1Text.style.display = "none";
            clump2Text.style.display = "none";
            clump3Text.style.display = "none";

            clump4Text.style.visibility = "visible";
            clump5Text.style.visibility = "visible";
            clump6Text.style.visibility = "visible";
            clump7Text.style.visibility = "visible";
        }, 2000);
    } else {
        warningText.style.visibility = "visible";
        setTimeout(function(){
            warningText.style.visibility = "hidden";
        }, 3000);
    }
})

clump4Text.addEventListener("click", function(){
    clump4Translate.style.visibility = "visible";
})

clump5Text.addEventListener("click", function(){
    if (clump4Translate.style.visibility == "visible") {
        clump5Translate.style.visibility = "visible";
    } else {
        warningText.style.visibility = "visible";
        setTimeout(function(){
            warningText.style.visibility = "hidden";
        }, 3000);
    }
})

clump6Text.addEventListener("click", function(){
    if (clump5Translate.style.visibility == "visible") {
        clump6Translate.style.visibility = "visible";
    } else {
        warningText.style.visibility = "visible";
        setTimeout(function(){
            warningText.style.visibility = "hidden";
        }, 3000);
    }
})

clump7Text.addEventListener("click", function(){
    if (clump6Translate.style.visibility == "visible") {
        clump7Translate.style.visibility = "visible";
        endText.style.visibility = "visible";

        setTimeout(function(){
            window.location.href = 'index.html';
        }, 2000);
    } else {
        warningText.style.visibility = "visible";
        setTimeout(function(){
            warningText.style.visibility = "hidden";
        }, 3000);
    }
})


