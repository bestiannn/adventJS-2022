function canExit(maze) {
  // Encontrar la posición del inicio y del fin
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

  // Si no se encuentra el inicio o el fin, entonces no es posible salir del laberinto
  if (!start || !end) {
    return false;
  }

  // Inicializar la cola para BFS y agregar el inicio al laberinto
  const queue = [start];
  // Inicializar una matriz para marcar las posiciones que ya se han visitado
  const visited = new Array(maze.length)
    .fill(false)
    .map(() => new Array(maze[0].length).fill(false));
  // Marcar la posición del inicio como visitada
  visited[start[0]][start[1]] = true;

  // Arreglo de direcciones para moverse en el laberinto
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  // Mientras haya elementos en la cola
  while (queue.length > 0) {
    // Tomar el primer elemento de la cola
    const curr = queue.shift();

    // Si se llegó al fin, entonces es posible salir del laberinto
    if (curr[0] === end[0] && curr[1] === end[1]) {
      return true;
    }

    // Recorrer todas las direccion

    // Recorrer todas las direcciones
    for (const dir of directions) {
      // Calcular la nueva posición a partir de la posición actual y la dirección
      const newRow = curr[0] + dir[0];
      const newCol = curr[1] + dir[1];

      // Si la nueva posición está dentro de los límites del laberinto y no es una pared y no ha sido visitada antes, entonces agregarla a la cola
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

  // Si se recorrió todo el laberinto y no se encontró un camino hacia el fin, entonces no es posible salir del laberinto
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
