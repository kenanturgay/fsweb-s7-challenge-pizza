import React, { useState } from 'react';


const malzemeList = {
    Pepperoni: false,
    Sosis: false,
    'Kanada Jambonu': false,
    'Tavuk Izgara': false,
    Soğan: false,
    Domates: false,
    Mısır: false,
    Sucuk: false,
    Jalepeno: false,
    Sarmısak: false,
    Biber: false,
    Salam: false,
    Ananas: false,
    Kabak: false
};

export default function Card3() {
    
    const [malzemeler, setMalzemeler] = useState(malzemeList);
    
    
    const handleMalzemeChange = (malzemeAdi) => {
        setMalzemeler({ ...malzemeler, [malzemeAdi]: !malzemeler[malzemeAdi]});
        console.log(malzemeler);
    };
    
    
    const malzemeCheckboxlar = Object.keys(malzemeler).map((malzemeAdi) => (
        <div key={malzemeAdi}>
            <input
                type="checkbox"
                id={`${malzemeAdi}Checkbox`}
                checked={malzemeler[malzemeAdi]}
                onChange={() => handleMalzemeChange(malzemeAdi)}
            />
            <label htmlFor={`${malzemeAdi}Checkbox`}>{malzemeAdi}</label>
        </div>
    )); 

    return (
        <div style={{ display: 'flex', flexDirection: "column"}}>
            <span style={{ marginBottom: "20px", fontWeight: 'bold' }}>Ek Malzemeler</span>
            <span style={{ marginBottom: "20px"}}>En Fazla 10 malzeme seçebilirsiniz. 5tl</span>
            <div >
                {malzemeCheckboxlar}
            </div>
       </div>
    )
}
