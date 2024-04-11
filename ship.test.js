const { Ship } = require("./ship");

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
