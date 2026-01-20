import React from 'react'
import { useState } from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';

const App = () => {

  const [users, setusers] = useState([]);

  const [userInfo, setuserInfo] = useState({
    id: uuid(),
    name: "",
    age: "",
    email: "",
    phone: "",


  });

  console.log(users);


  const handleChange = (e) => {
    const { name, value } = e.target;

    setuserInfo((currInfo) => {
      return {
        ...currInfo,
        [name]: value,
      };
    });

    // console.log(e.name);

  };

  const addData = () => {
    setusers((currUsers) => [...currUsers, userInfo]);
    setuserInfo({
      name: "",
      age: "",
      email: "",
      phone: "",
    }
    )
  }

  const deleteData = (id) => {
    setusers((currUsers) => {
      return currUsers.filter((user) => {
        return user.id !== id;
      })
    })
  }

  const updateData = ()=>{
    setusers((currUsers)=>{
      return currUsers.map((user)=>{
        if(user.id===userInfo.id)
          return userInfo;
        return user;
      })
    })
    cancelEditing();
  }

  const cancelEditing=()=>{
    setuserInfo({
      id:uuid(),
      name:"",
      age:"",
      email:"",
      phone:"",
    })
    setbuttonState("add");
  }

  const [buttonState, setbuttonState] = useState("add");

  const startEditing = (user) => {
    setuserInfo(user);
    setbuttonState("edit");

  }

  return (
    <div className='container'>
      <div className='form'>
        <input type="text" placeholder='Enter your name' value={userInfo.name} name='name' onChange={handleChange} /> <br />
        <input type="number" placeholder='Enter your age' name='age' value={userInfo.age} onChange={handleChange} /> <br />
        <input type="email" placeholder='Enter your email' name='email' value={userInfo.email} onChange={handleChange} /> <br />
        <input type="number" placeholder='Enter your phone number' name='phone' value={userInfo.phone} onChange={handleChange} /> <br /> <br />
        {buttonState === "add" ? (<button onClick={addData}>Add</button>) :
         (
          <div className='buttonContainer'>

            <button onClick={updateData}>Update</button>
            <button onClick={cancelEditing}>Cancel</button>
          </div>
          )
        }
      </div>

      <div className='dataTable'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (<tr key={index}>
                <td> {user.name} </td>
                <td> {user.age} </td>
                <td> {user.email} </td>
                <td> {user.phone} </td>
                <td>
                  <button onClick={() => startEditing(user)}>Edit</button>
                  <button onClick={() => deleteData(user.id)}>Delete</button>
                </td>
              </tr>
              );
            })}
          </tbody>

        </table>

      </div>
    </div>
  )
}

export default App