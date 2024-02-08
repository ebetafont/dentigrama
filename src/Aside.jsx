import './Aside.css'

export default function Aside({name,username,title,date}){
    return(
        <aside className="a-left">
            <div className="patient-info">
                <div className="patient-data">
                    <div className="patient-avatar">
                        <img src={`/Avatars/${username}.png`} alt="Profile Pic" />
                    </div>
                    <div className="patient-name">
                        <p>{name}</p>
                    </div>
                </div>
                <div className="patient-last-history">
                    <p>Última visita: <span>{date}</span></p>
                    <p>{title}</p>
                </div>
            </div>
            <div className="patient-record">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABIUlEQVRIS92V7Q2CMBCGISzACLpBDQygG+gGuoGbOIK4gRvoApBuoBvoAqS+TVpS+8WB4g/509L23ueu12vTZOIvnVg/IQMYY3mWZUc4lLdtu+GcPynOkQCG+FqJckBWFEgvwBLnCsDQkiBRgC0utwbCT2zVBS0JEgT4xLEldxmBmiNBvICYuE4sFeIAKOJDIG+AIeJUSAewjyISOtd7rsWKohCyX9e1z7GH7wh3C2Esi2irxWwROR4CmHPKvoL9TvY7QFmWByHE/kuAMwDySLtXhe2l/g9dCzrSUHTOKfo5wPSckgM7d70R/Bcgdv+PTjLlUYnViC8HNxjMqMLWOo4kL8wxB4CCW6LgZFUPhVxhd2qapooCRnoeNOt9Mj8FvgDbnwEomMtN3AAAAABJRU5ErkJggg=="/>
                <div className="patient-record-header">
                    Historial del Paciente
                </div>
                <p><span>15/03/2023</span> </p>
                <ul>
                    <li>Revisión de rutina</li>
                    <li>Limpieza general</li>
                </ul>
                <p><span>01/01/2023</span> </p>
                <ul>
                    <li>Limpieza general</li>
                    <li>Revisión de rutina</li>
                    <li>Inicio de la Consulta</li>
                </ul>
            </div>
        </aside>
    )
}
