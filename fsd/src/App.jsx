import React, { useState } from 'react'
import Student from './Student'
import useStudentState from './useStudentState'
import Login from './Login'
import Registration from './Registration'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import MainLayout from './MainLayout'
import DashBoard from './DashBoard'
// import logo from "./assets/onbulb.jpg"
// import Imagemanipulation from './imagemanipulation'
// import MyUseEffect from '../MyUseEffect'
// import UseFetchAPI from './UseFetchAPI'
// export default function Login(){
  
// }
export default function App() {
  const[rData,setrdata]=useState();
  // const h1 = <h1>hello world</h1>
  // const mystyle = {
  //   color: 'red',
  //   backgroundColor:'yellow'
  // } 

  // const mystyle2 = {
  //   display: 'flex'
  // }
  // const data=[{
  //   college:"ABES ENGINEERING COLLEGE",
  //   pic:"",
  //   name:"rahul",
  //   branch:"CSE",
  //   section:"B"
  // },{ college:"ABES ENGINEERING COLLEGE",
  //   pic:"",
  //   name:"rahul",
  //   branch:"CSE",
  //   section:"B"
  // },{ college:"ABES ENGINEERING COLLEGE",
  //   pic:"",
  //   name:"rahul",
  //   branch:"CSE",
  //   section:"B"
  // }]
  console.log(rData)
  return (
    
    <div>
      
      <BrowserRouter>
      <Routes>
       <Route path='/' element={<MainLayout/>}>
      <Route path='/login' element={<Login regdata={rData}></Login>}/>
      <Route path='/registration' element={<Registration regData={setrdata}></Registration>}></Route>
        </Route>
        <Route path='/dashboard' element={<DashBoard/>}></Route>
      </Routes>
      </BrowserRouter>
      {/* <useStudentState/> */}
    </div>
  //   <div style={{backgroundColor:'cyan'}}>
  //   {h1}
  //   <div style={mystyle}>ABES Engineering College</div>
  //   <div style={mystyle2}>
  //     {/* <Student college=""
  //     pic={<img src='https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png' height={100} width={100}/>}
  //     // pic={<img src={logo} height={100} width={100}/>}
  //     name = "Yash"
  //     branch="CSE"
  //     roll="1"
  //     section = "B">
  //     </Student></div>
  //     <Student></Student> */}
  //     {data.map((student,index)=>(
  //       <Student key={index} {...student}/>

  //     ))
  //     }

  //     </div>
  //   </div>
  // );
  )}