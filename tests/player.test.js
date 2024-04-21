const { Player, simulateGame } = require("../src/player");
let player1;
let player2;
beforeEach(() => {
  player1 = Player();
  player2 = Player();
  player1.addEnemy(player2);
  player2.addEnemy(player1);
});

test("Player shoots down enemys ship", () => {
  player2.addShipToBoard(1, 1, 1, "horizontal");
  player1.shoot(1, 1);
  expect(player2.gameboard.board[1][1].wasShoot).toBe(true);
});

test("sinking all enemy ships", () => {
  player1.addShipToBoard(1, 1, 1, "horizontal");
  player1.addShipToBoard(5, 5, 1, "horizontal");
  expect(player2.shoot(5, 5)).toBe(true);
  expect(player2.shoot(1, 1)).toBe("All ships sunk!");
});

test("Player adds mutlitiple ships", () => {
  player1.addShipToBoard(1, 1, 1, "horizontal");
  player1.addShipToBoard(5, 5, 1, "horizontal");
  expect(player1.gameboard.remainingShips.value).toBe(2);
});

test("Check random ship placement", () => {
  player1.autoAddShips();
  expect(player1.gameboard.remainingShips.value).toBe(5);
});
/*
test("AI plays game itself", () => {
  expect(simulateGame()).toBe(true);
});
*/
