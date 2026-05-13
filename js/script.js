let text = document.getElementById('text');
let black = document.getElementById('black');
let car = document.getElementById('car');
let astronaut = document.getElementById('astronaut');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 1.5 + 'px';
    astronaut.style.left = value * 1.5 + 'px';
    car.style.left = value * -1.5 + 'px';
    black.style.top = value * 0.5 + 'px';
});