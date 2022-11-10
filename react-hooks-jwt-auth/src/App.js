import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";
import HomePage from "./view/HomePage"
import CreateUser from "./view/CreateUser";
import Contract from "./view/Contract";
import ListCustomer from "./view/ListCustomer";
import CreateContract from "./view/CreateContract"
import ListAccident from "./view/ListAccidentStaffView";
import EventBus from "./common/EventBus";
import ListContractView from "./view/ListContractView";
import ListStaff from "./view/ListStaff";
import ListCompensation from "./view/ListCompensationStaffView";

const App = () => {
  const [showLogin, setLoginVisible] = useState(false);
  const [showSignup, setSignupVisible] = useState(false);
  const [showCreateStaff, setShowCreateStaff] = useState(false);
  const [showManageContract, setShowManageContract] = useState(false);
  const [showContract, setShowContract] = useState(false);
  const [showContractStaff, setShowContractStaff] = useState(false);
  const [showCustomer, setShowCustomer] = useState(false);
  const [showAccident, setShowAccident] = useState(false);
  const [showCompensation, setShowCompensation] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);


  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowCreateStaff(user.roles.includes("ROLE_ADMIN"));
      setShowManageContract(user.roles.includes("ROLE_ADMIN"));
      setShowContractStaff(user.roles.includes("ROLE_STAFF"));
      setShowCustomer(user.roles.includes("ROLE_STAFF"));
      setShowContract(user.roles.includes("ROLE_ADMIN"));
      setShowAccident(user.roles.includes("ROLE_STAFF"));
      setShowCompensation(user.roles.includes("ROLE_STAFF"));
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
    setShowCreateStaff(false);
    setShowManageContract(false);
    setShowContract(false);
    setShowContractStaff(false);
    setShowCustomer(false);
    setCurrentUser(undefined);
    setShowAccident(false);
    setShowCompensation(false);
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-info" style={{ backgroundColor: "#50769a !important;", position: "fixed", right: "0", left: "0", top: "0", zIndex: "10" }}>
        <Link to={"/"} className="navbar-brand">
          Insurance Card
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>



          {showCustomer && (
            <li className="nav-item">
              <Link to={"/customer"} className="nav-link">
                Customer
              </Link>
            </li>
          )}
          {/* {showCreateStaff && (
            <li className="nav-item">
              <Link to={"/create-user"} className="nav-link">
                Manage Staff
              </Link>
            </li>
          )} */}
          {showManageContract && (
            <li className="nav-item">
              <Link to={"/manage-staff"} className="nav-link">
                Manage Staff
              </Link>
            </li>
          )}
          {showContract && (
            <li className="nav-item">
              <Link to={"/contract"} className="nav-link">
                Contract
              </Link>
            </li>
          )}
          {showContractStaff && (
            <li className="nav-item">
              <Link to={"/contract"} className="nav-link">
                Contract
              </Link>
            </li>
          )}
          {showAccident && (
            <li className="nav-item">
              <Link to={"/accident"} className="nav-link">
                Accident
              </Link>
            </li>
          )}
          {showCompensation && (
            <li className="nav-item">
              <Link to={"/compensation"} className="nav-link">
                Compensation
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
            {/* <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li> */}
            <li>
              <Button className="Btncenter" variant="text"
                sx={{ color: 'white', backgroundColor: '#50769a', height: '130%' }}
                onClick={() => { setLoginVisible(true) }}  >
                Log In
              </Button>

            </li>

            <li>
              <Button className="Btncenter" variant="text"
                sx={{ color: 'white', backgroundColor: '#50769a', height: '130%' }}
                onClick={() => { setSignupVisible(true) }}
              >
                Sign Up
              </Button>
            </li>
          </div>
        )}
      </nav>

      {showLogin && <Login closeModal={setLoginVisible} />}
      {showSignup && <Register closeModal={setSignupVisible} />}



      <div className="container mt-3" style={{ paddingTop: "60px" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />

          {/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> */}

          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/customer" element={<BoardUser />} /> */}

          <Route path="/customer" element={<ListCustomer />} />
          <Route path="/staff" element={<BoardModerator />} />
          <Route path="/admin" element={<BoardAdmin />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/manage-staff" element={<ListStaff />} />
          <Route path="/contract" element={<ListContractView />} />
          <Route path="/create-contract" element={<CreateContract />} />
          <Route path="/accident" element={<ListAccident />} />
          <Route path="/compensation" element={<ListCompensation />} />

          {/* <Route path="/list-contract" element={<ListContract />} /> */}
        </Routes>
      </div>

    </div>
  );
};

export default App;