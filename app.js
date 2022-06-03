

const h1 = document.querySelector('h1');
const input = document.querySelector('input');
const button = document.querySelector('button');
const select = document.querySelector('select');

input.onkeyup = () => {
 h1.innerHTML=input.value
}

input.onblur = () =>{
    console.log('blur event');
}

input.onchange = () =>{
    console.log('Change event');
}

select.onchange = () => {
    h1.innerHTML=select.value;
}
