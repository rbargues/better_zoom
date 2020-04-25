import React, {Component} from 'react';

const Users = (props) => {
  const users = [];
  for (let i = 0; i < props.users.length; i++) {
    users.push(<button>{props.users[i]}</button>)
  }
  return (
    <div id = "users">
      {users}
    </div>
  )
}

export default Users;
