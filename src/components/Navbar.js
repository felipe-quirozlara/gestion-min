import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul class="nav justify-content-center bg-two">
        
        <li class="nav-item">
          <Link to={"/users"} className="no-underline tx">
            <a class="nav-link text-white" href="#">Inicio</a>
          </Link>
        </li>
        <li class="nav-item">
          <Link to={"/users/cursos"} className="no-underline">
            <a class="nav-link text-white" href="#">Cursos</a>

          </Link>

        </li>
        <li class="nav-item">
          <Link to={"/users/cambiar-info"} className="no-underline">
            <a class="nav-link text-white" href="#">Información personal</a>

          </Link>

        </li>
      </ul>
    </nav>
  )
}

export default Navbar