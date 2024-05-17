import React from 'react'
import UnderHomePageNavbar3 from './UnderHomePageNavbar3'

export default function UnderHomePageNavbar2() {
  return (
    <div style={{backgroundColor:"rgb(240, 224, 209)", backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100vh', paddingTop:"50px"
    }}>
        
        <div style={{display:"flex", flexDirection:"row", gap:"15px", justifyContent:"center", paddingTop:"80px"}}>

            <div style={{ backgroundImage: `url('./Assets/mile2-aseets/cta/kart-1.png')`, width: '400px', backgroundSize: 'cover', backgroundPosition: 'center', height: '350px', backgroundColor:"rgb(255, 217, 0)", border: 'none', borderRadius:"10px"}}>

                <div style={{display:"flex", flexDirection:"column", gap:"15px", paddingTop:"30px",paddingLeft:"30px"}}>
                    <span style={{color:"white", fontSize: '35px'}}>
                        Özel
                    </span>
                    <span style={{color:"white", fontSize: '35px'}}>
                        Lezzetus
                    </span>
                    <span style={{color:"white",  fontSize: '14px'}}>
                        Position:Absolute Acı Burger
                    </span>
                    <button onClick={() => handleCategoryChange('icecekler')} style={{ width: '3cm', height: '1cm', backgroundColor: 'white', border: 'none', color:
                    'red', borderRadius:"1cm", fontSize: '10px' }}>
                        SİPARİŞ VER
                        </button>

                </div>
                
            </div>
            <div style={{display:"flex", flexDirection:"column", gap:"15px"}}>
                <div style={{backgroundImage: `url('./Assets/mile2-aseets/cta/kart-2.png')`, backgroundSize: 'cover', backgroundPosition: 'center', width: '400px', height: '167.5px', backgroundColor:"black", border: 'none', borderRadius:"10px"}}>

                    <div style={{display:"flex", flexDirection:"column", gap:"10px", paddingTop:"30px",paddingLeft:"30px"}}>
                        <span style={{color:"white", fontSize: '25px'}}>
                            Hackathlon
                        </span>
                        <span style={{color:"white", fontSize: '25px'}}>
                            Burger Menü
                        </span>
                        
                        <button onClick={() => handleCategoryChange('icecekler')} style={{ width: '3cm', height: '1cm', backgroundColor: 'white', border: 'none', color:
                        'red', borderRadius:"1cm", fontSize: '10px' }}>
                            SİPARİŞ VER
                            </button>

                    </div>

                </div>

                <div style={{backgroundImage: `url('./Assets/mile2-aseets/cta/kart-3.png')`, backgroundSize: 'cover', backgroundPosition: 'center', width: '400px', height: '167.5px', backgroundColor:"rgb(255, 217, 0)", border: 'none', borderRadius:"10px"}}>

                    <div style={{display:"flex", flexDirection:"column", gap:"10px", paddingTop:"30px",paddingLeft:"30px"}}>
                        <span style={{color:"red", fontSize: '25px'}}>
                            Çoooook <span style={{color:"black", fontSize: '25px'}}>hızlı</span>
                        </span>
                        <span style={{color:"black", fontSize: '25px'}}>
                            npm gibi kurye
                        </span>
                        
                        <button onClick={() => handleCategoryChange('icecekler')} style={{ width: '3cm', height: '1cm', backgroundColor: 'white', border: 'none', color:
                        'red', borderRadius:"1cm", fontSize: '10px' }}>
                            SİPARİŞ VER
                            </button>

                    </div>
                    

                </div>
                
            </div>

            

        </div>

        <div style={{display:"flex", flexDirection:"column", gap:"15px", justifyContent:"center", alignItems:"center", paddingTop:"80px"}}>

                        <span style={{ fontFamily: "'Dancing Script'", fontSize: '16px', color:"red" }}>en çok paketlenen menüler</span>



                        <span style={{ fontFamily: "'Dancing Script'", fontSize: '24px', color:"black", font:"bold", fontWeight: 'bold'}}>Acıktıran Kodlara Doyuran Lezzetler</span>



        </div>

        <div>
            <UnderHomePageNavbar3 />
        </div>
        
        
        
     </div>
  )
}
