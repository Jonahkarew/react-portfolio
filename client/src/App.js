import React from 'react';
// import { BrowserRouter  as Router, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home/Home';
// import Contact from './pages/Contact/Contact';
// import Portfolio from './pages/Portfolio/Portfolio';
import DotCanvas from './Components/DotCanvas'


function App() {
   
  return (
    


    <React.Fragment>
      <DotCanvas />
      <Home />
    </React.Fragment>
    
    // <Router>
    //   <React.Fragment>
    //     <Route exact path='/' component={Home} />
    //     <Route exact path='/contact' component={Contact} />
    //     <Route exact path="/portfolio" component={Portfolio} />
    //   </React.Fragment>
    // </Router>
  );
}

export default App;
