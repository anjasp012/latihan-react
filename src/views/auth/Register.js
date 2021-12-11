import React from "react";
import { NavLink } from "react-router-dom";

function Register(props) {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-header">
                <div className="d-flex justify-content-between align-items-center">
                  <div>Form Register</div>
                  <div>
                    <NavLink className="nav-link text-black" to="/">
                      back
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <form action="">
                  <div className="mb-4">
                    <label htmlFor="username" className="form-label">
                      username
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                    />
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
