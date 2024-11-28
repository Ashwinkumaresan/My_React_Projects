import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(()=>{
    // set interval for 1000ms
    const timer = setInterval(()=>{
      setCurrentTime(new Date())
    },1000)
    return () => clearInterval(timer)
  }, [])
  // add zero when digit is single
  const formateZero = (num) =>{
    return num<10?`0${num}`:num;
  }

  const formateHour = (hour) =>{
    return hour === 0?12:hour>12?hour-12:hour
  }
  
  // to get date
  const formateDate = (date) => {
    const option = {weekday: "long", year: "numeric", month: "long", day: "numeric"}
    return date.toLocaleDateString(undefined, option)
  }
  return (
    <>
      <div className="digital_clock">
        <h1>Digital clock</h1>
        <div className="time">
          {formateZero(formateHour(currentTime.getHours()))}:
          {formateZero(currentTime.getMinutes())}:
          {formateZero(currentTime.getSeconds())}

          {/* to AM or PM */}
          {currentTime.getHours() >= 12 ? " PM" : " AM"}
        </div>
        <div className="date">{formateDate(currentTime)}</div>
      </div>
    </>
  )
}

export default App
