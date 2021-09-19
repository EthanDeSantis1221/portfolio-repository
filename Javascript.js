
function scrollAppear(){
    var introText = document.querySelector('.hero-text');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.25;

    if(introPosition < screenPosition) {
        introText.classList.add('hero-text-appear');
    }
    
}

window.addEventListener('scroll', scrollAppear);


function scrollAppear2(){
    var introText2 = document.querySelector('.aboutme-text');
    var introPosition2 = introText2.getBoundingClientRect().top;
    var screenPosition2 = window.innerHeight / 1.25;

    if(introPosition2 < screenPosition2) {
        introText2.classList.add('aboutme-text-appear');
    }
}

window.addEventListener('scroll', scrollAppear2);



function scrollAppear4(){
    var introText4 = document.querySelector('.my-work-text');
    var introPosition4 = introText4.getBoundingClientRect().top;
    var screenPosition4 = window.innerHeight / 1.25;

    if(introPosition4 < screenPosition4) {
        introText4.classList.add('my-work-text-appear');
    }
}

window.addEventListener('scroll', scrollAppear4);


function scrollAppear5(){
    var introText5 = document.querySelector('.image-gallery');
    var introPosition5 = introText5.getBoundingClientRect().top;
    var screenPosition5 = window.innerHeight / 1.00;

    if(introPosition5 < screenPosition5) {
        introText5.classList.add('image-gallery-appear');
    }
}

window.addEventListener('scroll', scrollAppear5);



function scrollAppear7(){
    var introText7 = document.querySelector('.inverse');
    var introPosition7 = introText7.getBoundingClientRect().top;
    var screenPosition7 = window.innerHeight / 1.25;

    if(introPosition7 < screenPosition7) {
        introText7.classList.add('inverse-appear');
    }
}

window.addEventListener('scroll', scrollAppear7);


function scrollAppear8(){
    var introText8 = document.querySelector('.inverse-item');
    var introPosition8 = introText8.getBoundingClientRect().top;
    var screenPosition8 = window.innerHeight / 1.25;

    if(introPosition8 < screenPosition8) {
        introText8.classList.add('inverse-item-appear');
    }
}

window.addEventListener('scroll', scrollAppear8);

function scrollAppear9(){
    var introText9 = document.querySelector('.inverse-item2');
    var introPosition9 = introText9.getBoundingClientRect().top;
    var screenPosition9 = window.innerHeight / 1.25;

    if(introPosition9 < screenPosition9) {
        introText9.classList.add('inverse-item2-appear');
    }
}

window.addEventListener('scroll', scrollAppear9);


function scrollAppear10(){
    var introText10 = document.querySelector('.flexbox');
    var introPosition10 = introText10.getBoundingClientRect().top;
    var screenPosition10 = window.innerHeight / 1.25;

    if(introPosition10 < screenPosition10) {
        introText10.classList.add('flexboxappear');
    }
}

window.addEventListener('scroll', scrollAppear10);











