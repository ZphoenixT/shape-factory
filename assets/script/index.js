'use strict';

import { getColorName, getSelectedOptions, createShape } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
  const creationButton = document.querySelector('.creationButton');
  const resetButton = document.querySelector('.resetButton');

  creationButton.addEventListener('click', () => {
    console.log('Creation button clicked');
  });

  resetButton.addEventListener('click', () => {
    console.log('Reset button clicked');
  });
});

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

document.addEventListener('DOMContentLoaded', () => {
  const creationButton = document.querySelector('.creationButton');
  const resetButton = document.querySelector('.resetButton');
  const factoryFloor = document.querySelector('.factoryFloor');
  const factoryInfo = document.querySelector('.shapeInfo');

  let shapeCount = 0;

  creationButton.addEventListener('click', () => handleCreateButtonClick(factoryInfo, shapeCount, factoryFloor));
  resetButton.addEventListener('click', () => resetFactoryFloor(factoryFloor, factoryInfo, shapeCount));

  function handleCreateButtonClick(factoryInfo, shapeCount, factoryFloor) {
    const maxColumns = 7;
    const maxRows = 5;
    const shapeSize = 100;
    const padding = 10;

    if (shapeCount >= maxColumns * maxRows) {
      factoryInfo.textContent = 'Maximum shape limit reached (7x5 grid)!';
      return;
    }

    const { shapeColor, shapeShape } = getSelectedOptions();

    if (shapeColor !== '0' && shapeShape !== '0') {
      const shape = new Shape(
        shapeShape === '1' ? 'Square' : 'Circle',
        getColorName(shapeColor)
      );
      createShape(
        shape,
        shapeCount,
        maxColumns,
        maxRows,
        shapeSize,
        padding,
        factoryFloor,
        displayShapeInfo
      );
    } else {
      factoryInfo.textContent = 'Please select both shape and color!';
    }
  }

  function resetFactoryFloor(factoryFloor, factoryInfo, shapeCount) {
    factoryFloor.innerHTML = '';
    factoryInfo.textContent = '';
    shapeCount = 0;
  }

  function displayShapeInfo(shape, row, column) {
    factoryInfo.textContent = shape.getInfo(row, column);
  }
});