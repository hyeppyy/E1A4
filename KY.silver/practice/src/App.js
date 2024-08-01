// App.js
import React, { useState, useRef } from 'react';
import Counter from './components/Counter';
import InputSample from './components/InputSample';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';
import './App.css';

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    age: ""
  });
  const { username, age } = inputs;

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "Kim",
      age: 20
    },
    {
      id: 2,
      username: "Ko",
      age: 30
    },
    {
      id: 3,
      username: "Shin",
      age: 40
    }
  ]);

  const nextId = useRef(4);

  const onInputChange = e => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const onCreate = () => {
    const user = {
      username,
      age,
      id: nextId.current
    };
    setUsers([...users, user]);
    setInputs({
      username: "",
      age: ""
    });
    nextId.current += 1;
  };

  return (
    <>
      <Counter />
      <InputSample />
      <CreateUser
        username={username}
        age={age}
        onChange={onInputChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </>
  );
}

export default App;
