import { useState} from 'react'

export default function ToothM({id, state=[]}){
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
        <div className="tooth-wrapper">
            <div className="tooth" id={id}>
                <div className={`tooth-part part-0 ${toothState[0]}`} data="0" onClick={handleClick}></div>
                <div className={`tooth-part part-1 ${toothState[1]}`} data="1" onClick={handleClick}></div>
                <div className={`tooth-part part-2 ${toothState[2]}`} data="2" onClick={handleClick}></div>
                <div className={`tooth-part part-3 ${toothState[3]}`} data="3" onClick={handleClick}></div>
                <div className={`tooth-part part-4 ${toothState[4]}`} data="4" onClick={handleClick}></div>
            </div>
        </div>
    )
}