import React from 'react'
import { Link } from 'react-router-dom'
import { useParams} from "react-router-dom";

function Profile() {
    let {username} = useParams();
  return (
    <div>   THIS IS PROFILE PAGE FOR {username} !!
            <div>      <Link to="/">  <button>go to home page</button></Link></div>
            <div>      <Link to="/about">  <button>go to  about</button></Link></div>

    </div>
  )
}

export default Profile