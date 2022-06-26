import React from 'react'
import { Link } from 'react-router-dom'

const UsuariosPage = () => {
  return (
    <div className="container-fluid">
      <div id="white-container" className="container nopwidth mt-5 bg-light py-5 rounded shadow ">

        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Adminstradores</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profesores</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Operarios</button>
          </li>

        </ul>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div className='mb-3'>
                  <label for="exampleInputEmail1" class="form-label">Nombre</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className='mb-3'>
                  <label for="exampleInputEmail1" class="form-label">Apellido</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className='mb-3'>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Selecciona un curso</option>
                    <option value="1">Grúa horquilla </option>
                    <option value="2">Cargador frontal</option>
                    <option value="3">Bulldozer</option>
                  </select>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="adminModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Editar administrador</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div className='mb-3'>
                  <label for="exampleInputEmail1" class="form-label">Nombre</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className='mb-3'>
                  <label for="exampleInputEmail1" class="form-label">Apellido</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className='mb-3'>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                    <label class="form-check-label" for="flexCheckChecked">
                      Permisos de administrador
                    </label>
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
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
            <div>
              <div className='d-flex flex-row-reverse'>
                <Link to={"/admin/crear-admin"}>
                  <button className='btn btn-primary'>Agregar</button>
                </Link>
              </div>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre </th>
                    <th scope="col">Apellido</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Marco Antonio</td>
                    <td>Echevarria</td>
                    <td><button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#adminModal">Editar</button></td>
                    <td><button className='btn btn-danger'>Eliminar</button></td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Carlota</td>
                    <td>Ferrero</td>
                    <td><button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#adminModal">Editar</button></td>
                    <td><button className='btn btn-danger'>Eliminar</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
            <div>
              <div className='d-flex flex-row-reverse'>
                <Link to={"/admin/crear-profe"}>
                  <button className='btn btn-primary'>Agregar</button>
                </Link>
              </div>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre </th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Cursos</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Juan Carlos</td>
                    <td>Rodríguez Silva</td>
                    <td>Grúa Horquilla</td>
                    <td><button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button></td>
                    <td><button className='btn btn-danger'>Eliminar</button></td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Cruz</td>
                    <td>Romero Ríos</td>
                    <td>Cargador frontal</td>
                    <td><button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button></td>
                    <td><button className='btn btn-danger'>Eliminar</button></td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Mónica</td>
                    <td>de Prats</td>
                    <td>Bulldozer </td>
                    <td><button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button></td>
                    <td><button className='btn btn-danger'>Eliminar</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
            <div>
              <div className='d-flex flex-row-reverse'>
                <Link to={"/admin/crear-operario"}>
                  <button className='btn btn-primary'>Agregar</button>
                </Link>
              </div>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre </th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Cursos</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Ramon</td>
                    <td>Prats</td>
                    <td>Grúa Horquilla</td>
                    <td><button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button></td>
                    <td><button className='btn btn-danger'>Eliminar</button></td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Josep </td>
                    <td>Bravo</td>
                    <td>Cargador frontal</td>
                    <td><button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button></td>
                    <td><button className='btn btn-danger'>Eliminar</button></td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Lina</td>
                    <td>Lora</td>
                    <td>Bulldozer </td>
                    <td><button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button></td>
                    <td><button className='btn btn-danger'>Eliminar</button></td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Maria Elvira </td>
                    <td>Perello</td>
                    <td>Bulldozer </td>
                    <td><button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button></td>
                    <td><button className='btn btn-danger'>Eliminar</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UsuariosPage