const modalWindow = document.querySelector('.modal');
const buttonModal = document.querySelectorAll('.modal__button');
const buttonClose = document.querySelector('.modal__close');
const body = document.querySelector('body');

buttonModal.forEach(btn => {
    btn.addEventListener('click', () => {
        modalWindow.style.display = 'flex';
        body.classList.add('no_scroll');
    })
});

modalWindow.addEventListener('click', e => {
    const isModal = e.target.closest('.modal__inner');
    if (!isModal) {
        modalWindow.style.display = 'none';
        body.classList.remove('no_scroll');
    }
});

buttonClose.addEventListener('click', () => {
    modalWindow.style.display = 'none';
    body.classList.remove('no_scroll');
});

