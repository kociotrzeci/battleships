function Display(_container, player, mode, otherDisplay) {
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
      if (mode === "AI") cell.addEventListener("click", attack(player));
      const dot = document.createElement("span");
      cell.appendChild(dot);
      row.appendChild(cell);
    }
    container.appendChild(row);
  }
  refresh();

  function attack(player) {
    return function (event) {
      player.getEnemy().shoot(event.currentTarget.x, event.currentTarget.y);
      refresh();
      setTimeout(() => {
        player.shoot();
        refresh(otherDisplay.refresh());
      }, 500);
      console.log(
        `${player.getEnemy()} shot at ${event.currentTarget.x}, ${
          event.currentTarget.y
        }`
      );
    };
  }
  function refresh() {
    let i = 0,
      j = 0;
    for (const row of container.children) {
      for (const cell of row.children) {
        cell.classList.remove("black", "white");
        if (player.gameboard.board[i][j].wasShoot) {
          cell.classList.add("shoot");
        }
        if (player.gameboard.board[i][j].ship) cell.classList.add("ship");
        j++;
      }
      i++;
      j = 0;
    }
  }
  return { refresh };
}

module.exports = { Display };
