
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
  
