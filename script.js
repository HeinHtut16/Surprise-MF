let body = document.querySelector("body");
let textContainer = document.querySelector(".text-container");
let startDetection = document.querySelector(".start-detection")
let detection = document.querySelector(".detection");
let yes = document.querySelector(".yes");
let no = document.querySelector(".no");
let video = document.querySelector(".mf");
let textContainer2 = document.querySelector(".text-container2");
let trickAgain = document.querySelector(".trick-again");
let mfDetector = document.querySelector(".mf-detector");
let textContainer3 = document.querySelector(".text-container3");
let counter = 1;

startDetection.addEventListener("click", () => {
    startDetection.classList.add("hide");
    detection.classList.add("show");
});

document.addEventListener("click", (e) => {
    if(e.target.matches(".yes") || e.target.matches(".no")) 
    {
        textContainer.classList.add("hide");
        video.classList.add("show");
        video.play();
    }
});

video.addEventListener("ended", () => {
    if(counter === 1) {
        video.classList.remove("show");
        textContainer2.classList.add("flex");
    } else {
        video.classList.remove("show");
        textContainer3.classList.add("flex");
          
    }
    counter++;
});

function reset() {
    textContainer2.classList.remove("flex");
    startDetection.classList.remove("hide");
    textContainer.classList.remove("hide");
    detection.classList.remove("show");
}

trickAgain.onclick = reset;

console.log(window.innerWidth)