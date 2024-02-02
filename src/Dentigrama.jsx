import './Dentigrama.css'
import { useState} from 'react'

export default function Dentigrama({denti, position}){

  return (
    <>
      {position === "upside" ? (<ToothPic position={position} />) : ""}
      
      {denti?.map((obj) => (
          <ToothM key={obj.id} id={obj.id} state={obj.state} />
        )
      )}
      
      {position === "downside" ? (<ToothPic position={position} />) : ""}
    </>
  ) 
}

function ToothPic({position}){
  let chain = ["01","02","03","04","05","06","07","08","17","18","19","20","21","22","23","24"]
  let chainT = []
  if(position === "upside") {
    for(let i=8; i < 16; i++){chainT.push(chain[i])}
  }else{
    for(let i=0; i < 8; i++){chainT.push(chain[i])}
  }

   return (
    <>
      { chainT?.map((element) =>
        (<div className="grid-item"><div className="tooth-p-wrapper"><img src={`tooth/${element}.bmp`} alt="Tooth Pic" /></div></div>)
      )}
    
      { chainT?.reverse().map((element) =>
        (<div className="grid-item"><div className="tooth-p-wrapper turn"><img src={`tooth/${element}.bmp`} alt="Tooth Pic" /></div></div>)
      )}
    </>
  )

}

function ToothM({id, state=[]}){
  let patron = ['cavidad', 'carie', 'relleno', 'borrar']
  const [toothState, setToothState] = useState(state)
  patron = toothState

  function handleClick(e){
      let selectedRadio = document.querySelector('input[type=radio][name=accion]:checked')
      let seleccion = selectedRadio.value
      e.target.classList.remove(patron[e.target.getAttribute('data')])
      e.target.classList.add(seleccion)
      patron[e.target.getAttribute('data')] = seleccion
      setToothState(patron)
  }
  
  return (
    <div className="grid-item">
      <div className="tooth-wrapper">
          <div className="tooth" id={id}>
              <div className={`tooth-part part-0 ${toothState[0]}`} data="0" onClick={handleClick}></div>
              <div className={`tooth-part part-1 ${toothState[1]}`} data="1" onClick={handleClick}></div>
              <div className={`tooth-part part-2 ${toothState[2]}`} data="2" onClick={handleClick}></div>
              <div className={`tooth-part part-3 ${toothState[3]}`} data="3" onClick={handleClick}></div>
              <div className={`tooth-part part-4 ${toothState[4]}`} data="4" onClick={handleClick}></div>
          </div>
      </div>
    </div>
  )
}
