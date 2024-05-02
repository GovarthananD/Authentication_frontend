import React from "react";
import { useNavigate } from "react-router-dom";




function Home() {
    const navigate = useNavigate();
    return (<div>
        <h1 className="welcome">WELCOME TO THE <span>BATMAN</span> WORLD</h1>
        <h3 className="welcome1">Please login to enter the world</h3>
        <button className="enter" onClick={()=>navigate("/regi")}>Enter</button>
    </div>)
}

export default Home;