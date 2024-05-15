import React from 'react'
import { useHistory } from 'react-router-dom';

export default function Home() {


  const history = useHistory();

  const handleClick = () => {
    
    history.push('/Siparis_olustur');
    
  };


  return (
   
    <div style={{ backgroundImage: `url('./Assets/mile1-assets/home-banner.png')`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

<button style={{ width: '4cm', height: '1.5cm', backgroundColor:"rgb(255, 217, 0)", border: 'none', display:"flex",  alignItems: 'center', justifyContent: 'center', borderRadius:"0.5cm"}} onClick={handleClick}>Açıktım</button>


    </div>

  )
}
