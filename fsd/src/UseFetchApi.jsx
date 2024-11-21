import React, { useState } from 'react'

function UseFetchApi() {
    const [data,setdata]=useState([]);
    const response = fetch("https://dummyjson.com/recipes");
    response.then((res)=>{
        console.log(res)
        res.json().then((data)=>{
            console.log(JSON.stringify(data))
            setdata(data);
        })
    })
    .catch((error)=>{
        console.log(error)
    })


  return (

    <div>UseFetchApi</div>
  )
}

export default UseFetchApi