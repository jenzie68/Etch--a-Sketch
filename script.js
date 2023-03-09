
const myDiv = document.getElementById('myDiv');
myDiv.style.display = 'grid';
const containerEl = document.querySelector('.container');

let numOfDivs = prompt('how many squares do you want to put?',16);
myDiv.style.gridRow = `repeat(${numOfDivs},50px)`;
myDiv.style.gridTemplateColumns = `repeat(${numOfDivs},50px)`;

let createDivs = (num) => {

    for (let i = 0; i < num*num; i++) {
        let div = document.createElement("div");
        div.classList.add('square');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.background = '#BE68D8';
        containerEl.appendChild(div);
    };

    document.querySelectorAll('.square').forEach(item => {
        item.addEventListener('mouseover', () => {
        item.setAttribute('style','background-color:blue;');
        });
    });
};



createDivs(numOfDivs);








