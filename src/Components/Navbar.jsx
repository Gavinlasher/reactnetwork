import React from 'react'
import {BrowserRouter as Router, Outlet,Link } from "react-router-dom"
import HomePage from "../Pages/HomePage"
import App from "../App"

export default function Navbar() {
  return (
   <div className="row">
     <div className="col-md-12 bg-primary">
       <div className="d-flex justify-content-start p-2">
<Link to='/'>
<img  className="img-fluid fblogo" src="https://th.bing.com/th/id/R.e6a010599e98f4b1735417d6e24ee4ee?rik=X6zzqtZSioeJWA&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2ffacebook-logo-png-transparent-background%2ffacebook-logo-png-transparent-background-2.png&ehk=7V2GgCPBDAQHKT5onXGB5%2fnb3nj46WRdC2xwKE8R38w%3d&risl=&pid=ImgRaw&r=0" alt="FaceBook Logo" />
</Link>
       </div>
     </div>
   </div>
  )
}
