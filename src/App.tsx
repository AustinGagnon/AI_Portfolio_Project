// import { useState } from 'react'
// import React from 'react';
import Header from './components/Header/Header'
import ToggleDarkMode from './components/ToggleDarkMode/ToggleDarkMode';
import HomePage from './pages/HomePage/Index';
import BioPage from './pages/BioPage/Index';
import ProjectsPage from './pages/ProjectsPage/Index';
import GamePage from './pages/GamePage/Index';
import './App.css'

interface AppProps {
  pageName: string,
}

const App: React.FC<AppProps> = (props)=> {

  return (
    
    <div className='mainContainer'>
      <Header/>
      <ToggleDarkMode />
      {props.pageName === "Home" && <HomePage />}
      {props.pageName === "Projects" && <ProjectsPage />}
      {props.pageName === "Bio" && <BioPage />}
      {props.pageName === "Game" && <GamePage />}
    </div>
  )
}

export default App;