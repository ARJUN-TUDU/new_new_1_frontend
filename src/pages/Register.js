import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link, Routes,Route } from 'react-router-dom'
import Details from './Details';


const Register = () => {
   
    const [check,setCheck] = useState("");
    
    const [user,setUser] = useState({
        name:"",
        email:"",
        password:"",
    })

    const [passwords,setPassword] = useState({
        first:"",
        second:"",
    })




    const checking = () => {
        
    

        if(passwords.second.length === passwords.first.length && passwords.second.length===0 ){
            setCheck("");
         }else if(passwords.first === passwords.second && passwords.second.length>0){

            setUser((prev)=>{
                return {...prev,password:passwords.first}
            })
            setCheck("matching")
        }else{
            setCheck("not matching");
        }

       
        
    }

    const send_data =async () => {

        
       
        const formData = new FormData();
       

        console.log(user);
        

       
        
        try{
            await axios.post("https://new-new-1.vercel.app/register_user",user);
            console.log(user);
            
        }catch(e){
            console.log('data send error')
        }

        console.log(formData);
     
    }



    useEffect(()=>{
        checking();
    },[passwords])



  return (
    <div style = {{padding:"20px"}}>
            
            <h5>Register</h5>
            <p></p>
            <input onChange={(e)=>{
                return setUser((prev)=>{
                    return {...prev,name:e.target.value}
                })
            }} value = {user.name} placeholder=' Name' style = {{width:"300px"}} ></input>


            <p></p>
            <input onChange={(e)=>{
                return setUser((prev)=>{
                    return {...prev,email:e.target.value}
                })
            }} value = {user.email} placeholder='email' style  ={{width:"300px"}}></input>
            <p></p>
            <hr></hr>



            <p>passwords</p>
            <input onChange={(e)=>{
                return setPassword((prev)=>{
                    return {...prev,first:e.target.value}
                })
            }} value = {passwords.first} type='password' placeholder='password' style = {{width:"300px"}} />
            <p></p>


          <input onChange={(e)=>{
                return setPassword((prev)=>{
                    return {...prev,second:e.target.value}
                })
            }} value = {passwords.second} type='password' placeholder='re-password' style = {{width:"300px"}} />
            
            <p></p>
             
             {  
                //if
                check === "matching"? 

                //true
              <Link to = "/">   <Button onClick = {send_data} variant = "success" style = {{width:"100%",textAlign:"center"}}>Register</Button></Link>
                 : 
                 //else if
                check === "not matching"?

                //true
                <div style = {{padding:"5px",textAlign:"center",borderRadius:"5px",width:"100%",color:"white",backgroundColor:"red"}}> not matching </div>
                 :

                 //else
                 
                 check === "done"?<h1>Done</h1>:<p></p>

             }
             
             



        <p></p>
        
        <p></p>
        
        <hr></hr>
        already have a account ?
        <p></p>
        <Link to ="/"><Button variant='success'>login</Button></Link>
        <Routes>
            <Route path = "/page1" element = {<Details/>}/>
        </Routes>

 

    </div>
  )
}

export default Register