import React, { useEffect, useState } from "react";
import "./process/process.css";

const Process = () => {
  const [circlePositions, setCirclePositions] = useState([]);

  useEffect(() => {
    const path = document.getElementById("mypath");
    const pathLength = path.getTotalLength();
    console.log(pathLength);

    const spacing = 20;
    const numberOfCircles = Math.floor(pathLength / spacing) - 50;
    const leftOffset = 780 - 430.62;

    let positions = [];
    for (let i = 0; i <= numberOfCircles; i++) {
      const distance = i * spacing;
      const point = path.getPointAtLength(distance);
      positions.push({ left: point.x + leftOffset, top: point.y });
    }

    setCirclePositions(positions);
  }, []);

  return (
    <div className="circleBox">
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
        <path
          id="mypath"
          d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
          stroke="black"
          stroke-miterlimit="10"
        ></path>
      </svg>
      {circlePositions.map((position, index) => (
        <div
          key={index}
          className="circle"
          style={{ left: `${position.left}px`, top: `${position.top}px` }}
        ></div>
      ))}

      <img className="bottomImg" src="/assets/images/monophy.gif" alt="" />
    </div>
  );
};

export default Process;
