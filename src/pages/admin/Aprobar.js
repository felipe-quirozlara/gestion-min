import React from 'react'
import terminado from "../cursoTerminado.json";

const Aprobar = () => {
    return (
        <div className='container'>
            <div id="white-container" className="container nopwidth mt-5 bg-light py-5 rounded shadow ">
                <div className='mx-2'>
                    <h2>Aprobar alumnos</h2>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Apellidos</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Asistencia</th>
                                <th scope="col">Promedio final</th>
                                <th scope="col">Aprobado</th>
                                <th scope="col">Reprobado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                terminado.alumnos.map((e, i) => {
                                    return (
                                        <tr>
                                            <td>{i + 1}</td>
                                            <td>{e.apellido}</td>
                                            <td>{e.nombre}</td>
                                            <td>{e.asistencia}%</td>
                                            <td>{e.promedio}</td>
                                            <td><input class="form-check-input" type="radio" name={i} id="flexRadioDefault1"/></td>
                                            <td><input class="form-check-input" type="radio" name={i} id="flexRadioDefault1"/></td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                    <div className='container'>
                            <button className='btn btn-primary'>Guardar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aprobar