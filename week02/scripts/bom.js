const list = document.querySelector('#list');
const button = document.querySelector('button');
const input = document.querySelector('#favchap');

button.addEventListener('click', () => {
    if (input.value != '') {
        const li = document.createElement('li');
        const del = document.createElement('button');
        li.textContent = input.value;
        del.textContent = '❌';
        li.append(del);
        list.append(li);
        
        del.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
            input.value = '';
        })
    }
    input.focus();
    input.value = '';
})