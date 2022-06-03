import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function About() {

    let navigate = useNavigate();
  return (
    <div>THIS IS ABOUT PAGE!
            <div>       <button onClick={()=>{navigate("/");
        }}
        >
            go to home page</button></div>
    </div>
  )
}

export default About