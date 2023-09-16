let menu = document.querySelector('.menu');
let ul = document.querySelector('nav ul');
let ulBack = document.querySelector('.ul');

menu.addEventListener('click',function(){
    menu.classList.toggle('close');
    ul.classList.toggle('open');
    ulBack.classList.toggle('opacity');
});