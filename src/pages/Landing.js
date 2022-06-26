import React, { useEffect } from 'react'
import activeLink from '../utils/navActive';
import './landing.css';

const Landing = () => {
    useEffect(() => {
        activeLink(window.location.pathname);
    }, [])
    return (
        <div className='container-fluid' style={{ backgroundColor: "white", padding: "0%" }}>



            <div className='container-fluid padding-0 mb-5'>
                <img className='landing-img' src='https://images.unsplash.com/photo-1575642975010-983c53b3eeb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format' />
                <div class="container image-fluid-landing ">
                    <div class="text-start text-white rounded p-2 mb-4" style={{backgroundColor: "#0000003d"}}>
                        <h1 className='display-3'>Min<b>Training</b></h1>
                        <p>Proovedora de certificaciones, acreditaciones y cursos de formación a la gran minería desde 1987</p>
                    </div>
                </div>
            </div>


            <div class="container marketing">

                <div class="row">
                    <div class="col-lg-4">
                        <img style={{ width: "50%" }} className='rounded-circle img-thumbnail' src='https://images.unsplash.com/photo-1552879890-3a06dd3a06c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=954&q=80' />

                        <h2 class="fw-normal">Certificados</h2>
                        <p>Obtiene tu certificado como operador de distintas maquinarias</p>
                        <p><a class="btn btn-secondary" href="#">Ver detalles &raquo;</a></p>
                    </div>
                    <div class="col-lg-4">
                        <img style={{ width: "50%" }} className='rounded-circle img-thumbnail' src='https://images.unsplash.com/photo-1622612063021-116cc3407145?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />

                        <h2 class="fw-normal">Cursos</h2>
                        <p>Curso intensivo teórico y práctico en equipos, contemplando evaluación y certificación de competencias laborales en operación de maquinaria y rigger para el caso de equipos de izaje.</p>
                        <p><a class="btn btn-secondary" href="#">Ver detalles &raquo;</a></p>
                    </div>
                    <div class="col-lg-4">
                        <img style={{ width: "50%" }} className='rounded-circle img-thumbnail' src='https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />

                        <h2 class="fw-normal">Acreditación de operadores de maquinaria pesada</h2>
                        <p>Se certifica a operadores de maquinarias pesadas. Bajo la norma ISO9001-2008- NCh2728</p>
                        <p><a class="btn btn-secondary" href="#">Ver detalles &raquo;</a></p>
                    </div>
                </div>



                <hr class="featurette-divider" />

                <div class="row featurette">
                    <div class="col-md-7">
                        <h2 class="featurette-heading fw-normal lh-1">Sobre <span class="text-muted">MinTraining.</span></h2>
                        <p class="lead">Nuestro Centro de Formación de Operadores de Maquinaria Pesada y Certificación de Competencias Laborales, posee una amplia gama de especialidades en el ámbito de la Maquinaria Pesada y trabajos en obras civiles, construcción, entre otros</p>
                    </div>
                    <div class="col-md-5">
                        <img className='img-fluid' src='https://images.unsplash.com/photo-1587919968590-fbc98cea6c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80' />
                    </div>
                </div>

                <hr class="featurette-divider" />

                <div class="row featurette">
                    <div class="col-md-7 order-md-2">
                        <h2 class="featurette-heading fw-normal lh-1">Capacitaciones MinTraining <span class="text-muted">inspección de maquinaria</span></h2>
                        <p class="lead">Nos preocupamos de entregar lo mejor en logística especializada para una capacitación de excelencia. Maquinaria nueva para las prácticas en terreno, simuladores especialmente diseñados para operar este tipo de máquinas, set de seguridad para cada alumno/a (casco, chaleco reflectante, guantes). Y el mejor equipo de instructores certificados y con una vasta experiencia en la formación de Operadores.</p>
                    </div>
                    <div class="col-md-5 order-md-1">
                        <img className='img-fluid' src='https://images.unsplash.com/photo-1580901369227-308f6f40bdeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80' />

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
                        <img className='img-fluid' src='https://images.unsplash.com/photo-1629807473015-41699c4471b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />
                        
                    </div>
                </div>

                <hr class="featurette-divider" />


            </div>
        </div>


    )
}

export default Landing