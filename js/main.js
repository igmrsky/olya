const btn = document.querySelector('.heart');
const love = document.querySelector('.love');

btn.addEventListener('click', () => {
    love.classList.toggle('love--active')
});