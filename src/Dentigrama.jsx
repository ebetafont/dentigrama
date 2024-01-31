import './Dentigrama.css'
import ToothM from './ToothM'
import dataResponse from './data-users.json'

export default function Dentigrama(){
    const patient = dataResponse.filter((obj) => obj.username === "margot")
    let superior
    let inferior
    patient?.filter((obj)=>(superior = obj.superior))
    patient?.filter((obj)=>(inferior = obj.inferior))
  
    return (
      <>
        <div className="grid superior">
          { superior?.map((obj) => (
              <ToothM key={obj.id} id={obj.id} state={obj.state} />
            )
          )}
        </div>
  
        <div className="grid inferior">
          { inferior?.map((obj) => (
              <ToothM key={obj.id} id={obj.id} state={obj.state} />
            )
          )}
        </div>
      </>
    )
  
}