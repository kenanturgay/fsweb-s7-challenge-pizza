import React from 'react'

import { useHistory } from 'react';

export default function Card6() {
    
  /*const history = useHistory();

  const handleClick = () => {
    
    history.push('/Siparis_alındı');

  }*/

  return (

    <div style={{display: 'flex', flexDirection:"column",  width: '7cm', height: '4cm', border: '1px solid black'}}>
        <div style={{  display: 'flex',flexDirection:"column", gap:"20px", paddingLeft:"20px", paddingBottom:"20px"}}>
            <span style={{paddingTop:"30px"}}>Toplam Sipariş</span>
            <span style={{}}>Seçimler</span>
            <span style={{}}>Toplam</span>

            
                 
        </div>

        <div>

            <button style={{width: '7cm', height: '1cm', backgroundColor:"rgb(255, 217, 0)", border: 'none', borderRadius:"0.1cm"}}>Sipariş Ver</button>

        </div>
    </div>
  )
}
