import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Scores from './Scores';

function App() {
  return (
    
    <div className="App">
      Ciao bambino
      <Router>
        <Switch>
          <Route exact path="/" component={Scores} />
        </Switch>
      
      </Router>
    </div>
  );
}
export default App;
