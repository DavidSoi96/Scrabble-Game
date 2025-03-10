import React, {useState} from "react";
import {getLetterScore} from "./Scrabbleboard"
//Word validation
//Score calculation
//scores


const useScrabbleScore = () => {
    const [playeerScores, setPlayerScores] = useState({
        player1: 0,
        player2: 0
    });
    const [currentPlayer, setCurrentPlayer] = useState(player1);

    const SPECIAL_TILES = {
        trippleWord: "tripple-word",
        doubleWord: "double-word",
        trippleLetter: "tripple-letter",
        doubleLetter: "double-letter"
    };

    // calculating score

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

return {playeerScores, currentPlayer, updateScore};

};
export default useScrabbleScore;




