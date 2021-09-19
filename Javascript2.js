function scrollAppear11(){
    var introText11 = document.querySelector(".colour");
    var introPosition11 = introText11.getBoundingClientRect().top;
    var screenPosition11 = window.innerHeight / 0.8;

    if(introPosition11 < screenPosition11) {
        introText11.classList.add("colourappear");
    }
}

window.addEventListener('scroll', scrollAppear11);

function scrollAppear11Z(){
    var introText11Z = document.querySelector(".assets");
    var introPosition11Z = introText11Z.getBoundingClientRect().top;
    var screenPosition11Z = window.innerHeight / 0.8;

    if(introPosition11Z < screenPosition11Z) {
        introText11Z.classList.add("assetappear");
    }
}

window.addEventListener('scroll', scrollAppear11Z);




function scrollAppear12(){
    var introText12 = document.querySelector(".design_container1");
    var introPosition12 = introText12.getBoundingClientRect().top;
    var screenPosition12 = window.innerHeight / 2.0;

    if(introPosition12 < screenPosition12) {
        introText12.classList.add("design_container1appear");
    }
}

window.addEventListener('scroll', scrollAppear12);


function scrollAppear13(){
    var introText13 = document.querySelector(".design_container2");
    var introPosition13 = introText13.getBoundingClientRect().top;
    var screenPosition13 = window.innerHeight / 1.5;

    if(introPosition13 < screenPosition13) {
        introText13.classList.add("design_container2appear");
    }
}

window.addEventListener('scroll', scrollAppear13);


function scrollAppear14(){
    var introText14 = document.querySelector(".design_container3");
    var introPosition14 = introText14.getBoundingClientRect().top;
    var screenPosition14 = window.innerHeight / 1.5;

    if(introPosition14 < screenPosition14) {
        introText14.classList.add("design_container3appear");
    }
}

window.addEventListener('scroll', scrollAppear14);