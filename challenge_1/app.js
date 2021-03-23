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

  },

  checkForWinner: () => {

  },

  clear: () => {
    return 1;
  }
};


/****************************************************
 * VIEW
 ****************************************************/
const BoardView = {
  update: () => {

  }
}


/****************************************************
 * CONTROLLER
 ****************************************************/
const App = {
  boardClick: () => {

  },

  resetClick: () => {

  }
}


//FOR TESTING
exports.BoardLogic = BoardLogic;
exports.BoardView = BoardView;
exports.App = App;