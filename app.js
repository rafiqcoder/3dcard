const container = document.querySelector('.container');
const card = document.querySelector('.card');
const shoe = document.querySelector('.shoe');
// const sneakerImg = document.querySelector('.sneaker .shoe');
const sneakerImg = document.getElementById('shoe');
// const sneaker = document.querySelectorAll('.sneaker');
const info = document.querySelector('.info');
const title = document.querySelector('.title');
const desc = document.querySelector('.desc');
const size = document.querySelector('.size');
const purchuse = document.querySelector('.purchase');



//moving animation event

container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX)/10;
    let yAxis = (window.innerHeight / 2 - e.pageY)/10;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

container.addEventListener('mouseenter', () => {
    card.style.transition = "none";
    //popout
    info.style.transform = "translateZ(90px)";
    desc.style.transform = "translateZ(75px)";
    size.style.transform = "translateZ(70px)";
    // sneakerImg.style.transform = " translateZ(150px)";
    sneakerImg.style.transform = "rotate(-30deg)";
    purchuse.style.transform = "translateZ(50px)";


})

container.addEventListener('mouseleave', () => {
    card.style.transform = `rotateY(0) rotateX(0)`;
    card.style.transition = "all .5s ease";
    info.style.transition = "all .5s ease";
    desc.style.transition = "all .5s ease";
    purchuse.style.transition = "all .5s ease";
    size.style.transition = "all .5s ease";

    info.style.transform = "translateZ(0)";

    sneakerImg.style.transform = "rotate(0)";
    desc.style.transform = "translateZ(0)";
    size.style.transform = "translateZ(0)";
    purchuse.style.transform = "translateZ(0)";

    // title.style.transform = "translateZ(0px)";
});

