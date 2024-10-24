import { useState } from "react"

export const Qrcode = () => {
  const [img, setImg]=useState("");
  const [data, setData] = useState(false);
  const [qrdata, SetQrdata] = useState("");
  const [qrsize, setQrsize] = useState("");

  async function Qrcode() {
    setData(true);
    try{
      const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data=${encodeURIComponent(qrdata)}`;
      setImg(url);
    }
    catch(error){
      console.error("Error occured in generating the qrcode",error)
    }
    finally{
      setData(false);
    }
  }
  return (
    <div className="qrcode">
        <h1>QR Code Generator</h1>
        {data && <p>Loading please wait...</p>}
        {img && <img src={img} className="qrimg" />}
        <div>
            <label htmlFor="dataInput" className="input-label">Data for QR code:</label>
            <input type="text" value={qrdata} onChange={ (e) => SetQrdata(e.target.value)} id="dataInput" placeholder="Enter data for QR code" />
            <label htmlFor="sizeInput" className="input-label">Image size(e.g.,150):</label>
            <input type="text" value={qrsize} onChange={ (e) =>setQrsize(e.target.value)} id="sizeInput" placeholder="Enter the image size" />
            <button className="generate-button" disabled={data} onClick={Qrcode}>Generate</button>
            <button className="download-button" onClick={()=>{fetch(img).then((response)=>response.blob()).then((blob)=>{const link=document.createElement("a");link.href=URL.createObjectURL(blob);link.download="qrcode.png";document.body.appendChild(link); link.click();document.body.removeChild(link);})}}>Download QR</button>
        </div>
        <p className="footer">Designed by <a href="#">Ashwin</a></p>
    </div>
  )
}
