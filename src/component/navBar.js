import React from 'react';
import resume from './resume.pdf';



export default function Navbar(){
    return(
<>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Home</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">about</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">contact</a>
        </li>
       
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item"  href={resume} download="resume.pdf" target="_blank">resume</a></li>
            <li><a className="dropdown-item" href="#"></a></li>
            <li><a className="dropdown-item" href="#"></a></li>
          </ul>
        </li>

      </ul>
    </div>
  </div>
</nav>
      

   
</>
    );
}