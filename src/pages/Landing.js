import React, { useEffect } from 'react'
import activeLink from '../utils/navActive';
import './landing.css';

const Landing = () => {
    useEffect(() => {
        activeLink(window.location.pathname);
    }, [])
    return (
        <div className='container-fluid' style={{ backgroundColor: "white", padding: "0px" }}>
            <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img className='' src='https://images.unsplash.com/photo-1575642975010-983c53b3eeb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80' />
                        <div class="container">
                            <div class="carousel-caption text-start">
                                <h1>Certificados</h1>
                                <p>La empresa MinTraining provee certificaciones, acreditaciones y cursos de formación a la gran minería desde 1987</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img className='image-fluid' src='https://images.unsplash.com/photo-1649958803688-05ba373c1fc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80' />

                        <div class="container">
                            <div class="carousel-caption">
                                <h1>Cursos de operador</h1>
                                <p>MinTraining ofrece soluciones completas de capacitación en excavadoras para todas las marcas, modelos y aplicaciones</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img className='image-fluid' src='https://images.unsplash.com/photo-1567662591248-865b3397d4ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1137&q=80' />

                        <div class="container bg-secondary">
                            <div class="carousel-caption text-end">
                                <h1>Seguridad</h1>
                                <p>Ya sea que estés utilizando una maquinaria para una granja o para la construcción, es importante conocer las mejores prácticas</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div class="container marketing">

                <div class="row">
                    <div class="col-lg-4">
                        <img style={{ width: "50%" }} className='rounded-circle img-thumbnail' src='https://images.unsplash.com/photo-1552879890-3a06dd3a06c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=954&q=80' />

                        <h2 class="fw-normal">Certificados</h2>
                        <p>Obtiene tu certificado como operador de distintas maquinarias</p>
                        <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
                    </div>
                    <div class="col-lg-4">
                        <img style={{ width: "50%" }} className='rounded-circle img-thumbnail' src='https://images.unsplash.com/photo-1622612063021-116cc3407145?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />

                        <h2 class="fw-normal">Cursos</h2>
                        <p>Curso intensivo teórico y práctico en equipos, contemplando evaluación y certificación de competencias laborales en operación de maquinaria y rigger para el caso de equipos de izaje.</p>
                        <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
                    </div>
                    <div class="col-lg-4">
                        <img style={{ width: "50%" }} className='rounded-circle img-thumbnail' src='https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />

                        <h2 class="fw-normal">Acreditación de operadores de maquinaria pesada</h2>
                        <p>Se certifica a operadores de maquinarias pesadas. Bajo la norma ISO9001-2008- NCh2728</p>
                        <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
                    </div>
                </div>



                <hr class="featurette-divider" />

                <div class="row featurette">
                    <div class="col-md-7">
                        <h2 class="featurette-heading fw-normal lh-1">Sobre <span class="text-muted">MinTraining.</span></h2>
                        <p class="lead">Nuestro Centro de Formación de Operadores de Maquinaria Pesada y Certificación de Competencias Laborales, posee una amplia gama de especialidades en el ámbito de la Maquinaria Pesada y trabajos en obras civiles, construcción, entre otros</p>
                    </div>
                    <div class="col-md-5">
                        <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

                    </div>
                </div>

                <hr class="featurette-divider" />

                <div class="row featurette">
                    <div class="col-md-7 order-md-2">
                        <h2 class="featurette-heading fw-normal lh-1">Capacitaciones MinTraining <span class="text-muted">inspección de maquinaria</span></h2>
                        <p class="lead">Nos preocupamos de entregar lo mejor en logística especializada para una capacitación de excelencia. Maquinaria nueva para las prácticas en terreno, simuladores especialmente diseñados para operar este tipo de máquinas, set de seguridad para cada alumno/a (casco, chaleco reflectante, guantes). Y el mejor equipo de instructores certificados y con una vasta experiencia en la formación de Operadores.</p>
                    </div>
                    <div class="col-md-5 order-md-1">
                        <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

                    </div>
                </div>

                <hr class="featurette-divider" />

                <div class="row featurette">
                    <div class="col-md-7">
                        <h2 class="featurette-heading fw-normal lh-1">Certificados para <span class="text-muted">operarios.</span></h2>
                        <p class="lead">Servicio exclusivo de nuestra institución para aquellos trabajadores/as que necesiten mejorar su desempeño laboral por medio de una Certificación de Competencias Laborales, generando una brecha en el sector de Maquinaria Pesada.</p>
                        <p class="lead">La Certificación de personas, viene a cerrar el proceso de Certificaciones de Calidad y Mejoramiento Continuo que poseen actualmente sectores como la minería, forestal, manufactura y Servicios en general.</p>
                    </div>
                    <div class="col-md-5">
                        <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

                    </div>
                </div>

                <hr class="featurette-divider" />


            </div>
        </div>


    )
}

export default Landing