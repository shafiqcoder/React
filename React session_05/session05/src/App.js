import React, { useState } from 'react';
import './App.css';
import Parent from './parent';
import countercontext from './countercontext';
function App() {
  let countState = useState(1)
  return (
    <countercontext.Provider value={countState}>
      <div>
        <Parent />
        <p>Child component is changing state of parent component</p>
      </div >
    </countercontext.Provider>
  );
}
export default App;