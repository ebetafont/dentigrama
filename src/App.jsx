
import './App.css'
import Aside from './Aside'
import Dentigrama from './Dentigrama'
import dataResponse from './data-users.json'
import dataResponse2 from './data-records.json'
import {Patient, Record} from './Classes/Patient'

import { useState } from 'react'

function App() {
  const [search, setSearch] = useState('grogu')
  const miPatient = createPatientOb(search)
  const miRecord = miPatient.record[miPatient.record.length - 1]

  /*
  //TODO Filtrar Record x fecha
  let filterRecordDate = "01/01/2024"
  const miRecord = miPatient.record.filter((obj) => obj.date === filterRecordDate)
  */

  function createPatientOb(search){
    //--Simulo captar los datos del paciente--
    const patient = dataResponse.filter((obj) => obj.username === search)
 
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

  function handleSubmit(e) {
    e.preventDefault()
    console.log(`You searched for '${search}'`)
  }

  return (
    <>
      <header>
        <div> 
          <form onSubmit={handleSubmit}><input type="text" placeholder="Buscar paciente" onChange={(e)=> setSearch(e.target.value)} /></form>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABvElEQVRIS9WV223CMBSGE0A80w3oBnQCyATABo7E7bFM0HaCwhsJSLgTlE4AGzSdoGxQnhGC/j9yUEiwjQSoqqUjJ3LO+c7NJ65z4+Xe2L6jBbTb7YrrujU4UIWUISVIBPnK5XJyNBotz3HuJADGBYy/KqM6O/0wDAc2SAbQ6XTeodRQijPsb7vdbpnP51fb7ZZR1fEueI59MR6PPRPkCADjj/iYnq8gPjwkILNU+uYqQmMkB0Cv1yvDw0+l1NQZj2mtVquGWhDiYL/X1eQAiL1HCmQQBL4ttzzvdrtTla4XOPR8SicJiHNv9T42BKdYK+rNAGjaAN/4oGwKN21ACFEqFos/rBkAd38LiPOJnPpoPXlODRKFjhDBgy0CFunJlM+0AdRgr2NqjHSbsg4O2tWbTCYLUxTKexaYF85D1BwjmaW9aIA0dRBlfMqmgAyQnr7OmcyowC2dqyFHnQFAH5vNZu9doVCooMvqeBQQDj+uaL1ee1JK3n5zBPFpYmToHKMxCalBKiaIbVw3kN8qIqIRriWeI0Q1ZM7VPeC40EIu/uHYIBcDGFYKcjRdrwJIQET6J3Q1gK4b/j/gF70q5Bmo5ntsAAAAAElFTkSuQmCC"/>
          <p>Disponible: grogu/margot/ernesto</p>
        </div> 
      </header>
      <section className="middle-container">
        {miPatient.id === undefined ? 
          (<aside className="a-left">
            <div className="patient-info"><div className="patient-data"><div className="patient-avatar">
              <img src={`/Avatars/not_found.png`} alt="Not found Pic" />
               </div><div className="patient-name"><p>Paciente no encontrado</p></div></div></div></aside>)
          : 
          (<Aside name={miPatient.name} username={miPatient.username} title={miRecord.title} date={miRecord.date} />)
        }
        <main>  
          <h1>Odontograma</h1>
          {miPatient.id === undefined ? 
            (<><div className="radio-procedure-selector"></div><div className="grid-container"></div></>)
            : 
            (<>
              <div className="radio-procedure-selector">
                  <div><input type="radio" id="radio1" name="accion" value="cavidad" /> <label htmlFor="radio1">Cavidad</label></div>
                  <div><input type="radio" id="radio2" name="accion" value="carie" defaultChecked /><label htmlFor="radio2">Carie</label></div>
                  <div><input type="radio" id="radio3" name="accion" value="relleno" /><label htmlFor="radio3">Relleno</label></div>
                  <div><input type="radio" id="radio4" name="accion" value="borrar" /><label htmlFor="radio4">Borrar</label></div>
              </div>
              <div className={miPatient.stage==="child"? "grid-container-child" : "grid-container"}>
                <Dentigrama recordId={miRecord.recordId} stage={miPatient.stage} denti={miRecord.superior} position="downside" />
                <Dentigrama recordId={miRecord.recordId} stage={miPatient.stage} denti={miRecord.inferior} position="upside" />
              </div>
            </>)
          } 
        </main>
      </section>
      <footer></footer>
    </>
  )
}

export default App
