import React, { useEffect } from 'react'
import activeLink from '../utils/navActive';

const Signin = () => {

    useEffect(() => {
        activeLink(window.location.pathname);
    }, [])

    return (
        <div className="container-fluid">
            <div id="white-container" className="container mt-5 bg-light pt-5 rounded shadow ">
                <div className="row d-flex justify-content-center mt-5 pb-5">
                    <div className="col-10 col-md-8 col-lg-8 ">
                        <h1>Crear cuenta</h1>
                        <div>
                            <form onsubmit="validateForm(event)">
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Dirección de correo
                                        <small className="text-danger">*</small></label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                        required />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Nombres <small className="text-danger">*</small></label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Apellidos<small className="text-danger">*</small></label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">RUT <small className="text-danger">*</small></label>
                                    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                        required />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Contraseña <small className="text-danger">*</small></label>
                                    <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                        required />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Recibir información de Mintraining
                                    </label>
                                </div>
                                <div className="d-grid gap-2 mt-4">
                                    <input type="submit" className="btn btn-primary" />
                                </div>
                                <a className="mt-2" href="./login.html">¿Ya tienes cuenta? Iniciar sesión</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin