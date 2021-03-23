/****************************************************
 * MODEL
 ****************************************************/
const BoardLogic = {
   _nextPiece: 'X',
   _board: [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ],

  setPiece: (row, col) => {
    BoardLogic._board[row][col] = BoardLogic._nextPiece;
    BoardLogic._nextPiece = (BoardLogic._nextPiece === 'X' ? 'O' : 'X');
  },

  checkForWinner: () => {
    const rowWin = BoardLogic.checkForRowWinner();
    const colWin = BoardLogic.checkForColWinner();
    const diagWin = BoardLogic.checkForDiagWinner();
    const draw = BoardLogic.checkForDraw();
    if (rowWin) {
      return rowWin;
    }
    if (colWin) {
      return colWin;
    }
    if (diagWin) {
      return diagWin;
    }
    if (draw) {
      return 'DRAW';
    }
    return null;
  },

  checkForRowWinner: () => {
    const board = BoardLogic._board;
    for (let row = 0; row < 3; row++) {
      if (board[row][0] === 'X' && board[row][1] === 'X' && board[row][2] === 'X') {
        return 'X';
      }
      if (board[row][0] === 'O' && board[row][1] === 'O' && board[row][2] === 'O') {
        return 'O';
      }
    }
    return null;
  },

  checkForColWinner: () => {
    const board = BoardLogic._board;
    for (let col = 0; col < 3; col++) {
      if (board[0][col] === 'X' && board[1][col] === 'X' && board[2][col] === 'X') {
        return 'X';
      }
      if (board[0][col] === 'O' && board[1][col] === 'O' && board[2][col] === 'O') {
        return 'O';
      }
    }
    return null;
  },

  checkForDiagWinner: () => {
    const board = BoardLogic._board;
    if (board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') {
      return 'X';
    }
    if (board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O') {
      return 'O';
    }
    if (board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X') {
      return 'X';
    }
    if (board[0][2] === 'O' && board[1][1] === 'O' && board[2][0] === 'O') {
      return 'O';
    }
    return null;
  },

  checkForDraw: () => {
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (BoardLogic._board[row][col] === '') {
          return false;
        }
      }
    }
    return true;
  },

  clear: () => {
    BoardLogic._board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    BoardLogic._nextPiece = 'X';
  }
};


/****************************************************
 * VIEW
 ****************************************************/
const BoardView = {
  update: () => {
    BoardLogic._board.forEach((row, rowIndex) => {
      row.forEach((spot, colIndex) => {
        if (spot !== '') {
          document.getElementById(`${rowIndex}-${colIndex}`).innerText = spot;
        }
      });
    });
  },

  clear: () => {
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        document.getElementById(`${row}-${col}`).innerText = '';
      }
    }
    document.getElementById('winner').innerText = '';
  },

  winner: (winner) => {
    if (winner === 'DRAW') {
      document.getElementById('winner').innerText = 'IT\'s A DRAW!';
    } else {
      document.getElementById('winner').innerText = `${winner} WINS!`;
    }
  }
};


/****************************************************
 * CONTROLLER
 ****************************************************/
const App = {
  boardClick: (id) => {
    [row, col] = id.split('-');
    BoardLogic.setPiece(row, col);
    BoardView.update();
    const winner = BoardLogic.checkForWinner();
    if (winner) {
      BoardView.winner(winner);
    }
  },

  resetClick: () => {
    BoardLogic.clear();
    BoardView.clear();
  }
};


//FOR TESTING
exports.BoardLogic = BoardLogic;
exports.BoardView = BoardView;
exports.App = App;