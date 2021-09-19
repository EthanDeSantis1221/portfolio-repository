function scrollAppear1(){
    var introText1 = document.querySelector(".about_container");
    var introPosition1 = introText1.getBoundingClientRect().top;
    var screenPosition1 = window.innerHeight / 1.5;

    if(introPosition1 < screenPosition1) {
        introText1.classList.add("about_containerappear");
    }
}

window.addEventListener('scroll', scrollAppear1);
