const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".nav-menu");
const menuButtonClose = document.querySelector(".menu-button-close");
menuButton.addEventListener("click", () => {
    menu.classList.add("is-open");
    menuButtonClose.classList.add("is-active");
});
menuButtonClose.addEventListener("click", () => {
    menu.classList.remove("is-open");
    menuButtonClose.classList.remove("is-active");
});

// форма

const hideForm = document.querySelector('.hide-form');
const orderTicket = document.querySelector('.order-ticket');
const orderTrigger = document.querySelector('.order-trigger');
const orderTicketForm = document.querySelector('.order-ticket__form');

const orderTicketFormWrapper = document.querySelector('.order-ticket__form-wrapper');
const orderTicketPreloaderWrapper = document.querySelector('.order-ticket__preloader-wrapper');
const orderTicketThanksWrapper = document.querySelector('.order-ticket__thanks-wrapper');
const orderTicketThanksName = document.querySelector('.order-ticket__thanks-name');

setTimeout(() => {
    const heightForm = orderTicket.offsetHeight;
    hideForm.style.bottom = -heightForm + 'px';
}, 1000);

const sendData = (data, callback, callBefore) => {

    if (callBefore) {
        callBefore();
    }

    fetch('http://localhost:3000/api', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(data)
    }).then(response => response.json())
        .then(callback);
}

const showPreloader = () => {
    orderTicketFormWrapper.style.display = 'none';
    orderTicketPreloaderWrapper.style.display = 'block';

}

orderTrigger.addEventListener('click', () => {
    hideForm.classList.toggle('hide-form-active');
});

orderTicketForm.addEventListener('change', (e) => {
    const target = e.target;
    const label = target.labels[0];
    if (label && target.value) {
        label.classList.add('order-ticket__label-focus')
    } else {
        label.classList.remove('order-ticket__label-focus');
    }
});

orderTicketForm.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(orderTicketForm);
    const data = {};
    for (const elem of formData) {
        const [name, value] = elem;
        data[name] = value;
    }

    sendData(data, () => {
        orderTicketFormWrapper.style.display = 'none';
        orderTicketPreloaderWrapper.style.display = 'none';
        orderTicketThanksWrapper.style.display = 'block';
        orderTicketThanksName.textContent = data.name;
    }, showPreloader);
});




