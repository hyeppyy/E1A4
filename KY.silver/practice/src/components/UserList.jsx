// UserList.js
import React from 'react';

const User = ({ user }) => {
    return (
        <p>
            username: {user.username}, age: {user.age}
        </p>
    )
}

const UserList = ({ users }) => {
    return (
        <>
            {users.map(user => (
                <User user={user} key={user.id} />
            ))}
        </>
    )
}

export default UserList;
