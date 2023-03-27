let container = document.querySelector('.container');

let userInput = '';

function makeGrid() {
    userInput = prompt('input size MAX:34','16');
    
    container.style.gridTemplateColumns = `repeat(${userInput},1fr)`;
    container.style.gridTemplateRows = `repeat(${userInput},1fr)`;

    function makeSquares(num) {

        for (s = 0;s < num*num; s++) {
            let div = document.createElement('div');
            div.style.backgroundColor = '#6F8FAF';
            div.classList.add('square');
            container.appendChild(div);
        };

        a = document.querySelectorAll('.square');

        for(i in a) {
            a[i].onmouseover = function() {
                this.setAttribute('style','background-color:#F9F6EE; border-style: double; border-color:yellow');
                this.style.transitionDuration  = '1000ms';
            };
        };  
    };
    makeSquares(userInput);
};

function resetColor() {
    while(container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    };

    container.style.gridTemplateColumns = `repeat(${userInput},1fr)`;
    container.style.gridTemplateRows = `repeat(${userInput},1fr)`;
    function makeSquares(num) {

        for (s = 0;s < num*num; s++) {
            let div = document.createElement('div');
            div.style.backgroundColor = '#6F8FAF';
            div.classList.add('square');
            container.appendChild(div);
        };

        a = document.querySelectorAll('.square');

        for(i in a) {
            a[i].onmouseover = function() {
                this.setAttribute('style','background-color:#F9F6EE; border-style: double; border-color:yellow');
                this.style.transitionDuration  = '1000ms';
            };
        };  
    };  
    makeSquares(userInput);
};

function removeSquares() {
    while(container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    };
    makeGrid();
};

function makeRandomClr () {

    function getRandomColor() {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = '#' + randomColor
    };

    a = document.querySelectorAll('.square');

    a.forEach(item => {
        item.addEventListener('mouseover',getRandomColor);
    });
};

const btnNewGrid = document.getElementById('new-grid');
btnNewGrid.addEventListener('click', removeSquares);

const btnClrChange = document.getElementById('color-change');
btnClrChange.addEventListener('click',makeRandomClr);

const btnReset = document.getElementById('reset-all');
btnReset.addEventListener('click',resetColor);


















