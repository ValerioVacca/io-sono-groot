let dontTouch = document.querySelector('#dontTouch');
let razzo = document.querySelector('#razzo');
let button = document.querySelector('.button');
let saetta1 = document.querySelector('.saetta1');
let saetta2 = document.querySelector('.saetta2');
let saetta3 = document.querySelector('.saetta3');

let checkFly = true;


dontTouch.addEventListener('click', ()=>{

    if(checkFly){
        razzo.classList.add('animazione');
        razzo.classList.remove('animazione2');
        button.classList.add('greenBtn');
        saetta1.style.backgroundColor = "yellow";
        saetta2.style.backgroundColor = "yellow";
        saetta3.style.backgroundColor = "yellow";
    
        checkFly = false;

    } else{
        razzo.classList.add('animazione2');
        razzo.classList.remove('animazione');
        button.classList.remove('greenBtn');
        saetta1.style.backgroundColor = "transparent";
        saetta2.style.backgroundColor = "transparent";
        saetta3.style.backgroundColor = "transparent";

        checkFly = true;

    }
    
})

