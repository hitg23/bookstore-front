import { Button, TextField } from "@mui/material";
import SearchAppBar from "../SearchAppBar";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function handleLogin() {
    axios
      .post(
        "https://secret-reaches-29153-d015566fd3ab.herokuapp.com/login",
        { username, password },
        {
          headers: {
            Authorization: localStorage.getItem("token") || "",
          },
        }
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/list-page");
      });
  }
  return (
    <div>
      <SearchAppBar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
          margin: "50px 20%",
        }}
      >
        <TextField
          label="Username"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="outlined" onClick={handleLogin}>
          Login
        </Button>
        <Link to="/register">
          <Button>Don't have an account? Please Register here</Button>
        </Link>
      </div>
    </div>
  );
}
