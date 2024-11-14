import React from 'react';
import './App.css';

import Student from "./Student"
function App() {
  const h1=<h1>hello world</h1>;
const mystyle={
  color:'yellow',
  backgroundColor:'red'
}
    return (
      <div style={{backgroundColor:'tomato'}}>
        {h1}
        <div style={mystyle}>
          ABES ENGINEERING COLLEGE
        </div>
        <div>
          <><Student college="ABES ENGG COLLEGE" name="supriya" branch="cse" section="b" pic={<img src='https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png' height="100px"></img>}/></>
          <><Student college="ABES ENGG COLLEGE" name="supriya" branch="cse" section="b"/></>
          <><Student college="ABES ENGG COLLEGE" name="supriya" branch="cse" section="b"/></>
          <><Student college="ABES ENGG COLLEGE" name="supriya" branch="cse" section="b"/></>
          
        </div>
      </div>
        
    );
}
 
export default App;