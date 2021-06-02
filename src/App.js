
import { useEffect, useReducer, useRef, useState } from 'react';
import './App.css';

function App() {

  let valueXref=useRef();
  let valueYref=useRef();
  let rotateRef=useRef();
  let boxRef= useReducer();

  const [valueX, setXValue] = useState(1);
  const [valueY, setYValue,] = useState(1);
  const [valueRotate, setRotateValue] = useState(1);

  useEffect(() => {
    valueXref.current.value=0;
    valueYref.current.value=0;
    rotateRef.current.value=0;


  })

    const onChangeX=()=>{
      setXValue(valueXref.current.value)
      boxRef.current.style.left= `${valueXref.current.value}px`

    }

    const onChangeY=()=>{
      setYValue(valueYref.current.value)
      boxRef.current.style.top= `${valueYref.current.value}px`

    }

    const onChangeRotate=()=>{
      setRotateValue(rotateRef.current.value)
      boxRef.current.style.transform=`rotate(${rotateRef.current.value}deg)`


    }



  return (

    <div className='container'>

      <div className='board'>
        <div ref = {boxRef} className='block'>

        </div>

      </div>
      <div className="slider-parent" >
        <div>
        <lable>  X{"(" + valueX + ") px "}</lable>
        <input type="range" ref={valueXref} min="1" max="246" value={valueX}
          onChange={onChangeX}
        />
        </div>
        <div>
        <lable>X{"(" + valueY + ") px "}</lable>
        <input type="range" ref ={valueYref} min="1" max="246" value={valueY}
          onChange={onChangeY}
        />
        </div>
        <div>
      <lable> Rotate   X{"(" + valueRotate + ")  deg "} </lable>
       <input type="range" min="-360" ref ={rotateRef}max="360" value={valueRotate}
              onChange={onChangeRotate}
        />
        </div>

      </div>

    </div>


  );
}

export default App;
