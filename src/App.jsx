import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header'
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
    <Header/>
    <Home/>
    <Footer/>
    </>
  )
}

export default App
