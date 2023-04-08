import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg ">
      <div class="container-fluid">
        <Link class="navbar-brand text-light" >LoveDazzell</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item color-border  " >
              <Link class="nav-link text-light " to='/' >Home</Link>
            </li>
            <li class="nav-item color-border">
              <Link class="nav-link text-light" to='service/' >Service</Link>
            </li>
            <li class="nav-item  color-border">
              <Link class="nav-link text-light" to='contact/' >Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
