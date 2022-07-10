import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import listaClases from "../asistencia.json";
import lista from "../alumnos.json";

const HistoryDay = () => {
    const id = useParams();
    const [clase, setClase] = useState();
    const [asistencia, setAsistencia] = useState();
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        listaClases.clases.map(e => {
            if (e.clase == parseInt(id.id)) {
                setClase(e);
                setLoading(true);
            }
        });


    }, [loading])


    return (
        <div className='container'>
            <div id="white-container" className="container nopwidth mt-5 bg-light py-5 rounded shadow ">
                <div className='ms-3'>
                    {clase &&
                        <>
                            <h1>Clase {clase.clase}</h1>
                            <p>Fecha: {clase.fecha}</p>
                        </>
                    }
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Apellido</th>
                                <th scope="col">nombre</th>
                                <th scope="col">Presente</th>
                                <th scope="col">Ausente</th>
                            </tr>
                        </thead>
                        <tbody>

                            {clase &&
                                clase.asistencia.map((e, index) => {
                                    if (e.estado === 0) {
                                        return (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{e.apellido}</td>
                                                <td>{e.nombre}</td>
                                                <td></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled /></td>
                                            </tr>
                                        )
                                    } else {
                                        return (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{e.apellido}</td>
                                                <td>{e.nombre}</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled /></td>
                                                <td></td>

                                            </tr>
                                        )
                                    }
                                })

                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default HistoryDay