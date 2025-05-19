import { useState } from 'react'
import manosAlaMarca from './assets/en_construccion.png'
import './App.css'

function App() {


  return (
    <>
    <div className="main_section">
      <div className="main_section">
        <a href="https://react.dev" target="_blank">
          <img src={manosAlaMarca} className="logo marca" alt="Marca logo" />
        </a>
      </div>
      <div className="card">
      <p className="text_title">
        En construcción, como todas las grandes ideas. ¿Construimos la tuya juntas?
        </p>
        <a className="contact_button" href="https://google.com" target="_blank">
         Contáctanos
        </a>
      </div>
      </div>
    </>
  )
}

export default App
