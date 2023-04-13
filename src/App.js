import React from 'react'
import ListView from './components/ListView'
import Dashboard from './components/Dashboard'
import Menu from './components/Menu';
import './style.css'

function App() {
  document.body.style = 'background: #161c32;';
  return (
    <div className='app_container'>
      <Menu/>
      <div className='content'>
      <Dashboard/>
       <ListView/>
      </div>
      
   </div>
  )
}

export default App

