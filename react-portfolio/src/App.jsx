import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import './App.css';
import { Outlet } from 'react-router-dom'

function App() {
    return (
    <div>
      <Header></Header>
      <Footer></Footer>
    </div>
  )
}

export default App
