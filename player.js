const { Gameboard } = require("./gameboard");
function Player() {
  const gameboard = Gameboard();
  let enemy = null;
  function shoot(row, column) {
    enemy.gameboard.reciveAttack(row, column);
  }
  function addShipToBoard(row, column, size, orientation) {
    return gameboard.addShipToBoard(row, column, size, orientation);
  }
  function addEnemy(_enemy) {
    enemy = _enemy;
  }
  return {
    gameboard,
    shoot,
    addShipToBoard,
    addEnemy,
  };
}

module.exports = { Player };
