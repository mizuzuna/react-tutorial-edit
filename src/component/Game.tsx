import React, { useState } from "react";
import { Icon } from "../interface";
import Board from "./Board";
import CalculateWinner from "./CalculateWinner";

interface History {
  squares: Icon[];
}

const Game: React.FC = () => {
  const [history, setHistory] = useState<History>([
    { squares: Array(9).fill(null) }
  ]);
  const [stepNumber, setStepNumber] = useState<number>(0);
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  //クリックしたら値を書き換える
  const handleClick = (i: number) => {
    const history_s = history.slice(0, stepNumber + 1);
    const current = history_s[history_s.length - 1];
    const squares = current.squares.slice(); //squares配列のコピーを作成

    //ゲームの決着が既についている場合やクリックされたマス目が既に埋まっている場合
    if (CalculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? "X" : "O";
    setHistory(history_s.concat([{ squares: squares }])); //concat=元の配列をミューテートしないpush
    setStepNumber(history_s.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const current = history[stepNumber];
  const winner = CalculateWinner(current.squares);
  const moves = history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={(i: number) => handleClick(i)} //Boardに関数渡す
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};
export default Game;
