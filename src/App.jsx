import { Router } from 'react-router-dom/cjs/react-router-dom.min'
import './App.css'
import Home from './components/Home'
import SiparisOlustur from "./components/SiparisOlustur"
import { Switch, Route } from 'react-router-dom'
import SiparisAlındı from './components/SiparisAlındı'

function App() {
  return (
    <>
      
        <Switch>
          <Route path="/" Exact>
            <Home/>
          </Route>
          <Route path="/Siparis_olustur">
            <SiparisOlustur/>
          </Route>

          <Route path="/Siparis_alındı">
            <SiparisAlındı/>
          </Route>
          
        </Switch>

         
        
        
    
    </>
  )
}

export default App
