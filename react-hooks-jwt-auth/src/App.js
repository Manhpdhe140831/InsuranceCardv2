import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";
import HomePage from "./view/HomePage"
import CreateUser from "./view/CreateUser";
import Contract from "./view/Contract";
import ListCustomer from "./view/ListCustomer";

import EventBus from "./common/EventBus";
import ListContract from "./view/ListContract";

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showCreateStaff, setShowCreateStaff] = useState(false);
  const [showManageContract, setShowManageContract] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_STAFF"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
      setShowCreateStaff(user.roles.includes("ROLE_ADMIN"));
      setShowManageContract(user.roles.includes("ROLE_ADMIN"));
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setShowModeratorBoard(false);
    setShowAdminBoard(false);
    setShowCreateStaff(false);
    setShowManageContract(false);
    setCurrentUser(undefined);
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-info">
        <Link to={"/"} className="navbar-brand">
          Insurance Card
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>

          {showModeratorBoard && (
            <li className="nav-item">
              <Link to={"/staff"} className="nav-link">
                Staff Board
              </Link>
            </li>
          )}

          {showAdminBoard && (
            <li className="nav-item">
              <Link to={"/admin"} className="nav-link">
                Admin Board
              </Link>
            </li>
          )}

          {currentUser && (
            <li className="nav-item">
              <Link to={"/customer"} className="nav-link">
                Customer
              </Link>
            </li>
          )}
          {showCreateStaff && (
            <li className="nav-item">
              <Link to={"/create-user"} className="nav-link">
                Manage Staff
              </Link>
            </li>
          )}
          {showManageContract && (
            <li className="nav-item">
              <Link to={"/contract-customer"} className="nav-link">
                Manage Contract
              </Link>
            </li>
          )}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/customer" element={<BoardUser />} />
          <Route path="/staff" element={<BoardModerator />} />
          <Route path="/admin" element={<BoardAdmin />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/contract-customer" element={<ListCustomer />} />
          {/* <Route path="/list-contract" element={<ListContract />} /> */}
        </Routes>
      </div>
      <HomePage />
    </div>
  );
};

export default App;
