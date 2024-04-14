const { Player } = require("./player");
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
  expect(player2.shoot(1, 1)).toBe("All ships sunk!");
});

test("Check random ship placement", () => {
  player1.autoAddShips();
  expect(player1.gameboard.remainingShips).toBe(5);
});
/*
test("AI plays game itself", () => {
  player1.autoAddShips();
  player2.autoAddShips();
  expect(simulateGame()).toBe(true);
});

function simulateGame() {
  let player1 = Player();
  let player2 = Player();
  player1.addEnemy(player2);
  player2.addEnemy(player1);
  player1.autoAddShips();
  player2.autoAddShips();
  while (
    player1.shoot() !== "All ships sunk!" ||
    player2.shoot() !== "All ships sunk!"
  ) {
    player1.gameboard.remainingShips;
    player2.gameboard.remainingShips;
  }
  return true;
}
*/
