import './App.css';
import Navbar from './components/Navbar';
import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Switch>
      <Route path='/' exact />
    </Switch>
    </Router>
    
    </>
  );
}

export default App;
