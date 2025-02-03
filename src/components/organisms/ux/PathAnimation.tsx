import React, { useEffect, useRef } from "react";

const PathAnimation = () => {
  const pathRef = useRef(null);
  const dotRef = useRef(null);
  const carRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      drawLine();
      positionTheDot();
      positionCar();
    };

    window.addEventListener("scroll", handleScroll);

    // Initial setup
    drawLine();
    positionTheDot();
    positionCar();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const drawLine = () => {
    if (pathRef.current) {
      const path = pathRef.current;
      const pathLength = path.getTotalLength();
      const maxScrollTop =
        document.documentElement.scrollHeight - window.innerHeight;
      const percentDone = window.scrollY / maxScrollTop;
      const length = percentDone * pathLength;
      path.style.strokeDasharray = `${length} ${pathLength}`;
    }
  };

  const positionTheDot = () => {
    if (pathRef.current && dotRef.current) {
      const path = pathRef.current;
      const pathLength = path.getTotalLength();
      const scrollPercentage =
        (document.documentElement.scrollTop + document.body.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight);
      const pt = path.getPointAtLength(scrollPercentage * pathLength);
      dotRef.current.setAttribute(
        "transform",
        `translate(${pt.x}, ${pt.y + 5})`
      );
    }
  };

  const positionCar = () => {
    if (pathRef.current && carRef.current) {
      const path = pathRef.current;
      const pathLength = path.getTotalLength();
      const scrollY = window.scrollY || window.pageYOffset;
      const maxScrollY =
        document.documentElement.scrollHeight - window.innerHeight;
      const dist = (pathLength * scrollY) / maxScrollY;
      const pos = path.getPointAtLength(dist);

      let angle;
      if (dist + 1 <= pathLength) {
        const posAhead = path.getPointAtLength(dist + 1);
        angle = Math.atan2(posAhead.y - pos.y, posAhead.x - pos.x);
      } else {
        const posBehind = path.getPointAtLength(dist - 1);
        angle = Math.atan2(pos.y - posBehind.y, pos.x - posBehind.x);
      }

      carRef.current.setAttribute(
        "transform",
        `translate(${pos.x}, ${pos.y}) rotate(${(180 * angle) / Math.PI})`
      );
    }
  };

  return (
    <div style={{ position: "absolute", top: 0, right: 0, width: "100%", height: "auto", background: "url('background-map.jpg') no-repeat" }} id="route">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 334 1426" id="svgRoute">
      <path
        ref={pathRef}
        id="path"
        d="M170 19s18 32 18 57c0 48-40 51-40 72 0 22 43 31 43 44 0 10-9.4 10-10 23-.7 14 2.3 16 2.2 28-.17 12-14 24-21 32-6.5 7.2-17 15-20 23-2.4 6.8-3.5 23 12 29 16 5.7 32 10 37 24 5.2 13-7.4 26-17 33-9.2 6.6-30 20-26 30 3.5 9.9 27 6.2 27 24 0 18 8.8 13 8.8 24-11 24 16 50 13 71-.46 17-15 23-8.2 42-32 37 1.3 83 26 106 28 20-33 5.7-33 39 2.4 51-28 113-34 139-4.1 18-3.5 41 18 41 8.1-.2 14-6.5 15-14 .37-6.3-6.1-14-16-12-11 1.8-16 11-19 24-1.3 6.6-2.1 17-2.3 28-.43 29 14 36 19 39 2.6 1.8 19 8.8 19 17 10 18-41 7.8-35 28 .61 10 37 22 36 35 8.4 94-128 42-89 130 8.8 36-63 33-60 68-2.1 25 35 32 38 44"
        stroke="red"
        fill="none"
      />

      <circle r="2" cy="18.591" cx="169.887" fill="red" fillOpacity=".96" fillRule="evenodd" stroke="red" strokeWidth=".55" />
      <circle ref={dotRef} r="2" id="dot" cy="-5" cx="0" fill="red" fillOpacity=".96" fillRule="evenodd" stroke="red" strokeWidth=".55" />

      <path
        ref={carRef}
        id="c"
        d="M 3.02008,-2.00446 A 0.384,0.384 0 0 0 2.99106,-1.85469 L 2.99789,-0.835296 2.98889,-0.837286 A 0.113,0.113 0 0 0 2.87613,-0.723255 L 2.88243,0.358786 A 0.113,0.113 0 0 0 2.99646,0.471542 L 3.00492,0.469969 3.01203,1.63073 A 0.384,0.384 0 0 0 3.39872,2.01296 L 8.65185,1.97994 C 8.80663,1.97929 8.93788,1.88712 8.99825,1.75528 9.02715,1.83055 9.09151,1.91021 9.23511,1.90987 L 12.491,1.88891 12.2534,2.32758 A 0.134,0.134 0 0 0 12.4886,2.45492 L 12.797,1.88816 14.2024,1.87929 C 14.7857,1.87543 15.2515,1.40414 15.2473,0.821764 L 15.2448,0.438872 A 0.113,0.113 0 0 0 15.4372,0.357561 L 15.4309,-0.72448 A 0.113,0.113 0 0 0 15.2373,-0.803744 L 15.2349,-1.18664 C 15.2319,-1.76949 14.7597,-2.23574 14.1774,-2.23146 L 12.5876,-2.22247 12.3653,-2.81052 A 0.133,0.133 0 0 0 12.1927,-2.88767 0.133,0.133 0 0 0 12.1143,-2.71463 L 12.3018,-2.22003 9.25118,-2.20155 C 9.08154,-2.20452 9.00514,-2.13533 8.9706,-2.05654 A 0.382,0.382 45 0 0 8.62474,-2.27078 L 3.37245,-2.23957 A 0.384,0.384 0 0 0 3.01965,-2.00355 Z"
        fill="#1a1a1a"
        fillRule="evenodd"
      />
    </svg>
  </div>
  );
};

export default PathAnimation;
