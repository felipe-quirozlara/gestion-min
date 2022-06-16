import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import activeLink from '../utils/navActive';

const Login = () => {

    useEffect(() => {
        activeLink(window.location.pathname);
    }, [])


    return (
        <div className="container-fluid my-5" >
            <div id="white-container" className="container mt-5 bg-light pt-5 rounded shadow " >
                <div className="row d-flex justify-content-center mt-5 pb-5">
                    <div className="col-10 col-md-8 col-lg-6 ">
                        <h1>Iniciar sesión</h1>
                        <div>
                            <form onsubmit="validateForm(event)">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Dirección de correo</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                        required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword" className="form-label">Contraseña</label>
                                    <input type="password" className="form-control" id="exampleInputPassword" aria-describedby="emailHelp"
                                        required />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Manter mi cuenta iniciada
                                    </label>
                                </div>
                                <div className="d-grid gap-2 my-4">
                                    <Link to={"/users"}>
                                        <input value="Iniciar sesión" type="submit" className="btn btn-primary" />

                                    </Link>
                                </div>
                                <div>
                                    <Link to={'/recuper-clave'}>
                                        <a class="mt-2" href="./login.html">¿Olvidaste tu contraseña? Recuperala</a>

                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login