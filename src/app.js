
export function parseCommand(input) {
    const [gridSize, initialPosition, commands] = input.split('/');
    const [gridX, gridY] = gridSize.split(',').map(Number);
    const [x, y, direction] = parsePosition(initialPosition);
    return {
      grid: { x: gridX, y: gridY },
      car: { x, y, direction },
      commands: commands.split(''),
    };
  }
  
  function parsePosition(position) {
    const x = parseInt(position[0]);
    const y = parseInt(position[2]);
    const direction = position[3];
    return [x, y, direction];
  }
  
  export function moveCar(grid, car, commands) {
    commands.forEach(command => {
      switch (command) {
        case 'A':
          advance(car, grid);
          break;
        case 'I':
          turnLeft(car);
          break;
        case 'D':
          turnRight(car);
          break;
      }
    });
    return car;
  }
  
  function advance(car, grid) {
    switch (car.direction) {
      case 'N':
        if (car.y + 1 <= grid.y) car.y += 1;
        break;
      case 'S':
        if (car.y - 1 >= 0) car.y -= 1;
        break;
      case 'E':
        if (car.x + 1 <= grid.x) car.x += 1;
        break;
      case 'O':
        if (car.x - 1 >= 0) car.x -= 1;
        break;
    }
  }
  
  function turnLeft(car) {
    const directions = ['N', 'O', 'S', 'E'];
    car.direction = directions[(directions.indexOf(car.direction) + 1) % 4];
  }
  
  function turnRight(car) {
    const directions = ['N', 'E', 'S', 'O'];
    car.direction = directions[(directions.indexOf(car.direction) + 1) % 4];
  }