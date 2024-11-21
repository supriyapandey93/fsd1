import React, { useEffect, useState } from 'react'

function MyuseEffect() {
    const [count,setCount] = useState(10);
    const [pointer,setPointer] =useState(20);
    useEffect(()=>{
        console.log("updatecount",+count);
        console.log("updatepointer",+pointer);
    },[count,pointer])

function DoIncrement(){
    setCount(count+30);
}
function doPointer(){
    setPointer(pointer+100);
}


  return (
    
    <div>
        <h2>counter: {count}</h2>
        <br />
        <h2>pointer: {pointer}</h2>

        <button onClick={DoIncrement}>Increment</button>
        <button onClick={doPointer}>pointer</button>

    </div>
  )
}

export default MyuseEffect