import React, { useState } from "react";
import axios from "axios";
import { Box, TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
import { login } from "../../features/user";

const Login = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [password, setPassword] = useState("");

  const onLogin = () => {
    const a = axios
      .post("/api/login/findUser", {
        email,
        password,
      })
      .then((res) => {
        setError(false);
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
        setError(true);
        return false;
      });
  };

  return (
    <div className="App">
      <div className="background">
        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: "80%" } }}
          className="login-container"
        >
          <div>
            <h1>User Login</h1>
            <TextField
              id="outlined-controlled"
              label="Email"
              required
              error={error}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <TextField
              id="passWord-text"
              label="Password"
              required
              error={error}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          {error ? <h5 style={{ color: "red" }}>Wrong credentials</h5> : null}
          <Button
            style={{ margin: "5%", padding: "2%", width: "90px" }}
            variant="contained"
            onClick={() => onLogin()}
            // onClick={() => dispatch(login({ email, password }))}
          >
            Login
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default Login;
