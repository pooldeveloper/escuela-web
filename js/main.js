const bars = document.querySelector('.bars');
const navUl = document.querySelector('.nav__ul');
bars.addEventListener('click', ()=>{
    navUl.classList.toggle('show')
})

