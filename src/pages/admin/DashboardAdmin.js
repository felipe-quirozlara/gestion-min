import React from 'react'

const DashboardAdmin = () => {
  return (
    <div className="container-fluid">
      <div id="white-container" className="container nopwidth mt-5 bg-light py-5 rounded shadow ">
        <div className="container-fluid">
          <h1 className="ms-2">Inicio</h1>
          <div className="row ">
            <div className="col mx-4 bd-callout bd-callout-success">
              <h4 className="p-2 ">Cursos </h4>
              <h2 className='mx-auto'><b>5</b></h2>
            </div>
            <div className="col mx-4 bd-callout bd-callout-info">
              <h4 className="p-2 ">Mensajes </h4>
              <h2 className='mx-auto'><b>23</b></h2>
            </div>
            <div className="col mx-4 bd-callout bd-callout-warning">
              <h4 className="p-2 ">Profesores </h4>
              <h2 className='mx-auto'><b>4</b></h2>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12 col-md-6 p-3 border mx-auto">
              <h3>Últimos mensajes</h3>
              <hr />
              <div className="container">
                <table className="table table-borderless mt-2">
                  <thead>
                    <tr>
                      <th scope="col">Remitente</th>
                      <th scope="col">Asunto</th>
                      <th scope="col">Fecha</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Juan Carlos Rodríguez Silva</td>
                      <td><a href="#">Clases para el domingo</a></td>
                      <td>28/05/2022</td>
                    </tr>
                    <tr>
                      <td>Maria Rojas Díaz </td>
                      <td><a href="#">Cambio de hora</a></td>
                      <td>28/05/2022</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-12 col-md-6 border mx-auto">
              <h3 className="mt-2">Últimos cursos</h3>
              <div className="col mb-3">
                <div className="card mb-3">
                  <div className="card-header">
                  Cargador frontal
                  </div>
                  <div className="card-body">
                    <a href="#" className="btn btn-primary">Ir al curso</a>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                  Grúa horquilla
                  </div>
                  <div className="card-body">
                    <a href="#" className="btn btn-primary">Ir al curso</a>
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

export default DashboardAdmin