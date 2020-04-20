import React, { useEffect } from 'react';
import './App.css';
import Home from './pages/Home/Home';
import DotCanvas from './Components/DotCanvas';
import Footer from './Components/Footer'

function App() {

   useEffect(() =>{
     const loader = document.getElementById('loader');
     if(loader){
       loader.classList.add('hidden')
     }

     setTimeout(() =>{
       loader.outerHTML = ''
     }, 6000)
   })
  return (
    


    <React.Fragment>
      <DotCanvas />
      <Home />
      <Footer />
    </React.Fragment>
  );
}

export default App;
