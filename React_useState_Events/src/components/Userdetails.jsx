import React, { useState } from 'react'

export const Userdetails = () => {
    const [user, setUser] = useState({name: "Ram", age: 18})

    // const [userName, setUserName] = useState("ashwin")
    // const [userAge, setUserAge] = useState(18)

    const updateUserName = () =>{
        // // setUserName("ashwin kumar");
        // userName == "ashwin" ? setUserName("ashwinkumaresan") : setUserName("ashwin")
        setUser({ ...user,name: "Ashwin" });
    }
    const updateUserAge = () =>{
        // // setUserAge(19);
        // userAge == 18 ? setUserAge(21) : setUserAge(18)
        setUser({ ...user,age: 21 });
    }
  return (
    <>
    <h2>User Details</h2>
    <h3> {user.name} </h3>
    <h3> {user.age} </h3>
    <button onClick={updateUserName}>Update username</button>
    <button onClick={updateUserAge}>Update userage</button>
    </>
  )
}
