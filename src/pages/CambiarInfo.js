import React from 'react'

const CambiarInfo = () => {
    return (
        <div className="container-fluid">
            <div id="white-container" className="container mt-5 bg-light pt-5 rounded shadow ">
                <div className="row d-flex justify-content-center mt-5 pb-5">
                    <div className="col-10 col-md-8 col-lg-6 ">
                        <h1>Cambiar información personal</h1>
                        <div>
                            <form onsubmit="validateForm(event)">
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Nombres </label>
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Apellidos
                                    </label>
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Contraseña </label>
                                    <input type="password" className="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" />
                                </div>
                                <div className="d-grid gap-2 mt-4">
                                    <input value="Cambiar información" type="submit" className="btn btn-primary" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CambiarInfo