
import './App.css'
import Dentigrama from './Dentigrama'

function App() {

  return (
    <>
      <header></header>
      <section class="middle-container">
        <aside className="a-left">

        </aside>
        <main>  
          <h1>Odontologo</h1>
          <div id="radio">
              <input type="radio" id="radio1" name="accion" value="cavidad" /> <label htmlFor="radio1">Cavidad</label>
              <input type="radio" id="radio2" name="accion" value="carie" defaultChecked /><label htmlFor="radio2">Carie</label>
              <input type="radio" id="radio3" name="accion" value="relleno" /><label htmlFor="radio3">Relleno</label>
              <input type="radio" id="radio4" name="accion" value="borrar" /><label htmlFor="radio4">Borrar</label>
          </div>

          <Dentigrama />
        </main>
      </section>
      <footer></footer>
    </>
  )

  
}

export default App
