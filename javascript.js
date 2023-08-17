let cursor = document.querySelector('#cursor');
let text = document.querySelectorAll('ul li a').forEach
(text => {
    text.innerHTML = text.innerText.split('').map((letters,
        i) => `<span style="transition-delay:${i*50}ms;">${letters}</span>` ).join('');
})

document.addEventListener('mousemove', (e) => {
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
})