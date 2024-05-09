const { Gameboard } = require("./gameboard");
function Player() {
  let gameboard = Gameboard();
  let enemy = null;
  function shoot(row, column = null) {
    if (column === null) {
      row = Math.floor(Math.random() * gameboard.boardSize);
      column = Math.floor(Math.random() * gameboard.boardSize);
    }
    let doIContinue = true;
    while (doIContinue) {
      const result = enemy.gameboard.reciveAttack(row, column);
      row = Math.floor(Math.random() * gameboard.boardSize);
      column = Math.floor(Math.random() * gameboard.boardSize);
      if (result === true) {
        return true;
      } else if (result === "All ships sunk!") {
        return result;
      }
    }
  }
  function addShipToBoard(row, column, size, orientation) {
    return gameboard.addShipToBoard(row, column, size, orientation);
  }
  function autoAddShips() {
    let row = null;
    let column = null;
    let ret = null;
    let doubled3 = { value: false };
    for (let i = 2; i <= 5; i++) {
      row = Math.floor(Math.random() * gameboard.boardSize);
      column = Math.floor(Math.random() * gameboard.boardSize);
      ret = addShipToBoard(
        row,
        column,
        i,
        Math.random() < 0.5 ? "horizontal" : "vertical"
      );
      if (ret == false) i--;
      if (i === 3 && doubled3.value === false) {
        doubled3.value = true;
        i--;
      }
    }
    console.log("generating ships");
  }
  function addEnemy(_enemy) {
    enemy = _enemy;
  }
  function getEnemy() {
    return enemy;
  }
  function reset() {
    gameboard = null;
    gameboard = Gameboard();
    console.log("im here");
  }
  return {
    gameboard,
    shoot,
    addShipToBoard,
    addEnemy,
    autoAddShips,
    getEnemy,
    reset,
  };
}

function simulateGame() {
  let player1 = Player();
  let player2 = Player();
  player1.addEnemy(player2);
  player2.addEnemy(player1);
  player1.autoAddShips();
  player2.autoAddShips();
  while (
    player1.shoot() !== "All ships sunk!" &&
    player2.shoot() !== "All ships sunk!"
  ) {
    let test = 1;
  }
  return true;
}
module.exports = { Player, simulateGame };
