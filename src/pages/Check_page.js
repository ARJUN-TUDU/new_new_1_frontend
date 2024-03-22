import React from 'react'
import { useState,useEffect } from 'react'
import {Button} from 'react-bootstrap'
import {Routes,Route} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Profile_page from './Profile_page'
import Details from './Details'



const Check_page = () => {
   
    const [data,setData] = useState([])
   
     
  return (
    <div style = {{width:"100%",height:"80vh",display:"grid",placeItems:"center",backgroundColor:""}}>
     
     
     <div style = {{width:"auto",height:"auto",padding:"30px",backgroundColor:"",borderRadius:"10px",textAlign:"start"}} >

    <div style  = {{boxShadow: "rgba(50, 50, 50, 0.1) 0px 7px 29px 0px",backgroundColor:"#b5ffb5",textAlign:"center",padding:"10px",width:"100%",height:"50PX",borderRadius:"10px"}}><h4>Seswa.com</h4></div>

    <p></p>
        <Routes>
            <Route path = "/" element = {<Login/>}/>
            <Route path = "/register" element = {<Register/>}/>
            <Route path = "/profile/:name" element = {<Profile_page/>}/>
            
            
        </Routes>


     </div>

    </div>
  )
}

export default Check_page