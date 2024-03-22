import axios from 'axios';
import { setDriver } from 'mongoose';
import React from 'react'

import { useEffect,useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom'
import { Accordion } from 'react-bootstrap';
import { FaRegAddressCard } from "react-icons/fa";

const Profile_page = () => {

  

   const {name} = useParams();

   const [user,setUser] = useState({
      name :"",
      email:""
   })

   const [post,setPost] = useState({
     owner:"",
     desc:"",
     likes:0
   })

   const [all_post,setAllpost] = useState([]);

   const [list,setList] = useState([]);
   const [searchData ,setsearchData] = useState();
   const [likes,setLikes] = useState(0);
   const [flag,setFlag] = useState(false);


   const [resultSerch,setresultSearch] = useState({});
   const [viewprofile,setViewprofile] = useState();
   
   const clear_data = () => {

       setUser((prev)=>{
        return {...prev,name:"",email:""}
       });
       

   }
   
   const search_data = async() => {

      try{
        const list = await axios.get("https://new-new-1.vercel.app/");
       
        list.data.map((x)=>{
         
           if(x.name === searchData){
                  
                  
           setresultSearch(x)
           setList(null)
             
           }

        })
      }catch(e){

      }


   }
   const setLike = async(name) =>{
      
    
   }


   const close_post = async() => {

       setresultSearch(null);
       try{
             
        const res = await axios.get(`https://new-new-1.vercel.app/`);

        setList(res.data);

        

      }catch(e){
        console.log("catch error")
      }


   }

   const sendPost = async() => {
      
          try{
            await axios.post("https://new-new-1.vercel.app/post",post);
          }catch(e){
              if(e){
                console.log("send post error")
              }
          }


   }
   
   
   const [switchFLag,setSwithFlag] = useState("all_post");

   let element ;
       
     switch(switchFLag){

          case "all_post":
            element =    <ul>
            {
              all_post?<div>{all_post.map((x)=>{
               
                return <div style = {{height:"auto",border:"1px solid",
                backgroundCOlor:"green",marginBottom:"10px",width:"100%",
                borderRadius:"10px",padding:"40px"}}>
                 
                 <p style = {{opacity:"0.4"}} >{x.currdate}</p>
  
               <div style = {{display:"flex",alignItems:"center",width:"100%"}}>  <FaRegAddressCard onClick={()=>viewProfilefunction(x.owner)} style = {{marginRight:"10px"}} /> 
                 <h3 style = {{opacity:"0.5"}}>{x.owner}</h3>
               
                </div>
                <p></p>
                 <p style = {{opacity:"1"}}>{x.desc}</p>
                <p></p>
               
                 <p></p>
                 
               
                 </div>
   
             })}</div>:<p></p> 
            }
            
            </ul>

            break;

          case "profile_show":
            element =  <div style = {{height:"auto",border:"0px solid",
            backgroundCOlor:"green",marginLeft:"0px",marginBottom:"10px",width:"100%",
            borderRadius:"10px",padding:"40px"}}>
              <Button onClick={()=>setSwithFlag("all_post")} variant="outline-warning " >Back</Button>
              <p></p>
             
            {viewprofile}
            <p></p>
            <p>this is the second_data</p>
             
           
           
             </div> 
          break;
            

          



     }
     const viewProfilefunction = (val)=>{
         
      setViewprofile(val);
      setSwithFlag("profile_show")
      
  
     }



   useEffect(()=>{
      
     const getData = async () => {

          try{
             
            const res = await axios.get(`http://localhost:5000`);
           

            setList(res.data);
         
            

            res.data.map((x)=>{
              
              if(x.name === name && x.name.length >0 ){

                 setUser((prev)=>{
                  return {...prev,name:x.name,email:x.email};
                 })

              }


            })

            const res2 = await axios.get("http://localhost:5000/get_post");
            setAllpost(res2.data.reverse());
            

          }catch(e){
            console.log("catch error")
          }


     }
      
     
     getData();



   },[name,all_post])

 


  return (
    <div style = {{height:"100%",display:"flex",gap:"0px"}} >
    
    <hr></hr>

     <div style = {{height:"auto",width:"45%"}}>
      
       
       <div style = {{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px;",padding:"20px",borderRadius:"10px",backgroundColor:"#7cff7c"}}>
       Your Profile
       <hr></hr>
       <p></p>
       {
        user.name
       } 
       <p></p>
       {
        user.email
       }
         
       
     
       </div>
       <p></p>
          <p></p>
          <Accordion  style = {{width:"100%"}} defaultActiveKey="0">
                
                <Accordion.Item   eventKey="1">
                  <Accordion.Header >Make a post</Accordion.Header>
                  <Accordion.Body style = {{width:"100%"}}>

                    

                    <input placeholder='say something' onChange={(e)=>{
                      return setPost((prev)=>{
                        return {...prev,owner:user.name,desc:e.target.value}
                      })
                    }} style = {{width:"100%",height:"100%",textAlign:""}}></input>
                    <p></p>
                  <Button onClick ={()=>sendPost()} variant = "warning"> Post </Button>
                    <p></p>
                    
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
         <p></p>
         

       
        
          
      

      
       <p></p>
      
       <p></p>
      
       <Link to ="/"> <Button variant = "danger" onClick={clear_data} style = {{width:"100%"}}>Logout</Button> </Link>
       
     </div>
     
      <div className='hidescroll' style = {{width:"500px",height:"600px",backgroundColor:"",borderRadius:"10px" ,overflowY:"scroll",overflowX:"hidden"}}>
           
          
   
            {
              element
            }
       

      </div>
    </div>
  )
}

export default Profile_page   