let inputBox = document.getElementById('inputField');  
let addToDo = document.getElementById('addToDo');      
let toDoList = document.getElementById('toDoList');

addToDo.addEventListener('click', function () {
    let list = document.createElement('li'); // HTML에 list 태그 추가

    if (!inputBox.value)
        alert('내용을 입력해 주세요!'); // 경고창

    else {
        list.innerText = inputBox.value;        
        toDoList.appendChild(list);   // todolist에 자식요소(list) 붙이기   
        inputBox.value = "";

        list.addEventListener('click', function () {
            list.style.textDecoration = "line-through";
        })
        list.addEventListener('dblclick', function () {
            toDoList.removeChild(list);
        })
    }
})