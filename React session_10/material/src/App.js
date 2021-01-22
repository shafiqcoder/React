import React, { useState } from 'react';
import Navbar from './Components/navbar'
import Footer from "./Components/footnav"
import InfoPanel from './Components/infopanel';



function App() {
  const screenConfig = useState(0);
  return (
    <div className="App">
      <Navbar />
      <InfoPanel currentScreen={screenConfig[0]} />
      <Footer screenConfig={screenConfig} />
    </div>
  );
}
export default App;