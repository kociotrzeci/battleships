import "./styles.scss";
const { Player, simulateGame } = require("../src/player");
const { Display } = require("../src/display");

const player1 = Player();
const player2 = Player();
player1.addEnemy(player2);
player2.addEnemy(player1);
player1.autoAddShips();
player2.autoAddShips();
const displayLeft = Display("left-panel", player1);
const displayRight = Display("right-panel", player2, "AI", displayLeft);
