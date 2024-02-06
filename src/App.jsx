
import './App.css'
import Aside from './Aside'
import Dentigrama from './Dentigrama'
import dataResponse from './data-users.json'
import dataResponse2 from './data-records.json'

import { useState } from 'react'

function App() {
  const [testSubjet, setTestSubjet] = useState("grogu")

  //--Simulo captar los datos del paciente--

  //grogu/margot/ernesto
  const patient = dataResponse.filter((obj) => obj.username === testSubjet)
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

  function handleSearch(e){
    e.preventDefault()
     setTestSubjet(e.target.value)
    console.log(testSubjet)
  }  

  return (
    <>
      <header>
        <div> 
          <form onSubmit={handleSearch}><input type="text" placeholder="Buscar paciente" /></form>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABvElEQVRIS9WV223CMBSGE0A80w3oBnQCyATABo7E7bFM0HaCwhsJSLgTlE4AGzSdoGxQnhGC/j9yUEiwjQSoqqUjJ3LO+c7NJ65z4+Xe2L6jBbTb7YrrujU4UIWUISVIBPnK5XJyNBotz3HuJADGBYy/KqM6O/0wDAc2SAbQ6XTeodRQijPsb7vdbpnP51fb7ZZR1fEueI59MR6PPRPkCADjj/iYnq8gPjwkILNU+uYqQmMkB0Cv1yvDw0+l1NQZj2mtVquGWhDiYL/X1eQAiL1HCmQQBL4ttzzvdrtTla4XOPR8SicJiHNv9T42BKdYK+rNAGjaAN/4oGwKN21ACFEqFos/rBkAd38LiPOJnPpoPXlODRKFjhDBgy0CFunJlM+0AdRgr2NqjHSbsg4O2tWbTCYLUxTKexaYF85D1BwjmaW9aIA0dRBlfMqmgAyQnr7OmcyowC2dqyFHnQFAH5vNZu9doVCooMvqeBQQDj+uaL1ee1JK3n5zBPFpYmToHKMxCalBKiaIbVw3kN8qIqIRriWeI0Q1ZM7VPeC40EIu/uHYIBcDGFYKcjRdrwJIQET6J3Q1gK4b/j/gF70q5Bmo5ntsAAAAAElFTkSuQmCC"/>
          <p>Disponible: grogu/margot/ernesto</p>
        </div> 
      </header>
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
          <div className={stage==="child" ? "grid-container-child" : "grid-container"}>
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
