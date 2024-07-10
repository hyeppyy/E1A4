document.getElementById("loginBtn").addEventListener("click", function () {
  // 입력된 id와 password 가져오기
  const id = document.querySelector(".id").value;
  const password = document.querySelector(".password").value;

  // 입력된 값이 있는지 확인
  if (id === "" || password === "") {
    alert("입력해야 넘어감");
    return;
  }

  // JSON 파일을 fetch API로 불러오기
  fetch("index_userData.json")
    .then((response) => response.json())
    .then((data) => {
      // 아이디와 비밀번호가 일치하는지 확인
      // let user = data.user.find(
      //   (user) => user.id === id && user.password === password
      // );

      let isFindId = false;
      let isMatchPw = false;

      let num = -1;

      for (let i = 0; i < data.user.length; i++) {
        let user = data.user[i];
        if (user.id === id) {
          isFindId = true;
          //console.log("isFindId :" + isFindId);
          num = i;
          break;
        }
      }
      if (isFindId === false) {
        alert("아이디를 못찾았어요");
        return;
      }

      for (let i = 0; i < data.user.length; i++) {
        let user = data.user[i];
        if (user.password === password) {
          isMatchPw = true;
          console.log("isMatchPw:" + isMatchPw);
          break;
        } else {
          // console.log("user.pw:" + user.password + " // password : " + password);
        }
      }
      if (isMatchPw === false) {
        alert("비밀번호를 틀렸어요");
        return;
      }

      window.location.href = data.user[num].url;

      /*
      for (let i = 0; i < data.user.length; i++) {
        if (data.user[i].id === id && data.user[i].password === password) {
          window.location.href = data.user[num].url;
        } else {
        }
      }*/
    })

    .catch((error) => {
      console.error("Error fetching userData.json:", error);
    });
});

// 미구현 영역, 나중에 공부해서 추가함 (비밀번호 찾기랑 회원가입하는 거)
document
  .querySelector(".forgotPW-link")
  .addEventListener("click", function (event) {
    event.preventDefault(); // 기본 링크 동작 막기
    alert("비번 못찾음 ㅋㅋ");
  });
document
  .querySelector(".join-link")
  .addEventListener("click", function (event) {
    event.preventDefault(); // 기본 링크 동작 막기
    alert("가입못함 ㅋㅋ");
  });
