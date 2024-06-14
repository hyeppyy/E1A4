window.addEventListener("load", function () {
  const elUl = document.querySelector("ul");
  const todoInput = document.getElementById("todoInput");
  const h2 = document.querySelector("h2");
  const form = document.querySelector("form");
  let todos = [];

  //날짜 구하기
  const date = new Date();
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const today = `${year}-${month}-${day}`;
  h2.innerText = today;

  //로컬스토리지에 데이터가 저장되는 함수
  const save = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  //todos 내용 업데이트
  deleteItem = (e, todo) => {
    const target = e.target.parentElement;

    todos = todos.filter((todo) => {
      todo.id !== parseInt(target.id);
    });
    save(); //data 저장
    target.remove();
  };

  //todo 추가 함수
  const addItem = (todo) => {
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    const span = document.createElement("span");

    if (todo.text == "") {
      alert("값이 비었습니다.");
    } else {
      span.innerText = todo.text;
      deleteBtn.innerText = "X";
      li.appendChild(span);
      li.appendChild(deleteBtn);
      elUl.appendChild(li);

      deleteBtn.addEventListener("click", deleteItem);
      li.id = todo.id; //list에 id 부여
    }
  };

  //추가버튼을 클릭할때마다 실행
  const handler = (e) => {
    e.preventDefault(); //자동새로고침을 막음

    const todo = {
      id: Date.now(),
      text: todoInput.value,
    };

    todos.push(todo);
    addItem(todo); //목록생성
    save(); //data 저장
    todoInput.value = ""; //값초기화
  };

  const init = () => {
    const userTodos = JSON.parse(localStorage.getItem("todos"));

    if (userTodos) {
      userTodos.forEach((todo) => {
        addItem(todo); //목록생성
      });
      todos = userTodos;
    }
  };

  init();
  form.addEventListener("submit", handler);
});
