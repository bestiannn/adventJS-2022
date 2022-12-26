function canExit(maze) {
  let start, end;
  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[i].length; j++) {
      if (maze[i][j] === "S") {
        start = [i, j];
      } else if (maze[i][j] === "E") {
        end = [i, j];
      }
    }
  }

  if (!start || !end) {
    return false;
  }

  const queue = [start];
  const visited = new Array(maze.length)
    .fill(false)
    .map(() => new Array(maze[0].length).fill(false));
  // Marcar la posición del inicio como visitada
  visited[start[0]][start[1]] = true;

  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  while (queue.length > 0) {
    const curr = queue.shift();

    if (curr[0] === end[0] && curr[1] === end[1]) {
      return true;
    }

    for (const dir of directions) {
      const newRow = curr[0] + dir[0];
      const newCol = curr[1] + dir[1];

      if (
        newRow >= 0 &&
        newRow < maze.length &&
        newCol >= 0 &&
        newCol < maze[0].length &&
        maze[newRow][newCol] !== "W" &&
        !visited[newRow][newCol]
      ) {
        queue.push([newRow, newCol]);
        visited[newRow][newCol] = true;
      }
    }
  }

  return false;
}

console.log(
  canExit([
    [" ", " ", "W", " ", "S"],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", "W", " "],
    ["W", "W", " ", "W", "W"],
    [" ", " ", " ", " ", "E"],
  ])
); // -> true

// Se puede salir porque empezamos en [0, 4]
// y hay un camino hasta la salida que es [4, 4]

console.log(
  canExit([
    [" ", " ", "W", "W", "S"],
    [" ", " ", " ", "W", " "],
    [" ", " ", " ", "W", " "],
    ["W", "W", " ", "W", "W"],
    [" ", " ", " ", " ", "E"],
  ])
); // -> false

// No hay manera de llegar de [0, 4] a [4, 4]
