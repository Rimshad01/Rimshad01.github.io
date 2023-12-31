let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue =  Math.round((pos * 100) / calcHeight);
    if(pos > 100) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#6610f2 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};


window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


// var loader = document.getElementById("preloader");

// window.addEventListener("load", function(){
//     // loader.style.display = "none";
// })

const spinnerWrapperE1 = document.querySelector('.spinner-wrapper');

setTimeout(() => {
    spinnerWrapperE1.style.opacity = '0';
}, 1000);


