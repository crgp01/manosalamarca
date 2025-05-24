import manosAlaMarca from './assets/en_construccion.png'
import './App.css'

function App() {


  return (
    <>
    <div className="main_section">
      <>
        <div className="main_section">
          <img src={manosAlaMarca} className="logo marca" alt="Marca logo" />
        </div>
        <div className="card">
        <p className="text_title">
          En construcción, como todas las grandes ideas. ¿Construimos la tuya juntas? 💛
          </p>
          <a className="contact_button" href="https://docs.google.com/forms/d/1zvHwha8-13bNxmnDkjO-7USn2lntZmhLm7l8toLnEQI" target="_blank">
          Contáctanos
          </a>
        </div>
        </>
    </div>
    </>
  )
}

export default App
