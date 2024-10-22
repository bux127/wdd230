const list = document.querySelector('#list');
const button = document.querySelector('button');
const input = document.querySelector('#favchap');

button.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChaptersList();
        input.value = '';
        input.focus();
    }
})

chaptersArray = getChapterList() || [];

function displayList(item) {
    let li = document.createElement('li');
  let deletebutton = document.createElement('button');
  li.textContent = item; 
  deletebutton.textContent = '❌';
  deletebutton.classList.add('delete'); 
  li.append(deletebutton);
  list.append(li);
  deletebutton.addEventListener('click', function () {
    list.removeChild(li);
    deleteChapter(li.textContent); 
    input.focus(); 
  });
}

function setChapterList() {
    localStorage.setItem('myList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myList'));
}

function deleteChapter() {
    chapter = chapter.slice(0, chapter.length - 1);
}

chaptersArray = chaptersArray.filter((item) => item !== chapter);

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}