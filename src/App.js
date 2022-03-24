//import logo from './logo.svg';
//import { useState } from 'react';
import './App.css';

//import About from './component/About';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import React, { useState } from 'react';
import Alert from './component/Alert';


//let name = "Saumya"
function App() {
  const [mode , setMode] = useState('light');
  const [alert , setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);

  }
  

  const toggleMode = ()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#042743";
      showAlert(" Dark Mode has been Enabled","success ");
      document.title='Textutills-Dark Home'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert(" Light Mode has been Enabled","success")
      document.title='Textutills-Light Home'
    }
  }
  return (
    <>
    
{/*<Navbar className="title" title="TEXTify" mode = {mode}About="About" />*/}
<Navbar title="TEXTify" mode = {mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className='container my-3'>
<Textform showAlert = {showAlert} heading="Enter text here to analyze"mode={mode}/>
{/*<About/>*/}
</div>

    </>
  );
}

export default App;
