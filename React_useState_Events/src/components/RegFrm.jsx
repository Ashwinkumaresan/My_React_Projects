import React, { useState } from 'react'
import "./Ref.css"

export const RegFrm = () => {
    const [user, setUser] = useState({
        name:"Ashwin",
        email:"ashwin@gmail.com",
        age:18,
        gender:"Male",
        isMarried:false,
        country:"India",
        text:"hi"
    });
    function Change(e) {
        const name=e.target.name;
        const value=e.target.type==="checkbox"?e.target.checked:e.target.value;
        setUser({...user, [name]:value});
    }
  return (
    <>
    <table>
        <tbody>
            <tr>
                <td>Name</td>
                <td> {user.name} </td>
            </tr>
            <tr>
                <td>Age</td>
                <td> {user.age} </td>
            </tr>
            <tr>
                <td>Email</td>
                <td> {user.email} </td>
            </tr>
            <tr>
                <td>Gender</td>
                <td> {user.gender} </td>
            </tr>
            <tr>
                <td>Marridal status</td>
                <td> {user.isMarried ? "Married" : "Not married"} </td>
            </tr>
            <tr>
                <td>Country</td>
                <td> {user.country} </td>
            </tr>
            <tr>
                <td>Text box</td>
                <td>{user.text}</td>
            </tr>
        </tbody>
    </table>

    <form action="#">
        <input type="text" placeholder='Full name' value={user.name} onChange={Change} name='name' />
        <input type="number" placeholder='Your age' value={user.age} onChange={Change} name='age' />
        <input type="email" placeholder='Emali' value={user.email} onChange={Change} name='email' />
        <div className="gender">
            <label htmlFor="male"><input type="radio" name='gender' id='male' value="Male" checked={user.gender=="Male"} onChange={Change} />Male</label>
            <label htmlFor="female"><input type="radio" name='gender' id='female' value="Female" checked={user.gender=="Female"} onChange={Change} />Female</label>
        </div>
        <label htmlFor="isMarried">
            <input type="checkbox" id='isMarried' name='isMarried' checked={user.isMarried} onChange={Change} />
            Is Married
        </label>    
        <div className='select_div'>
            <label htmlFor="country"> Select Country</label>
            <select name="country" id="country" value={user.country} onChange={Change} >
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="India">India</option>
            </select>
        </div>
        <div>
            <textarea name="text" id="text" placeholder='Your area' onChange={Change} value={user.text}></textarea>
        </div>
    </form>
    </>
  )
}
