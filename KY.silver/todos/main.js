let inputBox = document.getElementById('inputField');  
let addToDo = document.getElementById('addToDo');      
let toDoList = document.getElementById('toDoList');

addToDo.addEventListener('click', function () {
    let list = document.createElement('li'); // HTML에 list 태그 추가
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "x";


    if (!inputBox.value)
        alert('내용을 입력해 주세요!'); // 경고창

    else {
        list.innerText = inputBox.value;        
        toDoList.appendChild(list);   // todolist에 자식요소(list) 붙이기   
        inputBox.value = "";
        list.appendChild(deleteButton);

        list.addEventListener('click', function () {
            list.style.textDecoration = "line-through";
        })
        deleteButton.addEventListener('click', (event) => {
            toDoList.removeChild(event.currentTarget.parentNode); // currentTarget : 이벤트가 부착된 부모의 요소에 반환시킴
        })
        
    } 
})
inputBox.addEventListener('keypress', (event) => {
    if (window.event.keyCode == 13) {
    let list = document.createElement('li'); // HTML에 list 태그 추가
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "x";


    if (!inputBox.value)
        alert('내용을 입력해 주세요!'); // 경고창
    
    else {
        list.innerText = inputBox.value;
        toDoList.appendChild(list);   // todolist에 자식요소(list) 붙이기   
        inputBox.value = "";
        list.appendChild(deleteButton);

        list.addEventListener('click', function () {
            list.style.textDecoration = "line-through";
        })
        deleteButton.addEventListener('click', (event) => {
            toDoList.removeChild(event.currentTarget.parentNode); // currentTarget : 이벤트가 부착된 부모의 요소에 반환시킴
        })
    }} 
}) 