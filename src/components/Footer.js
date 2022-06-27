import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="container">
                <footer className="row row-cols-5 py-5 my-5 border-top">
                    <div className="col">
                        <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
                            <svg className="bi me-2" width="40" height="32"><use href="#bootstrap" /></svg>
                        </a>
                        <p className="text-muted">&copy; 2021</p>
                    </div>

                    <div className="col">

                    </div>

                    

                    <div className="col">
                        <h5>Secciones</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Inicio</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Sobre nosotros</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Cursos</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Preguntas frecuentes</a></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer