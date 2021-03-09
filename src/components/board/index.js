import React, { useEffect } from 'react';
import './index.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectCell, setWinner, noWinner } from '../../store/actions/moves';

const selectBoard = (state) => state.board
const selectGame = (state) => state.game

export const Board = () => {
  const board = useSelector(selectBoard)
  const game = useSelector(selectGame)
  const dispatch = useDispatch()
  const notPlayer = game.currentPlayer === 'X' ? 'O' : 'X';

  const hasWinner = (board, notPlayer) => {
    const waysToWin = [`${board[0][0]}${board[0][1]}${board[0][2]}`,
      `${board[1][0]}${board[1][1]}${board[1][2]}`,
      `${board[2][0]}${board[2][1]}${board[2][2]}`,
      `${board[0][0]}${board[1][0]}${board[2][0]}`,
      `${board[0][1]}${board[1][1]}${board[2][1]}`,
      `${board[0][2]}${board[1][2]}${board[2][2]}`,
      `${board[0][0]}${board[1][1]}${board[2][2]}`,
      `${board[0][2]}${board[1][1]}${board[2][0]}`
    ];

    return waysToWin.some(winCondition => winCondition === `${ notPlayer }${ notPlayer }${ notPlayer }`);
  }

  useEffect(() => {
    if (!board.some(row => row.some(cell => !cell))) {
      dispatch(noWinner());
    }
    if (hasWinner(board, notPlayer)) {
      dispatch(setWinner(notPlayer));
    }
  }, [board, notPlayer, dispatch])


  const cellClick = (event, row, col, cell) => {
    event.preventDefault();
    if (cell) return;
    dispatch(
      selectCell(
        game.currentPlayer,
        row,
        col
      )
    )
  }

  return (
    <div className="Board">

      { game.allLose ?
        <div>
          Sorry there are no winners
        </div>
      : game.winner ?
        <div>
          Winner { game.winner }
        </div>
      :
        <>
          <div>
            Board
          </div>
          <div className="grid-container">
            {
              board.map((row, r) =>
                row.map((cell, c) =>
                  <div
                    key={ `${r}${c}` }
                    data-testid={ `${r}${c}` }
                    onClick={(e) => cellClick(e, r, c, cell) }
                  >
                    { cell }
                  </div>
                )
              )
            }
          </div>
          <div>Player {game.currentPlayer}</div>
        </>
      }
    </div>
  )
}
