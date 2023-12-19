particlesJS.load('particles-js', 'particles-config.json');

document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("colorSwitch");
    const mainContent = document.getElementById("mainContent");

    const colors = ["#912F40", "#006494", "#008148" , "#3D314A", "#231651" ];
    let currentIndex = 0;



    button.addEventListener("click", function () {


        mainContent.style.backgroundColor = colors[currentIndex];
        currentIndex = (currentIndex + 1) % colors.length;


    });
});

