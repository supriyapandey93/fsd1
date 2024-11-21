import React ,{useState}from 'react'
import Cat from './Cat.jpg';

function ImageManipulation() {
    const[Height,setHeight]=useState(100);
    const[rotateimg,setrotate]=useState(0);
    const [bgColor, setBgColor] = useState('white');
    const [red,setred]=useState()
    const [blue,setblue]=useState()
    const[green,setgreen]=useState()
    const[width,setWidth]=useState(100)


    function EnhanceHeight(){
        setHeight(Height+10);
    }
    function  RotateImage(){
        setrotate(rotateimg+30);
    }

    function changeBackground() {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`; 
        
        setBgColor(randomColor);
    }

    function EnhanceWidth(){
        setWidth(width+10);
    }

    function setColor(){
        setred(Math.random()*255);
        setblue(Math.random()*255);
        setgreen(Math.random()*255);
    }
    
  return (
    <div style={{border:'2px solid red', height:'600px', width:'600px', backgroundColor:bgColor}}>
       <div style={{backgroundColor:`rgb(${red},${green},${blue})`, border:"2px solid black", height:"250px",width:"250px"}}>
        <img src={Cat} height={Height} width={width}  style={{transform:`rotate(${rotateimg}deg)`}} alt="image of cat" />
        </div>
        

        <div style={{marginTop:'100px'}}>
            <button id='btn' onClick={EnhanceHeight}>EnhanceHeight</button>
            <button id='btn' onClick={EnhanceWidth}>EnhanceWeight</button>
            <button id='btn'>EnhanceWidth</button>
            <button id='btn' onClick={RotateImage}>Rotate</button>
            <button id='btn' onClick={changeBackground}>ChangeBackground</button>
            <button id='btn' onClick={setColor}>innerdivcolor_change</button>

        </div>
        {rotateimg}

        
    </div>
  )
}

export default ImageManipulation;