'use strict';

'use strict';

class Shape {
    constructor(name, colour) {
      this._name = name;
      this._colour = colour;
    }
  
    get name() {
      return this._name;
    }
  
    get colour() {
      return this._colour;
    }
  
    getInfo(row, column) {
      return `${this.name} ${this.colour} Column: ${column + 1}, Row: ${row + 1}`;
    }
  }
  
  const maxColumns = 7;
  const maxRows = 5;
  const shapeSize = 100;
  const padding = 10;
  
  const creationButton = document.querySelector('.creationButton');
  const resetButton = document.querySelector('.resetButton');
  const factoryFloor = document.querySelector('.factoryFloor');
  const factoryInfo = document.querySelector('.shapeInfo');
  
  let shapeCount = 0;
  
  creationButton.addEventListener('click', handleCreateButtonClick);
  resetButton.addEventListener('click', resetFactoryFloor);
  
  function handleCreateButtonClick() {
    if (shapeCount >= maxColumns * maxRows) {
      factoryInfo.textContent = 'Maximum shape limit reached (7x5 grid)!';
      return;
    }
  
    const { shapeColor, shapeShape } = getSelectedOptions();
  
    if (shapeColor !== '0' && shapeShape !== '0') {
      const shape = new Shape(
        shapeShape === '1' ? 'Square' : 'Circle', getColorName(shapeColor)
        );
      createShape(shape);
    } else {
      factoryInfo.textContent = 'Please select both shape and color!';
    }
  }
  
  function getColorName(shapeColor) {
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
  
  function getSelectedOptions() {
    const shapeColor = document.querySelector('.shapeColor').value;
    const shapeShape = document.querySelector('.shapeShape').value;
    return { shapeColor, shapeShape };
  }
  
  function createShape(shape) {
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
  
  function resetFactoryFloor() {
    factoryFloor.innerHTML = '';
    factoryInfo.textContent = '';
    shapeCount = 0;
  }
  
  function displayShapeInfo(shape, row, column) {
    factoryInfo.textContent = shape.getInfo(row, column);
  }