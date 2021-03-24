const assert = require('assert');
const app = require('../app.js');

xdescribe('User Clicks', () => {

  it('a click should add an X then O', () => {
     app.App.boardClick('0-0');
     app.App.boardClick('1-1');
     const expectedBoard = [
       ['X', '', ''],
       ['', 'O', ''],
       ['', '', '']
     ];
     assert.deepEqual(app.BoardLogic._board, expectedBoard);
  });

  it('a click on reset should clear the board', () => {
    app.App.boardClick('0-0');
    app.App.resetClick();
    const expectedBoard = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    assert.deepEqual(app.BoardLogic._board, expectedBoard);
  })

  afterEach(() => {
    app.BoardLogic._board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    app.BoardLogic._nextPiece = 'X';
  });
});

describe('Board Logic Functions', () => {

  it('setPiece should set a piece', () => {
    app.BoardLogic.setPiece(0, 0);
    assert.deepEqual(app.BoardLogic._board[0][0], 'X');
  });

  it('setPiece should set an X then O', () => {
    app.BoardLogic.setPiece(0, 0);
    app.BoardLogic.setPiece(1, 1);
    assert.deepEqual(app.BoardLogic._board[0][0], 'X');
    assert.deepEqual(app.BoardLogic._board[1][1], 'O');
  });

  it('checkForWinner should return null if game is incomplete', () => {
    app.BoardLogic._board = [
      ['X', '', ''],
      ['', 'O', ''],
      ['X', '', 'X']
    ];
    assert.deepEqual(app.BoardLogic.checkForWinner(), null);
  });

  it('checkForWinner should return \'X\' if X wins', () => {
    app.BoardLogic._board = [
      ['X', '', ''],
      ['X', 'O', ''],
      ['X', '', 'X']
    ];
    assert.deepEqual(app.BoardLogic.checkForWinner(), 'X');
  });

  it('checkForWinner should return \'O\' if O wins', () => {
    app.BoardLogic._board = [
      ['X', '', ''],
      ['O', 'O', 'O'],
      ['X', '', 'X']
    ];
    assert.deepEqual(app.BoardLogic.checkForWinner(), 'O');
  });

  it('checkForWinner should return \'DRAW\' if board is full and neither wins', () => {
    app.BoardLogic._board = [
      ['X', 'X', 'O'],
      ['O', 'O', 'X'],
      ['X', 'O', 'X']
    ];
    assert.deepEqual(app.BoardLogic.checkForWinner(), 'DRAW');
  });

  afterEach(() => {
    app.BoardLogic._board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    app.BoardLogic._nextPiece = 'X';
  });

});