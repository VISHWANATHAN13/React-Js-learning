import React from 'react'
import { useParams } from 'react-router-dom';

const Users = () => {

  const { username } = useParams();

  return (
    <div>
      <h1>user:{username}</h1>
    </div>
  )
}

export default Users;