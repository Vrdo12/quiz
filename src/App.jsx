import React from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import First from './First/First';
import Footer from './Footer/Footer';
import Fb from './Fb/Fb';


const App = () =>{
  return(
    <>
      <Route exact path="/" component={First} />
      <Route exact path="/" component={Footer} />
      <Route path="/fb" component={Fb} />
    </>
  )
}

export default App;
