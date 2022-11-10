import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../services/auth.service";
import "../style/loginStyle.scss"
import TextField from '@mui/material/TextField';

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = ({ closeModal }) => {
  let navigate = useNavigate();

  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(username, password).then(
        () => {
          navigate("/profile");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="LoginModalContainer">
      <div className="LoginModal">
        <div className="LoginModalContents">
          <div className="modalHeader">
            <button className="closeModal" onClick={() => closeModal(false)}> X </button>
          </div>
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />
          {/* <script src="https://cdn.lordicon.com/qjzruarw.js"></script>
          <lord-icon
            src="https://cdn.lordicon.com/bhfjfgqz.json"
            trigger="hover"
            colors="primary:#121331"
            state="intro"
            style={{width:"250px", height:"250px"}}>
          </lord-icon> */}

          <Form onSubmit={handleLogin} ref={form}>
            <div className="form-group">
              {/* <label htmlFor="username">Username</label> */}
              {/* <Input
                type="text"
                className="form-control"
                name="username"
                value={username}
                onChange={onChangeUsername}
                validations={[required]}
              /> */}
              <TextField label="Username" variant="filled"
                type="text"
                className="form-control"
                name="username"
                value={username}
                onChange={onChangeUsername}
                validations={[required]}
                sx={{ width: "100%", paddingTop: "10px", marginTop: "10px", marginBottom: "10px" }}
              />
            </div>

            <div className="form-group">
              {/* <label htmlFor="password">Password</label>
              <Input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={onChangePassword}
                validations={[required]}
              /> */}
              <TextField label="Password" variant="filled"
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={onChangePassword}
                validations={[required]}
                sx={{ width: "100%", paddingTop: "10px", marginTop: "10px", marginBottom: "10px" }}
              />
            </div>

            <div className="form-group" style={{ marginTop: "30px", marginBottom: "10px" }} >
              <button className="btn btn-login btn-block" disabled={loading}
                style={{
                  backgroundColor: "#50769a"
                  , zIndex: "100000 !important"
                }}
              >
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div>

            {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
