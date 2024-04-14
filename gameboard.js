const { Ship } = require("./ship");

function Gameboard() {
  const boardSize = 10;
  const board = [];
  let remainingShips = 0;
  for (let i = 0; i < boardSize; i++) {
    const row = [];
    for (let j = 0; j < boardSize; j++) {
      row.push({
        canBePlaced: true,
        wasShoot: false,
        ship: null,
      });
    }
    board.push(row);
  }
  function addShipToBoard(row, column, size, orientation) {
    const ship = Ship(size);
    if (checkPlaceValidity(row, column, size, orientation) === false) {
      return false;
    }
    if (orientation === "vertical") {
      for (let i = 0; i < size; i++) {
        board[row][column + i].ship = ship;
        forbidPlaces(row, column + i);
      }
    }
    if (orientation === "horizontal") {
      for (let i = 0; i < size; i++) {
        board[row + i][column].ship = ship;
        forbidPlaces(row + i, column);
      }
    }
    remainingShips++;
    return true;
  }
  function forbidPlaces(x, y) {
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (checkBounds(x + i, y + j)) {
          if (board[x + i][y + j].canBePlaced === true) {
            board[x + i][y + j].canBePlaced = false;
          }
        }
      }
    }
  }
  function checkPlaceValidity(row, column, size, orientation) {
    if (orientation === "horizontal") {
      for (let i = 0; i < size; i++) {
        if (!checkBounds(row + i, column)) return false;
        if (board[row][row + i].canBePlaced === false) return false;
      }
    }
    if (orientation === "vertical") {
      for (let i = 0; i < size; i++) {
        if (!checkBounds(row, column + i)) return false;
        if (board[row][column + i].canBePlaced === false) return false;
      }
    }
    return true;
  }
  function checkBounds(x, y) {
    let result = null;
    if (x >= 0 && x < boardSize && y >= 0 && y < boardSize) result = true;
    else {
      result = false;
    }
    return x >= 0 && x < boardSize && y >= 0 && y < boardSize;
  }
  function reciveAttack(x, y) {
    if (board[x][y].wasShoot) {
      return false;
    }
    board[x][y].wasShoot = true;
    if (board[x][y].ship) {
      board[x][y].ship.hit();
      if (board[x][y].ship.isSunk()) {
        remainingShips--;
        return checkRemainingShips();
      }
      return true;
    }
    return true;
  }
  function checkRemainingShips() {
    if (remainingShips === 0) {
      return "All ships sunk!";
    }
    return true;
  }
  return {
    board,
    addShipToBoard,
    reciveAttack,
    boardSize,
    remainingShips,
  };
}

module.exports = { Ship, Gameboard };
