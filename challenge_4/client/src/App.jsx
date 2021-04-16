import React, { Component} from "react";
import "./App.css";

class App extends Component{
  //MODEL
  constructor(props) {
    super(props);
    this.state = {
      board: [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      black: [],
      red: [],
      turn: 'black'
    };
    this.buttonClick = this.buttonClick.bind(this);
    this.setPiece = this.setPiece.bind(this);
    this.checkWinRow = this.checkWinRow.bind(this);
    this.checkWin = this.checkWin.bind(this);
    this.checkWinColumn = this.checkWinColumn.bind(this);
    this.checkWinDiagonal = this.checkWinDiagonal.bind(this);
  }

  setPiece (column) {
    let board = this.state.board;
    for (let i = 3; i > -1; i--) {
      if (board[i][column] === 0) {
        board[i][column] = this.state.turn === 'black' ? 'B' : 'R';
        if (this.state.turn === 'black') {
          this.setState({black: [...this.state.black, `${i}-${column}`]});
        }
        if (this.state.turn === 'red') {
          this.setState({red: [...this.state.red, `${i}-${column}`]});
        }
        const turn = this.state.turn === 'black' ? 'red' : 'black';
        this.setState({turn, board});
        break;
      }
    }
    this.checkWin();
  }

  checkWinRow () {
    const board = this.state.board;
    let win = false;
    for (let i = 0; i < board.length; i++) {
      if (!board[i].includes(0)) {
        if (!(board[i].includes('B') && board[i].includes('R'))) {
          win = true;
          break;
        }
      }
    }
    return win;
  }

  checkWinColumn () {
    const board = this.state.board;
    let win = false;
    for (let i = 0; i < 4; i++) {
      let column = [board[0][i], board[1][i], board[2][i], board[3][i]];
      if (!column.includes(0)) {
        if (!(column.includes('B') && column.includes('R'))) {
          win = true;
          break;
        }
      }
    }
    return win;
  }

  checkWinDiagonal () {
    const board = this.state.board;
    const diagonal1 = [board[0][0], board[1][1], board[2][2], board[3][3]];
    const diagonal2 = [board[0][3], board[1][2], board[2][1], board[3][0]];
    let win = false;
    if (!diagonal1.includes(0)) {
      if (!(diagonal1.includes('B') && diagonal1.includes('R'))) {
        win = true;
      }
    }
    if (!diagonal2.includes(0)) {
      if (!(diagonal2.includes('B') && diagonal2.includes('R'))) {
        win = true;
      }
    }
    return win;
  }

  checkWin () {
    if(this.checkWinColumn()) {
      alert('WINNER');
    }
    if(this.checkWinRow()) {
      alert('WINNER');
    }
    if (this.checkWinDiagonal()) {
      alert('WINNER');
    }
  }



//CONTROLLER
  buttonClick (event) {
    const column = event.target.dataset.id;
    this.setPiece(column);
  }

//VIEW
  render(){
    return(
      <div className="App">
        <h1>CONNECT 4!</h1>
        <h3>it's {this.state.turn}'s turn</h3>
        <div className="board">
        <table>
          <tr>
            <th>
            <button data-id="0" onClick={this.buttonClick}>&#x2193;</button>
            </th>
            <th>
            <button data-id="1" onClick={this.buttonClick}>&#x2193;</button>
            </th>
            <th>
            <button data-id="2" onClick={this.buttonClick}>&#x2193;</button>
            </th>
            <th>
            <button data-id="3" onClick={this.buttonClick}>&#x2193;</button>
            </th>
          </tr>
          <tr>
            <td className={this.state.black.includes('0-0') ? 'black' : 'red'}>{this.state.black.includes('0-0') || this.state.red.includes('0-0') ? 'O' : ''}</td>
            <td className={this.state.black.includes('0-1') ? 'black' : 'red'}>{this.state.black.includes('0-1') || this.state.red.includes('0-1') ? 'O' : ''}</td>
            <td className={this.state.black.includes('0-2') ? 'black' : 'red'}>{this.state.black.includes('0-2') || this.state.red.includes('0-2') ? 'O' : ''}</td>
            <td className={this.state.black.includes('0-3') ? 'black' : 'red'}>{this.state.black.includes('0-3') || this.state.red.includes('0-3') ? 'O' : ''}</td>
          </tr>
          <tr>
            <td className={this.state.black.includes('1-0') ? 'black' : 'red'}>{this.state.black.includes('1-0') || this.state.red.includes('1-0') ? 'O' : ''}</td>
            <td className={this.state.black.includes('1-1') ? 'black' : 'red'}>{this.state.black.includes('1-1') || this.state.red.includes('1-1') ? 'O' : ''}</td>
            <td className={this.state.black.includes('1-2') ? 'black' : 'red'}>{this.state.black.includes('1-2') || this.state.red.includes('1-2') ? 'O' : ''}</td>
            <td className={this.state.black.includes('1-3') ? 'black' : 'red'}>{this.state.black.includes('1-3') || this.state.red.includes('1-3') ? 'O' : ''}</td>
          </tr>
          <tr>
            <td className={this.state.black.includes('2-0') ? 'black' : 'red'}>{this.state.black.includes('2-0') || this.state.red.includes('2-0') ? 'O' : ''}</td>
            <td className={this.state.black.includes('2-1') ? 'black' : 'red'}>{this.state.black.includes('2-1') || this.state.red.includes('2-1') ? 'O' : ''}</td>
            <td className={this.state.black.includes('2-2') ? 'black' : 'red'}>{this.state.black.includes('2-2') || this.state.red.includes('2-2') ? 'O' : ''}</td>
            <td className={this.state.black.includes('2-3') ? 'black' : 'red'}>{this.state.black.includes('2-3') || this.state.red.includes('2-3') ? 'O' : ''}</td>
          </tr>
          <tr>
            <td className={this.state.black.includes('3-0') ? 'black' : 'red'}>{this.state.black.includes('3-0') || this.state.red.includes('3-0') ? 'O' : ''}</td>
            <td className={this.state.black.includes('3-1') ? 'black' : 'red'}>{this.state.black.includes('3-1') || this.state.red.includes('3-1') ? 'O' : ''}</td>
            <td className={this.state.black.includes('3-2') ? 'black' : 'red'}>{this.state.black.includes('3-2') || this.state.red.includes('3-2') ? 'O' : ''}</td>
            <td className={this.state.black.includes('3-3') ? 'black' : 'red'}>{this.state.black.includes('3-3') || this.state.red.includes('3-3') ? 'O' : ''}</td>
          </tr>
        </table>
        </div>
      </div>
    );
  }
}

export default App;