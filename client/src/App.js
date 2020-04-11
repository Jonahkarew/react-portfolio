import React, { useEffect } from 'react';
import './App.css';
import Home from './pages/Home/Home';
import DotCanvas from './Components/DotCanvas';


function App() {

  //  useEffect(() =>{
  //    const loader = document.getElementById('loader');
  //    if(loader){
  //      loader.classList.add('hidden')
  //    }

  //    setTimeout(() =>{
  //      loader.outerHTML = ''
  //    }, 2000)
  //  })
  return (
    


    <React.Fragment>
      <DotCanvas />
      <Home />
    </React.Fragment>
  );
}

export default App;
