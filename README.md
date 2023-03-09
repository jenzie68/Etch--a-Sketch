# etch-a-Sketch
etch a sketch project from TOP

const myDiv = document.getElementById('myDiv');
const containerEl = document.querySelector('.container');

let numOfDivs = prompt('how many squares do you want to put?',10);
containerEl.style.display = 'grid';
containerEl.style.gridTemplateColumns = `repeat(${numOfDivs},50px)`;
containerEl.style.gridTemplateRows = `repeat(${numOfDivs},50px)`;
