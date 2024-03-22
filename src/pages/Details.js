import React from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {

    const {name} = useParams();
  return (
    <div style = {{width:"100%",height:"100px",backgroundColor:"green"}}>
{name}
    </div>
  )
}

export default Details