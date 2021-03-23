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
  boardClick: (id) => {
    [row, col] = id.split('-');
    console.log('ROW', row);
    console.log('COL', col);
  },

  resetClick: () => {

  }
}


//FOR TESTING
exports.BoardLogic = BoardLogic;
exports.BoardView = BoardView;
exports.App = App;