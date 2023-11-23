'use strict';


document.addEventListener('DOMContentLoaded', function() {
    const creationButton = document.querySelector('.creationButton');
    const resetButton = document.querySelector('.resetButton');
    const factoryFloor = document.querySelector('.factoryFloor');
    const factoryInfo = document.querySelector('.shapeInfo');
    let shapeCount = 0;
    const maxColumns = 7;
    const maxRows = 5;
    const shapeSize = 100;
    const padding = 10;
  
    creationButton.addEventListener('click', handleCreateButtonClick);
    resetButton.addEventListener('click', resetFactoryFloor);
  
    function handleCreateButtonClick() {
      if (shapeCount >= maxColumns * maxRows) {
        factoryInfo.textContent = 'Maximum shape limit reached (5x4 grid)!';
        return;
      }
  
      const { shapeColor, shapeShape } = getSelectedOptions();
  
      if (shapeColor !== '0' && shapeShape !== '0') {
        createShape(shapeColor, shapeShape);
      } else {
        factoryInfo.textContent = 'Please select both shape and color!';
      }
    }
  
    function getSelectedOptions() {
      const shapeColor = document.querySelector('.shapeColor').value;
      const shapeShape = document.querySelector('.shapeShape').value;
      return { shapeColor, shapeShape };
    }
  
    function createShape(shapeColor, shapeShape) {
      const newShape = document.createElement('div');
      newShape.classList.add('shape');
  
      if (shapeShape === '1') {
        newShape.classList.add('square');
      } else if (shapeShape === '2') {
        newShape.classList.add('circle');
      }
  
      switch (shapeColor) {
        case '1':
          newShape.classList.add('blue');
          break;
        case '2':
          newShape.classList.add('green');
          break;
        case '3':
          newShape.classList.add('orange');
          break;
        case '4':
          newShape.classList.add('pink');
          break;
        case '5':
          newShape.classList.add('purple');
          break;
        default:
          break;
      }
  
      const row = Math.floor(shapeCount / maxColumns);
      const column = shapeCount % maxColumns;
  
      newShape.style.top = `${row * (shapeSize + padding)}px`;
      newShape.style.left = `${column * (shapeSize + padding)}px`;
      newShape.style.width = `${shapeSize}px`;
      newShape.style.height = `${shapeSize}px`;
      newShape.style.position = 'absolute';
  
      newShape.addEventListener('click', function() {
        displayShapeInfo(shapeShape, shapeColor, row, column);
      });
  
      factoryFloor.appendChild(newShape);
      shapeCount++;
    }
  
    function resetFactoryFloor() {
      factoryFloor.innerHTML = '';
      factoryInfo.textContent = ''; 
      shapeCount = 0;
    }
  
    function displayShapeInfo(shapeShape, shapeColor, row, column) {
      const shapeType = shapeShape === '1' ? 'Square' : 'Circle';
  
      let colorName;
      switch (shapeColor) {
        case '1':
          colorName = 'Blue';
          break;
        case '2':
          colorName = 'Green';
          break;
        case '3':
          colorName = 'Orange';
          break;
        case '4':
          colorName = 'Pink';
          break;
        case '5':
          colorName = 'Purple';
          break;
        default:
          colorName = 'Unknown';
          break;
      }
  
      factoryInfo.textContent = 
      `${colorName} ${shapeType} Row: ${row + 1}, Column: ${column + 1}`;
    }
  });