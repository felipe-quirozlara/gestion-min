import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import activeLink from '../utils/navActive';

const Header = () => {

  return (
    <div class="container ">
      <header class="d-flex flex-wrap justify-content-center py-3 ">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
          <svg class="bi me-2" width="40" height="32"><use href="#bootstrap" /></svg>
          <span class="fs-4"><b>MinTraining</b></span>
        </a>

        <ul class="nav nav-pills">
          <li class="nav-item">
            <Link to={"/"} className="no-underline">
              <a href="#" id='/' class="nav-link" aria-current="page">Home</a>

            </Link>
          </li>

          <li class="nav-item">
            <Link to={"login"} className="no-underline">
              <a href="#" class="nav-link " id='/login'>Iniciar Sesión</a>
            </Link>
          </li>

          <li class="nav-item">
            <Link to={"singin"} className="no-underline">
              <a href="#" class="nav-link " id='/singin'>Crear cuenta</a>
            </Link>
          </li>

        </ul>
      </header>
    </div>
  )
}

export default Header