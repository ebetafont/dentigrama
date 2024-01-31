
import './App.css'
import Dentigrama from './Dentigrama'
import dataResponse from './data-users.json'

function App() {
  const patient = dataResponse.filter((obj) => obj.username === "margot")
  let superior
  let inferior
  let name

  patient.map((obj) => {
    name = obj.name
    superior = obj.superior
    inferior = obj.inferior
  })

  return (
    <>
      <header></header>
      <section className="middle-container">
        <aside className="a-left">
          <div className="patient-info">
            <div className="patient-data">
             <div className="patient-avatar">
                  <img src="/public/Avatars/margot.png" alt="Profile Pic" />
              </div>
              <div className="patient-name">
                <p>{name}</p>
              </div>
            </div>
            <div className="patient-last-history">
              <p>Última visita: <span>31/01/2024</span></p>
              <ul>
                <li>Revisión de rutina</li>
                <li>Limpieza general</li>
              </ul>
            </div>
          </div>
          <div className="patient-record">
            <div className="patient-record-header">Historial del Paciente</div>
            <p><span>15/03/2023</span> </p>
            <ul>
              <li>Revisión de rutina</li>
              <li>Limpieza general</li>
            </ul>
          </div>

        </aside>
        <main>  
          <h1>Odontologo</h1>
          <div id="radio">
              <input type="radio" id="radio1" name="accion" value="cavidad" /> <label htmlFor="radio1">Cavidad</label>
              <input type="radio" id="radio2" name="accion" value="carie" defaultChecked /><label htmlFor="radio2">Carie</label>
              <input type="radio" id="radio3" name="accion" value="relleno" /><label htmlFor="radio3">Relleno</label>
              <input type="radio" id="radio4" name="accion" value="borrar" /><label htmlFor="radio4">Borrar</label>
          </div>

          <Dentigrama superior={superior} inferior={inferior} />
        </main>
      </section>
      <footer></footer>
    </>
  )
}

export default App
