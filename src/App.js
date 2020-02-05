import React from 'react';
import logo from './logo.svg';
import MainContainer from './components/maincontainer';
import './App.css';
import {Helmet} from "react-helmet";

function App() {
  return (
    
   
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>w. ryley w</title>
        <link href="https://fonts.googleapis.com/css?family=Darker+Grotesque:400,800&display=swap" rel="stylesheet"></link>
      </Helmet>
      <MainContainer/>
    </div>
  );
}

export default App;
