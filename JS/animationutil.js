function startPrimeAnimationsWTimeout(){
    setTimeout(startPrimeAnimations, 200);
}
function startPrimeAnimations(){
    startAnimation1();
}
function startAnimation1(){
    const animelem11 = document.getElementById('animelem1-1');
    const animelem12 = document.getElementById('animelem1-2');
    const animelem13 = document.getElementById('animelem1-3');
    animelem11.classList.add("anim-1");
    animelem12.classList.add('anim-1');
    animelem13.classList.add('anim-1');
    animelem11.classList.remove('dp-none');
    animelem12.classList.remove('dp-none');
    animelem13.classList.remove('dp-none');
    setTimeout(htext, 330);
}
function htext(){
    const animelem14 = document.getElementById('headertext');
    animelem14.classList.add('headertexttransformed');
}