const txt = document.querySelector('.text-1');

let text = [...txt.textContent];

let text1 = text.map(function (e) {
    return `<span>${e}</span>`;
}).join('');

txt.innerHTML = text1;