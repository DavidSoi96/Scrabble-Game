import React, { useState } from "react";
import ScrabbleLetter from "./Scrabbleletter";
import "./Scrabbleboard.css";



const BOARD_SIZE = 15;
const SPECIAL_TILES = {
  tripleWordSquares: [[0, 0], [0, 7], [0, 14], [7, 0], [7, 14], [14, 0], [14, 7], [14, 14]],
  doubleWordSquares: [[1, 1], [2, 2], [3, 3], [4, 4], [10, 10], [11, 11], [12, 12], [13, 13],
                      [1, 13], [2, 12], [3, 11], [4, 10], [10, 4], [11, 3], [12, 2], [13, 1]],
  tripleLetters: [[5, 1], [9, 1], [1, 5], [5, 5], [9, 5], [13, 5],
                  [1, 9], [5, 9], [9, 9], [13, 9], [5, 13], [9, 13]],
  doubleLetters: [[3, 0], [11, 0], [6, 2], [8, 2], [0, 3], [7, 3], [14, 3],
                  [2, 6], [6, 6], [8, 6], [12, 6], [3, 7], [11, 7],
                  [2, 8], [6, 8], [8, 8], [12, 8], [0, 11], [7, 11], [14, 11],
                  [6, 12], [8, 12], [3, 14], [11, 14]]
};

const getTileClass = (row, col) => {
  if (SPECIAL_TILES.tripleWordSquares.some(([r, c]) => r === row && c === col)) return "triple-word";
  if (SPECIAL_TILES.doubleWordSquares.some(([r, c]) => r === row && c === col)) return "double-word";
  if (SPECIAL_TILES.tripleLetters.some(([r, c]) => r === row && c === col)) return "triple-letter";
  if (SPECIAL_TILES.doubleLetters.some(([r, c]) => r === row && c === col)) return "double-letter";
  return "board-cell"; // Default tile
};

const getRandomLetters = (count) => {
  //function for randomizing letters
  const letters = [];
  // store randomly picked letters
  const availableLetters = {...LETTER_POOL};
  for (let i = 0; i < count; i++) {
    const letterArray = Object.keys(availableLetters).filter(letter => availableLetters[letter] > 0);
    if (letterArray.length === 0) break;

    const randomLetter = letterArray[Math.floor(Math.random() * letterArray.length)];
    letters.push(randomLetter);
    availableLetters[randomLetter] -= 1;
  }
  return letters;
};

//moved letterscore function outside
const getLetterScore = (letter) => {
  const scores = {
    'A': 1, 'B': 3, 'C': 3, 'D': 2, 'E': 1, 'F': 4, 'G': 2, 'H': 4, 'I': 1,
    'J': 8, 'K': 5, 'L': 1, 'M': 3, 'N': 1, 'O': 1, 'P': 3, 'Q': 10, 'R': 1,
    'S': 1, 'T': 1, 'U': 1, 'V': 4, 'W': 4, 'X': 8, 'Y': 4, 'Z': 10
  };
  return scores[letter] || 0;
};
const ScrabbleBoard = () => {
  // TODO: Implement rack tile management
  // eslint-disable-next-line no-unused-vars
  const [rackTiles, setRackTiles] = useState(getRandomLetters(7)); //starts with random letters
  // TODO: Implement board state management
  // eslint-disable-next-line no-unused-vars
  const [board, setBoard] = useState(Array(BOARD_SIZE).fill(null).map(() => Array(BOARD_SIZE).fill(null)));
  
  

  const renderCell = (row, col) => {
    const tile = board[row][col];
    return (
      <div
        key={`${row}-${col}`}
        className={`board-cell ${getTileClass(row, col)} ${row === 7 && col === 7 ? 'center-star' : ''}`}
      >
        {tile ? (
          <div className="letter-tile">
            <span className="letter">{tile}</span>
            <span className="points">{getLetterScore(tile)}</span>
          </div>
        ) : (
          row === 7 && col === 7 ? "★" : ""
        )}
      </div>
    );
  };

  return (
    <div className="scrabble-game">
      <div className="game-board">
        {[...Array(BOARD_SIZE)].map((_, row) =>
          [...Array(BOARD_SIZE)].map((_, col) => renderCell(row, col))
        )}
      </div>
      <div className="score-keeper">
        <div className="rack">
          {rackTiles.map((letter, index) => (
            <div key={index} className="rack-tile">
              <div className="letter-tile">
                <span className="letter">{letter}</span>
                <span className="points">{getLetterScore(letter)}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="player-score active">Player 1: 0</div>
        <div className="player-score">Player 2: 0</div>
      </div>
    </div>
  );
};

export default ScrabbleBoard;