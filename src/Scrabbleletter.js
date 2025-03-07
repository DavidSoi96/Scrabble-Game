import React from "react";
import "./Scrabbleboard.css";

const ScrabbleLetter = ({rackTiles}) => {
    const handleDragStart = (event, letter, index) => 
        event.dataTransfer.setData("letter", letter);
    event.dataTransfer.setData("index", index);
};

export default ScrabbleLetter;