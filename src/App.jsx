import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/HomePage/Home';
import SiparisOlustur from './components/OrderForm/SiparisOlustur';
import SiparisAlındı from './components/OrderApprovelPage/SiparisAlındı';

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/Siparis_olustur">
        <SiparisOlustur />
      </Route>
      <Route path="/Siparis_alındı">
        <SiparisAlındı />
      </Route>
    </Switch>
  );
}

export default App;
