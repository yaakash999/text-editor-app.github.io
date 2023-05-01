import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'; 
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.title = 'Text Editor | #ReadingMode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = 'Text Editor |';
    }
  }
  return (
    <>
      <Navbar title="Text Editor" mode={mode} toggleMode={toggleMode}/>
     <div className="container my-3">
      <TextForm heading="Enter your text below!" mode={mode} />
     </div>
     </>
    
  );
}

export default App;
