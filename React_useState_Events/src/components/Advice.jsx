import React, { useState } from 'react'
import "./AdviceS.css"

export const Advice = () => {
    const [advice, SetAdvice] = useState("Please click button to get advice");
    const [count, setCount] = useState(0);

    async function Getadvice() {
        const res=await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        // console.log(data);
        // console.log(data.slip.advice);
        SetAdvice(data.slip.advice);
        setCount(count+1)
    }
  return (
    <div>
        <h3> {advice} </h3>
        <button onClick={Getadvice}>Get Advice</button>
        <p onClick={Getadvice}>Message count:{count}</p>
    </div>
  )
}
