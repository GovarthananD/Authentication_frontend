import React from "react";
import { API } from "./api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Forgot() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const oldUser = {
      email: email,
    };

    fetch(`${API}/forgotpassword`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(oldUser),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then(
        () => setTimeout(navigateFunc, 1000),
        toast("Link send to your mail")
      )
      .catch((e) => {
        console.log(e);
        toast("Something Error");
      });
  };

  const navigateFunc = () => {
    navigate("/reset");
  };

  return (
    <div className="container">
      <div className="table">
        <h2>Forgot Password</h2>
        <ul className="table-list">
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
            <button className="submit" onClick={handleSubmit}>
              Send Link
            </button>
          </li>
          <br />
        </ul>
        <button className="exist" onClick={() => navigate("/regi")}>
          For New Member?
        </button>
        <br />
        <button className="exist" onClick={() => navigate("/reset")}>
          Reset Password?
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Forgot;
