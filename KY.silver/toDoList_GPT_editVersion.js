let inputBox = document.getElementById('inputField');
let addToDo = document.getElementById('addToDo');
let toDoList = document.getElementById('toDoList');

// 할일 추가 버튼 클릭 이벤트
addToDo.addEventListener('click', function () {
    // 입력 필드에서 값을 가져와서 새로운 리스트 아이템 생성
    if (!inputBox.value) {
        alert('내용을 입력해 주세요!'); // 입력 값이 없을 경우 경고창
        return;
    }

    let listItem = createToDoItem(inputBox.value); // 새로운 할일 아이템 생성
    toDoList.appendChild(listItem); // 할일 목록에 추가
    inputBox.value = ""; // 입력 필드 초기화
});

// 입력 필드에서 Enter 키 입력 이벤트
inputBox.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        // 입력 필드에서 값을 가져와서 새로운 리스트 아이템 생성
        if (!inputBox.value) {
            alert('내용을 입력해 주세요!'); // 입력 값이 없을 경우 경고창
            return;
        }

        let listItem = createToDoItem(inputBox.value); // 새로운 할일 아이템 생성
        toDoList.appendChild(listItem); // 할일 목록에 추가
        inputBox.value = ""; // 입력 필드 초기화
    }
});

// 새로운 할일 아이템을 생성하는 함수
function createToDoItem(text) {
    let listItem = document.createElement('li'); // 리스트 아이템 생성
    listItem.innerText = text; // 텍스트 설정

    let deleteButton = document.createElement('button'); // 삭제 버튼 생성
    deleteButton.textContent = "x"; // 버튼 텍스트 설정

    // 삭제 버튼 클릭 이벤트
    deleteButton.addEventListener('click', function (event) {
        toDoList.removeChild(listItem); // 목록에서 아이템 삭제
    });

    // 리스트 아이템 클릭 시 완료 표시 (취소선)
    listItem.addEventListener('click', function () {
        listItem.style.textDecoration = "line-through";
    });

    listItem.appendChild(deleteButton); // 삭제 버튼을 리스트 아이템에 추가
    return listItem; // 완성된 리스트 아이템 반환
}
