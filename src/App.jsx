
import './App.css'
import Aside from './Aside'
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
        <Aside name = {name} />
        <main>  
          <h1>Odontograma</h1>
          <div className="radio-procedure-selector">
              <div><input type="radio" id="radio1" name="accion" value="cavidad" /> <label htmlFor="radio1">Cavidad</label></div>
              <div><input type="radio" id="radio2" name="accion" value="carie" defaultChecked /><label htmlFor="radio2">Carie</label></div>
              <div><input type="radio" id="radio3" name="accion" value="relleno" /><label htmlFor="radio3">Relleno</label></div>
              <div><input type="radio" id="radio4" name="accion" value="borrar" /><label htmlFor="radio4">Borrar</label></div>
          </div>
          <div className='grid-container'>
            <Dentigrama denti={superior} position="downside" />
            <Dentigrama denti={inferior} position="upside" />
          </div>
        </main>
      </section>
      <footer></footer>
    </>
  )
}

export default App
