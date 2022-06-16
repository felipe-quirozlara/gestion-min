import React from 'react'

const Cursos = () => {
  return (
    <div className='container mt-3'>
      <h1>Cursos y certificados</h1>
      <div className='container my-4'>
        <div className='card mb-3'>
          <div className="card-header text-center">
            Grúa horquilla - Anglo American plc
          </div>
          <div className='card-body'>
            <ul>
              <li><b>Profesor: </b>Juan Carlos Rodríguez Silva</li>
            </ul>
            <div className='d-flex flex-row-reverse'>
              <a href="#" class="btn btn-primary me-4">Ver curso</a>
            </div>
          </div>
          <div class="card-footer text-muted text-center">
            Creado hace 3 meses
          </div>
        </div>
        <div className='card mb-3'>
          <div className="card-header text-center">
            Cargador frontal - Anglo American plc
          </div>
          <div className='card-body'>
            <ul>
              <li><b>Profesor: </b>Cruz Romero Ríos</li>
            </ul>
            <div className='d-flex flex-row-reverse'>
              <a href="#" class="btn btn-primary me-4">Ver curso</a>
            </div>
          </div>
          <div class="card-footer text-muted text-center">
            Creado hace 1 semana
          </div>
        </div>
        <div className='card mb-3'>
          <div className="card-header text-center">
          Bulldozer - Grupo Minero Las Cenizas
          </div>
          <div className='card-body'>
            <ul>
              <li><b>Profesor: </b>Mónica de Prats</li>
            </ul>
            <div className='d-flex flex-row-reverse'>
              <a href="#" class="btn btn-primary me-4">Ver curso</a>
            </div>
          </div>
          <div class="card-footer text-muted text-center">
            Creado hace 2 meses
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cursos