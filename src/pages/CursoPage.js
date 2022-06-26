import React from 'react'

const CursoPage = () => {
  return (
    <div className="container-fluid">
      <div id="white-container" className="container nopwidth mt-5 bg-light py-5 rounded shadow ">
        <h1 className="ms-4">Cursos operador grúa horquilla</h1>

        <div className="container-fluid mx-4 mt-3">
          <div className="d-flex align-items-start">
            <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist"
              aria-orientation="vertical">
              <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill"
                data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home"
                aria-selected="true">Información</button>

              <button className="nav-link" id="v-pills-disabled-tab" data-bs-toggle="pill"
                data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled"
                aria-selected="false">Notas</button>
              <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill"
                data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages"
                aria-selected="false">Contenido</button>
              <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill"
                data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings"
                aria-selected="false">Evaluaciones</button>
            </div>
            <div className="tab-content" id="v-pills-tabContent" style={{ width: "100vw" }}>
              <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel"
                aria-labelledby="v-pills-home-tab" tabindex="0">
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
              </div>
              <div className="tab-pane fade mx-4" id="v-pills-profile" role="tabpanel"
                aria-labelledby="v-pills-profile-tab" tabindex="0">
                <div className="container-fluid">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Clases totales</th>
                        <th scope="col">Asistidos</th>
                        <th scope="col">Faltados</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>20</td>
                        <td>12</td>
                        <td>0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="tab-pane fade" id="v-pills-disabled" role="tabpanel"
                aria-labelledby="v-pills-disabled-tab" tabindex="0">
                <div className="container-fluid">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Prueba</th>
                        <th scope="col">Puntaje total</th>
                        <th scope="col">Obtenido promedio</th>

                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Seguridad</td>
                        <td>25</td>
                        <td>23</td>
                      </tr>
                      <tr>
                        <td>Manejo</td>
                        <td>26</td>
                        <td>26</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="tab-pane fade" id="v-pills-messages" role="tabpanel"
                aria-labelledby="v-pills-messages-tab" tabindex="0">

                <nav>
                  <div className='d-flex flex-row-reverse my-2 me-3'>
                    <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#addMaterial">Añadir material</button>
                  </div>
                  <div class="modal fade" id="addMaterial" tabindex="-1" aria-labelledby="addMaterial" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Agregar material</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                              <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Contenido</button>
                            </li>
                            <li class="nav-item" role="presentation">
                              <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Vídeo</button>
                            </li>
                          </ul>
                          <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                              <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Nombre</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                              </div>
                              <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Archivo</label>
                                <input type="file" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                              </div>
                              <label for="exampleInputEmail1" class="form-label">Tipo</label>

                              <select class="form-select" aria-label="Default select example">
                                <option selected>Tipo de contenido</option>
                                <option value="1">Documento</option>
                                <option value="2">Ensayo</option>
                              </select>
                            </div>
                            <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                              <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Nombre</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                              </div>
                              <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Enlace vídeo</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab"
                      data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                      aria-selected="true">Documentos</button>
                    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab"
                      data-bs-target="#nav-profile" type="button" role="tab"
                      aria-controls="nav-profile" aria-selected="false">Vídeos</button>
                    <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab"
                      data-bs-target="#nav-contact" type="button" role="tab"
                      aria-controls="nav-contact" aria-selected="false">Ensayos</button>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">

                  <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                    aria-labelledby="nav-home-tab" tabindex="0">
                    <div>

                      <table className="table table-borderless mt-2">
                        <thead>
                          <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Agregado el</th>
                            <th scope="col">Tamaño</th>
                            <th scope="col">Tipo de archivo</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><a href="#" className="text-secondary"><i
                              className="bi bi-folder h5"></i> ACHS</a></td>
                            <td>15/05/2022</td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td><a href="#"><i className="bi bi-filetype-pdf h5"></i> Manejo de
                              implementos de seguridad</a></td>
                            <td>05/06/2022</td>
                            <td>230 Kb</td>
                            <td>pdf</td>
                          </tr>
                          <tr>
                            <td><a href="#"><i className="bi bi-file-earmark-word h5"></i>
                              Formulario de ensayo</a></td>
                            <td>28/05/2022</td>
                            <td>370 Kb</td>
                            <td>word</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="nav-profile" role="tabpanel"
                    aria-labelledby="nav-profile-tab" tabindex="0">
                    <div className="container-fluid">
                      <div className="container mt-3">
                        <h1>Vídeos del curso</h1>
                      </div>
                      <div className="d-flex flex-column ">
                        <div className="mb-3 d-flex justify-content-center">
                          <iframe width="420" height="315"
                            src="https://www.youtube.com/embed/Ne2s2AtUUUU">
                          </iframe>
                        </div>
                        <div className="mb-3 d-flex justify-content-center">
                          <iframe width="420" height="315"
                            src="https://www.youtube.com/embed/PfMGYnTdahw">
                          </iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="nav-contact" role="tabpanel"
                    aria-labelledby="nav-contact-tab" tabindex="0">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                      aria-labelledby="nav-home-tab" tabindex="0">
                      <div>
                        <table className="table table-borderless mt-2">
                          <thead>
                            <tr>
                              <th scope="col">Nombre</th>
                              <th scope="col">Agregado el</th>
                              <th scope="col">Tamaño</th>
                              <th scope="col">Tipo de archivo</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td><a href="#"><i className="bi bi-file-earmark-word h5"></i>
                                Ensayos de elementos de seguridad</a></td>
                              <td>28/05/2022</td>
                              <td>370 Kb</td>
                              <td>word</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="nav-disabled" role="tabpanel"
                    aria-labelledby="nav-disabled-tab" tabindex="0">...</div>
                </div>
              </div>
              <div className="tab-pane fade" id="v-pills-settings" role="tabpanel"
                aria-labelledby="v-pills-settings" tabindex="0">
                <div className="container">
                  <h2>Evaluaciones</h2>
                </div>
                <div className="container">
                  <div class="container mx-3 mb-3">
                    <div class="d-flex flex-row-reverse me-3">
                      <input class="btn btn-primary ms-3" type="submit" value="Agregar" data-bs-toggle="modal" data-bs-target="#exampleModal" />
                    </div>
                    <div>
                      <table className="table table-borderless mt-2">
                        <thead>
                          <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Agregado el</th>
                            <th scope="col">Tipo de archivo</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><a href="#"><i className="bi bi-file-earmark-word h5"></i>
                              Ensayos de elementos de seguridad</a></td>
                            <td>28/05/2022</td>
                            <td>word</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Agregar evaluación</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Nombre</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                          </div>
                          <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Archivo</label>
                            <input type="file" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                          </div>
                          <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Fecha de comienzo</label>
                            <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                          </div>
                          <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Fecha de fin</label>
                            <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                      </div>
                    </div>
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

export default CursoPage