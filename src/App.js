import React, { useState } from "react";


const App = () =>{

  const [user,setUser]=useState({
    firstName:'',
    lastName:'',
    email:''
  })
  const handleChange=(event)=>{
        setUser({...user,[event.target.name]:event.target.value})
  }
  console.log(user)
  return(
    <>
      <div>
        <form >
          <div>
           <h1></h1>
             <input type="text" name='firstName' placeholder="ENTER First Name" value={user.firstName} onChange={(e)=>handleChange(e)}  />
             <br/>
             <input type="text"  name="lastName" placeholder="ENTER Last Name" value={user.lastName} onChange={(e)=>handleChange(e)}  />
             <br />
             <input type="email"  name="email" placeholder="ENTER Last Name" value={user.email} onChange={(e)=>handleChange(e)}  />

             <button type="submit" >clicl me</button>
          </div>
        </form>
       
      </div>
    </>
  )
}

export default App