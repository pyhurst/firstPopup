const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');
const popupbox = document.querySelector('.popup');

button.addEventListener('click', () => {
    popup.style.display = 'block';
});

close.addEventListener('click', () => {
    popup.style.display = 'none';
    event.stopPropagation();
});

popup.addEventListener('click', () => {
    popup.style.display = 'none';
});

popupbox.addEventListener('click', () => {
    popup.style.display = 'block';
    event.stopPropagation();
});