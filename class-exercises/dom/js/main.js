
// console.log("hello world");

// let pageTitle = document.querySelector("#page-title");


// // javascript timeout changes time after 3 seconds
// setTimeout(function(){
//     pageTitle.style.color = "pink";
//     // console.log("timer worked");
// }, 3000);

// //click event on header changes background color
// document.querySelector("header").onclick = function(){
//     // console.log("clicked header")
//     document.querySelector("body").style.backgroundColor = "black";
// }

let image0 = document.querySelector("#image-0");
let image1 = document.querySelector("#image-1");
let image2 = document.querySelector("#image-2");
let image3 = document.querySelector("#image-3");

image0.addEventListener("click", function(){
    image2.style.visibility = "visible";
})

image1.addEventListener("click", function(){
    image3.style.visibility = "visible";
})

image2.addEventListener("click", function(){
    image0.style.visibility = "hidden";
})

image3.addEventListener("click", function(){
    image1.style.visibility = "hidden";
})

setTimeout(function(){
    image2.style.visibility = "hidden";
    image3.style.visibility = "hidden";
    image0.style.visibility = "visible";
    image1.style.visibility = "visible";
}, 10000);