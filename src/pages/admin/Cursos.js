import React from 'react'
import { Link } from 'react-router-dom'

const Cursos = () => {
  return (
    <div className="container-fluid">
      <div id="white-container" className="container nopwidth mt-5 bg-light py-5 rounded shadow ">
        <h1>Cursos y certificados</h1>
        <div className='container'>
          <Link to={"/admin/crear-curso"} >
            <button className='btn btn-primary'>Crear curso</button>
          </Link>
        </div>
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
                <Link to={"/admin/aprobar"}>
                  <a href="#" class="btn btn-info me-4">Aprobar alumnos</a>
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
          <div className='card mb-3'>
            <div className="card-header text-center">
              Bulldozer - Grupo Minero Las Cenizas
            </div>
            <div className='card-body'>
              <ul>
                <li><b>Profesor: </b>Mónica de Prats</li>
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
              Creado hace 2 meses
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cursos