import React from 'react'

const RecuperClave = () => {
    return (
        <div class="container-fluid">
            <div id="white-container" class="container mt-5 bg-light pt-5 rounded shadow " >
                <div class="row d-flex justify-content-center mt-5 pb-5">
                    <div class="col-10 col-md-8 col-lg-6 ">
                        <h1>Recuperar contraseña</h1>
                        <div>
                            <form onsubmit="validateForm(event)">
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Dirección de correo</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                        required />
                                </div>

                                <div class="mb-3">
                                    <p><small class="text-danger">*</small> Te enviaremos un correo electronico para recuperar tu contraseña</p>
                                </div>

                                <div class="d-grid gap-2 mt-5">
                                    <input value="Envíar" type="submit" class="btn btn-primary" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecuperClave