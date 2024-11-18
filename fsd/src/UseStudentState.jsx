import React, { useState } from 'react'

function UseStudentState() {
    const[count,setcount]=useState(20);

    function doIncrement(){
      console.log("hi inside doIncrement");
      setcount(count+10);
    }
    function doDecrement(){
      setcount(count-10);
    }
    

  return (
    <>
    <div style={{color:'red', border:'2px solid red', width:'400px', height:'400px', marginLeft:'500px', backgroundColor:'rgb(120,200,100)',fontSize:'50px',paddingLeft:'150px',paddingRight:'200px'}}>{count }

    <div>
      <button id='button' onClick={doIncrement} style={{backgroundColor:'yellowgreen'}}>increament counter</button>
      &nbsp;&nbsp;
      <button id='button' onClick={doDecrement} style={{backgroundColor:'red'}}>decreament counter</button>
    </div>
    </div>

   
    </>
  )
}

export default UseStudentState