import './Dentigrama.css'
import ToothM from './ToothM'

export default function Dentigrama({superior, inferior}){
  
    
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