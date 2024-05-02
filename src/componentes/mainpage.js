import React from "react";
import { useNavigate } from "react-router-dom";

function Mainpage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="welcome">
        WELCOME TO THE <span>BATMAN</span> WORLD
      </h1>
      <h3 className="welcome1">THANKS TO VISITING OUR SITE KEEP BROWING</h3>
      <button
        className="enter"
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/");
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Mainpage;
