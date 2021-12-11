import React from "react";
import Home from "../views/Home";
import { Routes, Route } from "react-router-dom";
import NotFound from "../views/errors/NotFound";
import Navbar from "../components/Navbar";
import About from "../views/About";
import Contact from "../views/Contact";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";

function Router(props) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar>
              <Home />
            </Navbar>
          </>
        }
      />
      <Route
        path="/about"
        element={
          <>
            <Navbar>
              <About />
            </Navbar>
          </>
        }
      />
      <Route
        path="/contact"
        element={
          <>
            <Navbar>
              <Contact />
            </Navbar>
          </>
        }
      />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
