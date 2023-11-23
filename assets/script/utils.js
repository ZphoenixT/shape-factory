/*
    Exporting the functions
*/

export function getColorName(shapeColor) {
    switch (shapeColor) {
      case '1':
        return 'Blue';
      case '2':
        return 'Green';
      case '3':
        return 'Orange';
      case '4':
        return 'Pink';
      case '5':
        return 'Purple';
      default:
        return 'Unknown';
    }
  }
  
  export function getSelectedOptions() {
    const shapeColor = document.querySelector('.shapeColor').value;
    const shapeShape = document.querySelector('.shapeShape').value;
    return { shapeColor, shapeShape };
  }
  
  export function createShape(shape, shapeCount, maxColumns, maxRows, shapeSize, padding, factoryFloor, displayShapeInfo) {
    const newShape = document.createElement('div');
    newShape.classList.add('shape');
    newShape.classList.add(shape.name.toLowerCase());
    newShape.classList.add(shape.colour.toLowerCase());
  
    const row = maxRows - Math.floor(shapeCount / maxColumns) - 1;
    const column = shapeCount % maxColumns;
  
    newShape.style.top = `${row * (shapeSize + padding)}px`;
    newShape.style.left = `${column * (shapeSize + padding)}px`;
    newShape.style.width = `${shapeSize}px`;
    newShape.style.height = `${shapeSize}px`;
    newShape.style.position = 'absolute';
  
    newShape.addEventListener('click', () => {
      displayShapeInfo(shape, row, column);
    });
  
    factoryFloor.appendChild(newShape);
    shapeCount++;
  }