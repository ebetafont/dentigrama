
import './App.css'
import Aside from './Aside'
import Dentigrama from './Dentigrama'
import dataResponse from './data-users.json'
import dataResponse2 from './data-records.json'
import {Patient, Record} from './Classes/Patient'

function App() {
  let filterData = "grogu"
  let filterRecordDate = "01/01/2024"

  const miPatient = createPatientOb(filterData)
  const miRecord = miPatient.record.filter((obj) => obj.date === filterRecordDate)

  function createPatientOb(filterData){
    //--Simulo captar los datos del paciente--
    const patient = dataResponse.filter((obj) => obj.username === filterData)
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

    let patientOb = new Patient (userId, name, username, stage)

    //--Simulo captar los datos de un registro dental del paciente--
    const recordsList =  dataResponse2.filter((obj) => obj.patient === patientOb.id)
    recordsList.map(
      (obj) => {
        let record = new Record(obj.id, obj.title, obj.date, obj.patient, obj.superior, obj.inferior)
        patientOb.record.push(record)
      }
    )
    return patientOb
  }

  return (
    <>
      <header></header>
      <section className="middle-container">
        <Aside name={miPatient.name} username={miPatient.username} title={miRecord[0].title} date={miRecord[0].date} />
        <main>  
          <h1>Odontograma</h1>
          <div className="radio-procedure-selector">
              <div><input type="radio" id="radio1" name="accion" value="cavidad" /> <label htmlFor="radio1">Cavidad</label></div>
              <div><input type="radio" id="radio2" name="accion" value="carie" defaultChecked /><label htmlFor="radio2">Carie</label></div>
              <div><input type="radio" id="radio3" name="accion" value="relleno" /><label htmlFor="radio3">Relleno</label></div>
              <div><input type="radio" id="radio4" name="accion" value="borrar" /><label htmlFor="radio4">Borrar</label></div>
          </div>
          <div className={miPatient.stage==="child"? "grid-container-child" : "grid-container"}>
            <Dentigrama recordId={miRecord[0].recordId} stage={miPatient.stage} denti={miRecord[0].superior} position="downside" />
            <Dentigrama recordId={miRecord[0].recordId} stage={miPatient.stage} denti={miRecord[0].inferior} position="upside" />
          </div>
        </main>
      </section>
      <footer></footer>
    </>
  )
}

export default App
