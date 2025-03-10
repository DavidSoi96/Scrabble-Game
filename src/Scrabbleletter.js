import React from "react";
import "./Scrabbleboard.css";

const ScrabbleLetter = ({letter}) => {
    const handleDragStart = (e) => {
        e.dataTransfer.setData("letter", letter);
};

return (
    <div className="letter-tile" draggable onDragStart={handleDragStart}>
      <span className="letter">{letter}</span>
    </div>
  );
};


export default ScrabbleLetter;