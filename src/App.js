// import { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Cards from './Components/Cards';
import Ciudad from './Components/Ciudad';
import Nav from './Components/Nav';

function App() {

  return (
    <div className="App">
      <Nav path='/'/>
      <Route exact path='/ciudad/:id' component={Ciudad}/>
      <Route exact path='/' component={Cards}/>
      <Route exact path="/about" component={About}/>
    </div>
  );
}

export default App;
