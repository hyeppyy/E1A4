import React from "react";
//App.js 에서 props로 받은 username, age, oncreate, onChange 이용해 컴포넌트 생성
const CreateUser = ({ username, age, onCreate, onChange }) => {
    return (
        <>
            <input onChange={onChange} value={username} name="username" type="text" />
            <input onChange={onChange} value={age} name="age" type="number" />
            <button onClick={onCreate}>추가</button>
        </>
    );
};

export default CreateUser;