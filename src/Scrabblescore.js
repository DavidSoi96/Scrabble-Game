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
    const calculateScore () => {
        let score = 0;
        let wordMultiplier = 1; //total score
        wordTiles.forEach(({ letter, tileType }) => {
            let letterScore = getLetterScore(letter);
            if (tileType === SPECIAL_TILES.tripleLetter) letterScore *= 3;
            if (tileType === SPECIAL_TILES.doubleLetter) letterScore *= 2;
      
            score += letterScore;
      
            if (tileType === SPECIAL_TILES.tripleWord) wordMultiplier *= 3;
            if (tileType === SPECIAL_TILES.doubleWord) wordMultiplier *= 2;
          });
        return score * wordMultiplier;
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

return {playeerScores, currentPlayer, updateScore};

};
export default useScrabbleScore;




