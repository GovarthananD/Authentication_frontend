import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { API } from "./api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const newUser = {
      name: name,
      mobile: mobile,
      email: email,
      password: password,
    };
    fetch(`${API}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((res) => {
        res.json();

        if (res.status === 201) {
          toast("Registeration Successfull");
          setTimeout(navigateFunc, 1000);
        } else {
          console.log(res.statusText);
          toast(res.status);
        }
      })
      .then((data) => console.log(data))
      .catch((error) => {
        console.log(error);
        toast("Something error in Registering User:" + error);
      });
  };

  const navigateFunc = () => {
    navigate("/log");
  };

  return (
    <div className="container">
      <div className="table">
        <h2>Register</h2>
        <ul className="table-list">
          <li>
            <input
              type="text"
              placeholder="Name"
              onChange={(event) => setName(event.target.value)}
              value={name}
            />
          </li>
          <br />
          <li>
            <input
              type="number"
              placeholder="Mobile"
              onChange={(event) => setMobile(event.target.value)}
              value={mobile}
            />
          </li>
          <br />
          <li>
            <input
              type="text"
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
          </li>
          <br />
          <li>
            <input
              type="password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
          </li>
          <br />
          <li>
            <button className="submit" onClick={handleSubmit}>
              Submit
            </button>
          </li>
          <br />
        </ul>
        <button className="exist" onClick={() => navigate("/log")}>
          Already Member?
        </button>
        <br />
        <button className="exist" onClick={() => navigate("/forgot")}>
          Forgot Password?
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Register;
