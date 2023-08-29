import React, { useEffect, useCallback } from "react";
import "./ReactGridLayout.css"; // Import the CSS file

const ReactGridLayout = ({ numberOfBoxes }) => {
  const handleIntersection = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const boxNumber = entry.target.getAttribute("data-box-number");
        console.log(`Box ${boxNumber} WAS CALLED`);
      }
    });
  }, []);

  useEffect(() => {
    const container = document.querySelector(".container");
    const boxes = Array.from(container.querySelectorAll(".box"));

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5
    });

    boxes.forEach((box) => observer.observe(box));

    return () => observer.disconnect();
  }, [handleIntersection]);

  const renderBox = (index) => (
    <div key={index + 1} className="box" data-box-number={index + 1}>
      Box {index + 1}
    </div>
  );

  const renderBoxes = () =>
    Array.from({ length: numberOfBoxes }, (_, index) => renderBox(index));

  return (
    <div className="container">
      <div className="grid">{renderBoxes()}</div>
    </div>
  );
};

export default ReactGridLayout;
