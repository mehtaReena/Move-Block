import React, { useEffect, useState } from 'react';

function Slider(props) {
    const [valueX,onChangeX]=useState(1);
    const [valueY,onChangeY,]=useState(1);
    const [valueRotate,onChangeRotate]=useState(1);

    useEffect(()=>{
        const ele = document.querySelector('.buble');
      if (ele) {
        ele.style.left = `${Number(valueRotate / 4)}px`;
      }
    })
    return (


        <div className="slider-parent" >
      X{"("+valueX +")"}<input type="range" min="1" max="500" value={valueX}
         onChange={({ target: { valueX: radius } }) => {
                    onChangeX(radius);
                  }}
      />
        X{"("+valueY +")"}<input type="range" min="1" max="500" value={valueY}
         onChange={({ target: { valueY: radius } }) => {
                    onChangeY(radius);
                  }}
      />
       Rotate   X{"("+valueRotate +")"} <input type="range" min="-360" max="360" value={valueRotate}
         onChange={({ target: { valueRotate: radius } }) => {
                    onChangeRotate(radius);
                  }}
      />
      <div className="buble">
      {}
      </div>
    </div>

    );
}

export default Slider;