import React from 'react'

const EditarCurso = () => {
    return (
        <div class="container-fluid">
            <div id="white-container" class="container nopwidth mt-5 bg-light py-5 rounded shadow ">
                <h1 class="ms-3 mb-3">Modificar curso o certificado</h1>
                <div class="px-3">
                    <form onsubmit="validateForm(event)">
                        <div class="container mx-3 mb-3">
                            <h2 class="mb-3">Agregar un participante</h2>
                            <div class="d-flex justify-content-between ps-3">
                                <input type="number" class="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="Rut del operador" required />
                                <input class="btn btn-primary ms-3" type="submit" value="Agregar operador" />
                            </div>
                        </div>
                    </form>
                    <div class="container-fluid mx-3">
                        <h2>Listado de participantes</h2>
                        <div class="mb-3">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Apellidos</th>
                                        <th scope="col">Rut</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Juan</td>
                                        <td>Rojas Díaz</td>
                                        <td>12.423.543-2</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Mateo</td>
                                        <td>López Romero</td>
                                        <td>10.823.513-2</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Gaspar</td>
                                        <td>Martínez García</td>
                                        <td>11.723.543-2</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditarCurso