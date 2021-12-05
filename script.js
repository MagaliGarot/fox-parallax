//TUTO : https://www.youtube.com/watch?v=TawH-AqHTXc

let back = document.getElementById("plan-7");
let cloud = document.getElementById("plan-6");
let ground = document.getElementById("plan-5");
let threeGround = document.getElementById("plan5-bois");
let groundAfterFox = document.getElementById("plan-4");
let threeAfterFox = document.getElementById("plan4-bois");
let groundFox = document.getElementById("plan-3");
let groundFoxBis = document.getElementById("plan-3bis");
let fox = document.getElementById("svg-fox");
let darkLeaf = document.getElementById("plan-1");
let title = document.getElementById("title");

window.addEventListener('scroll', function(){
    let value = window.scrollY
        //console.log(window.scrollY)
        //console.log(window.scrollX)
        back.style.top = value * 0.10 + 'px';
        cloud.style.top = -value * 0.60 + 'px';
        ground.style.top = -value * 0.30 + 'px';
        threeGround.style.top = -value * 0.13 + 'px';
        groundAfterFox.style.top = -value * 0.60 + 'px';
        threeAfterFox.style.top = -value * 0.40 + 'px';
        groundFox.style.top = -value * 0.10 + 'px';
        groundFoxBis.style.top = -value * 0.50 + 'px';
        fox.style.top = value * 0.2 + 'px';
        darkLeaf.style.top = -value * 0.10 + 'px';
        title.style.marginTop = value * 0.6 + 'px';
});

gsap.from('#nav1', {duration: 0.6, ease: "pslow(0.7, 0.7, false)", opacity:0, y: -60, delay:0.2 });
gsap.from('#nav2', {duration: 0.6, ease: "pslow(0.7, 0.7, false)", opacity:0, y: -60, delay:0.4 });
gsap.from('#title', {duration: 2, ease: "pslow(0.7, 0.7, false)", opacity:0, y: -60, delay:0.6 });