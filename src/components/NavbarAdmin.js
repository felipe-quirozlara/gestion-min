import React from 'react'
import { Link } from 'react-router-dom'

const NavbarAdmin = () => {
  return (
    <nav>
      <ul class="nav justify-content-center bg-two">
        
        <li class="nav-item">
          <Link to={"/admin"} className="no-underline tx">
            <a class="nav-link text-white" href="#">Inicio</a>
          </Link>
        </li>
        <li class="nav-item">
          <Link to={"/admin/cursos"} className="no-underline">
            <a class="nav-link text-white" href="#">Cursos</a>

          </Link>

        </li>
        
        <li class="nav-item">
          <Link to={"/admin/usuarios"} className="no-underline">
            <a class="nav-link text-white" href="#">Usuarios</a>

          </Link>

        </li>
        <li class="nav-item">
          <Link to={"/admin/reportes"} className="no-underline">
            <a class="nav-link text-white" href="#">Reportes</a>
          </Link>

        </li>
      </ul>
    </nav>
  )
}

export default NavbarAdmin