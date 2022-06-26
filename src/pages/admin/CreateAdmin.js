import React from 'react'

const CreateAdmin = () => {
    return (
        <div className="container-fluid">
            <div id="white-container" className="container nopwidth mt-5 bg-light py-5 rounded shadow ">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" required />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Apellido</label>
                    <input type="text" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" required />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">RUT</label>
                    <input type="number" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" required />
                </div>
                <div className='mb-3'>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Permisos de administrador
                        </label>
                    </div>
                </div>
                <div class="d-grid gap-2">
                    <button class="btn btn-primary" type="button">Agregar</button>
                </div>
            </div>
        </div>
    )
}

export default CreateAdmin