
import './App.css'
import ToothM from './ToothM'

function App() {
  let patient = ""
  
  return (
    <>
      <h1>Odontologo</h1>
      <div id="radio">
          <input type="radio" id="radio1" name="accion" value="cavidad" /> <label htmlFor="radio1">Cavidad</label>
          <input type="radio" id="radio2" name="accion" value="carie" defaultChecked /><label htmlFor="radio2">Carie</label>
          <input type="radio" id="radio3" name="accion" value="relleno" /><label htmlFor="radio3">Relleno</label>
          <input type="radio" id="radio4" name="accion" value="borrar" /><label htmlFor="radio4">Borrar</label>
      </div>

      <div className="grid superior">
          <ToothM id='1' state={stado1} />
          <ToothM id='2' state={stado2} />
      </div>

      <div className="grid inferior">
        <ToothM id='17' state={stado1} />
        <ToothM id='18' />
      </div>
    </>
  )
}

export default App
