function Display(_container, player) {
  console.log("Display");
  const container = document.getElementById(_container);
  console.log(player);
  for (let i = 0; i < player.gameboard.boardSize; i++) {
    const row = document.createElement("div");
    row.classList.add(`row`);
    for (let j = 0; j < player.gameboard.boardSize; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.x = i;
      cell.y = j;
      cell.addEventListener("click", attack(player));
      row.appendChild(cell);
    }
    container.appendChild(row);
  }
  function attack(player) {
    return function (event) {
      player.getEnemy().shoot(event.currentTarget.x, event.currentTarget.y);
      console.log(
        `${player.getEnemy()} shot at ${event.currentTarget.x}, ${
          event.currentTarget.y
        }`
      );
    };
  }
  function refresh() {
    let i,
      j = 0;
    for (const row of container.children) {
      for (const cell of row.children) {
        cell.classList.remove("black", "white");
        cell.classList.add(board[i][j]);
        j++;
      }
      i++;
      j = 0;
    }
  }
}

module.exports = { Display };
