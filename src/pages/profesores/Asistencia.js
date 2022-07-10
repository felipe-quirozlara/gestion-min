import React from 'react'
import lista from "../alumnos.json";

const Asistencia = () => {
    return (
        <div className='container'>
            <div id="white-container" className="container nopwidth mt-5 bg-light py-5 rounded shadow ">
                <div className='mx-2'>
                    <h2>Asistencia hoy</h2>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Apellidos</th>
                                <th scope="col">Nombres</th>
                                <th scope="col">Presente</th>
                                <th scope="col">Ausente</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lista.alumnos.map((alumno, index) => {
                                return (
                                    <tr>
                                        <td>{alumno.apellido}</td>
                                        <td>{alumno.nombre}</td>
                                        <td><input class="form-check-input" type="radio" name={index} id="flexRadioDefault1" /></td>
                                        <td><input class="form-check-input" type="radio" name={index} id="flexRadioDefault1" /></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                        <div className='container mt-3'>
                            <button className='btn btn-success'>Guardar</button>
                        </div>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Asistencia