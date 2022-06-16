import React from 'react'
import { Link } from 'react-router-dom'

const CursosOperario = () => {
    return (
        <div class="container-fluid">
            <div id="white-container" class="container mt-5 bg-light pt-5 rounded shadow ">
                <h1 class="ms-3">Cursos inscritos</h1>
                <div class="row d-flex justify-content-center mt-5 pb-5">
                    <div class="col-12 col-md-11 col-lg-11 ">
                        <div class="card mb-4">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="https://images.unsplash.com/photo-1532635026-d12867005472?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                        class="imagen rounded-start" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Grúa horquilla</h5>
                                        <p class="card-text">
                                            Continua tu curso de operario de grúa horquilla
                                        </p>
                                        <div class="d-flex justify-content-end">
                                            <Link to={"/users/curso"}>
                                                <button class="btn btn-primary my-3">Ver curso</button>
                                            </Link>
                                        </div>
                                        <p class="card-text"><small class="text-muted">Última vez ingresado hace 2
                                            días</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-4">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="https://images.unsplash.com/photo-1629807473015-41699c4471b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                        class="imagen rounded-start" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Cargador frontal</h5>
                                        <p class="card-text">
                                            Continua tu curso de operario de cargador frontal
                                        </p>
                                        <div class="d-flex justify-content-end">
                                            <Link to={"/users/curso"}>
                                                <button class="btn btn-primary my-3">Ver curso</button>
                                            </Link>
                                        </div>
                                        <p class="card-text"><small class="text-muted">Última vez ingresado hace 2
                                            hrs</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-4">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="https://images.unsplash.com/photo-1610477865545-37711c53144d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80"
                                        class="imagen rounded-start" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Bulldozer</h5>
                                        <p class="card-text">
                                            Continua tu curso de operario de Bulldozer
                                        </p>
                                        <div class="d-flex justify-content-end">
                                            <Link to={"/users/curso"}>
                                                <button class="btn btn-primary my-3">Ver curso</button>
                                            </Link>
                                        </div>
                                        <p class="card-text"><small class="text-muted">Última vez ingresado hace 2
                                            hrs</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CursosOperario