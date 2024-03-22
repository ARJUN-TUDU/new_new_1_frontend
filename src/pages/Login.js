import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { redirect } from 'react-router-dom'
import {motion} from 'framer-motion'

const Login = () => {
  
  const [loginflag,setLoginflag] = useState(0);
   
  const [user,setUser] = useState({
     name:"",
     password:""
  })
 


 // 0 = > nothing
 // 1 => recive error data 
 // 2 => recive success data



  
  const check = async(e) =>{
     

    try{

      const encoded_string = user.name+user.password;
      console.log(encoded_string);
      
      const res = await axios.get(`https://new-new-1.vercel.app/${encoded_string}`);
      console.log(res.data);

      if(res.data.length == 0){

         
        setLoginflag(1)
         

      }else{
        setLoginflag(2);
       
        
      }
      
     

    }catch(e){
      console.log("error get login data");
    }

      

  }


  return (


      <div style = {{padding:"10px"}}>
        
            <h5>Login</h5>
            <p></p>

            <input  value = {user.name} onChange={(e)=>{

              return setUser((prev)=>{
                return {...prev,name:e.target.value}
              })
            }} placeholder='name' style = {{width:"300px",boxShadow: "rgba(100, 100, 111, 0.1) 0px 7px 29px 0px",border:"0px solid",padding:"10px"}} ></input>


            <p></p>

            <input type='password' value = {user.password} onChange={(e)=>{
              return setUser((prev)=>{
                return {...prev,password:e.target.value}
              })
            }} placeholder='password'style = {{width:"300px",boxShadow: "rgba(100, 100, 111, 0.1) 0px 7px 29px 0px",border:"0px solid",padding:"10px"}} ></input>

           
            <p></p>
          
             {
              
              loginflag === 0 ?    <Button onClick={check} variant = "outline-success" >login</Button>: <p></p>


             }

             {
              loginflag === 1? <motion.div
              

              initial={{scale:0.1}}
              animate={{scale:1}}
              
              style = {{padding:"10px",padding:"25px",boxShadow: "rgba(100, 100, 111, 0.1) 0px 7px 29px 0px",borderRadius:"10px"}}> <p>You dont have a account</p><p></p>
                <Button  onClick={check} variant = "outline-success" >login</Button> 
                 <p></p>  <Link to = "/register" >
              <Button  style = {{width:"100%"}} variant = "danger" >Register</Button></Link> <p></p> </motion.div>: <p></p>
             }

             {
              
              loginflag === 2 ? <motion.div 
               
              initial = {{scale:0.1}}
              animate = {{scale:1}}

              style = {{padding:"5px"}}
              
              ><p></p> Welcome back !<p></p><Link to ={`/profile/${user.name}`}>  <Button style = {{width:"100%"}} variant = "success" >Home</Button> </Link></motion.div>:<p></p>

             }

            <div>
              
              
              <hr></hr>
              dont have a account?
              <p></p>
              <Link to = "/register" >
              <Button style = {{boxShadow: "rgba(100, 100, 111, 0.4) 0px 7px 29px 0px"}} variant = "warning" >Register</Button></Link>
              </div>  

    </div>
          
        
  )
}

export default Login