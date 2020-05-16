window.addEventListener("load", function(){
    document.addEventListener("click", nextScreen);

    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// We listen to the resize event
window.addEventListener('resize', function(){
    // We execute the same script as before
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

function nextScreen(){
    window.location.href = "main.html";
}