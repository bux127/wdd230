const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav_menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    nav.classList.toggle('active');
})

document.querySelectorAll('.nav_link').forEach(n => n.addEventListener('click', () => {
    menu.classList.remove('active')
    nav.classList.remove('active')
}))

document.getElementById('date').innerHTML = new Date(document.lastModified);
