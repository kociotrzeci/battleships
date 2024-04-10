const { Ship, Gameboard } = require("./main");

let gameboard;
beforeEach(() => {
  gameboard = Gameboard();
});
test("Ship getting hit", () => {
  const ship = Ship(3);
  ship.hit();
  expect(ship.hits).toBe(1);
});

test("Ship sunking", () => {
  const ship = Ship(2);
  expect(ship.isSunk()).toBe(false);
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});

test("Add ship horizontally", () => {
  gameboard.addShipToBoard(3, 3, 2, "horizontal");
  expect(gameboard.board[1][3].canBePlaced).toBe(true);
  expect(gameboard.board[2][3].canBePlaced).toBe(false);
  expect(gameboard.board[3][3].ship.hits).toBe(0);
  expect(gameboard.board[4][3].ship.hits).toBe(0);
  expect(gameboard.board[5][3].canBePlaced).toBe(false);
  expect(gameboard.board[6][3].canBePlaced).toBe(true);
});

test("Add ship vertically", () => {
  gameboard.addShipToBoard(5, 5, 3, "vertical");
  gameboard.board[5][5].ship.hit();
  expect(gameboard.board[5][3].canBePlaced).toBe(true);
  expect(gameboard.board[5][4].canBePlaced).toBe(false);
  expect(gameboard.board[5][5].ship.hits).toBe(1);
  expect(gameboard.board[5][6].ship.hits).toBe(1);
  expect(gameboard.board[5][7].ship.hits).toBe(1);
  expect(gameboard.board[5][8].canBePlaced).toBe(false);
  expect(gameboard.board[5][9].canBePlaced).toBe(true);
});

test("Add ship with collision", () => {
  gameboard.addShipToBoard(5, 5, 3, "vertical");
  expect(gameboard.addShipToBoard(3, 3, 3, "vertical")).toBe(true);
  expect(gameboard.addShipToBoard(4, 4, 3, "horizontal")).toBe(false);
});

test("Add ship out of bounds", () => {
  expect(gameboard.addShipToBoard(0, 0, 3, "horizontal")).toBe(true);
  expect(gameboard.addShipToBoard(7, 0, 3, "horizontal")).toBe(true);
  expect(gameboard.addShipToBoard(7, 0, 4, "horizontal")).toBe(false);
  expect(gameboard.addShipToBoard(0, 7, 1, "vertical")).toBe(true);
  expect(gameboard.addShipToBoard(2, 9, 2, "vertical")).toBe(false);
});

test("Shooting at gameboard", () => {
  gameboard.addShipToBoard(5, 5, 3, "vertical");
  expect(gameboard.reciveAttack(5, 5)).toBe(true);
  expect(gameboard.board[5][5].wasShoot).toBe(true);
  expect(gameboard.board[5][5].ship.hits).toBe(1);
  expect(gameboard.reciveAttack(1, 2)).toBe(false);
  expect(gameboard.board[1][2].wasShoot).toBe(true);
});

test("Sunking ships", () => {
  gameboard.addShipToBoard(1, 1, 1, "vertical");
  gameboard.addShipToBoard(1, 6, 1, "vertical");
  expect(gameboard.reciveAttack(1, 1)).toBe(true);
  expect(gameboard.reciveAttack(1, 6)).toBe("All ships sunk!");
});
