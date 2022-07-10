import React from 'react'
import { Link } from 'react-router-dom';
import lista from "../asistencia.json";

const HistoryAsistencia = () => {

    console.log(lista.clases);

    return (
        <div className='container'>
            <div id="white-container" className="container nopwidth mt-5 bg-light py-5 rounded shadow ">
                <div className='mx-2'>
                    <h2 className='mb-3'>Historial de asistencia</h2>
                    {lista.clases.map((e) => {
                        return (
                            <div class="card my-2">
                                <div class="card-header">
                                    <b>Clase {e.clase}</b> {e.fecha}
                                </div>
                                <div class="card-body">
                                    <Link to={`/profe/historial-dia/${e.clase}`}>
                                        <button className='btn btn-primary'>Ver asistencia</button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default HistoryAsistencia