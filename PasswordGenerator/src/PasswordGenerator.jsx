import React, { useState } from 'react'

export const PasswordGenerator = () => {
    const [length, setLength] = useState();
    const [includeUpper, setIncludeUpper] = useState(true);
    const [includeLower, setIncludeLower] = useState(true);
    const [includeNumber, setIncludeNumber] = useState(true);
    const [includeSymbol, setIncludeSymbol] = useState(true);
    const [password, setPassword] = useState("");

    const generatepassword = () =>{
        let charset = "";
        if(includeUpper) {
            charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        if(includeLower) {
            charset += "abcdefghijklmnopqrstuvwxyz";
        }
        if(includeNumber) {
            charset += "0123456789";
        }
        if(includeSymbol) {
            charset += "!@#$%^&*()_+~`|}{[]:;?><"
        }
        let generatedpassword="";
        for(let i=0;i<length;i++){
            const randomIndex = Math.floor(Math.random()*charset.length);
            generatedpassword += charset[randomIndex];
        }
        setPassword(generatedpassword);
    }

    const copypassword = ()=>{
        navigator.clipboard.writeText(password);
        alert("Password copied")
    }

  return (
    <div className='password_generator'>
        <h2>Strong password generator</h2>
        <div className="input_group">
            <label htmlFor="num">Password length:</label>
            <input type="number" id='num' value={length} onChange={(e)=>setLength(parseInt(e.target.value))} />
        </div>
        <div className="checkbox_group">
            <input type="checkbox" id="upper" checked={includeUpper} onChange={(e)=>setIncludeUpper(e.target.checked)} />
            <label htmlFor="upper">Include upper case</label>
        </div>
        <div className="checkbox_group">
            <input type="checkbox" id="lower" checked={includeLower} onChange={(e)=>setIncludeLower(e.target.checked)} />
            <label htmlFor="lower">Include lower case</label>
        </div>
        <div className="checkbox_group">
            <input type="checkbox" id="numbers" checked={includeNumber} onChange={(e)=>setIncludeNumber(e.target.checked)} />
            <label htmlFor="numbers">Include numbers case</label>
        </div>
        <div className="checkbox_group">
            <input type="checkbox" id="symbol" checked={includeSymbol} onChange={(e)=>setIncludeSymbol(e.target.checked)} />
            <label htmlFor="symbol">Include symbol case</label>
        </div>
        <button className='generate_btn' onClick={generatepassword}>Generator password</button>
        <div className="result">
            <input type="text" readOnly value={password} />
            <button className='copy_btn' onClick={copypassword}>Copy</button>
        </div>
    </div>
  )
}