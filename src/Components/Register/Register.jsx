import { Button, TextField } from "@mui/material";
import SearchAppBar from "../SearchAppBar";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  function handleRegister() {
    axios
      .post(
        "https://secret-reaches-29153-d015566fd3ab.herokuapp.com/register",
        {
          fullName,
          email,
          username,
          password,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token") || "",
          },
        }
      )
      .then((res) => {
        navigate("/");
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
          label="Fullname"
          placeholder="Fullname"
          onChange={(e) => setFullName(e.target.value)}
        />
        <TextField
          label="Email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Username"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="outlined" onClick={handleRegister}>
          Register
        </Button>
        <Link to="/register">
          <Button>Already have an account?</Button>
        </Link>
      </div>
    </div>
  );
}
