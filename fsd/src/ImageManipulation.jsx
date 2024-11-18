import React ,{useState}from 'react'
import Cat from './Cat.jpg';

function ImageManipulation() {
    const[Height,setHeight]=useState(100);
    const[rotateimg,setrotate]=useState(0);
    const [bgColor, setBgColor] = useState('white');

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
    



  return (
    <div style={{border:'2px solid red', height:'600px', width:'600px', backgroundColor:bgColor}}>
        <div style={{border:'2px solid black' , height:'200px', width:'200px'}}>
        <img src={Cat} height={Height} width={200} style={{transform:`rotate(${rotateimg}deg)`}} alt="image of cat" />
        </div>

        <div style={{marginTop:'100px'}}>
            <button id='btn' onClick={EnhanceHeight}>EnhanceHeight</button>
            <button id='btn'>EnhanceWidth</button>
            <button id='btn' onClick={RotateImage}>Rotate</button>
            <button id='btn' onClick={changeBackground}>ChangeBackground</button>
        </div>
        {rotateimg}

        
    </div>
  )
}

export default ImageManipulation;