import React from 'react'
import { Link } from 'react-router-dom'

const CursosProfe = () => {
  return (
    <div className="container-fluid">
      <div id="white-container" className="container nopwidth mt-5 bg-light py-5 rounded shadow ">
        <h1>Cursos y certificados</h1>
        <div className='container my-4'>
          <div className='card mb-3'>
            <div className="card-header text-center">
              Grúa horquilla - Anglo American plc
            </div>
            <div className='card-body'>
              <ul>
                <li><b>Profesor: </b>Cruz Romero Ríos</li>
              </ul>
              <div className='d-flex flex-row-reverse'>
                <Link to={"/profe/curso"}>
                  <a href="#" class="btn btn-primary me-4">Ver curso</a>
                </Link>
                <Link to={"/profe/editar-curso"}>
                  <button className='btn btn-secondary mx-2'>Editar curso</button>
                </Link>
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
                <Link to={"/admin/curso"}>
                  <a href="#" class="btn btn-primary me-4">Ver curso</a>
                </Link>
                <Link to={"/admin/editar-curso"}>
                  <button className='btn btn-secondary mx-2'>Editar curso</button>
                </Link>
              </div>
            </div>
            <div class="card-footer text-muted text-center">
              Creado hace 1 semana
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default CursosProfe