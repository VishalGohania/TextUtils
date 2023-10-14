import React from "react";
import propTypes from 'prop-types';
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.aboutText}
                </Link>
              </li>
             
            </ul>
          </div>
        </div>

        <div className={`form-check form-switch text-${props.mode==='light' ? 'dark': 'light'}`}>
          <input className="form-check-input" onClick ={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
        </div>
      </nav>
    </>
  );
};

Navbar.propTypes = {
  TextUtils: propTypes.string
}
export default Navbar;
