import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from "./components/Home";
import Counter from './components/Counter';
import Work from "./components/Work";

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Counter />
      <Work />
    </>
  )
}

export default App
