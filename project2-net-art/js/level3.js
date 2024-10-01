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
    const randomY = Math.random() * (containerHeight - 150); 

    imageElement.style.left = `${randomX}px`;
    imageElement.style.top = `${randomY}px`;

    document.body.appendChild(imageElement);
}

function placeFillerText() {
    const textElement = document.createElement('div');
    textElement.className = 'filler-text';
    textElement.id = 'filler-click';
    textElement.textContent = 'Cossa?';
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
        let img2 = document.querySelector("#images-id-" + count);
        img2.style.display = "flex";
        count++;

        if (count >= 100) {
            clearInterval(interval);
        }
    }, 5000);
}

document.addEventListener( "DOMContentLoaded", placeClumpText("clump1-text", "clump1-click", "It's time"));
document.addEventListener( "DOMContentLoaded", placeClumpText("clump2-text", "clump2-click", "to eat"));
document.addEventListener( "DOMContentLoaded", placeClumpText("clump3-text", "clump3-click", "then"));
document.addEventListener( "DOMContentLoaded", placeClumpText("clump4-text", "clump4-click", "we'll have to"));
document.addEventListener( "DOMContentLoaded", placeClumpText("clump5-text", "clump5-click", "stack"));
document.addEventListener( "DOMContentLoaded", placeClumpText("clump6-text", "clump6-click", "logs"));
document.addEventListener( "DOMContentLoaded", placeClumpText("clump7-text", "clump7-click", "Alora"));
document.addEventListener( "DOMContentLoaded", placeClumpText("clump8-text", "clump8-click", "magnemo"));
document.addEventListener( "DOMContentLoaded", placeClumpText("clump9-text", "clump9-click", "ben"));
document.addEventListener( "DOMContentLoaded", placeClumpText("clump10-text", "clump10-click", "cusi semo"));
document.addEventListener( "DOMContentLoaded", placeClumpText("clump11-text", "clump11-click", "pronti"));

for (let index = 0; index < 100; index++) {
    document.addEventListener( "DOMContentLoaded", placeImage('image-class', 'image-id-' + index, 'images/pasta.png', '200'));
}

for (let index = 0; index < 100; index++) {
    document.addEventListener( "DOMContentLoaded", placeImage('image-class', 'images-id-' + index, 'images/log.png', '75'));
}

window.onload = function() {
    startPlacingText();
    startPlacingImages();
    clump7Text.style.visibility = "hidden";
    clump8Text.style.visibility = "hidden";
    clump9Text.style.visibility = "hidden";
    clump10Text.style.visibility = "hidden";
    clump11Text.style.visibility = "hidden";
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
let clump8Text = document.querySelector("#clump8-click");
let clump8Translate = document.querySelector("#clump8-translate");
let clump9Text = document.querySelector("#clump9-click");
let clump9Translate = document.querySelector("#clump9-translate");
let clump10Text = document.querySelector("#clump10-click");
let clump10Translate = document.querySelector("#clump10-translate");
let clump11Text = document.querySelector("#clump11-click");
let clump11Translate = document.querySelector("#clump11-translate");

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

for (let index = 0; index < 100; index++) {
    let imageClick = document.querySelector("#images-id-" + index);
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
    } else {
        warningText.style.visibility = "visible";
        setTimeout(function(){
            warningText.style.visibility = "hidden";
        }, 3000);
    }
})

clump4Text.addEventListener("click", function(){
    if (clump3Translate.style.visibility == "visible") {
        clump4Translate.style.visibility = "visible";
    } else {
        warningText.style.visibility = "visible";
        setTimeout(function(){
            warningText.style.visibility = "hidden";
        }, 3000);
    }
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
            clump4Text.style.display = "none";
            clump5Text.style.display = "none";
            clump6Text.style.display = "none";

            clump7Text.style.visibility = "visible";
            clump8Text.style.visibility = "visible";
            clump9Text.style.visibility = "visible";
            clump10Text.style.visibility = "visible";
            clump11Text.style.visibility = "visible";
        }, 2000);
    } else {
        warningText.style.visibility = "visible";
        setTimeout(function(){
            warningText.style.visibility = "hidden";
        }, 3000);
    }
})

clump7Text.addEventListener("click", function(){
    clump7Translate.style.visibility = "visible";
})

clump8Text.addEventListener("click", function(){
    if (clump7Translate.style.visibility == "visible") {
        clump8Translate.style.visibility = "visible";
    } else {
        warningText.style.visibility = "visible";
        setTimeout(function(){
            warningText.style.visibility = "hidden";
        }, 3000);
    }
})

clump9Text.addEventListener("click", function(){
    if (clump8Translate.style.visibility == "visible") {
        clump9Translate.style.visibility = "visible";
    } else {
        warningText.style.visibility = "visible";
        setTimeout(function(){
            warningText.style.visibility = "hidden";
        }, 3000);
    }
})

clump10Text.addEventListener("click", function(){
    if (clump9Translate.style.visibility == "visible") {
        clump10Translate.style.visibility = "visible";
    } else {
        warningText.style.visibility = "visible";
        setTimeout(function(){
            warningText.style.visibility = "hidden";
        }, 3000);
    }
})

clump11Text.addEventListener("click", function(){
    if (clump10Translate.style.visibility == "visible") {
        clump11Translate.style.visibility = "visible";
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


