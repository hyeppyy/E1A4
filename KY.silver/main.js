
const container = document.querySelector('container')
const inputfiled = document.querySelector('inputfield')
const ul = document.querySelector('ul')

container.addEventListener('submit', (event) => {
    event.preventDefault();
    if(input.value !== '') {
    const li = document.createElement('li');
    li.innerText = input.value;
    ul.appendChild(li);
    input.value = '';
    }
})


// const form = document.querySelector('form')
// const input = document.querySelector('input')
// const ul = document.querySelector('ul')

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     if (input.value !== '') {
//         const li = document.createElement('li');
//         li.innerText = input.value;
//         ul.appendChild(li);
//         input.value = '';
//     }
// });

