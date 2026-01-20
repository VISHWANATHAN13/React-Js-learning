import React, { useState } from 'react'

const Home = () => {

  const [formInput, setFormInput] = useState({
    name: "",
    age: "",
    email: "",
    contact: "",
  });

  const handleChange = (event) => {
    // console.log(event.target.value);
    const { name, value } = event.target;
    console.log(name, value);

    setFormInput(currInput => ({
      ...currInput,
      [name]: value
    }));

    console.log(formInput);



  }

  return (
    <div>
      <form>
        <br />
        <label>Name</label><br />
        <input
          name='name'
          type="text"
          value={formInput.name} onChange={handleChange} /><br />
        <br />
        <label>Age</label><br />
        <input name='age' type="number" value={formInput.age} onChange={handleChange} /><br />
        <br />
        <label>Email</label><br />
        <input name='email' type="email" value={formInput.email} onChange={handleChange} /><br />
        <br />
        <label>Contact</label><br />
        <input name='contact' type="number" value={formInput.contact} onChange={handleChange} /><br />
        <br />
        <button type='submit'>Add</button>

      </form>
    </div>
  )
}

export default Home;