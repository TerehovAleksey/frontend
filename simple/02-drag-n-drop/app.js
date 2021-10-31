const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', e => {
    e.target.classList.add('hold');
    // таймаут нужен зачем-то чтобы скрыть исходный элемент при перетаскивании
    setTimeout(() => e.target.classList.add('hide'), 0);
});
item.addEventListener('dragend', e => e.target.className = 'item');

placeholders.forEach(p => {
    p.addEventListener('dragover', e => e.preventDefault());
    p.addEventListener('dragenter', e => e.target.classList.add('hovered'));
    p.addEventListener('dragleave', e => e.target.classList.remove('hovered'));
    p.addEventListener('drop', e => {
        e.target.classList.remove('hovered');
        e.target.append(item);
    });
})