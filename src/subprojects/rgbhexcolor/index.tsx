import { useState } from "react";
import './styles.css';
import { useNavigate } from "react-router-dom";

export default function RgbHexColor() {

    const navigate = useNavigate();
    const [typeOfColor, setTypeOfColor] = useState<string>('hex');
    const [color, setColor] = useState<string>('#000000');
    const [colorText, setColorText] = useState<string>('');

    const getColorFromUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColor('#' + e.target.value);
    }

    const randomHexGenerator = () => {
        let hexGenerator = (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6);
        setColor('#' + hexGenerator);
        setColorText(`hex #${hexGenerator}`);
    }

    const randomRgbGenerator = () => {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let rgbcolor = `rgb(${r}, ${g}, ${b})`;
        setColor(rgbcolor);
        setColorText(rgbcolor);
    }

    const generateRandomColor = () => {
        typeOfColor === 'hex' ? randomHexGenerator() : randomRgbGenerator();
    }

    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: '100vw', height: '100vh', background: color }}>
            <div>
                <button onClick={() => { setTypeOfColor('hex'); randomHexGenerator() }} className="btn">Create Hex Color</button>
                <button onClick={() => { setTypeOfColor('rgb'); randomRgbGenerator() }} className="btn">Create RGB Color </button>
                <div style={{ width: '100vw', justifyContent: 'center', alignItems: 'center' }}>
                    <h1>{colorText}</h1>
                </div>
                <button onClick={generateRandomColor} className="btn">Generate Random Color</button>
                <div> 
                    <h2 style={{color: "white"}}>Get Your Random Color</h2>
                    <label style={{color: "white", marginRight: 10}}>Hex Color</label>
                    <input type="text" onChange={(e) => {getColorFromUser(e); setTypeOfColor('hex')}} maxLength={6}/>
                </div>
                <button className='btn' onClick={() => {navigate('/')}}>Back To Home</button>
            </div>
        </div>
    )
}