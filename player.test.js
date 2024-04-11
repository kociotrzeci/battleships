const { Player } = require("./player");

const player1 = Player();
const player2 = Player();
player1.addEnemy(player2);
player2.addEnemy(player1);
player2.addShipToBoard(1, 1, 1, "horizontal");

test("Player shoots down enemys ship", () => {
  player1.shoot(1, 1);
  expect(player2.gameboard.board[1][1].wasShoot).toBe(true);
});
