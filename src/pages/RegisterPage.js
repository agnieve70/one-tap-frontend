import React from "react";
import { Link } from "react-router-dom";
import "./img/background.jpg";
import styles from "./RegisterPage.module.css";

function RegisterPage() {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo_box}>
        <center>
          <img
            className="text-center mt-5 mb-3"
            width={100}
            src="./logo_white.png"
            alt="logo"
          />
        </center>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <h1 className="text-center text-light mb-3">MEMBERSHIP SIGNUP</h1>
            <form className={styles.login_form}>
              <div className="form-group mb-2">
                <label for="firstname" className="form-label text-light">
                  Firstname
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="firstname"
                  id="firstname"
                />
              </div>
              <div className="form-group mb-2">
                <label for="lastname" className="form-label text-light">
                  Lastname
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="lastname"
                  id="lastname"
                />
              </div>
              <div className="form-group mb-2">
                <label for="email" className="form-label text-light">
                  E-mail
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                />
              </div>
              <div className="form-group mb-3">
                <label for="password" className="form-label text-light">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                />
              </div>

              <div class="d-grid gap-2">
                <Link
                  to="/customer-dashboard"
                  className="btn btn-danger text-light mb-2"
                >
                  {" "}
                  REGISTER
                </Link>
              </div>
              
              <p className="text-white mt-2">
                <span>Already a Member?</span>
                <span>
                  <Link to="/login" className="text-light">
                    {" "}
                    Login
                  </Link>
                </span>
              </p>
            </form>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </header>
  );
}

export default RegisterPage;
