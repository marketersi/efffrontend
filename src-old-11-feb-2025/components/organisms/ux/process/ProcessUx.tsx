import React, { useEffect, useState } from 'react';
import "./process.css";

const Process = () => {
  const [circlePositions, setCirclePositions] = useState([]);

  useEffect(() => {
    const path = document.getElementById('mypath');
    const pathLength = path.getTotalLength();
    const spacing = 20;
    const numberOfCircles = Math.floor(pathLength / spacing);

    let positions = [];
    for (let i = 0; i <= numberOfCircles; i++) {
      const distance = i * spacing;
      const point = path.getPointAtLength(distance);
      positions.push({ left: point.x, top: point.y });
    }

    setCirclePositions(positions);
  }, []);

  return (
    <div className='circleBox'>
      {circlePositions.map((position, index) => (
        <div
          key={index}
          className='circle'
          style={{ left: `${position.left}px`, top: `${position.top}px` }}
        ></div>
      ))}
      <svg className="line" width="723" height="5488" viewBox="0 0 723 5488" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="mypath" d="M390.62 0.110352C390.62 363.73 1098.15 885.79 390.62 1789.42C235.19 1981.3 -401.86 2681.68 390.62 3460.72C1139.92 4210.02 382.94 5101.32 390.62 5487" stroke="black" stroke-miterlimit="10"></path>
      </svg>
    </div>
  );
};

export default Process;

