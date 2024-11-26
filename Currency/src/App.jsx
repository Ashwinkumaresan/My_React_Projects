import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [amount, setAmount] = useState(1)
  const [fromcurrency, setFromcurrency] = useState("USD")
  const [tocurrency, setTocurrency] = useState("INR")
  const [converted, setConverted] = useState(null)
  const [exchangerate, setExchangerate] = useState(null)

  useEffect(()=>{
    const getExchangerate = async () =>{
      try{
        let url=`https://api.exchangerate-api.com/v4/latest/${fromcurrency}`
        const response = await axios.get(url)
        // console.log(response)
        setExchangerate(response.data.rates[tocurrency])
      }
      catch(error){
        console.log("Error")
      }
    }
    getExchangerate()
  }, [fromcurrency,tocurrency]);

  useEffect(()=>{
    if(exchangerate !== null){
      setConverted((amount * exchangerate).toFixed(2))
    }
  },[amount,exchangerate])

  const handleAmountChange = (e) =>{
    const value = parseFloat(e.target.value)
    setAmount(isNaN(value) ? 0 : value)
  }
  const handleFromCurrency = (e) =>{
    setFromcurrency(e.target.value)
  }
  const handleToCurrency = (e) =>{
    setTocurrency(e.target.value)
  }
  return (
    <>
      <div className="currency_converter">
        <div className="box"></div>
        <div className="data">
          <h1> Currency Converter</h1>
          <div className="input_conatiner">
            <label htmlFor="amt">Amount</label>
            <input type="number" id='amt' value={amount} onChange={handleAmountChange} />
          </div>
          <div className="input_conatiner">
            <label htmlFor="fromcurrency">From Currency</label>
            <select id="fromcurrency" value={fromcurrency} onChange={handleFromCurrency}>
            <option value="USD">USD United States Dollar</option>
            <option value="EUR">EUR Euro</option>
            <option value="GBP">GBP British Pound Sterling </option>
            <option value="JPY">JPY Japanese Yen</option>
            <option value="AUD">AUD Australian Dollar</option>5
            <option value="CAD">CAD Canadian Dollar</option>
            <option value="CNY">CNY Chinese Yuan</option>
            <option value="INR">INR Indian Rupee</option>
            <option value="BRL">BRL Brazilian Real</option>
            <option value="ZAR">ZAR South African Rand</option>
            </select>
          </div>
          <div className="input_conatiner">
            <label htmlFor="tocurrency">From Currency</label>
            <select id="tocurrency" value={tocurrency} onChange={handleToCurrency}>
            <option value="USD">USD United States Dollar</option>
            <option value="EUR">EUR Euro</option>
            <option value="GBP">GBP British Pound Sterling </option>
            <option value="JPY">JPY Japanese Yen</option>
            <option value="AUD">AUD Australian Dollar</option>
            <option value="CAD">CAD Canadian Dollar</option>
            <option value="CNY">CNY Chinese Yuan</option>
            <option value="INR">INR Indian Rupee</option>
            <option value="BRL">BRL Brazilian Real</option>
            <option value="ZAR">ZAR South African Rand</option>
            </select>
          </div>
          <div className="result">
            <p> {amount} {fromcurrency} is equal to {converted} {tocurrency}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
