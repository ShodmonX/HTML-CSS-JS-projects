const inputBox = document.getElementById('inputBox');
const addButton = document.getElementById('addButton');
const listContainer = document.getElementById('listContainer')

addButton.addEventListener('click', ()=> {
    if(inputBox.value === ''){
        alert('Please enter a task');
    }else{
        const newTask = document.createElement('li');
        newTask.textContent = inputBox.value;
        listContainer.appendChild(newTask);
        const span = document.createElement('span');
        span.textContent = '\u00d7';
        newTask.appendChild(span);
    }
    inputBox.value = '';
    saveData();
})

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'SPAN'){
        e.target.parentNode.remove();
        saveData();
    }else if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
}, false)

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}

showTask();