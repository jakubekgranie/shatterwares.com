function cartmanInflate(){
    cartmanToggle();
    setTimeout(cartmanToggle, 700);
}
function cartmanToggle(){
    var cartman = document.getElementById('cartman');
    cartman.classList.toggle('cartmaninactive');
    cartman.classList.toggle('cartmaninflation');
}