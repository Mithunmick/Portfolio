import React from 'react';
import {Route} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Home from './Components';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';


function App() {
  return (
    <>
    <CssBaseline />
    <Route exact path="/" component={Home} />
    <Route path="/resume" component={Resume} />
    <Route path="/portfolio" component={Portfolio} />
      
    </>
  );
};

export default App;
