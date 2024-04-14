const { Gameboard } = require("./gameboard");
function Player() {
  const gameboard = Gameboard();
  let enemy = null;
  function shoot(row, column = null) {
    if (column === null) {
      row = Math.floor(Math.random() * gameboard.boardSize);
      column = Math.floor(Math.random() * gameboard.boardSize);
    }
    let doIContinue = true;
    while (doIContinue) {
      const result = enemy.gameboard.reciveAttack(row, column);
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
    let doubled3 = false;
    for (let i = 2; i < 5; i++) {
      row = Math.floor(Math.random() * gameboard.boardSize);
      column = Math.floor(Math.random() * gameboard.boardSize);
      ret = addShipToBoard(
        row,
        column,
        i,
        Math.random() < 0.5 ? "horizontal" : "vertical"
      );
      if (ret == false) i--;
      if (i === 3 && doubled3 === false) {
        doubled3 = true;
        i--;
      }
    }
    gameboard.remainingShips = 5;
  }
  function addEnemy(_enemy) {
    enemy = _enemy;
  }
  return {
    gameboard,
    shoot,
    addShipToBoard,
    addEnemy,
    autoAddShips,
  };
}

console.log(simulateGame());

function simulateGame() {
  let player1 = Player();
  let player2 = Player();
  player1.addEnemy(player2);
  player2.addEnemy(player1);
  player1.addShipToBoard(1, 1, 1, "horizontal");
  player2.addShipToBoard(1, 1, 1, "horizontal");
  while (
    player1.shoot() !== "All ships sunk!" ||
    player2.shoot() !== "All ships sunk!"
  ) {
    console.log(player1.gameboard.remainingShips);
    console.log(player2.gameboard.remainingShips);
  }
  return true;
}
console.log("Game over!");
module.exports = { Player };
