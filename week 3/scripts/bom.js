const button = document.querySelector('button');
const list = document.querySelector('#list');
const input = document.querySelector('#favchap');

let chapters = getChapterList() || [];

  chapters.forEach(chapter => {
      displayList(chapter);
    });

    button.addEventListener('click', () => {
        if (input.value != '') {  // make sure the input is not empty
          displayList(input.value); // call the function that outputs the submitted chapter
          chapters.push(input.value);  // add the chapter to the array
          setChapterList(); // update the localStorage with the new array
          input.value = ''; // clear the input
          input.focus(); // set the focus back to the input
        }
      });
    
  
  function displayList(item) {
    let li = document.createElement('li');
    let del = document.createElement('button');
    li.textContent = item; // note the use of the displayList parameter 'item'
    del.textContent = '❌';
    del.classList.add('del'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
    li.append(del);
    list.append(li);
    del.addEventListener('click', function () {
      list.removeChild(li);
      deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
      input.focus(); // set the focus back to the input
    });
  }

  
  
  function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chapters));
  }

  function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
  }

  function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chapters = chapters.filter((item) => item !== chapter);
    setChapterList();
  }

 
