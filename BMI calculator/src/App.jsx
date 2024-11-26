import { useState } from 'react'
import './App.css'

function App() {
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [bmi, setBmi] = useState(null)
  const [bmistatus, setBmistatus] = useState("")
  const [errormsg, setErrormsg] = useState("")

    const calculateBmi = () => {

      const isValidHeight = /^\d+$/.test(height)
      const isValidWeight = /^\d+$/.test(weight)

      if (isValidHeight && isValidWeight) {
        const heightInMeters = height / 100;
        const bmiValue = weight / (heightInMeters * heightInMeters);
        setBmi(bmiValue.toFixed(2));
        if (bmiValue < 18.5) {
          setBmistatus("Underweight");
        } else if ( bmiValue >= 18.5 && bmiValue < 24.9) {
          setBmistatus("Normal");
        } else if ( bmiValue >= 24.9 && bmiValue < 29.9) {
          setBmistatus("Overweight");
        } else {
          setBmistatus("Obese");
        }
        setErrormsg("")
      }else{
        setBmi(null)
        setBmistatus("")
        setErrormsg("Please enter the common numeric value for height and weight.")
      }
    }
    const clear = () =>{
      setHeight("")
      setWeight("")
      setBmi(null)
      setBmistatus("")
    }
  return (
    <>
      <div className="bmi_calculator">
        <div className="box"></div>
        <div className="data">
          <h1>BMI CALCULATOR</h1>
          { errormsg && <p className='error'>{errormsg}</p>}
          <div className="input_container">
            <label htmlFor="height">Height (cm):</label>
            <input type="text" id='height' value={height} onChange={(e)=>setHeight(e.target.value)} />
          </div>
          <div className="input_container">
            <label htmlFor="weight">Weight (kg):</label>
            <input type="text" id='weight' value={weight} onChange={(e)=>setWeight(e.target.value)} />
          </div>
          <div>
          <button onClick={calculateBmi}>Calculate BMI</button>
          <button onClick={clear}>Clear all</button>
          </div>
          {
            bmi !== null && (
              <div className="result">
              <p>Your BMI is: {bmi}</p>
              <p>Status: {bmistatus}</p>
          </div>
            )
          }
        </div>
      </div>
    </>
  )
}

export default App
