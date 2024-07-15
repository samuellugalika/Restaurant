const toogleBtn = document.querySelector(".toogle-btn");
const navBar = document.querySelector(".links");
const swipper = document.querySelector(".swipper");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let currentIndex = 0

toogleBtn.addEventListener("click", ()=>{
    navBar.classList.toggle('active');
});

window.onscroll = ()=>{
    navBar.classList.remove('active');
};

prevBtn.addEventListener("click", showPreviousSlide);
nextBtn.addEventListener("click", showNextSlide);

function showPreviousSlide() {
    if (currentIndex > 0 ){
        currentIndex--;
        updateSlider();
    }
}

function showNextSlide() {
    if (currentIndex < swipper.children.length - 2){
        currentIndex ++;
        updateSlider();
    }
}

function updateSlider(){
    const slideWidth = swipper.children[0].offsetWidth;
    swipper.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}