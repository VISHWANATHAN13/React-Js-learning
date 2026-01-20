import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Users = () => {

  const users = useSelector(state => state.userInfo.users);
  console.log(users);


  const { username } = useParams();

  return (
    <div>
      <h1>user:{username}</h1>
    </div>
  )
}

export default Users;