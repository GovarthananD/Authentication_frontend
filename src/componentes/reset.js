import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { API } from "./api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Reset() {
  const [token, setToken] = useState("");
  const [userid, setUserid] = useState("");
  const [newpassword, setNewpassword] = useState("");

  const handleSubmit = () => {
    const existUser = {
      userid: userid,
      token: token,
      newpassword: newpassword,
    };
    fetch(`${API}/resetpassword`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(existUser),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then(
        () => setTimeout(navigateFunc, 1000),
        toast("Password Changed Successfully")
      )
      .catch((e) => {
        console.log(e);
        toast("Something Error");
      });

    const navigateFunc = () => {
      navigate("/login");
    };
  };
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="table">
        <h2>Reset Password</h2>
        <ul className="table-list">
          <li>
            <input
              type="text"
              placeholder="Userid"
              onChange={(event) => setUserid(event.target.value)}
              value={userid}
            />
          </li>
          <br />
          <li>
            <input
              type="text"
              placeholder="Token"
              onChange={(event) => setToken(event.target.value)}
              value={token}
            />
          </li>
          <br />
          <li>
            <input
              type="password"
              placeholder="New Password"
              onChange={(event) => setNewpassword(event.target.value)}
              value={newpassword}
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
        <button className="exist" onClick={() => navigate("/regi")}>
          For New Member?
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Reset;
