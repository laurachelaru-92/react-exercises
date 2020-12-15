import React from 'react';
import './App.css';
// import CounterExample from './components/CounterExample';
import HelloWorld from './components/HelloWorld';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <HelloWorld name="Laura"/>
      <Footer/>
    </div>
  );
}

export default App;
