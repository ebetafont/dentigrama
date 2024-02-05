
import './App.css'
import Aside from './Aside'
import Dentigrama from './Dentigrama'
import dataResponse from './data-users.json'
import dataResponse2 from './data-records.json'

function App() {
  //--Simulo captar los datos del paciente--
  const patient = dataResponse.filter((obj) => obj.username === "grogu")
  let userId
  let name
  let username
  let stage

  patient.map((obj) => {
    userId = obj.id
    name = obj.name
    username = obj.username
    stage = obj["stage of life"]
  })

  //--Simulo captar los datos de un registro dental del paciente--
  const record =  dataResponse2.filter((obj) => obj.patient === userId)
  let recIt = (record.length)-1
  let recordId = record[recIt].id
  let title = record[recIt].title
  let superior = record[recIt].superior
  let inferior= record[recIt].inferior
  let date = record[recIt].date

  return (
    <>
      <header></header>
      <section className="middle-container">
        <Aside name={name} username={username} title={title} date={date} />
        <main>  
          <h1>Odontograma</h1>
          <div className="radio-procedure-selector">
              <div><input type="radio" id="radio1" name="accion" value="cavidad" /> <label htmlFor="radio1">Cavidad</label></div>
              <div><input type="radio" id="radio2" name="accion" value="carie" defaultChecked /><label htmlFor="radio2">Carie</label></div>
              <div><input type="radio" id="radio3" name="accion" value="relleno" /><label htmlFor="radio3">Relleno</label></div>
              <div><input type="radio" id="radio4" name="accion" value="borrar" /><label htmlFor="radio4">Borrar</label></div>
          </div>
          <div className={stage==="child"? "grid-container-child" : "grid-container"}>
            <Dentigrama recordId={recordId} stage={stage} denti={superior} position="downside" />
            <Dentigrama recordId={recordId} stage={stage} denti={inferior} position="upside" />
          </div>
        </main>
      </section>
      <footer></footer>
    </>
  )
}

export default App
