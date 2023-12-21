import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav id="navbar-example2" className="navbar  navbarInv">
      <h1 className="tituloNavbar">CATALOGO INVIERNO 2024</h1>
      <ul className="nav nav-pills">
        <li className="nav-item dropdown">
          <a className="nav-link dropdownInv" data-bs-toggle="dropdown">
            ARTICULOS
          </a>
          <ul className="dropdown-menu dropdownInv">
            <li>
              <a className="dropdown-item" href="#scrollspyHeading1">
                FRIZA
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#scrollspyHeading2">
                PIQUE
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#scrollspyHeading3">
                JERSEY
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#scrollspyHeading4">
                LAN/ALG
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
