import React from 'react'
import { AuthContext } from '../Contexts/AuthContext'

const Login = () => {
  const {login} = React.useContext(AuthContext);
  const [formDetails , setFormDetails] =React.useState({
    username : "",
    password :""
  })
  const handleChange= (e) =>{
    const {name , value} =e.target;
    setFormDetails({
      ...formDetails,
      [name] :value
    })

  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    fetch(`https://masai-api-mocker.herokuapp.com/auth/login`,{
      method :"POST",
      body: JSON.stringify(formDetails),
      headers : {"content-type" : "application/json"}
    })
    .then((res) => res.json())
    .then((res) => login(res.token))
    .catch((err) => console.log(err));
  }



  const {username , password} =formDetails;



  return (
    <form onSubmit={handleSubmit}>
      <div>
      <h1>Login Page</h1>
    <input name ="username" type="text" placeholder = "username" value = {username} onChange = {handleChange} />
    <br />
    <input name ="password" type="text" placeholder = "Password" value = {password} onChange = {handleChange} />
    <br />
    <input type="submit"  value ="LOGIN"/>
    </div>
    </form>
  )
}

export {Login}