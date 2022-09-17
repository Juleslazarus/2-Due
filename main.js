const addItemBtn = document.querySelector('.addItemBtn'); 

const addItemInput = document.querySelector('.addItemInput'); 


const todoListContainer = document.querySelector('.todoListContainer'); 

const importantBtn = document.querySelector('.importantBtn'); 

const importantLabel = document.querySelector('.importantLabel'); 

const notImportantLabel = document.querySelector('.notImportantLabel'); 

const notImportantBtn = document.querySelector('.notImportantBtn'); 

importantBtn.addEventListener('click', () => {
    if(importantBtn.checked) {
        importantLabel.style.textDecoration = 'underline';
        notImportantLabel.style.color = 'black'; 
        importantLabel.style.fontWeight = '600';  
    }
})
notImportantBtn.addEventListener('click', () => {
    if(notImportantBtn.checked) {
        notImportantLabel.style.color = '#666666';
        importantLabel.style.textDecoration = 'none';  
        importantLabel.style.fontWeight = '400'; 
    }
})

addItemBtn.addEventListener('click', () => {
    let todo = addItemInput.value; 

    let todoItem = document.createElement('p');

    todoItem.textContent = todo; 

    todoItem.classList.add('todoItem'); 

    todoListContainer.appendChild(todoItem); 

    if(importantBtn.checked){
        todoItem.classList.add('important');
        todoItem.style.fontWeight = '600';  
    }else if(notImportantBtn.checked) {
        todoItem.classList.add('notImportant');
    }
    
    
    todoItem.addEventListener('mouseover', () => {
        todoItem.style.color = 'white !important'; 
    })

})