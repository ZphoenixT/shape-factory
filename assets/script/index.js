'use strict';


document.addEventListener('DOMContentLoaded', function() {
    const creationButton = document.querySelector('.creationButton');
    const factoryFloor = document.querySelector('.factoryFloor');
    let shapeCount = 0;
    const maxColumns = 7;
    const maxRows = 5;
    const shapeSize = 100;
    const padding = 10;
  
    creationButton.addEventListener('click', function() {
      if (shapeCount >= maxColumns * maxRows) {
        alert('Maximum shape limit reached (5x4 grid)!');
        return;
      }
  
      const shapeColor = document.querySelector('.shapeColor').value;
      const shapeShape = document.querySelector('.shapeShape').value;
  
      if (shapeColor !== '0' && shapeShape !== '0') {
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
  
        const row = Math.floor(shapeCount / maxColumns); // Calculate row number
        const column = shapeCount % maxColumns; // Calculate column number
  
        newShape.style.top = `${row * (shapeSize + padding)}px`; // Adjust vertical position
        newShape.style.left = `${column * (shapeSize + padding)}px`; // Adjust horizontal position
        newShape.style.width = `${shapeSize}px`; // Set shape width
        newShape.style.height = `${shapeSize}px`; // Set shape height
        newShape.style.position = 'absolute'; // Ensure absolute positioning
  
        factoryFloor.appendChild(newShape);
        shapeCount++;
      } else {
        alert('Please select both shape and color!');
      }
    });
  });