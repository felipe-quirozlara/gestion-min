import React from 'react'
import { Link } from 'react-router-dom'

function NavbarProfe() {
  return (
    <nav>
      <ul class="nav justify-content-center bg-two">

        <li class="nav-item">
          <Link to={"/profe"} className="no-underline tx">
            <a class="nav-link text-white" href="#">Inicio</a>
          </Link>
        </li>
        <li class="nav-item">
          <Link to={"/profe/cursos"} className="no-underline">
            <a class="nav-link text-white" href="#">Cursos</a>

          </Link>

        </li>

        
        
      </ul>
    </nav>
  )
}

export default NavbarProfe