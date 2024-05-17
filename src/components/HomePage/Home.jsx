import { useHistory } from 'react-router-dom';
import UnderHomePageNavbar from './UnderHomePageNavbar3';
import UnderHomePageNavbar1 from './UnderHomePageNavbar1';
import UnderHomePageNavbar2 from './UnderHomePageNavbar2';


export default function Home() {
  const history = useHistory();
  

  const handleClick = () => {
    history.push('/Siparis_olustur');
  };

 

  // Kartların ve kapsayıcılarının stilleri

  return (
    <>
      <div style={{ backgroundImage: `url('./Assets/mile1-assets/home-banner.png')`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100vh', display: 'flex', justifyContent: "flex-start", alignItems: 'center', flexDirection: "column", paddingTop: "80px"}}>
        <div style={{ color: 'white' }}>
          <h1>Teknolojik Yemekler</h1>
        </div>
        <div style={{ display: 'flex', justifyContent: "flex-start", alignItems: 'center', flexDirection: "column", paddingTop: "80px" }}>
          <span style={{ color: "rgb(255, 217, 0)" }}>fırsatı kaçırma</span>
          <h1 style={{ color: 'white' }}>KOD ACIKTIRIR</h1>
          <h1 style={{ color: 'white' }}>PİZZA, DOYURUR</h1>
        </div>
        <button style={{ width: '4cm', height: '1.5cm', backgroundColor: "rgb(255, 217, 0)", border: 'none', display: "flex", alignItems: 'center', justifyContent: 'center', borderRadius: "0.5cm" }} onClick={handleClick}>ACIKTIM</button>
      </div>
      <div>
        <UnderHomePageNavbar1/>
      </div>
      <div>
        <UnderHomePageNavbar2/>
      </div>
      
    </>
  );
}
