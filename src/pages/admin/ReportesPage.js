import React from 'react'

const ReportesPage = () => {
  return (
    <div className="container-fluid">
      <div id="white-container" className="container nopwidth mt-5 bg-light py-5 rounded shadow ">
        <div className='container px-4'>
          <div className='mb-4'>
            <h1>Reportes</h1>
          </div>
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Cursos terminandos</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Cursos en curso</button>
            </li>

          </ul>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Grúa horquilla
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <div className="container-fluid">
                        <div className="mx-5 pt-4">
                          <div className="row">
                            <div className="col">
                              <b>Nombre del curso</b>
                            </div>
                            <div className="col">
                              <p>Cursos operador Grúa horquilla</p>
                            </div>
                            <hr />
                          </div>
                          <div className="row">
                            <div className="col">
                              <b>Cantidad de horas</b>
                            </div>
                            <div className="col">
                              <p>40 hrs<small className="text-secondary ms-3">25 hrs restantes</small></p>
                            </div>
                            <hr />
                          </div>
                          <div className="row">
                            <div className="col">
                              <b>Empresa patrocinadora</b>
                            </div>
                            <div className="col">
                              <p>Anglo American plc </p>
                            </div>
                            <hr />
                          </div>
                          <div className="row">
                            <div className="col">
                              <b>Profesor</b>
                            </div>
                            <div className="col">
                              <p>Juan Carlos Rodríguez Silva <a href="#"><i
                                className="bi bi-envelope-plus ms-2 h5 text-black"></i></a></p>
                            </div>
                            <hr />
                          </div>
                        </div>
                      </div>
                      <div className='container'>
                        <h4>Reportes</h4>
                        <div className='d-flex justify-content-evenly '>
                          <div className='container'>
                            <a target="_blank" href='https://docs.google.com/spreadsheets/d/1FDeYYOCBA3llZzXrnQl-QqLQkdbGf-50yH2a2C68wl4/edit?usp=sharing' className='btn btn-primary'>Formato excel</a>
                          </div>
                          <div className='container'>
                            <a target="_blank" href='https://drive.google.com/file/d/1jL9PJ1ASwFlrXKkLszaj8ZkOC8bWkXoz/view?usp=sharing' className='btn btn-danger'>Formato pdf</a>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Curso operador Bulldozer
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <div className="container-fluid">
                        <div className="mx-5 pt-4">
                          <div className="row">
                            <div className="col">
                              <b>Nombre del curso</b>
                            </div>
                            <div className="col">
                              <p>Cursos operador Bulldozer</p>
                            </div>
                            <hr />
                          </div>
                          <div className="row">
                            <div className="col">
                              <b>Cantidad de horas</b>
                            </div>
                            <div className="col">
                              <p>40 hrs<small className="text-secondary ms-3">25 hrs restantes</small></p>
                            </div>
                            <hr />
                          </div>
                          <div className="row">
                            <div className="col">
                              <b>Empresa patrocinadora</b>
                            </div>
                            <div className="col">
                              <p>Anglo American plc </p>
                            </div>
                            <hr />
                          </div>
                          <div className="row">
                            <div className="col">
                              <b>Profesor</b>
                            </div>
                            <div className="col">
                              <p>Juan Carlos Rodríguez Silva <a href="#"><i
                                className="bi bi-envelope-plus ms-2 h5 text-black"></i></a></p>
                            </div>
                            <hr />
                          </div>
                        </div>
                      </div>
                      <div className='container'>
                        <h4>Reportes</h4>
                        <div className='d-flex justify-content-evenly '>
                          <div className='container'>
                            <a target="_blank" href='https://docs.google.com/spreadsheets/d/1FDeYYOCBA3llZzXrnQl-QqLQkdbGf-50yH2a2C68wl4/edit?usp=sharing' className='btn btn-primary'>Formato excel</a>
                          </div>
                          <div className='container'>
                            <a target="_blank" href='https://drive.google.com/file/d/1jL9PJ1ASwFlrXKkLszaj8ZkOC8bWkXoz/view?usp=sharing' className='btn btn-danger'>Formato pdf</a>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">

              <h4 class="container my-2" id="headingOne">
                Cursos/certificado en desarrollo
              </h4>
              <div className='container mt-4'>
                <h4>Reportes</h4>
                <div className='d-flex justify-content-evenly '>
                  <div className='container'>
                    <a target="_blank" href='https://docs.google.com/spreadsheets/d/1b3xoWpmzgCFGDMZAQArYmaSnXz0wTZeKBah53z2U07w/edit?usp=sharing' className='btn btn-primary'>Formato excel</a>
                  </div>
                  <div className='container'>
                    <a target="_blank" href='https://drive.google.com/file/d/1WPESyzdZSp9mgiH6kbp5Z4LNG9gcbvxy/view?usp=sharing' className='btn btn-danger'>Formato pdf</a>

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

export default ReportesPage