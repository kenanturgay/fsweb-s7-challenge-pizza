import React, { useState } from 'react';

export default function Card4() {
  const [siparisNotu, setSiparisNotu] = useState('');

  const handleChange = (event) => {
    setSiparisNotu(event.target.value);
  };

  const placeholderText = "Siparişine eklemek istediğin bir şey var mı?";

  return (
    <div style={{ display: 'flex', flexDirection: "column", gap: "10px" }}>
        <label style={{ fontWeight: 'bold' }} htmlFor="siparisNotu">Sipariş Notu</label>
        <input 
          id="siparisNotu" 
          style={{ height: "50px" }} 
          maxLength={200} 
          value={siparisNotu} 
          onChange={handleChange} 
          placeholder={placeholderText} 
        />
    </div>
  )
}
