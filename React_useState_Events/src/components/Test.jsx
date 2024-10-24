import React, { useState } from 'react'

export const Test = () => {
    const [user, setUser] = useState({ name:"Ashwin", age:18})
    function changeName(e){
        // alert(e.target.value);
        const newStateObject = {...user}
        newStateObject.name = e.target.value;
        setUser(newStateObject);

    }
    function changeAge(e){
        setUser( (oldState) => {
            return {...oldState, age: e.target.value}
        })
    }
    function common(e){
        setUser({ ...user, [e.target.name]: e.target.value})
    }
  return (
    <>
    <h2> {user.name} {user.age} </h2>
        <form action="#">
            <input type="text" name="name" placeholder="Enter your name" onChange={common} value={user.name} />
            <input type="text" name="age" placeholder="Enter your age" onChange={common} value={user.age}/>
        </form>
    </>
  )
}
