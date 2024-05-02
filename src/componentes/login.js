import React from "react";
import {API} from "./api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function Login () {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

    const handleLog = async () => {
        const payload = {
            email: email,
      password: password,
        };
        const res = await fetch(`${API}/login`,{
            method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-type": "application/json" },
        })

    const data = await res.json();
    if(data.token){
        setErr("");
      localStorage.setItem("token", data.token);
      toast("Singin Successfull");
      setTimeout(navigateFunc, 4000);
    }else{
        setErr(data.error);
      toast("Email or Password Incorrect")
    }
    }

    const navigate = useNavigate();

    const navigateFunc = () => {
        navigate("/mainpage");
      };
    

  return (
    <div className="container">
      <div className="table">
        <h2>Login</h2>
        <ul className="table-list">
          <li>
            <input type="text" placeholder="Email" onChange={(event) => setEmail(event.target.value)} value={email} />
          </li>
          <br />
          <li>
            <input type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} value={password} />
          </li>
          <br />
          <li>
            <button className="submit" onClick={handleLog}>Login</button>
          </li>
          <br />
        </ul>
        {err ? { err } : ""}
        <button className="exist" onClick={()=>navigate("/regi")}>For New Member?</button>
        <br />
        <button className="exist" onClick={()=>navigate("/forgot")}>Forgot Password?</button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
