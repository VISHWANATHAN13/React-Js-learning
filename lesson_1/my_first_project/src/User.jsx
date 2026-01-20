import React from 'react'
// type rfce - react functional export component - shortcut to get template
function User(props) {
  return (
    <div >User<br />
      <p>name = {props.name}</p>
      <p>age = {props.age}</p>
      <p>phone = {props.phone}</p>
      <p>email id = {props.email}</p>

    </div >
  )
}

export default User