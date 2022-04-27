/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom';

function AdminNavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container">
        <Link className="navbar-brand" to="/admin-dashboard">
          ONE TAP
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Concerns <i className='fa fa-users'></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                History <i className='fa fa-file'></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Settings <i className='fa fa-cog'></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Logout <i className='fa fa-sign-out'></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AdminNavBar