import React, {useState} from "react";
import {getLetterScore} from "./Scrabbleboard"
//Word validation
//Score calculation
//scores


const useScrabbleScore = () => {
    const [playeerScores, setPlayerScores] = useState();
    const [currentPlayer, setCurrentPlayer] = useState();
};


//updating scores
const updateScore = () => {
    const wordScore = calculateScore();
    setPlayerScores((prevScores) => ({
        ...prevScores, [currentPlayer] : prevScores[currentPlayer] + wordScore,
    }));
    switchTurn();
};

//switching turns
const switchTurn = () => {
    setCurrentPlayer((prev) => (
        prev === "player1" ? "player2" : "player1"
    ));
};



