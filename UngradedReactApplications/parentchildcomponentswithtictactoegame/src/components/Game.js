import React, {useState} from "react";
import Cell from "./Cell.js"
import "./Game.css";

function Game(props) {
    const [board, setBoard] = useState([
        ["+","+","+"],
        ["+","+","+"],
        ["+","+","+"],
    ]);

function changeVisibility(rowIdx, colIdx) {
    const newBoard = [...board];
    newBoard[rowIdx] = [...newBoard[rowIdx]];
    newBoard[rowIdx][colIdx] = newBoard[rowIdx][colIdx] === "+" ? "." : "+";
    setBoard(newBoard);
}

function addlAllRows() {
    setBoard([
        ["+","+","+"],
        ["+","+","+"],
        ["+","+","+"]
    ]);
}

function addRow(rowIdx) {
    const newBoard = [...board];
    newBoard[rowIdx] =["+","+","+"];
    setBoard(newBoard);
}




    return (
        <div className="gameWrapper">
            
            {board.map((row, rowIdx) =>{
                return (
                    <div key={rowIdx} className="rowWrapper">
                        {
                        row.map((col, colIdx) => {
                            return ( 
                            board[rowIdx][colIdx] === "+" &&
                            <Cell onClick={changeVisibility.bind(null, rowIdx, colIdx)} key={colIdx} value={col} />
                            )
                        })
                        }
                    </div>
                );
            })}
            <div>
                <button onClick={addlAllRows}>Reset</button>
                <button onClick={addRow.bind(null,0)}>Add Row 1</button>
                <button onClick={addRow.bind(null,1)}>Add Row 2</button>
                <button onClick={addRow.bind(null, 2)}>Add Row 3</button>
            </div>
 
        </div>
    );
}



export default Game;