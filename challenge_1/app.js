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

  },

  clear: () => {

  }
};


/****************************************************
 * VIEW
 ****************************************************/
const BoardView = {
  update: () => {

  },

  clear: () => {

  },

  winner: (winner) => {

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