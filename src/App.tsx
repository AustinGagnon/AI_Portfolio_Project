// import { useState } from 'react'
// import React from 'react';
import Header from './components/Header/Header'
import ToggleDarkMode from './components/ToggleDarkMode/ToggleDarkMode';
// import HomePage from './pages/HomePage/Index';
// import GamePage from './pages/GamePage/Index';
import ProjectsPage from './pages/ProjectsPage/Index';
import './App.css'

function App() {

  return (
    
    <div className='mainContainer'>
      <Header/>
      <ToggleDarkMode />
      {/* <GamePage /> */}
      <ProjectsPage />
      {/* <HomePage /> */}
    </div>
    
    
  )
}

export default App
