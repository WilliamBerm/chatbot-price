import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <header class="mb-auto">
    <div>
      <h3 class="float-md-start mb-0">HouseDesigns</h3>
      <nav class="nav nav-masthead justify-content-center float-md-end">
        <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        <a class="nav-link" href="#">Tienda</a>
        <a class="nav-link" href="#">Contacto</a>
      </nav>
    </div>
  </header>
  )
}


export default Header