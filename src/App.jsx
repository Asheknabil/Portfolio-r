import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from "./components/Home";
import Counter from './components/Counter';
import Work from "./components/Work";
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Counter />
      <Work />
      <Footer />
    </>
  )
}

export default App
